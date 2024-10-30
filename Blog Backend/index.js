import { successResponse } from "./utility/response.js"

const test = 
    [
        {
            id: 2341224,
    title: 'testing',
    author: 'post.author',
    body: 'post.body',
    date: 'post.date',
    tags: ['post.tags']
        },
        {
            id: 234114,
    title: 'testing',
    author: 'post.author',
    body: 'post.body',
    date: 'post.date',
    tags: ['post.tags']
        },
        {
            id: 2341264,
            title: 'testing',
            author: 'post.author',
            body: 'post.body',
            date: 'post.date',
            tags: ['post.tags']
        }
    ];

console.log(test.find(post => post.id === 2341264))