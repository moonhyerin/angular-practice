"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const product_1 = require("./model/product");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.params; // ?name=halo&price=36 => { name: 'halo', price: 46 }
        const products = yield product_1.default.find({});
        res.status(200).json(products);
    }
    catch (error) {
        console.log('error ', error);
        process.exit(1);
    }
});
exports.getProducts = getProducts;
const getOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_1.default.find({});
    }
    catch (error) {
        console.log('error ', error);
        process.exit(1);
    }
});
//# sourceMappingURL=api.js.map