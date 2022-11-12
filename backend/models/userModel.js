const mongoose = require("mongoose");

const UserModel = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    pic: { type: String, require: true, default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserModel);

module.exports = User;
