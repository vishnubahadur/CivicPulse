import express from "express"


const route = express.Router();

route.get("/login",(req,res)=>{
    res.send("This is login page")
})

export default route;