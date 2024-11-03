export const Presentation = {
    date(data) {
        const options = {
            weekday: 'long', 
            year: 'numeric',
            month: 'long',
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
            hourCycle: 'h24'
        };

        const date = new Date(data);
        return date.toLocaleString('en-US', options);
    },
    limitContent(content, length) {
        if(content.length > 150) {
            const newContent = content.slice(0, length);
            if(newContent[newContent.length - 1] === ' ') {
                return newContent.slice(0, length - 1) + '...';
            } else {
                return newContent + '...';
            }
        }
    }
}