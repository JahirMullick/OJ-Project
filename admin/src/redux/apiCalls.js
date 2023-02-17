// // import { loginFailure, loginStart, loginSuccess } from "./userRedux";
// import { startLogin, successfulLogin, failedLogin } from "./userRedux";
// import { publicRequest, userRequest } from "../requestMethods";
// import {
//     getProductFailure,
//     getProductStart,
//     getProductSuccess,
//     deleteProductFailure,
//     deleteProductStart,
//     deleteProductSuccess,
//     updateProductFailure,
//     updateProductStart,
//     updateProductSuccess,
//     addProductFailure,
//     addProductStart,
//     addProductSuccess,
// } from "./productRedux";

// export const login = async (dispatch, user) => {
//     dispatch(startLogin());
//     try {
//         const res = await publicRequest.post("/auth/login", user);
//         dispatch(successfulLogin(res.data));
//     } catch (err) {
//         dispatch(failedLogin());
//     }
// };

// export const getProducts = async (dispatch) => {
//     dispatch(getProductStart());
//     try {
//         const res = await publicRequest.get("/products");
//         dispatch(getProductSuccess(res.data));
//     } catch (err) {
//         dispatch(getProductFailure());
//     }
// };

// export const deleteProduct = async (id, dispatch) => {
//     dispatch(deleteProductStart());
//     try {
//         // const res = await userRequest.delete(`/products/${id}`);
//         dispatch(deleteProductSuccess(id));
//     } catch (err) {
//         dispatch(deleteProductFailure());
//     }
// };

// export const updateProduct = async (id, product, dispatch) => {
//     dispatch(updateProductStart());
//     try {
//         // update
//         dispatch(updateProductSuccess({ id, product }));
//     } catch (err) {
//         dispatch(updateProductFailure());
//     }
// };
// export const addProduct = async (product, dispatch) => {
//     dispatch(addProductStart());
//     try {
//         const res = await userRequest.post(`/products`, product);
//         dispatch(addProductSuccess(res.data));
//     } catch (err) {
//         dispatch(addProductFailure());
//     }
// };



import { startLogin, successfulLogin, failedLogin } from "./userRedux";
import {
    publicRequest,
    userRequest
} from "../requestMethods";
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure
} from "./productRedux";
import {
    getOrderStart,
    getOrderSuccess,
    getOrderFailure
    // deleteOrderStart,
    // deleteOrderSuccess,
    // deleteOrderFailure,
    // updateOrderStart,
    // updateOrderSuccess,
    // updateOrderFailure
} from "./orderRedux";

export const login = async (dispatch, user) => {
    dispatch(startLogin());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(successfulLogin(res.data));
    } catch (err) {
        dispatch(failedLogin());
    }
};

// Product Section 
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // update
        dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
};

// Orders Section
export const getOrders = async (dispatch) => {
    dispatch(getOrderStart());
    try {
        const res = await userRequest.get("/orders");
        // const res = await publicRequest.get("/orders");
        dispatch(getOrderSuccess(res.data));
    } catch (err) {
        dispatch(getOrderFailure());
    }
};

// export const deleteOrder = async (id, dispatch) => {
//     dispatch(deleteOrderStart());
//     try {
//         // const res = await userRequest.delete(`/products/${id}`);
//         dispatch(deleteOrderSuccess(id));
//     } catch (err) {
//         dispatch(deleteOrderFailure());
//     }
// };

// export const updateOrder = async (id, order, dispatch) => {
//     dispatch(updateOrderStart());
//     try {
//         // update
//         dispatch(updateOrderSuccess({ id, order }));
//     } catch (err) {
//         dispatch(updateOrderFailure());
//     }
// };

