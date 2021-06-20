const app = require('./app');
const path = require('path');
const { DBConnection } = require('./db/config');
const port = process.env.PORT || 6000;
DBConnection();

app.listen(port, () => {
    console.log('Server is running at port: ', port);
})