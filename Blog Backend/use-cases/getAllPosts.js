import { Post } from "../entities/post.js"

function makeGetAllPosts({ postRepository }) {
    return async function getAllPosts() {
        return postRepository.findAll();
    }
}

export default makeGetAllPosts;