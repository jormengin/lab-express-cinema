const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema ({
  title: {
    type: String,
    required: [true, "Movie name is mandatory."]
  },
  director: String,
  stars: [ String ],
  image: {
    type: String,
    default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.montereyupperhutt.co.nz%2F&psig=AOvVaw3kqdKI1MHy1H1A0gTpWmb9&ust=1671736229398000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPC2nvG0i_wCFQAAAAAdAAAAABAE"
  },
  description: String,
  showtimes: [ String ],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;