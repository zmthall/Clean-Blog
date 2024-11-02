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
    try {
        const posts = (await axios.get(url, {
            headers: {
                api_key: process.env.API_KEY
            }
        })).data;
    
        if(posts.success) {
            res.status(200).render('blog', {
                layout: 'layouts/main-layout.ejs',
                posts: posts.data,
                presentation: Presentation
            });
        }
    } catch (error) {
        res.status(404).render('error', {
            layout: 'layouts/main-layout.ejs'
        });
    }
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

router.get('/post/:pageID', async (req, res) => {
    const { pageID } = req.params;
    const url = new URL(`/post/${pageID}`, process.env.ORIGIN_BACKEND);
    try {
        const post = (await axios.get(url, {
            headers: {
                api_key: process.env.API_KEY
            }
        })).data;
        if(post.success) {
            res.status(200).render('post', {
                layout: 'layouts/main-layout.ejs',
                post: post.data,
                presentation: Presentation
            })
        }
    } catch (error) {
        res.status(404).render('error', {
            layout: 'layouts/main-layout.ejs'
        })
    }
})



export default router;