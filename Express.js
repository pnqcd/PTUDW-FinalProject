const express = require("express");
const app = express();
const { Pool } = require("pg");
var path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "12345678",
    port: 5432
});

app.post('/submit', (req, res) => {
    const response_key = req.body["g-recaptcha-response"];
    const secret_key = "6LdCxQQpAAAAAKjC5rDm3a-LuGRaiC2MVngHvY60";
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

    console.log(req);

    fetch(url, {
        method: "post",
    })
        .then((response) => response.json())
        .then((google_response) => {
            if (google_response.success == true) {
                console.log("success");
                return res.send({response: "Successful"});
            } 
            else {
                console.log("failed");
                return res.send({response: "Failed"});
            }  
        })
        .catch((error) => {
            return res.json({ error });
        })
});

app.post('/submit-ad-banner-report-img', (req, res) => {
    return res.send({response: "Successful"});
});

app.get("/get-place", (req, res) => {
    pool.query("SELECT * FROM place", (error, results) => {
        if (error) {
            res.status(500).json({ error });
            console.log("loi roi")
        } else {
            res.json({ place: results.rows });
        }
    });
});

app.get('/get-ad-details/:id', (req, res) => {
    const placeID = req.params.id;
    pool.query("SELECT * FROM \
        PLACE PL JOIN PLACE_DETAILS PD on PL.STT = PD.PLACE_STT \
        WHERE PD.PLACE_STT = " + placeID
        , (error, results) => {
        if (error) {
            res.status(500).json({ error });
            console.log("loi roi")
        } else {
            res.json({ placeDetails: results.rows });
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
