import express from "express";
const router = express.Router();

import UserModel from "../models/userModel.js";

// CRUD Operations

// View/read users
router.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// Create a new user
router.post('/users', async (req, res) => {
    console.log("received request for post method");
    
    try {
        const { name, age, username, email } = req.body;
        const newUser = new UserModel({ name, age, username, email });
        await newUser.save();
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: newUser
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// Update 

router.put('/users/:id', async (req, res)=>{
    const {id} = req.params;
    const { name, age, username, email } = req.body;
    try{
        const updatedUser = await UserModel.findByIdAndUpdate(id, {name, age, username, email})
        if(!updatedUser){
            res.json({
                succes:false,
                message: "User not Found"
            })
        }
        //If the User exists
        res.status(200).json({
            success:true,
            message: "User Updated Successfully",
            user: updatedUser
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})

// Delete

router.delete('/users/:id', async (req,res) => {
    const {id} = req.params;
    try {
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if(!deletedUser){
            res.json({
                success:false,
                message:"User not Found"
            })
        }
        //If the User exists
        res.status(200).json({
            success:true,
            message:"User Deleted Successfully",
            user:deletedUser
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})
export default router;
