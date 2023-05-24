import express from 'express';
import agentsController from '../controllers/agentsController.js'

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

router.get('/agents', agentsController.fetchData);


export default router;