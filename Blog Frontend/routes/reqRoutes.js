import express from 'express';
import multer from 'multer';
import axios from 'axios';
import 'dotenv/config';

const upload = multer();
const router = express.Router();

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

router.put('/edit-post', (req, res) => {

})

router.delete('/post/:postID', (req, res) => {

})

router.delete('/posts', (req, res) => {

})

export default router;