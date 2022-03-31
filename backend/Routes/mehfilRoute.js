const express = require("express");
const {
    getAllMehfils
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
router.route("/mehfil").get(getAllMehfil);

module.exports = router;