const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const subcategories = new Schema({
  _id: {
    type: String,
  },
  subcategory_name: {
    type: String,
  },
  category_id: [{ type: Schema.Types.ObjectId, ref: "Categorie" }],
  active: {
    type: Boolean,
  },
});
const Subcategory = mongoose.model("Subcategory", subcategories);
module.exports = Subcategory;
