const express = require("express")
const router = express.Router()
const MenuController = require("./menu.controller")

router.get("/", MenuController.getAllMenuItems)
router.post("/", MenuController.createMenuItem)

module.exports = router