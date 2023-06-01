require('dotenv').config();

const { userRouter } = require('./routes')

const express = require('express');
const app = express();

app.use(express.json());

app.use('/user/', userRouter);

app.listen(process.env.PORT);