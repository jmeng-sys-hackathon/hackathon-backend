const functions = require("firebase-functions");

const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const express = require("express");
const cors = require("cors");

// Main App
const app = express();
app.use(cors({ origin: true }));

// Routes -----------------------------------------------------------------------------------------

app.get("/", (req, res) => {
	return res.status(200).send("Server is running!");
});

// Create -> post()


// Get -> get()


// Update -> put()


// Delete -> delete()


// exports api firebase cloud functions
exports.app = functions.https.onRequest(app);