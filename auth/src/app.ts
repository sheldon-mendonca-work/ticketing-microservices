import express from 'express';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler, NotFoundError } from '@sgtickets/common';
import cookieSession from 'cookie-session';

// export const authServiceUrl = "http://127.0.0.1:41763";
// export const authMongoServiceUrl = "http://127.0.0.1:36627";

const app = express();

app.use(express.json());
app.set('trust proxy', true);
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}))

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);   

app.all("*", async(req, res, next) => {
    console.log(req.originalUrl)
    next(new NotFoundError());
})

app.use(errorHandler);

export { app };