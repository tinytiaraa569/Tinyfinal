const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Product Name']
    },
    skuid: {
        type: String,
        required: [true, 'Please Enter Product sku id']
    },
    description: {
        type: String,
        required: [true, 'Please Enter Product Description']
    },
    category: {
        type: String,
        required: [true, 'Please Enter Product category']
    },
    subcategory: {
        type: String,
        required: [true, 'Please Enter Product Subcategory']
    },
    tags: {
        type: String,
        required: [true, 'Please Enter Product tags']
    },
    originalPrice: {
        type: Number,

    },
    discountPrice: {
        type: Number,
        required: [true, 'Please Enter Product Price']
    },
    stock: {
        type: Number,
        required: [true, 'Please Enter Product Stocks']
    },
    images: [
        // {
        //     type: String,
        // },
        {
            public_id: {
                type: String,
                // required: true,
            },
            url: {
                type: String,
                // required: true,
            },
        },
    ],
    withchainimages: [
        {
            public_id: {
                type: String

            },
            url: {
                type: String

            },
        },
    ],


    withchainoutimages: [
        // {
        //     type: String,
        // },
        {
            public_id: {
                type: String

            },
            url: {
                type: String

            },
        },
    ],


    MetalColor: {
        YellowGoldclr: [
            {
                public_id: {
                    type: String

                },
                url: {
                    type: String

                },
            },
        ],
        RoseGoldclr: [
            {
                public_id: {
                    type: String

                },
                url: {
                    type: String

                },
            },
        ],
        WhiteGoldclr: [
            {
                public_id: {
                    type: String

                },
                url: {
                    type: String

                },
            },
        ],

    },




    // enamel color 

    enamelColors: {
        Deep_Blue: {
            YellowGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            RoseGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            WhiteGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
        },
        Pink: {
            YellowGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            RoseGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            WhiteGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
        },
        Turquoise: {
            YellowGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            RoseGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            WhiteGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
        },
        Red: {
            YellowGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            RoseGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            WhiteGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
        },
        Black: {
            YellowGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            RoseGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            WhiteGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
        },
        Deep_Green: {
            YellowGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            RoseGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            WhiteGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
        },
        Lotus_Green: {
            YellowGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            RoseGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
            WhiteGoldclr: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                },
            ],
        }
    },


    // enamelColors: {

    //     enamelColorImages: [
    //         {
    //             type: String
    //         }
    //     ]
    // },

    // enamelColors: [
    //     {
    //         enamelColorName: {
    //             type: String,
    //         },
    //         enamelColorImages: [
    //             {
    //                 type: String,
    //             },
    //         ],
    //     },
    // ],


    // enamelColors: [
    //     {
    //         enamelColorName: {
    //             type: String,
                
    //         },
    //         imagesByMetalColor: {
    //             YellowGoldclr: [
    //                 {
    //                     public_id: {
    //                         type: String,
    //                     },
    //                     url: {
    //                         type: String,
    //                     },
    //                 },
    //             ],
    //             RoseGoldclr: [
    //                 {
    //                     public_id: {
    //                         type: String,
    //                     },
    //                     url: {
    //                         type: String,
    //                     },
    //                 },
    //             ],
    //             WhiteGoldclr: [
    //                 {
    //                     public_id: {
    //                         type: String,
    //                     },
    //                     url: {
    //                         type: String,
    //                     },
    //                 },
    //             ],
    //         },
    //     },
    // ],

    shopId: {
        type: String,
        required: true
    },
    reviews: [
        {
            user: {
                type: Object
            },
            rating: {
                type: Number
            },
            comment: {
                type: String
            },
            productId: {
                type: String
            },
            CreatedAt: {
                type: Date,
                default: Date.now()
            }

        },
    ],
    reviewImages: [
        {
            type: String,
        },
    ],

    goldWeight: {
        weight: {
            type: String,
        },
        purity: {
            type: String,
        },
    },
    diamondWeight: {
        weight: {
            type: String,
        },
        quality: {
            type: String,
        },
    },
    dimension: {
        height: {
            type: String,
        },
        width: {
            type: String,
        },
    },
    ratings: {
        type: Number
    },
    sold_out: {
        type: Number,
        default: 0,
    },
    CreatedAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Product", productSchema)
