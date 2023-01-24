const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const jobSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
      
    },
    contract: {
      type: Number,
      required: true,
    },
    location: {
        type: String,
        required: true,
      }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Jobs = mongoose.model("job", jobSchema);

module.exports = Jobs;