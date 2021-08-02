const express = require('express');
 
const PORT = process.env.PORT;

const app = express();

app.get('/', (_req, res) => res.send());

app.listen(PORT, () => console.log(`Online at ${PORT}`));