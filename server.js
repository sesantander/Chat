const http = require('./app');
const port = 3001;

http.listen(port,() => {
    console.log('server is running on port', port)
})