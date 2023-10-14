const express = require("express");
const app = express();
const { Pool } = require("pg");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "12345678",
    port: 5432
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

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
