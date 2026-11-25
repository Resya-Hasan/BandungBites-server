const Category = require("../src/modules/category/category.model");

const categories = [
    {
        name_id: "Menu Utama",
        name_en: "Main Course",
        slug: "main-course",
    },
    {
        name_id: "Camilan",
        name_en: "Snacks",
        slug: "snacks",
    },
    {
        name_id: "Hidangan Penutup",
        name_en: "Desserts",
        slug: "desserts",
    },
    {
        name_id: "Minuman",
        name_en: "Beverages",
        slug: "beverages",
    },
    {
        name_id: "Sup",
        name_en: "Soups",
        slug: "soups",
    },
    {
        name_id: "Makanan Bakar",
        name_en: "Grilled Food",
        slug: "grilled-food",
    },
];

const seedCategories = async () => {
    const categoryMap = {};

    for (const category of categories) {
        const result = await Category.findOneAndUpdate(
            { slug: category.slug },
            { $set: category },
            {
                new: true,
                upsert: true,
                runValidators: true,
                setDefaultsOnInsert: true,
            }
        );

        categoryMap[category.slug] = result._id;
    }

    console.log(`Successfully seeded ${categories.length} categories`);

    return categoryMap;
};

module.exports = seedCategories;