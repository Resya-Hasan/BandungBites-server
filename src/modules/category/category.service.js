const Category = require("./category.model")

const getAllCategories = async () => {
    const categories = await Category.find().exec();
    return categories;
}

const createCategory = async ({ name_id, name_en }) => {
    const category = Category.create({
        name_id,
        name_en,
        slug: name_en.toLowerCase().replace(/\s+/g, '-')
    })
    return category;
}

const updateCategory = async (id, { name_id, name_en }) => {
    const updateData = {}
    const category = await Category.findOne({ _id: id }).exec();

    if (!category) {
        throw new Error("Category not found");
    }

    if (name_id !== undefined) {
        updateData.name_id = name_id;
    }

    if (name_en !== undefined) {
        updateData.name_en = name_en;
        updateData.slug = name_en.toLowerCase().replace(/\s+/g, '-');
    }

    const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { $set: updateData },
        {
            new: true,
            runValidators: true
        }
    );
    return updatedCategory;
}

module.exports = {
    getAllCategories,
    createCategory,
    updateCategory
}