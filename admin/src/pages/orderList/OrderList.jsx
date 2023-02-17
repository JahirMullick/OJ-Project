import "./orderList.css";
import { DataGrid } from "@mui/x-data-grid";
import { MdDeleteOutline } from 'react-icons/md';
// import { Link } from "react-router-dom";
import {
    useEffect
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    // deleteOrder,
    getOrders
} from "../../redux/apiCalls";

export default function OrderList() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);
    // const orders = useSelector((state) => state.product.products);
    useEffect(() => {
        getOrders(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {

        // deleteOrder(id, dispatch);
        console.log("Item Deleted!")
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 200 },
        { field: "userId", headerName: "User", width: 160 },
        // {
        //     field: "products",
        //     headerName: "ProductID",
        //     width: 350,
        //     renderCell: (params) => {
        //         return (
        //             <div className="productListItem">
        //                 {/* <img className="productListImg" src={params.row.img} alt="" /> */}
        //                 {params.row.products._id}
        //             </div>
        //         );
        //     },
        // },
        // {
        //     field: "product",
        //     headerName: "Data",
        //     width: 150,
        //     valueGetter: (params) => params.row.products.map((hobby) => hobby.name).join(", ")
        // },


        {
            field: "productId", headerName: "Product ID", width: 250,
            valueGetter: (params) => params.row.products.map((product) => product.productId).join(", ")
        },
        {
            field: "quantity", headerName: "Quantity", width: 100,
            valueGetter: (params) => params.row.products.map((product) => product.quantity).join(", ")
        },


        // { field: "inStock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },

        {
            field: "amount",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        {/* <Link to={"/product/" + params.row._id}> */}
                        <button className="productListEdit">Edit</button>
                        {/* </Link> */}
                        <MdDeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];



    // const rows = [
    //     {
    //       id: 1,
    //       userId: '63be89206d550bd5d1c3f44a',
    //       products: [
    //         { productId: '63bed98e9d61b3', quantity: 200 },
    //         { productId: '63c02727482493e', quantity: 460 },
    //       ],
    //     },
    //   ];

    return (
        <div className="productList">
            <DataGrid style={{ margin: "10px 0px 0px 50px", width: "1234px" }}
                rows={orders}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={10}
                checkboxSelection
            />
        </div>
    );
}