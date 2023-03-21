const express = require('express');
const app = express();
const path = require('path');
const {logger} = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3500;



//add logger before everything else
app.use(logger)

//add json functionality
app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'public')));
//you can use a / or not, (/public or public)
app.use('/', require('./routes/root'))

app.all('*', (req,res) => {
    res.status(404)
    if(req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not found'})
    } else {
        res.type('txt').send('404 not found')
    }
})

//log errors
app.use(errorHandler)

//goes last
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

