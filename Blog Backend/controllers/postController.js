export function makePostController({ addPost, getPost, getAllPosts, editPost, deletePost, deleteAllPosts }) {
    return {
        addPost: async (req, res) => {
            const { title, author, body, tags = [] } = req.body;
            try {
                const post = await addPost(title, author, body, tags);
                res.status(200).json(post);
            } catch (error) {
                res.status(500).json({ success: false, data: error });
            }
        },
        getPost: async (req, res) => {
            const { postID } = req.params;
            try {
                const post = await getPost(postID); 
                res.status(200).json(post);
            } catch (error) {
                res.status(500).json({ success: false, data: error });
            }

        },
        getAllPosts: async (req, res) => {
            try {
                const posts = await getAllPosts();
                res.status(200).json(posts);
            } catch (error) {
                console.log(error.message)
                res.status(500).json({ success: false, data: error });
            }
        },
        editPost: async (req, res) => {
            const { postID } = req.params;
            try {
                const post = await editPost(postID, req.body);
                res.status(200).json(post);
            } catch (error) {
                console.error(error)
                res.status(500).json({ success: false, data: error });
            }
        },
        deletePost: async (req, res) => {
            const { postID } = req.params;
            try {
                const post = await deletePost(postID);
                res.status(200).json(post);
            } catch (error) {
                console.error(error);
                res.status(500).json({ success: false, data: error });
            }
        },
        deleteAllPosts: async (req, res) => {
            try {
                const posts = await deleteAllPosts();
                res.status(200).json(posts);
            } catch (error) {
                console.error(error);
                res.status(500).json({ success: false, data: error });
            }
        }
    }
}