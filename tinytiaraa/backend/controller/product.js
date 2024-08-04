const express = require("express")
const router = express.Router()

const Product = require("../model/product")
const { upload } = require("../multer")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const ErrorHandler = require("../utils/Errorhandler")
const Shop = require("../model/shop")
const { isSeller, isAuthenticated } = require("../middleware/auth");

const fs = require('fs')
const Order = require("../model/order")
const cloudinary = require("cloudinary");


//create Product


router.post("/create-product", catchAsyncErrors(async (req, res, next) => {
    try {
        const shopId = req.body.shopId;
        const shop = await Shop.findById(shopId);

        if (!shop) {
            return next(new ErrorHandler("Shop ID is invalid", 400));
        }

        let images = [];
        let withchainimages = [];
        let withchainoutimages = [];

        // metal color 
        let YellowGoldclr = [];
        let RoseGoldclr = [];
        let WhiteGoldclr = [];



        // images 
        if (typeof req.body.images === "string") {
            images.push(req.body.images);
        } else {
            images = req.body.images;
        }
        //withchain

        if (typeof req.body.withchainimages === "string") {
            withchainimages.push(req.body.withchainimages);
        } else {
            withchainimages = req.body.withchainimages;
        }
        //without chain
        if (typeof req.body.withchainoutimages === "string") {
            withchainoutimages.push(req.body.withchainoutimages);
        } else {
            withchainoutimages = req.body.withchainoutimages;
        }


        // Metal color
        //yellow clr
        if (typeof req.body.YellowGoldclr === "string") {
            YellowGoldclr.push(req.body.YellowGoldclr);
        } else {
            YellowGoldclr = req.body.YellowGoldclr;
        }

        //RoseGoldclr 
        if (typeof req.body.RoseGoldclr === "string") {
            RoseGoldclr.push(req.body.RoseGoldclr);
        } else {
            RoseGoldclr = req.body.RoseGoldclr;
        }

        //WhiteGoldclr 
        if (typeof req.body.WhiteGoldclr === "string") {
            WhiteGoldclr.push(req.body.WhiteGoldclr);
        } else {
            WhiteGoldclr = req.body.WhiteGoldclr;
        }







        const imagesLinks = [];
        const withchainimagesLinks = [];
        const withchainoutimagesLinks = [];

        //meatl color links
        const YellowGoldclrLinks = [];
        const RoseGoldclrLinks = [];
        const WhiteGoldclrLinks = [];




        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: "products",
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }

        //with chain
        for (let i = 0; i < withchainimages.length; i++) {
            const result = await cloudinary.v2.uploader.upload(withchainimages[i], {
                folder: "products",
            });

            withchainimagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }
        //wihtout chian
        for (let i = 0; i < withchainoutimages.length; i++) {
            const result = await cloudinary.v2.uploader.upload(withchainoutimages[i], {
                folder: "products",
            });

            withchainoutimagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }


        // yellow gold clr

        for (let i = 0; i < YellowGoldclr.length; i++) {
            const result = await cloudinary.v2.uploader.upload(YellowGoldclr[i], {
                folder: "products",
            });

            YellowGoldclrLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }

        // RoseGoldclr clr

        for (let i = 0; i < RoseGoldclr.length; i++) {
            const result = await cloudinary.v2.uploader.upload(RoseGoldclr[i], {
                folder: "products",
            });

            RoseGoldclrLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }

        // WhiteGoldclr clr

        for (let i = 0; i < WhiteGoldclr.length; i++) {
            const result = await cloudinary.v2.uploader.upload(WhiteGoldclr[i], {
                folder: "products",
            });

            WhiteGoldclrLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }










        // Handle enamelColorImages


        const enamelColors = [];
        if (req.body.enamelColorsList && Array.isArray(req.body.enamelColorsList)) {
            console.log('Processing enamelColorsList:', req.body.enamelColorsList);
            for (let i = 0; i < req.body.enamelColorsList.length; i++) {
                const enamelColor = req.body.enamelColorsList[i];
                const enamelColorName = enamelColor.enamelColorName;

                const imagesByMetalColor = {
                    YellowGoldclr: [],
                    RoseGoldclr: [],
                    WhiteGoldclr: []
                };

                if (enamelColor.YellowGoldclr && Array.isArray(enamelColor.YellowGoldclr)) {
                    for (let j = 0; j < enamelColor.YellowGoldclr.length; j++) {
                        console.log('Uploading YellowGoldclr image:', enamelColor.YellowGoldclr[j]);
                        const result = await cloudinary.v2.uploader.upload(enamelColor.YellowGoldclr[j], {
                            folder: `products/enamelColorsList/${enamelColorName}/YellowGoldclr`,
                        });
                        imagesByMetalColor.YellowGoldclr.push({
                            public_id: result.public_id,
                            url: result.secure_url,
                        });
                    }
                }

                if (enamelColor.RoseGoldclr && Array.isArray(enamelColor.RoseGoldclr)) {
                    for (let j = 0; j < enamelColor.RoseGoldclr.length; j++) {
                        console.log('Uploading RoseGoldclr image:', enamelColor.RoseGoldclr[j]);
                        const result = await cloudinary.v2.uploader.upload(enamelColor.RoseGoldclr[j], {
                            folder: `products/enamelColors/${enamelColorName}/RoseGoldclr`,
                        });
                        imagesByMetalColor.RoseGoldclr.push({
                            public_id: result.public_id,
                            url: result.secure_url,
                        });
                    }
                }

                if (enamelColor.WhiteGoldclr && Array.isArray(enamelColor.WhiteGoldclr)) {
                    for (let j = 0; j < enamelColor.WhiteGoldclr.length; j++) {
                        console.log('Uploading WhiteGoldclr image:', enamelColor.WhiteGoldclr[j]);
                        const result = await cloudinary.v2.uploader.upload(enamelColor.WhiteGoldclr[j], {
                            folder: `products/enamelColors/${enamelColorName}/WhiteGoldclr`,
                        });
                        imagesByMetalColor.WhiteGoldclr.push({
                            public_id: result.public_id,
                            url: result.secure_url,
                        });
                    }
                }

                enamelColors.push({
                    enamelColorName,
                    imagesByMetalColor,
                });

                console.log(enamelColors,"see the enamels color")
            }
        }


        // const enamelColors = [];

        // // Iterate through req.files.enamelColors
        // if (req.body.enamelColors && Array.isArray(req.body.enamelColors)) {
        //     for (let i = 0; i < req.body.enamelColors.length; i++) {
        //         const enamelColorName = req.body.enamelColors[i].enamelColorName;
        //         const enamelColorImagesUrls = files[`enamelColors[${i}].enamelColorImages`]
        //             ? files[`enamelColors[${i}].enamelColorImages`].map(file => file.filename)
        //             : [];

        //         enamelColors.push({
        //             enamelColorName,
        //             enamelColorImages: enamelColorImagesUrls,
        //         });
        //     }
        // }


        // files.forEach((file, index) => {
        //     enamelColors.push({
        //         enamelColorImages: [file.filename], // Assuming only one image per color in this example
        //         // Optionally include enamelColorName if you have it on the frontend
        //     });
        // });




        const productData = req.body;
        productData.images = imagesLinks;
        productData.withchainimages = withchainimagesLinks;
        productData.withchainoutimages = withchainoutimagesLinks;
        productData.shop = shop;
        productData.MetalColor = {
            YellowGoldclr: YellowGoldclrLinks,
            RoseGoldclr: RoseGoldclrLinks,
            WhiteGoldclr: WhiteGoldclrLinks,
        }
        productData.enamelColors =  enamelColors


        const product = await Product.create(productData);

        res.status(201).json({
            success: true,
            product
        });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", 400));
    }
}));


// router.post("/create-product", upload.fields([
//     { name: 'images' },
//     { name: 'withchainimages' },
//     { name: 'withchainoutimages' },
//     { name: 'YellowGoldclr' },
//     { name: 'RoseGoldclr' },
//     { name: 'WhiteGoldclr' },
//     { name: 'enamelColors[0].enamelColorImages' },
//     { name: 'enamelColors[0].enamelColorName' },
//     { name: 'enamelColors[1].enamelColorImages' },
//     { name: 'enamelColors[1].enamelColorName' },
//     { name: 'enamelColors[2].enamelColorImages' },
//     { name: 'enamelColors[2].enamelColorName' },
//     {name:'enamelColorImages'}




// ]), catchAsyncErrors(async (req, res, next) => {
//     try {
//         const shopId = req.body.shopId;
//         const shop = await Shop.findById(shopId);

//         if (!shop) {
//             return next(new ErrorHandler("Shop ID is invalid", 400));
//         }

//         const files = req.files;
//         const imageUrls = files.images.map((file) => file.filename);

//         const withChainFiles = files.withchainimages ? files.withchainimages.map((file) => file.filename) : [];
//         const withChainoutFiles = files.withchainoutimages ? files.withchainoutimages.map((file) => file.filename) : [];


//         const YellowGoldclrFiles = files.YellowGoldclr ? files.YellowGoldclr.map((file) => file.filename) : [];
//         const RoseGoldclrFiles = files.RoseGoldclr ? files.RoseGoldclr.map((file) => file.filename) : [];
//         const WhiteGoldclrFiles = files.WhiteGoldclr ? files.WhiteGoldclr.map((file) => file.filename) : [];

//         // Handle enamelColorImages


//         const enamelColors = [];

//         // Iterate through req.files.enamelColors
//         if (req.body.enamelColors && Array.isArray(req.body.enamelColors)) {
//             for (let i = 0; i < req.body.enamelColors.length; i++) {
//                 const enamelColorName = req.body.enamelColors[i].enamelColorName;
//                 const enamelColorImagesUrls = files[`enamelColors[${i}].enamelColorImages`]
//                     ? files[`enamelColors[${i}].enamelColorImages`].map(file => file.filename)
//                     : [];

//                 enamelColors.push({
//                     enamelColorName,
//                     enamelColorImages: enamelColorImagesUrls,
//                 });
//             }
//         }


//         // files.forEach((file, index) => {
//         //     enamelColors.push({
//         //         enamelColorImages: [file.filename], // Assuming only one image per color in this example
//         //         // Optionally include enamelColorName if you have it on the frontend
//         //     });
//         // });




//         const productData = req.body;
//         productData.images = imageUrls;
//         productData.withchainimages = withChainFiles;
//         productData.withchainoutimages = withChainoutFiles;
//         productData.shop = shop;
//         productData.MetalColor = {
//             YellowGoldclr: YellowGoldclrFiles,
//             RoseGoldclr: RoseGoldclrFiles,
//             WhiteGoldclr: WhiteGoldclrFiles,
//         }
//         productData.enamelColors = {enamelColors}


//         const product = await Product.create(productData);

//         res.status(201).json({
//             success: true,
//             product
//         });
//     } catch (error) {
//         return next(new ErrorHandler(error.message || "Internal Server Error", 400));
//     }
// }));


//get all Products of a shop

router.get("/get-all-products-shop/:id", catchAsyncErrors(async (req, res, next) => {
    try {
        const products = await Product.find({ shopId: req.params.id })

        res.status(201).json({
            success: true,
            products
        })

    } catch (error) {
        return next(new ErrorHandler(error, 400))

    }
}))


//delete product of a shop


router.delete("/delete-shop-product/:id", isSeller, catchAsyncErrors(async (req, res, next) => {
    try {
        const productId = req.params.id

        const productData = await Product.findById(productId)
        productData.images.forEach((imageUrl) => {
            const filename = imageUrl
            const filePath = `uploads/${filename}`

            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err)
                }
            })
        })

        const product = await Product.findByIdAndDelete(productId)


        if (!product) {
            return next(new ErrorHandler('product Not Found with this Id !', 500))
        }

        res.status(201).json({
            success: true,
            message: "Product Deleted Successfully"
        })



    } catch (error) {
        return next(new ErrorHandler(error, 400))

    }
}))

// get all products
router.get(
    "/get-all-products",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const products = await Product.find().sort({ createdAt: -1 });

            res.status(201).json({
                success: true,
                products,
            });
        } catch (error) {
            return next(new ErrorHandler(error, 400));
        }
    })
);


//review of a product

router.put("/create-new-review", isAuthenticated, catchAsyncErrors(async (req, res, next) => {

    try {
        const { user, rating, comment, productId, orderId } = req.body;



        const review = {
            user,
            rating,
            comment,
            productId,
        };
        // const files = req.files;
        // const reviewimages = files.reviewimages ? files.reviewimages.map((file) => file.filename) : [];
        // review.reviewimages = reviewimages

        const product = await Product.findById(productId)
        const isReviewed = product.reviews.find((rev) => rev.user._id === req.user._id)

        if (isReviewed) {
            product.reviews.forEach((rev) => {
                if (rev.user._id === req.user._id) {
                    (rev.rating = rating), (rev.comment = comment), (rev.user = user);
                }
            });
        } else {
            product.reviews.push(review);
        }

        let avg = 0;

        product.reviews.forEach((rev) => {
            avg += rev.rating;
        });

        product.ratings = avg / product.reviews.length;
        await product.save({ validateBeforeSave: false });

        await Order.findByIdAndUpdate(
            orderId,
            { $set: { "cart.$[elem].isReviewed": true } },
            { arrayFilters: [{ "elem._id": productId }], new: true }
        );


        res.status(200).json({
            success: true,
            message: "Reviwed succesfully Posted!",
        });



    } catch (error) {
        return next(new ErrorHandler(error, 400));

    }

}))










module.exports = router