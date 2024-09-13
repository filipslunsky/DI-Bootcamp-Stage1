import express from 'express';
import { fetchPosts } from './data/dataService.js';

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.get('/api/posts', async (req, res) => {
    const data = await fetchPosts();
    if (data) {
        console.log('data retrieved successfully');
        res.send(data); 
        console.log('data sent');
    } else {
        res.status(500).send('Error retrieving data');
    }
});