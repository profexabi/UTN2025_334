//////////////////
// Middlewares //

const loggerUrl = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
}

export {
    loggerUrl
}