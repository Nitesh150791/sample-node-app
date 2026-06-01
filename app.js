const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Node.js App deployed via GitHub Actions + CodeBuild + CodeDeploy');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
