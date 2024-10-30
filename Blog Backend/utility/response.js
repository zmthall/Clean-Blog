export function successResponse(data) {

    // Success Response that can handle both singular objects and an array of objects.
    if(Array.isArray(data)) {
        return {
            success: true,
            data: data.map(post => ({
                id: post.id,
                title: post.title,
                author: post.author,
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
                body: data.body,
                date: data.date,
                tags: data.tags || [] // defaults to empty array if undefined.
            }
        }
    }
}