const express = require('express');
const router = express.Router();
const Product = require('../model/product');  // Corrected spelling of Product
const mongoose = require('mongoose');

// POST request to create a new product
router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(), // _id is automatically generated by mongoose, but if you want to specify it, you can use this.
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        imagePath: req.body.imagePath,
        rating: req.body.rating
    });

    product.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Product created successfully',
                new_product: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;
