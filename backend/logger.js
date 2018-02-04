const winston = require('winston');

const logger = winston.createLogger({
    level: 'error',
    transports: [
        new winston.transports.Console()
    ]
});


module.exports = logger;