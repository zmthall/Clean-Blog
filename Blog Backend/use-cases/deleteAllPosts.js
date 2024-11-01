import { UseCaseError } from "../utility/error.js";

function makeDeletePost({ postRepository }) {
    return async function deletePost() {
        try {
            const deletedPosts = await postRepository.deleteAll();
            return deletedPosts;
        } catch(error) {
            throw new UseCaseError(`Error deleting post.`, 500, error);
        }
    }
}

export default makeDeletePost;