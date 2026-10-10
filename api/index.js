import express from 'express';

const app=express();

app.listen(3000,()=>(
    console.log('serveris runing on port 3000')
))