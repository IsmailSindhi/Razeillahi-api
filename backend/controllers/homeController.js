const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Home = require("../models/HomeModel")

exports.getHomeData = catchAsyncErrors((req,res) => {

    const title = "title"
    const message = "message"

    res.stauts(200).json({
        status: true,
        title,
        message,
    })
});

exports.setHomeData = catchAsyncErrors((req,res) => {

    const title = "title"
    const message = "message"
    const user = "user"
    const createdAt = ""

    res.stauts(201).json({
        status: true,
        title,
        message,
    });
});