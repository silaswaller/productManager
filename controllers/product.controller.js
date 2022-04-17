const Product = require("../models/product.model");

module.exports = {

    findAllProducts: (req, res) => {
        Product.find()
            .then((allProducts) => {
                console.log(allProducts)
                return res.json(allProducts)
            })
            .catch((err) => {
                console.log("findAllProducts has failed")
                return res.json(err)
            })
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                console.log(newProduct)
                return res.json(newProduct)
            })
            .catch((err) => {
                console.log("createProduct has failed")
                return res.status(400).json(err)
            })
    },

    fineOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => {
                console.log(oneProduct)
                return res.json(oneProduct)
            })
            .catch((err) => {
                console.log("findOneProduct has failed")
                return res.json(err)
            })
    },

    deleteOneProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((deletedProduct) => {
                console.log(deletedProduct)
                return res.json(deletedProduct)
            })
            .catch((err) => {
                console.log("deleteOneProduct has failed")
                return res.json(err)
            })
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedProduct) => {
                console.log(updatedProduct)
                return res.json(updatedProduct)
            })
            .catch((err) => {
                console.log("updateProduct has failed")
                return res.status(400).json(err)
            })
    }
}