const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: [true, "This name is already taken"],
      maxlength: [25, "Name cannot be more than 25 characters"]
    },
    slug: {
      type: String
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      maxlength: [200, "Description cannot be more than 100 characters"]
    },
    website: {
      type: String
    },
    phone: {
      type: String,
      maxlength: [15, "Phone number cannot be longer than 15 characters"]
    },
    email: {
      type: String,
      unique: [true, "This email is already taken."],
      required: [true, "Please enter your email."],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email Invalid."]
    },
    address: {
      type: String,
      required: [true, "Please enter your address."]
    },
    location: {
      type: {
        type: String,
        enum: ["Point"]
      },
      coordinates: {
        type: [Number],
        index: "2dsphere"
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String
    },
    careers: {
      type: [String],
      required: true,
      enum: [
        "Business",
        "Programming",
        "Law",
        "literature",
        "Languages",
        "Economy",
        "Medicine",
        "Other"
      ]
    },
    averageRating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [10, "Rating cannot be more than 10"]
    },
    averageCost: {
      type: Number
    },
    photo: {
      type: String,
      default: "no-photo.jpg"
    }
  },
  {
    timestamps: true
  }
);

const School = mongoose.model("School", schoolSchema);
module.exports = School;
