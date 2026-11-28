const MenuItem = require("./menu.model");
const ApiError = require("../../utils/ApiError");

const getAllMenuItems = async (search) => {
    const filter = {};

    if (search) {
        filter.name_id = {
            $regex: search,
            $options: "i"
        };
    }

    const menuItems = await MenuItem.find(filter)
        .populate("category", "name_id")
        .exec();

    return menuItems;
};

const getMenuItemById = async (id) => {
    const menuItem = await MenuItem.findById(id)
        .populate("category", "name_id")
        .exec();

    if (!menuItem) {
        throw new ApiError(404, "Menu item not found");
    }

    return menuItem;
}

const createMenuItem = async (data) => {
    const menuItem = await MenuItem.create(data);

    return menuItem;
};

const updateMenuItem = async (id, data) => {
    const menuItem = await MenuItem.findByIdAndUpdate(
        id,
        { $set: data },
        {
            new: true,
            runValidators: true
        }
    );

    if (!menuItem) {
        throw new ApiError(404, "Menu item not found");
    }

    return menuItem;
};

const deleteMenuItem = async (id) => {
    const menuItem = await MenuItem.findByIdAndDelete(id);

    if (!menuItem) {
        throw new ApiError(404, "Menu item not found");
    }

    return menuItem;
};

module.exports = {
    getAllMenuItems,
    getMenuItemById,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem
}