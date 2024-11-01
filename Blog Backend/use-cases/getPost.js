import { UseCaseError } from "../utility/error.js";
import { isValidPostID } from "../utility/validation.js";

function makeGetPost({ postRepository }) {
    return async function getPost(postID) {
        try {
            if(!isValidPostID(postID))
                throw new UseCaseError(`Invalid postID [${postID}].`, 400);

            const post = await postRepository.find(postID);

            if(!post) {
                throw new UseCaseError(`Post with postID [${postID}] not found.`, 404);
            }

            return post;
        } catch(error) {
            throw new UseCaseError(`Error fetching post.`, 500, error);
        }
    }
}

export default makeGetPost;