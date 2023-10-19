import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment"

const authSchema = mongoose.Schema({
    username: String ,
    email: String,
    password: String,
})

autoIncrement.initialize(mongoose.connection);
authSchema.plugin(autoIncrement.plugin, "auth");
const user = mongoose.model("auth", authSchema);

export default user;