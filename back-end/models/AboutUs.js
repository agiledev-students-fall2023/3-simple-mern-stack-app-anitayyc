const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutSchema = new Schema(
  {
    about: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const AboutUs = mongoose.model('AboutUs', aboutSchema)

// export the model so other modules can import it
module.exports = {
  AboutUs,
}
