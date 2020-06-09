// feeling.js - route Module
const express = require("express");
const router = express.Router();

// Setup empty JS object to act as API endpoint
const projectData = require("fs");

// Require the Aylien Package
var AYLIENTextAPI = require("aylien_textapi");

// Setup Aylien API Credentias
const textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

// Get feelingList
router.get("/", (req, res) => {
  if (req.query.mode === "document") {
    textapi.sentiment(
      {
        mode: req.query.mode,
        url: req.query.value,
      },
      (error, response) => {
        if (error === null) {
          res.json({
            ok: true,
            respond: response,
          });
        } else {
          console.log(error);
        }
      }
    );
  } else {
    textapi.sentiment(
      {
        mode: req.query.mode,
        text: req.query.value,
      },
      (error, response) => {
        if (error === null) {
          res.json({
            ok: true,
            respond: response,
          });
        } else {
          console.log(error);
        }
      }
    );
  }
});

// Post one feeling
router.post("/", (req, res) => {
  let feelingList = require("./db.json");

  const {
    polarity,
    subjectivity,
    text,
    polarity_confidence,
    subjectivity_confidence,
  } = req.body;

  const id = feelingList.length + 1;
  const feelingData = {
    _id: `${id}`,
    polarity,
    subjectivity,
    text,
    polarity_confidence,
    subjectivity_confidence,
  };

  feelingList.push(feelingData);

  projectData.writeFileSync(
    `${__dirname}/db.json`,
    JSON.stringify(feelingList)
  );

  res.json({
    ok: true,
    respond: feelingData,
  });
});

module.exports = router;
