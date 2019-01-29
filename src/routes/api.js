const { Router } = require('express');
const app = Router();

const Jobs = require('../controllers/Jobs/jobs');

//company routes
app.get('/jobs', Jobs.index);

//creamos el endpoint
app.post('/jobs', Jobs.create);

app.delete('/jobs/:id',Jobs.removeBy);

app.put('/jobs/:id', Jobs.update);

app.get('/jobs/:id', Jobs.findBy);


module.exports = app;