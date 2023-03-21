const { logEvents } = require('./logger')

//create a function to log errors
const errorHandler = ( err, req, res, next ) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 
    'errLog.log')
    // give us lots of detail and where the error is
    console.log(err.stack) 

    //find out if error already has status code
    const status = res.statusCode ? res.statusCode : 500 //server error

    //set status
    res.status(status)
    
    
    res.json({ message: err.message })
}

module.exports = errorHandler