class post {
    constructor({title, author, body, tags = []}) {
        if(typeof title === 'string' && title.length <= 200) {
            this.title = title;
        }

        if(typeof author === 'string' && author.length <= 100) {
            this.author = author;
            this.creator = author;
        }

        if(typeof body === 'string' && body.length <= 10000) {
            this.body = body;
        }

        if(Array.isArray(tags) && tags.every(tag => typeof tag === 'string' && tag.length <= 10)) {
            this.tags = tags;
        }

        this.date = this.postDate();
        this.ID = this.postID();
    }

    postDate() {
        const date = new Date();
        const options = {
        weekday: 'long', 
        year: 'numeric',
        month: 'long',
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hourCycle: 'h24'};

        return date.toLocaleString('en-US', options);
    }

    postID(min = 100000, max = 999999) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}