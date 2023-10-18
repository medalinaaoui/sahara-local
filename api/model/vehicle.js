import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    pictures: {
      type: [String],
      validate: [
        {
          validator: function (pics) {
            return pics && pics.length > 0;
          },
          message: "At least one picture is required for each car.",
        },
      ],
    },
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    mileage: {
      type: Number, // Added mile,age property
      default: null,
    },
    engineType: {
      type: String, // Added engi,ne type (e.g., 'Gas', 'Electric')
      default: null,
    },
    transmission: {
      type: String, // Added tran,smission type (e.g., 'Automatic', 'Manual')
      default: null,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to a User model (if you have one)
    },
    features: [String], // Added an array of features (e.g., 'Sunroof', 'Leather Seats')
    maintenanceHistory: [
      {
        date: Date,
        description: String,
      },
    ],
    // Add any other properties that describe a Vehicle here
  },
  { timestamps: true }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;
