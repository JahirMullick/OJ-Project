const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => {
    res.send('Hello Buddy');
})
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});