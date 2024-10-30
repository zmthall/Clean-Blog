import { Post } from "../entities/post.js"

function makeGetPost({ postRepository }) {
    return async function getPost(ID) {
        return postRepository.find(ID);
    }
}

export default makeGetPost;