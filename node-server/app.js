const express = require('express')

const cors = require('cors')

const router = require('./router.js')

const port = 8080

const app = express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json())

app.use('/', router)


app.listen(port, () => {
    console.log('listening on port', port)
})

