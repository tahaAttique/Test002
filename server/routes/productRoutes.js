import express from "express";
import {
    addProduct,
    filterProducts,
    getBestSellers,
    getByCategory,
    getProduct,
    getProducts,
    getTopRated,
    listOfProducts,
    searchProducts,
}
    from "../controllers/productControllers.js";

const router = express.Router();

//Route to get all products
router.get('/', getProducts);

//Route to get a single product by id
router.get('/product/:id', getProduct);

//Route to add a product
router.post("/product", addProduct);

//Route to send products based on men,women and kid
router.get('/category/:category', getByCategory);

//Route to get top rated products
router.get('/filter/topRated', getTopRated);

//Route to get best sellers
router.get('/filter/bestSellers', getBestSellers);

//Route to search for an item - MOVED UP
router.get('/products/search', searchProducts);

//Route to filter products - MOVED UP
router.get('/products/filterBy', filterProducts);

//Route to get list of products - MOVED DOWN (specific routes BEFORE dynamic routes)
router.get('/products/:list', listOfProducts);

export default router;