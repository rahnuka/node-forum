const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json())


const mongoUrl=
"mongodb+srv:mongodb+srv://rah:rahnuka427@cluster0.fcih0yu.mongodb.net/?retryWrites=true&w=majority";

mongoose
.connect(mongoUrl, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to databae lol");
})
.catch((e) => console.log(e));

require("./userDetails")

const User=mongoose.model("UserInfo")


app.post("/Signup", async (req, res) => {
    const { uname, email, password } = req.body;
    try {
        await User.create({
            uname,
            email,
            password,
        });
        res.send({status:"ok"})
    } catch (error) {
        res.send({status:"error"})
    }
});


app.listen(5000, () => {
    console.log("Server Started");
});

// mongo user and password
// user: rah
// pass: rahnuka427
//0.0.0.0/0