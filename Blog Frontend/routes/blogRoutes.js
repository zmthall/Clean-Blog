import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).render('index', {
        layout: 'layouts/main-layout.ejs'
    })
});

router.get('/blog', async (req, res) => {
    const url = new URL('/posts', process.env.ORIGIN_BACKEND);
    const posts = (await axios.get(url, {
        headers: {
            api_key: process.env.API_KEY
        }
    })).data;

    console.log(posts.data);

    res.status(200).render('blog', {
        layout: 'layouts/main-layout.ejs',
        posts: posts.data
    })
});

export default router;