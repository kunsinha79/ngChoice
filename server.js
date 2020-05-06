const express = require('express');

const app = express();

app.use(express.static('./dist/ngChoice'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ngChoice/'}),
);

app.listen(process.env.PORT || 8080);
