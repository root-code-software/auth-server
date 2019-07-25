module.exports = {
    origin: function (_origin, next) {
        next(null, true)

    },
    // origin: (origin, next) => {
    //     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
    //         next(null, true);
    //     } else {
    //         const msg = 'The CORS policy for this site does not allow access from the specified Origin';
    //         next(new Error(msg));
    //     }
    // },
    credentials: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'X-Access-Token'],
    preflightContinue: false
}