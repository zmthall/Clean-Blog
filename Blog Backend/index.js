import express from 'express';
import router from './routes/postRoutes.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT_BACKEND;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.listen(port, (req, res) => {
    console.log(`Listening on port: ${port}`);
})