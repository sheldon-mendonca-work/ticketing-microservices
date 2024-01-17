import express, { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { validateRequest, BadRequestError } from "@sgtickets/common";
import { Password } from "../services/password";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/api/users/signin", [
    body('email')
        .isEmail()
        .withMessage('Email must be valid.'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage("You must apply a password.")
], validateRequest, async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const { email, password } = req.body;
        
        const existingUser = await User.findOne({email: email});
        
        if(!existingUser){
            throw new BadRequestError("Invalid Credentials Error.");
        }

        const passwordsMatch = await Password.compare(existingUser.password, password);

        if(!passwordsMatch){
            throw new BadRequestError("Passwords dont match.");
        }

        const userJwt = jwt.sign({
            id: existingUser.id,
            email: existingUser.email
        }, process.env.JWT_KEY!
        )

        req.session = {
            jwt: userJwt
        }
        
        res.status(200).send({message: "User Created", existingUser});;
        
    } catch (error) {
        next(error);
    }
});

export { router as signinRouter };