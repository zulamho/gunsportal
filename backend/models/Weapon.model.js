const mongoose = require("mongoose");

const weaponSchema = mongoose.Schema({
  name: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Weapon = mongoose.model("Weapon", weaponSchema);

module.exports = Weapon;
