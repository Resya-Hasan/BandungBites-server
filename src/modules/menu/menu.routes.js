const express = require("express")
const router = express.Router()
const MenuController = require("./menu.controller")

router.get("/", MenuController.getAllMenuItems)

module.exports = router