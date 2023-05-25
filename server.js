import { handler } from './my-app/build/handler.js';
import express from 'express';
import router from './routes/routes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());

// add a route that lives separately from the SvelteKit app
app.use('/', router);

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(3000, () => {
    console.log('listening on port 3000');
});