const express = require('express');

// Creating server
const app = express();


const people = require('./routes/people');
const auth = require('./routes/auth');

// Middlewares for parsing form data
app.use(express.urlencoded({extended: true}));
// to parse json
app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);

app.listen(8000, () => {
    console.log('server listening on port 8000....');
})