const posts = [];

const postRepository = {
    save: async (post) => {
        posts.push(post);
        return post;
    },
    findAll: async () => {
        return posts;
    },
    find: async (postID) => {
        return posts.find(post => post.id === postID);
    },
    delete: async (postID) => {
        arrIDX = posts.findIndex(post => post.id === postID);
        return posts.splice(arrIDX, 1);
    },
    deleteAll: async () => {
        return posts.splice(0, posts.length);
    }
};
