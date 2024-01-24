import express, { Request, Response } from 'express';
import userRouter from './routers/user.router';
const app = express();

app.use(express.json());

app.listen(3000, () => console.log(`express rodando na porta ${3000}`));

app.use(userRouter);

