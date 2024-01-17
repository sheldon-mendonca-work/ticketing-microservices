import express from 'express';
import { errorHandler, NotFoundError, currentUser } from '@sgtickets/common';
import cookieSession from 'cookie-session';
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes';
import { updateTicketRouter } from './routes/update';

// export const authServiceUrl = "http://127.0.0.1:41763";
// export const authMongoServiceUrl = "http://127.0.0.1:36627";

const app = express();

app.use(express.json());
app.set('trust proxy', true);
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}));

app.use(currentUser);

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.all("*", async(req, res, next) => {
    next(new NotFoundError());
})

app.use(errorHandler);

export { app };