const express = require("express");
const app = express()



app.use('/hello', (req, res) => {
    res.send('Hello from /hello route!')
})

// app.use('/test', (req, res) => {
//     res.send('Hello from /test route!')
// })

app.get('/test/:userID', (req, res) => {
    console.log(req.params.userID)
    res.send('Hello from /test route!')
})

app.get('/user', (req, res) => {
  const name = req.query.name || 'guest';
  const age = req.query.age;

  console.log(req.query);     
  console.log(name, age);

  res.send(`Hello ${name}! You are ${age || 'unknown age'}.`);
});


app.listen(3000, () => {
    console.log("Server Started")
})