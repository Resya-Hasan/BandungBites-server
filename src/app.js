const express = require('express');
const cors = require('cors');
const ErrorHandler = require('./middlewares/errorHandler')
const cookieParser = require("cookie-parser")

const app = express();

app.use(cookieParser())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Wellcome!');
});

app.use('/api/v1/auth', require('./modules/auth/auth.route'));

app.use(ErrorHandler)

module.exports = app;