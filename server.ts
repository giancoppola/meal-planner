require('dotenv').config();
const express = require('express');
import {Express, NextFunction, Request, Response} from 'express';
const app: Express = express();
const cors = require('cors');

import { Mongoose } from 'mongoose';
const mongoose: Mongoose = require('mongoose');
const dbUri = `mongodb+srv://giancoppola:${process.env.MONGO_PW}@cluster0.gjnjhuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(dbUri);

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get("*", (req: Request, res:Response, next: NextFunction) => {
    console.log(req.method, req.url, res.statusCode)
    next();
})

// add GET requests for pages
// const pageArr: Array<String> = ['word-guesser'];
// for (let page of pageArr){
//     app.get(`/${page}`, (req: Request, res:Response, next: NextFunction) => {
//         res.sendFile(__dirname + `/views/${page}.html`)
//     })
// }

app.get('/', (req: Request, res:Response, next: NextFunction) => {
    res.sendFile(__dirname + `/views/word-guesser.html`)
})

//API endpoints
const wgApiRoute = require('./server/word-guesser-api').router;
app.use('/api/word-guesser/', wgApiRoute);

// Error page matching
app.get('*', (req: Request, res: Response, next: NextFunction) => {
    // res.status(400).send('No match found - error page!');
    res.redirect("/");
})

const server = app.listen(process.env.PORT || 3000, () => {
    // console.log('Your app is listening on port 3000 ' + listener.address().port)
})