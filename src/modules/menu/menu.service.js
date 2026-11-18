const MenuItem = require("./menu.model");
const ApiError = require("../../utils/ApiError");

const getAllMenuItems = async () => {
    try {
        const menuItems = await MenuItem.find().populate("category", "name_id").exec();
        return menuItems;
    } catch(err) {
        throw err;
    }
}

const createMenuItem = async (data) => {
    try {
        const menuItem = await MenuItem.create(data);
        return menuItem;
    } catch(err) {
        throw err;
    }
}

const updateMenuItem = async (id, data) => {
    try {
        const menuItem = await MenuItem.findByIdAndUpdate(id, { $set: data}, { new: true, runValidators: true });

        if (!menuItem) {
            throw new ApiError(404, "Menu item not found");
        }

        return menuItem;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    getAllMenuItems,
    createMenuItem,
    updateMenuItem
}