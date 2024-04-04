const userController = require("../controller/userController");
const express = require("express");
const router = express.Router();

router.get("/getUser", userController.getUser);
router.post("/newUser", userController.newUser);
router.delete("/deleteUser/user_id", userController.deleteUser);

module.exports = router;
