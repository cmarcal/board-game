import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import model from './models';

const app = express();
app.use(cors());
// app.use(function ({}, res: any, next: any) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

model.Mongoose.connect('mongodb://localhost/Bordgamesdb');

app.listen(process.env.PORT || 3001);
