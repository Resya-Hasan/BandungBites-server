const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Menu route is working")
})

module.exports = router