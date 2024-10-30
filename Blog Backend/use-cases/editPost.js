import { Post } from "../entities/post.js"
import { UseCaseError } from "../utility/error.js";

function makeEditPost({ postRepository }) {
    return async function editPost(postID, newData) {
        const oldPost = await postRepository.find(postID);
        if(!oldPost) {
            throw new UseCaseError(`Post with postID[${postID}] not found.`);
        }

        const editedPost = oldPost.edit(newData);
        await postRepository.save(editedPost);

        return {
            id: editedPost.ID,
            title: editedPost.title,
            author: editedPost.author,
            body: editedPost.body,
            tags: editedPost.tags,
            date: editedPost.date
        };
    }
}

export default makeEditPost;