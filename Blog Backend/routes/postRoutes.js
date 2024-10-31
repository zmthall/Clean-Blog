import express from 'express';

// infrastructure layer
import { postRepository } from '../frameworks/repositories/inMemoryPostRepo.js';

// application layer
import makeAddPost from '../use-cases/addPost.js';
import makeGetPost from '../use-cases/getPost.js';
import makeGetAllPosts from '../use-cases/getAllPosts.js';
import makeEditPost from '../use-cases/editPost.js';
import makeDeletePost from '../use-cases/deletePost.js';
import makeDeleteAllPosts from '../use-cases/deleteAllPosts.js';

const addPost = makeAddPost({ postRepository });
const getPost = makeGetPost({ postRepository });
const getAllPosts = makeGetAllPosts({ postRepository });
const editPost = makeEditPost({ postRepository });
const deletePost = makeDeletePost({ postRepository });
const deleteAllPosts = makeDeleteAllPosts({ postRepository });

// presentation layer
import { makePostController } from '../controllers/postController.js';

const postController = makePostController({ addPost, getPost, getAllPosts, editPost, deletePost, deleteAllPosts });

const router = express.Router();

// Defining/Registering Routes
router.post('/post', postController.addPost);
router.get('/post/:postID', postController.getPost);
router.get('/posts', postController.getAllPosts);
router.put('/post/:postID', postController.editPost);
router.delete('/post/:postID', postController.deletePost);
router.delete('/posts', postController.deleteAllPosts);

export default router;