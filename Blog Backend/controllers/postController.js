import { ControllerError } from "../utility/error.js";

export function makePostController({ addPost, getPost, getAllPosts, editPost, deletePost, deleteAllPosts }) {
    return {
        addPost: async (req, res) => {
            const { title, author, body, tags = [] } = req.body;
            const { api_key } = req.headers
            try {
                if(api_key === process.env.API_KEY) {
                    const post = await addPost(title, author, body, tags);
                    res.status(200).json(post);
                } else {
                    throw new ControllerError('Access denied. Authorization restricted; missing API Key.', 403);
                }
            } catch (error) {
                console.error(error);
                res.status(error.status).json({ success: false, data: error.message });
            }
        },
        getPost: async (req, res) => {
            const { postID } = req.params;
            const { api_key } = req.headers
            try {
                if(api_key === process.env.API_KEY) {
                    const post = await getPost(postID); 
                    res.status(200).json(post);
                } else {
                    throw new ControllerError('Access denied. Authorization restricted; missing API Key.', 403);
                }
            } catch (error) {
                console.error(error);
                res.status(error.status).json({ success: false, data: error.message });
            }
        },
        getAllPosts: async (req, res) => {
            const { api_key } = req.headers
            try {
                if(api_key === process.env.API_KEY) {
                    const posts = await getAllPosts();
                    res.status(200).json(posts);
                } else {
                    throw new ControllerError('Access denied. Authorization restricted; missing API Key.', 403);
                }
            } catch (error) {
                console.log(error)
                res.status(error.status).json({ success: false, data: error.message });
            }
        },
        editPost: async (req, res) => {
            const { postID } = req.params;
            const { api_key } = req.headers
            try {
                if(api_key === process.env.API_KEY) {
                    const post = await editPost(postID, req.body);
                    res.status(200).json(post);
                } else {
                    throw new ControllerError('Access denied. Authorization restricted; missing API Key.', 403);
                }
            } catch (error) {
                console.error(error)
                res.status(error.status).json({ success: false, data: error.message });
            }
        },
        deletePost: async (req, res) => {
            const { postID } = req.params;
            const { api_key } = req.headers
            try {
                if(api_key === process.env.API_KEY) {
                    const post = await deletePost(postID);
                    res.status(200).json(post);
                } else {
                    throw new ControllerError('Access denied. Authorization restricted; missing API Key.', 403);
                }
            } catch (error) {
                console.error(error);
                res.status(error.status).json({ success: false, data: error.message });
            }
        },
        deleteAllPosts: async (req, res) => {
            const { api_key } = req.headers
            try {
                if(api_key === process.env.API_KEY) {
                    const posts = await deleteAllPosts();
                    res.status(200).json(posts);
                } else {
                    throw new ControllerError('Access denied. Authorization restricted; missing API Key.', 403);
                }
            } catch (error) {
                console.error(error);
                res.status(error.status).json({ success: false, data: error.message });
            }
        }
    }
}