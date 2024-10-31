const posts = [];

export const postRepository = {
    save: async (post) => {
        posts.push(post);
        return post;
    },
    edit: async (postID, newData) => {
        const editIDX = posts.findIndex(post => post.id == postID)
        const post = posts[editIDX];
        posts[editIDX] = post.edit(newData);

        return posts[editIDX];
    },
    findAll: async ({ limit, offset }) => {
        return posts;
    },
    find: async (postID) => {
        const post = posts.find(post => post.id == postID);
        return post;
    },
    delete: async (postID) => {
        const deleteIDX = posts.findIndex(post => post.id === postID);
        const deletedPost = posts.splice(deleteIDX, 1);
        return deletedPost;
    },
    deleteAll: async () => {
        const deletedPosts = posts.splice(0, posts.length);
        return deletedPosts;
    }
};
