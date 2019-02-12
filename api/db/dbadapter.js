/* eslint-disable no-console */
const mail = require("../../mail");
const fs = require('fs');
const mysql = require('mysql');
const db = mysql.createPool(
  JSON.parse(fs.readFileSync(`${__dirname}/../../config.json.dist`))
);

module.exports = {
  sendMail: (address) => {
    var email = new mail(address);
    return email;
  },
  getAll: (table) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM " + table, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  // SURVEYS
  getSurvey: (table, id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM ${table} WHERE id=${id}`, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  postSurvey: function (result, name) {
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO surveys VALUES (NULL, '${result}', '${name}')`
      db.query(sql, [result], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  // RESULTS
  postResults: function (body) {
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO results VALUES (NULL, "${body.json}", ${body.postId}, "${body.email}")`;
      db.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
}
