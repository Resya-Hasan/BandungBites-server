

const getAllCategories = async () => {
    try {
        const categories = await Category.find().exec();
        return categories;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    getAllCategories
}