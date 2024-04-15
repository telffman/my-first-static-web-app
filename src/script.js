const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let pageViews = 0;
let yesVotes = 0;
let noVotes = 0;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    pageViews++;
    res.send('Page Loaded');
});

app.post('/vote', (req, res) => {
    if (req.body.vote === 'yes') {
        yesVotes++;
    } else if (req.body.vote === 'no') {
        noVotes++;
    }
    res.send('Vote counted');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
