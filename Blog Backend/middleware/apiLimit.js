import rateLimit from "express-rate-limit";

const apiLimiter = rateLimit({
    windowsMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windows ms,
    message: {
        success: false,
        data: "Too many requests, please try again later."
    }
});


export default apiLimiter;