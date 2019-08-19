
let express = require ('express'); // package from a third party

let app = express();

app.get('/add/:no1/:no2', function (req, res) {
    let n1 = parseInt(req.params.no1);
    let n2 = parseInt(req.params.no2);

    let result = n1 + n2;

    res.send("The output = " + result);
});

app.get('/sub', function (req, res) {
    let n1 = parseInt(req.query.no1);
    let n2 = parseInt(req.query.no2);

    let result = n1 - n2;

    res.send("The output = " + result);
});

app.listen(8000);