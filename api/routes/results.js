/* eslint-disable no-console */
const express = require('express');
const router = express.Router();
const mysqldbadapter = require("../db/dbadapter");

// GET ALL RESULTS
router.get("/", (req, res) => {
    mysqldbadapter.getAll("results")
        .then(result => {
            res.json(result);
            console.log(result);
        })
        .catch(error => { res.json({ error: error }) })
})
// POST RESULTS
router.post("/", (req, res) => {
    let body = {
        json: req.body.json,
        postId: req.body.postId,
        email: req.body.email
    }
    mysqldbadapter.postResults(body)
        .then(() => {
            res.json({
                "success": true
            })
            // if (body.email !== undefined) {
            //     dbadapter.sendMail(body.email)
            // }
        })
        .catch(error => {
            res.json({
                error: error
            })
        })
})

module.exports = router;