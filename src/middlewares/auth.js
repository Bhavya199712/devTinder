const adminAuth =  (req,res, next)=> {
    console.log("Adminn AUTH user check")
    const token = "token";
    token === "token" ? next() : res.send("Unauthoried User")
};

const userAuth = (req,res,next) => {
    console.log("User auth check")
    const token = "userT"
    token === "userT" ? next() : res.send("wrong user")
}

module.exports = {
    adminAuth,
    userAuth
}