require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter')
const requestRouter = require('./routes/requestRouter')
const tokenRouter = require('./routes/tokenRouter')

const port = process.env.PORT ? process.env.PORT : 4000;

// mongoose.connect(process.env.MONGOOSE, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.once('open', () => {
//     console.log('DB connected successfully!');
// });
// db.on('error', (err) => {
//     console.error(`Error while connecting to DB: ${err.message}`);
// });

const app = express();
app.use(bodyParser.json());

app.use('/api/auth/', authRouter);
app.use('/api/request/', requestRouter);
app.use('/api/token/', tokenRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = { app };
