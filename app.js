// Environment variables
require(`dotenv`).config({path: `process.env`});

const express = require(`express`),
    app = express();

app.set(`view engine`, `ejs`);
app.use(express.static(__dirname + `/public`));

app.get(`/`, (req, res) => {
    res.render(`index`);
})

app.listen(process.env.PORT, () => { console.log(`Server listening on ${process.env.PORT}`); });