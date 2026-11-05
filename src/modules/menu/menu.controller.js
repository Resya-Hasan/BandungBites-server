const ApiResponse = require("../../utils/ApiResponse");
const MenuService = require("./menu.service");

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
}