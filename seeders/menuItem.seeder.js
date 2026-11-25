const MenuItem = require("../src/modules/menu/menu.model");

const menuItems = [
    // MAIN COURSE
    {
        category: "main-course",
        name_id: "Nasi Goreng Spesial",
        name_en: "Special Fried Rice",
        description_id: "Nasi goreng berbumbu rempah dengan ayam suwir, telur mata sapi, dan kerupuk.",
        description_en: "Indonesian fried rice seasoned with spices, shredded chicken, a fried egg, and crackers.",
        price: 28000,
        tags: ["Popular", "Spicy", "Best Seller"],
        isFeatured: true,
    },
    {
        category: "main-course",
        name_id: "Ayam Bakar Kecap",
        name_en: "Grilled Chicken with Sweet Soy Sauce",
        description_id: "Ayam panggang dengan bumbu kecap manis, disajikan bersama nasi, sambal, dan lalapan.",
        description_en: "Grilled chicken marinated in sweet soy sauce, served with rice, chili sauce, and fresh vegetables.",
        price: 32000,
        tags: ["Grilled", "Traditional", "Popular"],
        isFeatured: false,
    },
    {
        category: "main-course",
        name_id: "Mie Ayam Spesial",
        name_en: "Special Chicken Noodles",
        description_id: "Mie kenyal dengan topping ayam berbumbu, sayuran segar, dan kuah kaldu gurih.",
        description_en: "Springy noodles topped with seasoned chicken, fresh vegetables, and savory broth.",
        price: 25000,
        tags: ["Noodles", "Comfort Food", "Popular"],
        isFeatured: false,
    },

    // SNACKS
    {
        category: "snacks",
        name_id: "Batagor Bandung",
        name_en: "Bandung Fried Fish Dumplings",
        description_id: "Pangsit tahu dan ikan yang digoreng renyah, disiram saus kacang khas Bandung.",
        description_en: "Crispy fried fish and tofu dumplings served with traditional Bandung peanut sauce.",
        price: 20000,
        tags: ["Traditional", "Popular", "Street Food"],
        isFeatured: true,
    },
    {
        category: "snacks",
        name_id: "Cireng Bumbu Rujak",
        name_en: "Crispy Tapioca Fritters with Spicy Sweet Sauce",
        description_id: "Gorengan berbahan tepung tapioka dengan tekstur renyah di luar dan kenyal di dalam, disajikan dengan bumbu rujak.",
        description_en: "Tapioca fritters crispy on the outside and chewy inside, served with sweet and spicy dipping sauce.",
        price: 15000,
        tags: ["Vegetarian", "Street Food", "Spicy"],
        isFeatured: false,
    },
    {
        category: "snacks",
        name_id: "Pisang Goreng Crispy",
        name_en: "Crispy Fried Bananas",
        description_id: "Pisang pilihan yang dibalut adonan renyah dan digoreng keemasan.",
        description_en: "Selected bananas coated in crispy batter and fried until golden brown.",
        price: 18000,
        tags: ["Sweet", "Vegetarian", "Snack"],
        isFeatured: false,
    },

    // DESSERTS
    {
        category: "desserts",
        name_id: "Es Cendol",
        name_en: "Indonesian Cendol Dessert",
        description_id: "Cendol kenyal dengan santan, gula aren cair, dan es serut yang menyegarkan.",
        description_en: "Chewy green rice flour jelly served with coconut milk, palm sugar syrup, and crushed ice.",
        price: 15000,
        tags: ["Traditional", "Sweet", "Cold"],
        isFeatured: true,
    },
    {
        category: "desserts",
        name_id: "Puding Cokelat",
        name_en: "Chocolate Pudding",
        description_id: "Puding cokelat lembut dengan rasa manis yang pas dan topping krim.",
        description_en: "Smooth chocolate pudding with a balanced sweetness and creamy topping.",
        price: 18000,
        tags: ["Chocolate", "Sweet", "Dessert"],
        isFeatured: false,
    },
    {
        category: "desserts",
        name_id: "Martabak Manis Cokelat Keju",
        name_en: "Chocolate and Cheese Sweet Pancake",
        description_id: "Martabak tebal dan lembut dengan isian cokelat, keju parut, dan susu kental manis.",
        description_en: "A thick, fluffy sweet pancake filled with chocolate, grated cheese, and condensed milk.",
        price: 30000,
        tags: ["Sweet", "Cheese", "Best Seller"],
        isFeatured: false,
    },

    // BEVERAGES
    {
        category: "beverages",
        name_id: "Es Teh Manis",
        name_en: "Iced Sweet Tea",
        description_id: "Teh hitam pilihan dengan gula dan es batu, cocok untuk menemani berbagai hidangan.",
        description_en: "Selected black tea sweetened with sugar and served over ice, perfect with any meal.",
        price: 8000,
        tags: ["Cold", "Refreshing", "Popular"],
        isFeatured: true,
    },
    {
        category: "beverages",
        name_id: "Es Jeruk Segar",
        name_en: "Fresh Iced Orange Juice",
        description_id: "Perasan jeruk segar dengan rasa manis dan asam alami, disajikan dingin.",
        description_en: "Freshly squeezed oranges with a naturally sweet and tangy taste, served chilled.",
        price: 12000,
        tags: ["Fresh", "Cold", "Fruit"],
        isFeatured: false,
    },
    {
        category: "beverages",
        name_id: "Es Kopi Susu Gula Aren",
        name_en: "Iced Palm Sugar Milk Coffee",
        description_id: "Perpaduan espresso, susu segar, dan gula aren dengan rasa kopi yang creamy.",
        description_en: "A balanced blend of espresso, fresh milk, and palm sugar with a creamy coffee flavor.",
        price: 20000,
        tags: ["Coffee", "Popular", "Cold"],
        isFeatured: false,
    },

    // SOUPS
    {
        category: "soups",
        name_id: "Soto Ayam",
        name_en: "Indonesian Chicken Soup",
        description_id: "Sup ayam berkuah kuning dengan suwiran ayam, bihun, telur, dan taburan bawang goreng.",
        description_en: "Traditional chicken soup with shredded chicken, rice vermicelli, egg, and fried shallots.",
        price: 22000,
        tags: ["Traditional", "Warm", "Popular"],
        isFeatured: true,
    },
    {
        category: "soups",
        name_id: "Bakso Sapi",
        name_en: "Indonesian Beef Meatball Soup",
        description_id: "Bakso daging sapi dengan kuah kaldu gurih, mie, tahu, dan sayuran.",
        description_en: "Beef meatballs served in savory broth with noodles, tofu, and vegetables.",
        price: 25000,
        tags: ["Beef", "Warm", "Comfort Food"],
        isFeatured: false,
    },
    {
        category: "soups",
        name_id: "Sop Iga Sapi",
        name_en: "Indonesian Beef Rib Soup",
        description_id: "Iga sapi empuk dalam kuah kaldu rempah dengan wortel, kentang, dan daun bawang.",
        description_en: "Tender beef ribs simmered in aromatic broth with carrots, potatoes, and spring onions.",
        price: 45000,
        tags: ["Beef", "Premium", "Warm"],
        isFeatured: false,
    },

    // GRILLED FOOD
    {
        category: "grilled-food",
        name_id: "Sate Ayam",
        name_en: "Indonesian Chicken Satay",
        description_id: "Potongan ayam yang dibakar dengan bumbu khas, disajikan bersama saus kacang dan lontong.",
        description_en: "Grilled marinated chicken skewers served with peanut sauce and rice cakes.",
        price: 28000,
        tags: ["Grilled", "Traditional", "Popular"],
        isFeatured: true,
    },
    {
        category: "grilled-food",
        name_id: "Ikan Bakar Sambal",
        name_en: "Grilled Fish with Chili Sauce",
        description_id: "Ikan segar yang dibakar dengan bumbu rempah, disajikan dengan sambal dan nasi hangat.",
        description_en: "Fresh fish grilled with aromatic spices, served with chili sauce and steamed rice.",
        price: 40000,
        tags: ["Seafood", "Grilled", "Spicy"],
        isFeatured: false,
    },
    {
        category: "grilled-food",
        name_id: "Ayam Bakar Madu",
        name_en: "Honey Glazed Grilled Chicken",
        description_id: "Ayam panggang dengan olesan madu dan rempah, menghasilkan rasa manis gurih dengan aroma bakaran.",
        description_en: "Grilled chicken glazed with honey and spices, offering a sweet and savory flavor with a smoky aroma.",
        price: 35000,
        tags: ["Grilled", "Sweet", "Best Seller"],
        isFeatured: false,
    },
];

const seedMenuItems = async (categoryMap) => {
    for (const item of menuItems) {
        const { category, ...menuData } = item;

        const categoryId = categoryMap[category];

        if (!categoryId) {
            throw new Error(`Category "${category}" not found`);
        }

        await MenuItem.findOneAndUpdate(
            { name_en: menuData.name_en },
            {
                $set: {
                    ...menuData,
                    category: categoryId,
                    isAvailable: true,
                },
            },
            {
                new: true,
                upsert: true,
                runValidators: true,
                setDefaultsOnInsert: true,
            }
        );
    }

    console.log(`Successfully seeded ${menuItems.length} menu items`);
};

module.exports = seedMenuItems;