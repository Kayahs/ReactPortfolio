const express = require("express")
const path = require("path")
const chalk = require("chalk")
const app = express()

const root = path.resolve(__dirname, "../client/build")
app.use(express.static(root))

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/index.html"), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const server = app.listen(3000, () => {
  console.log(`>> ${chalk.blue("Express running:")} http://localhost:3000`)
})

server.on("error", err => {
  console.log(err)
})
