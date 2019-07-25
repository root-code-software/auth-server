module.exports = {
    format: ':remote-addr - :remote-user ":method :url HTTP/:http-version" status: :status :res[content-length] - :response-time ms ":referrer" ":user-agent"',
    options: {
        stream: logger.stream
    }
}