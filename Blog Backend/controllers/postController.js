import { verifyApiKey } from "../utility/verifyApiKey.js";
import { handleControllerResponse } from "../utility/response.js";

export function makePostController({ addPost, getPost, getAllPosts, editPost, deletePost, deleteAllPosts }) {
    return {
        addPost: async (req, res) => handleControllerResponse(async (req) => {
            const { title, author, body, tags } = req.body;
            return await addPost(title, author, body, tags);
        }, req, res),
        getPost: async (req, res) => handleControllerResponse(async (req) => {
            const { postID } = req.params;
            return await getPost(postID); 
        }, req, res),
        getAllPosts: async (req, res) => handleControllerResponse(async (req) => {
            return await getAllPosts();
        }, req, res),
        editPost: async (req, res) => handleControllerResponse(async (req) => {
            const { postID } = req.params;
            return await editPost(postID, req.body);
        }, req, res),
        deletePost: async (req, res) => handleControllerResponse(async (req) => {
            const { postID } = req.params;
            return await deletePost(postID);
        }, req, res),
        deleteAllPosts: async (req, res) => handleControllerResponse(async (req) => {
            return await deleteAllPosts();
        }, req, res)
    };
}