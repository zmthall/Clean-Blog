import express from 'express';
import multer from 'multer';
import axios from 'axios';
import { Presentation } from '../utility/presentation.js';

const upload = multer();
const router = express.Router();

router.get('/post/:postID', async (req, res) => {
    const { postID } = req.params;
    const url = new URL(`/post/${postID}`, process.env.ORIGIN_BACKEND);
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

router.post('/create-post', upload.none(), async (req, res) => {
    const url = new URL('/post', process.env.ORIGIN_BACKEND);
    try {
        const newPost = (await axios.post(url, req.body, {
            headers: {
                api_key: process.env.API_KEY
            }
        })).data;
        res.status(200).json(newPost);
    } catch (error) {
        console.log(error.message);
        res.status(error.status || 500).json({ success: false, data: error.message});
    }
})

router.put('/edit-post/:postID', upload.none(), async (req, res) => {
    const { postID } = req.params;
    const url = new URL(`/post/${postID}`, process.env.ORIGIN_BACKEND);
    try {
        const editedPost = (await axios.put(url, req.body, {
            headers: {
                api_key: process.env.API_KEY
            }
        })).data;
        res.status(200).json(editedPost);
    } catch (error) {
        console.log(error.message);
        res.status(error.status || 500).json({ success: false, data: error.message });
    }
});

router.delete('/delete-post/:postID', async (req, res) => {
    const { postID } = req.params;
    const url = new URL(`/post/${postID}`, process.env.ORIGIN_BACKEND);
    try {
        const deletedPost = (await axios.delete(url, {
            headers: {
                api_key: process.env.API_KEY
            }
        })).data;
        res.status(200).json(deletedPost);
    } catch (error) {
        console.log(error.message);
        res.status(error.status || 500).json({ success: false, data: error.message });
    }
});

router.delete('/delete-all-posts', async (req, res) => {
    const url = new URL(`/posts`, process.env.ORIGIN_BACKEND);
    try {
        const deletedPosts = (await axios.delete(url, {
            headers: {
                api_key: process.env.API_KEY
            }
        })).data;
        res.status(200).json(deletedPosts);
    } catch (error) {
        console.log(error.message);
        res.status(error.status || 500).json({ success: false, data: error.message });
    }
});

export default router;