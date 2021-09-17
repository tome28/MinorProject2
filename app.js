const http = require("http");
const fs = require("fs");
const express = require("express");
const path = require("path");
const app=express();
const port = 80;

app.use(express.urlencoded());

app.use('/static',express.static('static'))


app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))


// const home = fs.readFileSync("webpage.html");

// const matchPage = fs.readFileSync("matchPage.html");
// const yourTeamPage = fs.readFileSync("yourTeamPage.html");
// const loginhtml = fs.readFileSync("./loginhtml.html");

// app.use(express.urlencoded());

// const server = http.createServer((req,res)=>{
//     console.log(url);
//     url = req.url;
//     res.statusCode=200;
//     res.writeHeader("Content-Type","text/html");

//     if(url=="/home"){
//         res.end(home);
//     }
// });
app.get("/",(req,res)=>{
    const con = "This is our content";
    const params={'title':"pug template","content":con}
    // res.sendFile(__dirname + "/loginhtml.html");
    res.status(200).render('index1.pug',params);
})
app.post("/",(req,res)=>{
    // console.log(req.body)
    const params = {'message':'Your input has been taken'}
    username = req.body.username;
    password = req.body.password;
    let outputToWrite = `Username is ${username} and password is ${password}`
    fs.writeFileSync('output.txt',outputToWrite);
    // console.log(req.body);
    res.status(200).render('index1.pug',params);
});

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.end(home);
// })
// app.get("/loginhtml",(req,res)=>{
//     res.setHeader("Content-Type","text/html")
//     res.send(loginhtml);
// });
// app.get("/",(req,res)=>{
//     res.set("Content-Type","text/html")
//     res.send(home);
// });

// app.post("/loginhtml",(req,res)=>{
//     console.log(req.body);
// });

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
});

// server.listen(80,'127.0.0.1',()=>{
//     console.log(`Server is running at port 80`);
// });

