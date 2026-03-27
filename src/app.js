const express = require("express");
const app = express()
const {adminAuth, userAuth} = require("./middlewares/auth")

app.use("/admin", adminAuth)

app.get("/admin/AllUser", (req,res) => {
    res.send("all data send")
})

app.delete("/admin/deleteUser", (req,res) => {
    res.send("delete user")
})

app.get("/user/profile", userAuth, (req,res) => {
    res.send("user profile details")
})

app.listen(3000, () => {
    console.log("Server Started")
})