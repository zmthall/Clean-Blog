import express from 'express';
import { logger } from '../middleware/logger.js';

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

// Routing Middleware
import { apiAuth } from '../middleware/apiAuth.js'; // Used to verify/authorize api_key
import apiLimiter from '../middleware/apiLimit.js';

router.use(logger);
router.use(apiLimiter);

// Defining/Registering Routes
router.post('/post', apiAuth, postController.addPost);
router.get('/post/:postID', apiAuth, postController.getPost);
router.get('/posts', apiAuth, postController.getAllPosts);
router.put('/post/:postID', apiAuth, postController.editPost);
router.delete('/post/:postID', apiAuth, postController.deletePost);
router.delete('/posts', apiAuth, postController.deleteAllPosts);

export default router;