import { UseCaseError } from "../utility/error.js";
import { isValidPostID } from "../utility/validation.js";

function makeEditPost({ postRepository }) {
    return async function editPost(postID, newData) {
        try {
            if(!isValidPostID(postID))
                throw new UseCaseError(`Invalid postID [${postID}].`, 400);

            const editedPost = await postRepository.edit(postID, newData);
            
            if (!editedPost) {
                throw new UseCaseError(`Post with postID [${postID}] not found.`, 404);
            }
            
            return editedPost;
        } catch(error) {
            throw new UseCaseError(`Error editing post.`, 500, error);
        }
    }
}

export default makeEditPost;