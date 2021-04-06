//lets call our logger
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data)=>{console.log('Called listener',data)});
logger.log('Hello World');
logger.log('It is Working!!');
