const ApiResponse = require("../../utils/ApiResponse");
const MenuService = require("./menu.service");
const { createMenuItemSchema } = require("./menu.validation");

module.exports = class MenuController {
    static async getAllMenuItems(req, res, next) {
        try {
            const result = await MenuService.getAllMenuItems();
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
}