const mongoose = require('mongoose');

// Create the schema for the product
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  // Marking title as required
    },
    price: {
        type: Number,
        required: true  // Marking price as required
    },
    description: {
        type: String,
        required: true  // Description can be required as well
    },
    category: {  // Fixed typo "Catagery" to "Category"
        type: String,
        required: true
    },
    imagePath: {  // Fixed "ImagePath" to camelCase imagePath
        type: String,
        required: true
    },
    rating: {  // Fixed typo "Ratting" to "Rating"
        type: Number,
        required: true
    }
});

// Export the model to use in other files
module.exports = mongoose.model('Product', productSchema);
