import { Post } from "../entities/post.js"

function makeAddPost({ postRepository }) {
    return async function addPost(title, author, body, tags = []) {
        const post = new Post({title, author, body, tags}); // Create post
        return postRepository.save(post);
    }
}

export default makeAddPost;