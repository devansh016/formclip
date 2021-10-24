const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  accessKey: { type: String, unique: true, required: true },
  totalSubmission: { type: Number, default: 0},
  formResponses: [{
    reponse: { type: String},
    sitename: { type: String},
    createdDate: { type: Date, default: Date.now }
  }],
  createdDate: { type: Date, default: Date.now },
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

userSchema.methods = {
  getUserEmail: function () {
    return {
      email: this.email,
    };
  }
};

module.exports = mongoose.model("User", userSchema);