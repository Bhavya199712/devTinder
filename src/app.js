const express = require("express");
const app = express()



app.use('/hello', (req, res) => {
    res.send('Hello from /hello route!')
})

app.use('/test', (req, res) => {
    res.send('Hello from /test route!')
})



app.listen(3000, () => {
    console.log("Server Started")
})