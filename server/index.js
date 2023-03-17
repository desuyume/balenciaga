require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/ErrorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: process.env.CLIENT_URL
	})
);
app.use('/api', router);
app.use(errorMiddleware);

const startApp = async () => {
	try {
		await mongoose.connect(process.env.DB_URL);
		app.listen(PORT, () => console.log(`server started on PORT = ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

startApp();
