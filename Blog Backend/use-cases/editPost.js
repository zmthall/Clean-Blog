import { Post } from "../entities/post.js"
import { UseCaseError } from "../utility/error.js";
import { successResponse } from "../utility/response.js";
import { isValidPostID } from "../utility/validation.js";

function makeEditPost({ postRepository }) {
    return async function editPost(postID, newData) {
        try {
            if(!isValidPostID(postID))
                throw new UseCaseError(`Invalid postID [${postID}].`, 400);

            const oldPost = await postRepository.find(postID);

            if (!oldPost) {
                throw new UseCaseError(`Post with postID [${postID}] not found.`, 404);
            }
    
            const editedPost = oldPost.edit(newData);
            await postRepository.save(editedPost);
    
            return successResponse(editPost);
        } catch(error) {
            throw new UseCaseError(`Error editing post.`, 500, error);
        }
    }
}

export default makeEditPost;