const express = require("express");
const router = express.Router();

const createUser = require("../controllers/createUser");
const listUsers = require("../controllers/listUsers");
const updateUser = require("../controllers/updateUser");
const deleteUser = require("../controllers/deleteUser");

router.get("/", listUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;