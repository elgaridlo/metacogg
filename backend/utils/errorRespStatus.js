const errorResponseStatus = (code, message, res) => {
    res.status(code).json({
        status: 'Error',
        message
    })
}

module.exports = errorResponseStatus