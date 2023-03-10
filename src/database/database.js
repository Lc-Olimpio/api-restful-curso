const mongoose = require('mongoose')

function connect() {

  mongoose.set('strictQuery', false)
  mongoose.connect('mongodb://127.0.0.1:27017/restful-api')

  const db = mongoose.connection

  db.once('open',() => {
    console.log('Connected to database')
  })

  db.on('error', console.error.bind(console, 'connectio error'))
}

module.exports = {
  connect,
}