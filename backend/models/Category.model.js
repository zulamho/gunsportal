const mongoose = require("mongoose");

const categorySchema = {
  name: String,
  type: mongoose.Schema.Types.ObjectId,
  ref: "Weapon",
};

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
