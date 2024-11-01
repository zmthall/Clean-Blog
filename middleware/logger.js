// Console logger for api requests
export function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] | ${req.method} | ${req.url} | ${req.headers['user-agent']}`);
    next();
}