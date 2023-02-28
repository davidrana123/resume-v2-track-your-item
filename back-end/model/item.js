import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const ItemSchema = mongoose.Schema({
  cat: String,
  desc: String,
});

autoIncrement.initialize(mongoose.connection);
ItemSchema.plugin(autoIncrement.plugin, "item");
const postItem = mongoose.model("item", ItemSchema);

export default postItem;
