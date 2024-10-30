export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        this.status = 400;
    }
}

export class UseCaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UseCaseError';
        this.status = 400;
    }
}