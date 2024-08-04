const express = require("express");
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require('cors')
const Razorpay = require("razorpay");
const path = require("path")



const app = express()


app.use(express.json());
app.use(cookieParser());


app.use(cors({
    origin: 'https://tiny-tiaraa.vercel.app',
    credentials: true
}));


app.use("/test", (req, res) => {
    res.send("hello world")

})

app.use("/", express.static(path.join(__dirname, "./uploads")))
<<<<<<< HEAD
app.use(bodyParser.urlencoded({ extended: true, parameterLimit:100000,limit: "100mb" }));
=======
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
>>>>>>> fb3391a496bdece3d606802d47da2be49071b5f4

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env"
    })
}

//routes

const user = require("./controller/user")
const shop = require("./controller/shop")
const product = require("./controller/product")
const event = require("./controller/event")
const coupon = require("./controller/coupounCode")
// const payment = require("./controller/payment")
const order = require("./controller/order")
const conversation = require("./controller/conversation")
const message = require("./controller/message")
const referralRoutes = require('./controller/referralRoutes');











app.use("/api/v2/user", user)
app.use("/api/v2/shop", shop)
app.use("/api/v2/product", product)
app.use("/api/v2/event", event)
app.use("/api/v2/coupon", coupon)
// app.use("/api/v2/payment" ,payment)
app.use("/api/v2/order", order)
app.use("/api/v2/conversation", conversation)
app.use("/api/v2/message", message)
app.use('/api/v2/referral', referralRoutes);







app.post("/order", async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = req.body;
        const order = await razorpay.orders.create(options);

        if (!order) {
            return res.status(500).send("Error");
        }

        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});

app.post("/order/validate", async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    //order_id + "|" + razorpay_payment_id
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");
    if (digest !== razorpay_signature) {
        return res.status(400).json({ msg: "Transaction is not legit!" });
    }

    res.json({
        msg: "success",
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
    });
});


//error handling

app.use(ErrorHandler)
module.exports = app;
