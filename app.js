// Entry Point of the API Server 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json())
const bcrypt=require("bcrypt.js");
var cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
}))


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

    const encryptedPassword=await bcrypt.hash(passowrd, 10);
    try {
        const oldUser = User.findOne({ email });
        if(oldUser){
            res.send({ error: "User Exists" });
        }
        await User.create({
            uname,
            email,
            password: encryptedPassword,
        });
        res.send({status:"Data Sent"})
    } catch (error) {
        res.send({status:"Error, try again"})
    }
});

const test = [
    {
      author: "James",
      title: "My Stuff",
      posted: "01/01/2023",
      likes: 5,
      dislikes: 10,
      content: "My post content",
      replies: [
        {
          author: "James",
          title: "My Stuff",
          posted: "01/01/2023",
          likes: 5,
          dislikes: 10,
          content: "My post content",
          replies: [
            {
              author: "James",
              title: "My Stuff",
              posted: "01/01/2023",
              likes: 5,
              dislikes: 10,
              content: "My post content",
              replies: [
                {
                  author: "James",
                  title: "My Stuff",
                  posted: "01/01/2023",
                  likes: 5,
                  dislikes: 10,
                  content: "My post content",
                  replies: [
                    {
                      author: "James",
                      title: "My Stuff",
                      posted: "01/01/2023",
                      likes: 5,
                      dislikes: 10,
                      content: "My post content",
                      replies: [
                        
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          author: "James",
          title: "My Stuff",
          posted: "01/01/2023",
          likes: 5,
          dislikes: 10,
          content: "My post content",
          replies: [
            
          ]
        },
        {
          author: "James",
          title: "My Stuff",
          posted: "01/01/2023",
          likes: 5,
          dislikes: 10,
          content: "My post content",
          replies: [
            
          ]
        },
      ]
    },
]

app.get('/testdata', (req, res, next) => {
    res.send(test);
})

app.post('/posts', (req, res, next) => {
    if(req.body.title === undefined) return res.status(400).send({
        message: 'Title not found'
    });
    if(req.body.author === undefined) return res.status(400).send({
        message: 'Author not found'
    });
    if(req.body.content === undefined) return res.status(400).send({
        message: 'Content not found'
    });
    test.push(req.body);
    res.status(200).send({
        message: 'success'
    })
})

// Require the Routes API  
// Create a Server and run it on the port 3000
const server = app.listen(4000, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Server Started")
    // Starting the Server at the port 3000
})



// mongo user and password
// user: rah
// pass: rahnuka427
//0.0.0.0/0
//install express, nodemon, mongoose, cors, bcrypt