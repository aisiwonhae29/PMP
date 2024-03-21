let express = require("express");
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/info', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000, ()=> {
    console.log('im in studying...')
})