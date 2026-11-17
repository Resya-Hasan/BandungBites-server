const MenuItem = require("./menu.model");

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

module.exports = {
    getAllMenuItems,
    createMenuItem
}