/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const next = require("next");

const nextApp = next({ dev: false });
const handle = nextApp.getRequestHandler();

exports.nextApp = functions.https.onRequest((req, res) => {
  return nextApp
    .prepare()
    .then(() => handle(req, res))
    .catch((error) => {
      console.error("Error preparing Next.js app:", error);
      res.status(500).send("Internal Server Error");
    });
});
