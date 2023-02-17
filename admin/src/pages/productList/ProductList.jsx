import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from "react-router-dom";
import {
    useEffect
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteProduct,
    getProducts
} from "../../redux/apiCalls";

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {

        deleteProduct(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 250 },
        {
            field: "product",
            headerName: "Product",
            width: 350,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "inStock", headerName: "Stock", width: 200 },
        // {
        //     field: "status",
        //     headerName: "Status",
        //     width: 120,
        // },
        {
            field: "price",
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
                        <Link to={"/product/" + params.row._id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <MdDeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <DataGrid style={{ margin: "10px 0px 0px 50px", width: "1234px" }}
                rows={products}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={10}
                checkboxSelection
            />
        </div>
    );
}