// middlewares are functions that execute during request, response cycle

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode)

    res.json({
        message: err.message,
        // the stack trace shows when we are in production but if we are in production, it only returns the error message
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler
}