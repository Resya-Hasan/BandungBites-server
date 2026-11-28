const ApiResponse = require("../../utils/ApiResponse");
const MenuService = require("./menu.service");
const { createMenuItemSchema, updateMenuItemSchema } = require("./menu.validation");

module.exports = class MenuController {
    static async getAllMenuItems(req, res, next) {
        try {
            const {search} = req.query;

            const result = await MenuService.getAllMenuItems(search);
            res.status(200).json(
                new ApiResponse(
                    200,
                    "Get all menu items success",
                    result,
                )
            );
        } catch (err) {
            next(err);
        }
    }

    static async getMenuItemById(req, res, next) {
        try{
            const { id } = req.params;
            const result = await MenuService.getMenuItemById(id);
            res.status(200).json(
                new ApiResponse(
                    200,
                    "Get menu item by id success",
                    result,
                )
            );
        } catch(err) {
            next(err);
        }
    }

    static async createMenuItem(req, res, next) {
        try {
            const validateData = createMenuItemSchema.parse(req.body);
            const result = await MenuService.createMenuItem(validateData);

            res.status(201).json(
                new ApiResponse(
                    201,
                    "Create menu item success",
                    result,
                )
            );
        } catch(err) {
            next(err);
        }
    }

    static async updateMenuItem(req, res, next) {
        try {
            const { id } = req.params;
            const validateData = updateMenuItemSchema.parse(req.body);
            const result = await MenuService.updateMenuItem(id, validateData);

            res.status(200).json(
                new ApiResponse(
                    200,
                    "Update menu item success",
                    result,
                )
            );
        } catch(err) {
            next(err);
        }
    }

    static async deleteMenuItem(req, res, next) {
        try {
            const { id } = req.params;
            const result = await MenuService.deleteMenuItem(id);

            res.status(200).json(
                new ApiResponse(
                    200,
                    "Delete menu item success",
                    result,
                )
            );
        } catch(err) {
            next(err);
        }
    }
}