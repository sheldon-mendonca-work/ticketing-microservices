import express, { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { BadRequestError, validateRequest } from "@sgtickets/common";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/api/users/signup",[
    body("email")
        .isEmail()
        .withMessage("Email must be valid."),
    body("password")
        .trim()
        .isLength({min: 5, max: 20})
        .withMessage("Password must be within within 5-20 letters.")
    ], validateRequest, async (req: Request, res: Response, next:NextFunction) => {
    try {
        const { email, password } = req.body;
        
        const existingUser = await User.findOne({email: email});
        
        if(existingUser){
            throw new BadRequestError("Email in User");
        }

        const user = User.build({email, password});
        await user.save();

        const userJwt = jwt.sign({
            id: user.id,
            email: user.email
        }, process.env.JWT_KEY!
        )

        req.session = {
            jwt: userJwt
        }

        res.status(201).send({message: "User Created", user});;
        
    } catch (error) {
        next(error);
    }
});

export { router as signupRouter };