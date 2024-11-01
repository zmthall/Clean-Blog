import { ControllerError } from "../utility/error.js";
import { verifyApiKey } from "../utility/verifyApiKey.js";

export function makePostController({ addPost, getPost, getAllPosts, editPost, deletePost, deleteAllPosts }) {
    return {
        addPost: async (req, res) => {
            const { title, author, body, tags = [] } = req.body;
            try {
                verifyApiKey(req);
                const post = await addPost(title, author, body, tags);
                res.status(200).json(post);
            } catch (error) {
                console.error(error);
                res.status(error.status).json({ success: false, data: error.message });
            }
        },
        getPost: async (req, res) => {
            const { postID } = req.params;
            try {
                verifyApiKey(req);
                const post = await getPost(postID); 
                res.status(200).json(post);
            } catch (error) {
                console.error(error);
                res.status(error.status).json({ success: false, data: error.message });
            }
        },
        getAllPosts: async (req, res) => {
            try {
                verifyApiKey(req);
                const posts = await getAllPosts();
                res.status(200).json(posts);
            } catch (error) {
                console.log(error)
                res.status(error.status).json({ success: false, data: error.message });
            }
        },
        editPost: async (req, res) => {
            const { postID } = req.params;
            try {
                verifyApiKey(req);
                const post = await editPost(postID, req.body);
                res.status(200).json(post);
            } catch (error) {
                console.error(error)
                res.status(error.status).json({ success: false, data: error.message });
            }
        },
        deletePost: async (req, res) => {
            const { postID } = req.params;
            try {
                verifyApiKey(req);
                const post = await deletePost(postID);
                res.status(200).json(post);
            } catch (error) {
                console.error(error);
                res.status(error.status).json({ success: false, data: error.message });
            }
        },
        deleteAllPosts: async (req, res) => {
            try {
                verifyApiKey(req);
                const posts = await deleteAllPosts();
                res.status(200).json(posts);
            } catch (error) {
                console.error(error);
                res.status(error.status).json({ success: false, data: error.message });
            }
        }
    }
}