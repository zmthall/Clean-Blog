import express from 'express';
import router from './routes/postRoutes.js';
import 'dotenv/config';
import { errorHandler } from './middleware/errorHandler.js';

// Setting up express framework
const app = express();
const port = process.env.PORT_BACKEND;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.use(errorHandler);

// Listening for requests
app.listen(port, (req, res) => {
    console.log(`Listening on port: ${port}`);
})