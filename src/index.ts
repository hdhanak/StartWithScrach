import express from 'express'
import connects from './connection/db';
import router from "./router/routers";
const port = 8000 ||  process.env.PORT
const app = express()
var cookies = require("cookie-parser");

app.use(cookies());


app.use(express.json())
app.use('/',router)
// app.use(cookieParser());

connects()

app.listen(port,()=>{
    console.log(`port listining a ${port}`);
    
})

