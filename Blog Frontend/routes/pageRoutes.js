import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).render('index', {
        layout: 'layouts/main-layout.ejs'
    })
});

router.get('/create-post', (req, res) => {
    res.status(200).render('create', {
        layout: 'layouts/main-layout.ejs'
    })
})

router.get('/edit-post/:postID', async (req, res) => {
    const { postID } = req.params;
    const url = new URL(`/post/${postID}`, process.env.ORIGIN_BACKEND);
    try {
        const post = (await axios.get(url, {
            headers: {
                api_key: process.env.API_KEY
            }
        })).data;

        res.status(200).render('edit', {
            layout: 'layouts/main-layout.ejs',
            post: post.data
        })
    } catch (error) {
        res.status(404).render('error', {
            layout: 'layouts/main-layout.ejs'
        })
    }
})

router.get('*', (req, res) => {
    res.status(404).render('error', {
        layout: 'layouts/main-layout.ejs'
    })
})

export default router;