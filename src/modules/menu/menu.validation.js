const { z } = require('zod');

const createMenuItemSchema = z.object({
    name_id: z.string().min(1, { message: "Name is required" }),
    name_en: z.string().min(1, { message: "Name is required" }),
    description_id: z.string().min(1, { message: "Description is required" }),
    description_en: z.string().min(1, { message: "Description is required" }),
    price: z.number().min(0, { message: "Price must be a positive number" }),
    imageUrl: z.string().url({ message: "Invalid image URL" }).optional(),
    isAvailable: z.boolean().optional(),
    isFeatured: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().min(1, { message: "Category is required" })
})

module.exports = {
    createMenuItemSchema
}