require('dotenv').config();

const express = require('express');

const route = require('./routes');
 
const PORT = process.env.NODE_DOCKER_PORT || 3000;

const app = express();

app.use(express.json());
app.use(route);

app.get('/', (_req, res) => res.send());

app.listen(PORT, () => console.log(`Online at ${PORT}`));