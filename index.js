const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hellow from the other side smarty node')
})

const users=[
    {id:1,name:"soyeb",email:"tssoyeb@gmail.com"},
    {id:2,name:"Mahir",email:"mahir@gmail.com"},
    {id:3,name:"tarin",email:"tarin@gmail.com"},
    {id:4,name:"mihir",email:"mihir@gmail.com"},
    {id:5,name:"fariha",email:"fariha@gmail.com"},
    {id:6,name:"tarannum",email:"tarannum@gmail.com"},
    {id:7,name:"arif",email:"arif@gmail.com"}
    
]

app.get('/users',(req,res)=>{
    //filter by search query parameter
    if(req.query.name){
        const search =req.query.name.toLowerCase();
        const matched=users.filter(user=>user.name.toLowerCase().includes(search))
        res.send(matched)
    }
res.send(users)
})
app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id= parseInt(req.params.id)
    const user =users.find(user=>user.id ===id) /* if You use 3 equal you should make the id a number. initial without parsing everything is a string inside a api */
    res.send(user)
})
app.post('/user',(req,res)=>{
     console.log('Request',req.body);
     const user=req.body;
     user.id=users.length+1;
     users.push(user)
     res.send(user)

    res.send('post method success')
})
app.listen(port,()=>{
    console.log('listening to port :',port);
})