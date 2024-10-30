const posts = [];

export const postRepository = {
    save: async (post) => {
        posts.push(post);
        return post;
    },
    findAll: async ({ limit, offset }) => {
        return posts;
    },
    find: async (postID) => {
        const post = posts.find(post => post.id == postID);
        return post;
    },
    delete: async (postID) => {
        arrIDX = posts.findIndex(post => post.id === postID);
        const deletedPost = posts.splice(arrIDX, 1);
        return deletedPost;
    },
    deleteAll: async () => {
        const deletedPosts = posts.splice(0, posts.length);
        return deletedPosts;
    }
};
