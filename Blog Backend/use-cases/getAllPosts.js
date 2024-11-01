import { UseCaseError } from "../utility/error.js";

function makeGetAllPosts({ postRepository }) {
    return async function getAllPosts({ limit = 10, offset = 0 } = {}) {
        try {
            const posts = await postRepository.findAll({ limit, offset });
            return posts;
        } catch(error) {
            throw new UseCaseError(`Error fetching all posts.`, 500, error);
        }
    }
}

export default makeGetAllPosts;