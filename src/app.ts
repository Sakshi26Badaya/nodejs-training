import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const PORT: number = Number(process.env.PORT);
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log(`app listening on port  ${PORT} `);
});

