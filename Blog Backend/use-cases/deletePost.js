import { UseCaseError } from "../utility/error.js";
import { isValidPostID } from "../utility/validation.js";

function makeDeletePost({ postRepository }) {
    return async function deletePost(postID) {
        try {
            if(!isValidPostID(postID))
                throw new UseCaseError(`Invalid postID [${postID}].`, 400);

            const deletedPost = await postRepository.delete(postID);

            if(!deletedPost) {
                throw new UseCaseError(`Post with postID [${postID}] not found.`, 404);
            }

            return deletedPost;
        } catch(error) {
            throw new UseCaseError(`Error deleting post.`, 500, error);
        }
    }
}

export default makeDeletePost;