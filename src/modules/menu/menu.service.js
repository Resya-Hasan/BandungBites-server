

export const getAllMenuItems = async () => {
    const menuItems = await MenuItem.find().populate("category", "name_id").exec();
    return menuItems;
}