export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        this.status = 400;
    }
}

export class UseCaseError extends Error {
    constructor(message, status, error = null) {
        super(message);
        this.name = 'UseCaseError';
        this.status = status;
        this.error = error;
    }
}
