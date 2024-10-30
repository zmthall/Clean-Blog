import { Post } from "../entities/post.js"
import { UseCaseError } from "../utility/error.js";
import { isValidPostID } from "../utility/validation.js";
import { successResponse } from "../utility/response.js";

function makeDeletePost({ postRepository }) {
    return async function deletePost() {
        try {
            const deletedPosts = await postRepository.deleteAll();
            return successResponse(deletedPosts);
        } catch(error) {
            throw new UseCaseError(`Error deleting post.`, 500, error);
        }
    }
}

export default makeDeletePost;