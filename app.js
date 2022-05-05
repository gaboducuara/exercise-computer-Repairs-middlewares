const express = require ('express');

const { cc } = require('./utils/database');

const { globalErrorHandler } = require ('./routes/users.routes')

const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

const app = express ();

app.use(express.json())

//endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

const { user } = require('./models/modelusers');
const { Repair } = require('../models/modelrepairs');

cc.authenticate()
    .then(() => console.log('Databse autenticated'))
    .catch(err => console.log(err));

cc.sync()
    .then(() => console.log('Databse sync'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`express app runnning on port: ${PORT}`);
});
