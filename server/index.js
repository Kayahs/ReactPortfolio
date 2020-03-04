import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import chalk from 'chalk'
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import corsConfig from './config/cors.js'
import postgres from './config/postgres'
import typeDefs from './gql/schema'
import resolvers from './gql/resolvers'

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

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
}

const apolloServer = new ApolloServer({
  context: ({ req }) => {
    return {
      app: { secret, cookieName },
      req,
      postgres
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

server.on('error', err => {
  console.log(err)
})
