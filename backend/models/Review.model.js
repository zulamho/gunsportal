const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  author: String,
  text: String,
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Weapon",
  },
});

const Review = mongoose.model("Review", reviewSchema);
