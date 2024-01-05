const express = require("express");
const app = express();
const { Pool } = require("pg");
var path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: (req, file, cb) => {
        // cb(null, file.originalname); // Use the original file name
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname); // Use a unique filename
    },
});

const upload = multer({ storage: storage });

require('dotenv').config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use('/static', express.static('public'));
app.use(express.static(__dirname));

app.use(function (req, res, next) {
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



    // connectionString: process.env.DATABASE_URL,
    // ssl: {
    //     rejectUnauthorized: false,
    // },
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true
});

const uploadImage = async (imagePath) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };

    try {
        // Upload the image
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result);
        return result.secure_url;
    } catch (error) {
        console.error(error);
    }
};

app.post('/submit', (req, res) => {
    const response_key = req.body["g-recaptcha-response"];
    const secret_key = "6LdCxQQpAAAAAKjC5rDm3a-LuGRaiC2MVngHvY60";
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

    let msg = "";

    const name = req.body["firstname"];
    const type = req.body["lastname"];
    const email = req.body["email"];
    const phone = req.body["phone"];
    const message = req.body["message"];
    var img1, img2

    if (Array.isArray(req.body["adBannerReportUploader"])) {
        img1 = req.body["adBannerReportUploader"][0];
        img2 = req.body["adBannerReportUploader"][1];
    } else {
        img1 = req.body["adBannerReportUploader"];
        img2 = null
    }

    const lat = req.body["lat"];
    const lng = req.body["lng"];
    const isLocationReport = req.body["isLocationReport"]
    const adBannerID = req.body["adBannerID"]

    console.log(img1 + " --- " + img2)

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
        .then(async (google_response) => {
            if (google_response.success == true) {
                console.log("success");

                let img1Valid = img1 ? img1 : "NULL"
                let img2Valid = img2 ? img2 : "NULL"

                console.log(img1Valid);
                console.log(img2Valid);
                console.log(lat);
                console.log(lng);

                if (img1Valid != "NULL") {
                    img1Valid = await uploadImage(`uploads/${img1Valid}`);
                }

                if (img2Valid != "NULL") {
                    img2Valid = await uploadImage(`uploads/${img2Valid}`);
                }

                let tmp = `
                INSERT INTO reports (lat, lng, reporterName, typeOfReport, reporterEmail, reporterPhoneNumber, reportContent, imagePath1, imagePath2, locationreport, adbannerreportid)
                VALUES
                    (${lat}, ${lng}, '${name}', '${type}', '${email}', '${phone}', '${message}', 'uploads/${img1Valid}', 'uploads/${img2Valid}', ${isLocationReport}, ${adBannerID});
                `

                console.log(tmp)

                pool.query(`
                INSERT INTO reports (lat, lng, reporterName, typeOfReport, reporterEmail, reporterPhoneNumber, reportContent, imagePath1, imagePath2, locationreport, adbannerreportid)
                VALUES
                    (${lat}, ${lng}, '${name}', '${type}', '${email}', '${phone}', '${message}', '${img1Valid}', '${img2Valid}', ${isLocationReport}, ${adBannerID});
                `)

                return res.send({ response: "Successful", message: msg });
            }
            else {
                console.log("failed");
                msg += "Recaptcha chưa được check!\n";
                return res.send({ response: "Failed", message: msg });
            }
        })
        .catch((error) => {
            return res.json({ error });
        })
});

app.post('/submit-ad-banner-report-img', upload.single('adBannerReportUploader'), (req, res) => {
    // Files are uploaded and stored in the 'uploads/' directory

    // // Retrieve file information
    // const files = req.files;
    // files.forEach(file => {
    //     console.log('Uploaded file:', file.filename);
    //     // You can store file information in a database or perform other actions here
    // });

    // Respond to the client
    res.send({ uniqueFileId: req.file.filename });

});

app.delete('/revert', (req, res) => {
    const uniqueFileId = req.body.uniqueFileId;

    // Check if uniqueFileId is received correctly
    console.log('Received uniqueFileId in /revert:', uniqueFileId);

    // Assuming files are stored in a 'uploads' directory
    const filePath = `uploads/${uniqueFileId}`;

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Perform actions to revert or delete the file based on uniqueFileId
        fs.unlinkSync(filePath);

        // Send a response indicating success
        res.json({ success: true, message: 'File reverted and deleted successfully' });
    } else {
        // Send a response indicating that the file does not exist
        res.status(404).json({ success: false, message: 'File not found' });
    }
})

app.get("/get-place", (req, res) => {
    pool.query('SELECT * FROM "Places"', (error, results) => {
        // pool.query("select * from reports right join place on reports.adbannerreportid  = place.stt", (error, results) => {
        if (error) {
            res.status(500).json({ error });
            console.log("loi roi")
        } else {
            res.json({ place: results.rows });
        }
    });
});

app.get("/get-report", (req, res) => {
    pool.query('select * from reports where locationreport = true', (error, results) => {
        // pool.query('select * from reports', (error, results) => {
        if (error) {
            res.status(500).json({ error });
            console.log("loi roi")
        } else {
            res.json({ report: results.rows });
        }
    });
});

app.get('/get-ad-details/:id', (req, res) => {
    const placeID = req.params.id;
    pool.query(
        `
        SELECT
            PL.*,
            PD.id AS adBannerId,
            PD."placeId",
            PD."adName",
            PD."adSize",
            PD."adQuantity",
            PD."expireDay",
            PD."imagePath",
            PD."publicImageId",
            PD."createdAt" AS adCreatedAt,
            PD."updatedAt" AS adUpdatedAt,
            RP.id as reportID,
            RP.lat,
            RP.lng,
            RP.reportername,
            RP.typeofreport,
            RP.reporteremail,
            RP.reporterphonenumber,
            RP.reportcontent,
            RP.imagepath1,
            RP.imagepath2,
            RP.locationreport,
            RP.adbannerreportid,
            RP.handlemethod,
            RP.reportlocation,
            RP.reportkhuvuc
        FROM "Places" PL
        JOIN "Placedetails" PD ON PL.id = PD."placeId"
        LEFT JOIN reports RP ON RP.adbannerreportid = PD.id
        WHERE PD."placeId" = 
        ` + placeID
        , (error, results) => {
            if (error) {
                res.status(500).json({ error });
                console.log("loi roi")
            } else {
                res.json({ placeDetails: results.rows });
            }
        });
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
