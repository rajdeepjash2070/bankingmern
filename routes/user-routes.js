const express=require("express");
const useroute=express.Router();
const user=require("../models/user")
const usersController = require("../controller/user-controller");

useroute.post("/", usersController.adduser);
useroute.get("/:id", usersController.getById);
useroute.get("/",usersController.getAllUsers);


module.exports=useroute;