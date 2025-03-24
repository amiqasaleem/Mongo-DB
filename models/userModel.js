import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50
    },
    username: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required:true
    },
    email: {
        type: String,
        required:true,
        maxlength: 30
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const UserModel = model("User", UserSchema)

  export default UserModel
