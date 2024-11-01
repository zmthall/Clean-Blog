import { ControllerError } from "../utility/error.js";

export function apiAuth(req, res, next) {
    const { api_key } = req.headers;
    if(api_key === process.env.API_KEY) {
        return next();
    } else {
        throw new ControllerError('Access denied. Authorization restricted; missing API Key.', 403);
    }
}
