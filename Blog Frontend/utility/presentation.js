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
    }
}