const express = require('express')
const mongoose= require('mongoose')
const app = express()
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello from node api");
 
});
app.get('/index',(req,res)=>{
    res.send("hello from index page api");

});
app.post('/api/products', (req,res)=>{
    console.log(req.body)
    res.send(req.body);
    })

mongoose.connect("mongodb+srv://popcornsarebae:suhani@backend-db.8l8sf.mongodb.net/node-api?retryWrites=true&w=majority&appName=backend-db")
.then(()=>{
    console.log("Connected");
    app.listen(3000, () =>{
        console.log("Server is running on port 3000");
    });
    
})

.catch(()=>{
    console.log("Connection failed");
});