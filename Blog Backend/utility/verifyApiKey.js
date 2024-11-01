import { ControllerError } from "./error.js";

export function verifyApiKey(req) {
    const { api_key } = req.headers;

    if(api_key !== process.env.API_KEY) {
        throw new ControllerError('Access denied. Authorization restricted; missing API Key.', 403);
    }
}