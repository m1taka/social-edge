/* eslint-disable no-console */
const express = require('express');
const router = express.Router();
const mysqldbadapter = require("../db/dbadapter");

// GET ALL SURVEYS
router.get("/", (req, res) => {
    mysqldbadapter.getAll("surveys")
        .then(result => {
            res.json(result)
            console.log(result);
        })
        .catch(error => { res.json({ error: error }) })
})
// POST SURVEY
router.post("/", (req, res) => {
    let json = req.body.json
    let name = req.body.name
    mysqldbadapter.postSurvey(json, name)
        .then(result => {
            res.json(result);
            // console.log(result);
        })
        .catch(error => { res.json({ error: error }) })
})
//GET SURVEY BY ID
router.get("/:id", (req, res) => {
    mysqldbadapter.getSurvey("surveys", req.params.id)
        .then(result => {
            res.json(result);
            // console.log(result);
        })
        .catch(error => { res.json({ error: error }) })
})
module.exports = router;
