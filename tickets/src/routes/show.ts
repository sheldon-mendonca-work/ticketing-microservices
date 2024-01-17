import express, { Request, Response } from "express";
import { body } from "express-validator";
import { Ticket } from "../models/tickets";
import { NotFoundError } from "@sgtickets/common";

const router = express.Router();

router.get("/api/tickets/:id", async(req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if(!ticket){
        throw new NotFoundError();    
    }

    res.send(200).send({message: "Found Ticket", ticket})
});

export { router as showTicketRouter };