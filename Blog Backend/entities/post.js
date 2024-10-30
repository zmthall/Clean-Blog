import { ValidationError } from "../utility/error.js";

export class Post {
    constructor({title, author, body, tags = []}) {
        const options = {
            weekday: 'long', 
            year: 'numeric',
            month: 'long',
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
            hourCycle: 'h24'};
        const min = 100000;
        const max = 999999;

        if(this.validateTitle(title)) this.title = title; 
        if(this.validateAuthor(author)) {this.author = author; this.creator = author;}
        if(this.validateBody(body)) this.body = body;

        if(this.validateTags(tags)) this.tags = tags;        

        this.date = new Date().toLocaleDateString('en-US', options);
        this.ID = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    validateTitle(title) {
        if(typeof title === 'string' && title.length <= 200) {
            return true;
        } else {
            throw new ValidationError('Title must be a string with a maximum length of 200 characters.');
        }
    }

    validateAuthor(author) {
        if(typeof author === 'string' && author.length <= 100) {
            return true;
        } else {
            throw new ValidationError('Author must be a string with a maximum length of 100 characters.')
        }
    }

    validateBody(body) {
        if(typeof body === 'string' && body.length <= 10000) {
            return true;
        } else {
            throw new ValidationError('Body must be a string with a maximum length of 10000 characters.')
        }
    }

    validateTags(tags) {
        if(Array.isArray(tags) && tags.every(tag => typeof tag === 'string' && tag.length <= 10)) {
            return true;
        } else {
            throw new ValidationError('Tags must be an array where all array items must be a string with maximum lengths of 10 characters.');
        }
    }
}