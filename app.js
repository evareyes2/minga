import express from 'express';
import 'dotenv/config.js'
import cors from 'cors'
import './config/database.js'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from "morgan"
import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'
import { __dirname } from './utils.js'

// var app = express();
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// module.exports = app;
export default app
