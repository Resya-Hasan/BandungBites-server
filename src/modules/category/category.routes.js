const express = require("express")
const router = express.Router()
const CategoryController = require("./category.controller")

router.get("/", CategoryController.getAllCategories)
router.post('/', CategoryController.createCategory)
router.patch('/:id', CategoryController.updateCategory)
router.delete('/:id', CategoryController.deleteCategory)

module.exports = router