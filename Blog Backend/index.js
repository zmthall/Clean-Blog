import { successResponse } from "./utility/response.js"

const test = 
    [
        {
            id: 2341234,
    title: 'testing',
    author: 'post.author',
    body: 'post.body',
    date: 'post.date',
    tags: ['post.tags']
        },
        {
            id: 2341234,
    title: 'testing',
    author: 'post.author',
    body: 'post.body',
    date: 'post.date',
    tags: ['post.tags']
        },
        {
            id: 2341234,
            title: 'testing',
            author: 'post.author',
            body: 'post.body',
            date: 'post.date',
            tags: ['post.tags']
        }
    ];

console.log(successResponse(test))