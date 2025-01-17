// craete product

import axios from "axios"
import { server } from "../../server"



export const createProduct = (
    name,
    skuid,
    description,
    category,
    subcategory,
    tags,
    originalPrice,
    discountPrice,
    stock,
    shopId,
    images,
    withchainimages,
    withchainoutimages,
    YellowGoldclr,
    RoseGoldclr,
    WhiteGoldclr,
    goldWeight,
    diamondWeight,
    height,
    width,
    enamelColors,
    enamelColorImages,

) => async (dispatch) => {
    try {
        dispatch({
            type: "productCreateRequest"
        })

        const config = { headers: { "Content-Type": "multipart/form-data" } }


        const { data } = await axios.post(
            `${server}/product/create-product`,
            name,
            skuid,
            description,
            category,
            subcategory,
            tags,
            originalPrice,
            discountPrice,
            stock,
            shopId,
            images,
            withchainimages,
            withchainoutimages,
            YellowGoldclr,
            RoseGoldclr,
            WhiteGoldclr,
            goldWeight,
            diamondWeight,
            height,
            width,
           enamelColors,
            enamelColorImages,
            config
        )


        dispatch({
            type: "productCreateSuccess",
            payload: data.product
        })

    } catch (error) {

        dispatch({
            type: "productCreateFail",
            payload: error.response.data.message
        })

    }
}


// get All Products of a shop

export const getAllProductShop = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllProductsShopRequest"
        })



        const { data } = await axios.get(
            `${server}/product/get-all-products-shop/${id}`,
        )

        dispatch({
            type: "getAllProductsShopSuccess",
            payload: data.products
        })

    } catch (error) {

        dispatch({
            type: "getAllProductsShopFailed",
            payload: error.response.data.message
        })

    }
}


//delete  products 

export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteProductRequest"
        })



        const { data } = await axios.delete(
            `${server}/product/delete-shop-product/${id}`, { withCredentials: true }
        )

        dispatch({
            type: "deleteProductSuccess",
            payload: data.products
        })

    } catch (error) {

        dispatch({
            type: "deleteProductFailed",
            payload: error.response.data.message
        })

    }
}

// get all products
export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: "getAllProductsRequest",
        });

        const { data } = await axios.get(`${server}/product/get-all-products`);
        dispatch({
            type: "getAllProductsSuccess",
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: "getAllProductsFailed",
            payload: error.response.data.message,
        });
    }
};
