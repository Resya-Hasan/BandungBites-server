const Category = require("./category.model")

const getAllCategories = async () => {
    try {
        const categories = await Category.find().exec();
        return categories;
    } catch(err) {
        throw err;
    }
}

const createCategory = async ({ name_id, name_en }) => {
    try {
        const category = Category.create({
            name_id,
            name_en,
            slug: name_en.toLowerCase().replace(/\s+/g, '-')
        })
        return category;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    getAllCategories,
    createCategory
}