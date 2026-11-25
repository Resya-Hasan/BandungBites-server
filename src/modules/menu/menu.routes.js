const express = require("express")
const router = express.Router()
const MenuController = require("./menu.controller")
const authenticationMiddleware = require("../../middlewares/authentication")
const AuthorizationMiddleware = require("../../middlewares/authorization")

router.get("/", MenuController.getAllMenuItems)

router.use(authenticationMiddleware)
router.use(AuthorizationMiddleware("admin"))

router.post("/", MenuController.createMenuItem)
router.patch("/:id", MenuController.updateMenuItem)
router.delete("/:id", MenuController.deleteMenuItem)

module.exports = router