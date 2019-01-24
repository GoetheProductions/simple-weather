import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser'
import fetch from 'node-fetch';

const app = express();

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '035620d118febba3e11188f942499699';
const apiUrl = `&units=metric&appid=${apiKey}`;


app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
  limit: '50mb',
  extended: true,
}));

app.get('/widget.example/city=:city', (req, res) => {
  fetch(`${baseUrl}${req.params.city ? req.params.city : 'Copenhagen'}${apiUrl}`)
    .then(res => res.json())
    .then(data => {
      res.send({ ...data });
    });
})
app.listen('8080', () => console.log(`Listening at localhost:8080`));
