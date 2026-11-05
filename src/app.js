const express = require('express');
const cors = require('cors');
const ErrorHandler = require('./middlewares/errorHandler')
const cookieParser = require("cookie-parser")

const app = express();

app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Wellcome!');
});

app.use('/api/v1/auth', require('./modules/auth/auth.routes'));
app.use('/api/v1/category', require('./modules/category/category.routes'));
app.use('/api/v1/menu', require('./modules/menu/menu.routes'));

app.use(ErrorHandler)

module.exports = app;