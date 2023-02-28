import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
  cat: String,
  desc: String,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "record");
const postUser = mongoose.model("record", userSchema);

export default postUser;
