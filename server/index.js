import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import chalk from 'chalk'
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import corsConfig from './config/cors.js'
import postgres from './config/postgres'
import typeDefs from './gql/schema'
import resolvers from './gql/resolvers'
import { authUtil } from './utils'
import { salt } from './config/options.json'

dotenv.config()

const app = express()

const PORT = process.env.NODE_ENV === 'development' ? process.env.DEV_PORT : 3000
const secret = process.env.JWT_SECRET
const cookieName = process.env.JWT_COOKIE_NAME

app.use(cookieParser())

app.use(cors(corsConfig))

if (process.env.NODE_ENV !== 'development') {
  const root = path.resolve(__dirname, '../client/public')

  app.use(express.static(root))

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'), function (err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
}

const apolloServer = new ApolloServer({
  context: async ({ req }) => {
    console.log('Context creation started')
    let testAccount = await nodemailer.createTestAccount()

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass // generated ethereal password
      }
    })

    console.log('Created Transport')

    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: 'moolcool123@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
    })

    console.log(info)

    return {
      app: { secret, cookieName, salt },
      req,
      postgres,
      authUtil
    }
  },
  typeDefs,
  resolvers
})

apolloServer.applyMiddleware({
  app,
  cors: corsConfig
})

postgres.on('error', (err, client) => {
  console.error('Unexpected error on idle postgres client', err)
  process.exit(-1)
})

const server = app.listen(PORT, () => {
  console.log(`>> ${chalk.blue('Express running:')} http://localhost:${PORT}`)
  console.log(`>> ${chalk.magenta('GraphQL playground:')} http://localhost:${PORT}/graphql`)
})

server.on('error', (err) => {
  console.log(err)
})
