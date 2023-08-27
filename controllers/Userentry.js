const User = require("../models/User");
const { mailsender } = require("../utils/mailsender");

exports.createUser = async(req,res)=>
{
    try{
        const {firstname,lastname,phone,email,message} = req.body;
        if(!firstname || !lastname || !email || !message)
        {
            return res.status(400).json({
                success:false,
                message:"All fields are required. Missing entries"
            })
        }
        const userdetail = User.create({firstname,lastname,phone,email,message});

        console.log(userdetail);

        const response  = await mailsender(firstname,lastname,email);
        console.log(response);

    }
    catch(err)
    {
        return res.status(400).json({
            success:false,
            message:"Unable to Create User Entry"
        })
    }
}