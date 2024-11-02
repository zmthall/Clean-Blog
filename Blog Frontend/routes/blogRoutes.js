import express from 'express';
import axios from 'axios';
import { Presentation } from '../utility/presentation.js';

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

    res.status(200).render('blog', {
        layout: 'layouts/main-layout.ejs',
        posts: posts.data,
        presentation: Presentation
    })
});

router.get('/create-post', (req, res) => {
    res.status(200).render('create', {
        layout: 'layouts/main-layout.ejs'
    })
})

router.get('/edit-post', (req, res) => {
    res.status(200).render('edit', {
        layout: 'layouts/main-layout.ejs'
    })
})

export default router;