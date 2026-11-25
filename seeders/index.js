require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = require("../src/config/db");
const seedCategories = require("./category.seeder");
const seedMenuItems = require("./menuItem.seeder");

const runSeeder = async () => {
    try {
        await connectDB();

        console.log("Starting database seeding...");

        const categoryMap = await seedCategories();

        await seedMenuItems(categoryMap);

        console.log("Database seeding completed successfully");
    } catch (error) {
        console.error("Database seeding failed:", error);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
};

runSeeder();