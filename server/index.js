const express = require("express")
const path = require("path")
const chalk = require("chalk")
const app = express()

const root = path.resolve(__dirname, "../client/build")
app.use(express.static(root))

const server = app.listen(3000, () => {
  console.log(`>> ${chalk.blue("Express running:")} http://localhost:3000`)
})

server.on("error", err => {
  console.log(err)
})
