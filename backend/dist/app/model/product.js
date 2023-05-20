"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    gtin: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });
exports.default = mongoose.model('products', ProductSchema);
//# sourceMappingURL=product.js.map