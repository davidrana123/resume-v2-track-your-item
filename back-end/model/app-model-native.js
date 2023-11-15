import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const appSchema = mongoose.Schema({
    taskName: String,
    taskDesc: String,
    subTask: String,
    taskComment: String,
    createdDate: Date,
    // dueDate: Date,
    // updateDate: Date,
    priority: String,
  });

autoIncrement.initialize(mongoose.connection);
appSchema.plugin(autoIncrement.plugin, "appData");
const appModel = mongoose.model("appData", appSchema);

export default appModel;
