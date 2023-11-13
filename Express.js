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
    // user: "postgres",
    // host: "localhost",
    // database: "postgres",
    // password: "12345678",
    // port: 5432
    user: "yoaqtxvl",
    host: "rain.db.elephantsql.com",
    database: "yoaqtxvl",
    password: "PPr7gzt67BbTzFagQlqq_MzwzfpzX2Hr",
    port: 5432
    // connectionString: 'postgres://yoaqtxvl:PPr7gzt67BbTzFagQlqq_MzwzfpzX2Hr@rain.db.elephantsql.com/yoaqtxvl',
    // ssl: {
    //     rejectUnauthorized: false,
    // },
});

app.post('/submit', (req, res) => {
    const response_key = req.body["g-recaptcha-response"];
    const secret_key = "6LdCxQQpAAAAAKjC5rDm3a-LuGRaiC2MVngHvY60";
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

    let msg ="";

    const name = req.body["firstname"];
    const type = req.body["lastname"];
    const email = req.body["email"];
    const phone = req.body["phone"];
    const message = req.body["message"];

    if (name.trim() == "")
        msg += "Họ tên không thể để trống!\n";

    if (email.trim() == "")
        msg += "Email không thể để trống!\n";

    if (phone.trim() == "")
        msg += "Điện thoại không thể để trống!\n";
    
    if (message.trim() == "")
        msg += "Nội dung báo cáo không thể để trống!\n";

    console.log(msg);

    fetch(url, {
        method: "post",
    })
        .then((response) => response.json())
        .then((google_response) => {
            if (google_response.success == true) {
                console.log("success");
                return res.send({response: "Successful", message: msg});
            } 
            else {
                console.log("failed");
                msg += "Recaptcha chưa được check!\n";
                return res.send({response: "Failed", message: msg});
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

// const PORT = process.env.PORT || 3000;
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
