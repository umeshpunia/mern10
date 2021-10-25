const express = require('express');
const app = express();
const port = process.env.PORT || 1000;
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
