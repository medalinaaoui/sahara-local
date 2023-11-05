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
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
    forRent: {
      type: Boolean,
      default: false,
    },
    forSale: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      default: null,
    },
    rentalOptions: {
      forDays: {
        available: {
          type: Boolean,
          default: false,
        },
        price: {
          type: Number,
          default: null,
        },
      },
      forWeeks: {
        available: {
          type: Boolean,
          default: false,
        },
        price: {
          type: Number,
          default: null,
        },
      },
      forMonths: {
        available: {
          type: Boolean,
          default: false,
        },
        price: {
          type: Number,
          default: null,
        },
      },
    },
    mileage: {
      type: Number,
      default: null,
    },
    engineType: {
      type: String,
      default: null,
    },
    transmission: {
      type: String,
      default: null,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    features: [String],
    description: {
      type: String,
      default: null,
    },
    // maintenanceHistory: [
    //   {
    //     date: Date,
    //     description: String,
    //   },
    // ],
  },
  { timestamps: true }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;
