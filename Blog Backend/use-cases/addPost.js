import { Post } from "../entities/post.js"
import { UseCaseError } from "../utility/error.js";
import { successResponse } from "../utility/response.js";

function makeAddPost({ postRepository }) {
    return async function addPost(title, author, body, tags = []) {
        try {
            const post = new Post({title, author, body, tags}); // Create post
            const savedPost = await postRepository.save(post);
            return successResponse(savedPost);
        } catch(error) {
            throw new UseCaseError(`Error adding post.`, 500, error);
        }
    }
}

export default makeAddPost;