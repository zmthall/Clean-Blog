import { Post } from "../entities/post.js"
import { UseCaseError } from "../utility/error.js";
import { successResponse } from "../utility/response.js";

function makeGetAllPosts({ postRepository }) {
    return async function getAllPosts({ limit = 10, offset = 0 } = {}) {
        try {
            const posts = await postRepository.findAll({ limit, offset });
            return successResponse(posts);
        } catch(error) {
            throw new UseCaseError(`Error fetching all posts.`, 500, error);
        }
    }
}

export default makeGetAllPosts;