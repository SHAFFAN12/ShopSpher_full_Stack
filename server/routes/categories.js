const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();
const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2;

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.Cloudinary_Config_Cloud_Name,
    api_key: process.env.Cloudinary_Config_api_key,
    api_secret: process.env.Cloudinary_Config_api_secret
});

// Get all categories
router.get('/', async (req, res) => {
    try {
        const categoryList = await Category.find();
        res.status(200).send(categoryList);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// Get category by ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found.", success: false });
        }
        res.status(200).send(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete category
router.delete('/:id', async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found.", success: false });
        }
        res.status(200).json({ success: true, message: "Category Deleted!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create category
router.post('/create', async (req, res) => {
    try {
        if (!req.body.name || !req.body.images || !req.body.color) {
            return res.status(400).json({ message: "All fields are required.", success: false });
        }

        const limit = pLimit(2);
        const imageToUpload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            });
        });

        const uploadStatus = await Promise.all(imageToUpload);
        const imgUrl = uploadStatus.map((item) => item.secure_url);

        if (!uploadStatus || uploadStatus.length === 0) {
            return res.status(500).json({ message: "Image upload failed.", success: false });
        }

        let category = new Category({
            name: req.body.name,
            images: imgUrl,
            color: req.body.color
        });

        category = await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
});

// Update category
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.name || !req.body.images || !req.body.color) {
            return res.status(400).json({ message: "All fields are required.", success: false });
        }

        const limit = pLimit(2);
        const imageToUpload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            });
        });

        const uploadStatus = await Promise.all(imageToUpload);
        const imgUrl = uploadStatus.map((item) => item.secure_url);

        if (!uploadStatus || uploadStatus.length === 0) {
            return res.status(500).json({ message: "Image upload failed.", success: false });
        }

        const category = await Category.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            images: imgUrl,
            color: req.body.color
        }, { new: true });

        if (!category) {
            return res.status(500).json({ message: "Category cannot be updated.", success: false });
        }

        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
});

module.exports = router;
