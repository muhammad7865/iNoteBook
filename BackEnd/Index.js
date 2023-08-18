const connectToMongo=require("./DB");
connectToMongo();

const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

app.use('/api/auth',require('./Routes/auth'))
app.use('/api/notes',require('./Routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

