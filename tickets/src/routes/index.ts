import express, { Request, Response } from "express";
import { Ticket } from "../models/tickets";

const router = express.Router();

router.get("/api/tickets/", async(req: Request, res: Response) => {
    const tickets = await Ticket.find({});


    res.send(200).send({message: "Found Tickets", tickets})
});

export { router as indexTicketRouter };