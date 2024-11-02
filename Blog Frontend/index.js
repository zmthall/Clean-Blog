import express from 'express';
import 'dotenv/config';
import pageRoutes from './routes/pageRoutes.js';
import partials from 'express-partials';
import path from 'path';

const app = express();
const port =  process.env.PORT_FRONTEND;

// Setting up view engine with ejs
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'Blog Frontend/views'));

// Middleware
app.use(express.static(path.join(process.cwd(), 'Blog Frontend/public')));
app.use(partials()); // partials for layouts
app.use(express.json()); // JSON parser
app.use(express.urlencoded({ extended: false })); // request data parser
app.use(pageRoutes); // blog router

app.listen(port, (req, res) => {
    console.log(`Listening on port: ${port}`);
})