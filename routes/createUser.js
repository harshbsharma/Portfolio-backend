const express = require("express");
const router = express.Router();

const {createUser} = require("../controllers/Userentry");

router.post("/create-entry",createUser);

module.exports = router;