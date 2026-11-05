

const getAllMenuItems = async () => {
    try {
        const menuItems = await MenuItem.find().populate("category", "name_id").exec();
        return menuItems;
    } catch(err) {
        throw err;
    }

}

module.exports = {
    getAllMenuItems
}