function successResponse(data) {

    // Success Response that can handle both singular objects and an array of objects.
    if(Array.isArray(data)) {
        return {
            success: true,
            data: data.map(post => ({
                id: post.id,
                title: post.title,
                author: post.author,
                creator: post.creator,
                body: post.body,
                date: post.date,
                tags: post.tags || [] // defaults to empty array if undefined.
            }))
        }
    } else {
        return {
            success: true,
            data: {
                id: data.id,
                title: data.title,
                author: data.author,
                creator: data.creator,
                body: data.body,
                date: data.date,
                tags: data.tags || [] // defaults to empty array if undefined.
            }
        }
    }
}

export async function handleControllerResponse(controllerFunc, req, res) {
    try {
        const result = await controllerFunc(req);
        res.status(result.status || 200).json(successResponse(result));
    } catch (error) {
        console.error(error.message);
        res.status(error.status || 500).json({ success: false, data: error.message });
    }
}