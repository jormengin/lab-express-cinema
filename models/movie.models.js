const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema ({  
        title: {
            type:String
        },
        director: {
            type:String
        },
        stars: [ String],
        image:{
            type: String,
            default: 'https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg'
          },
          description: {
            type: String,
            default: 'No description was provided yet'
          },
        showtimes: [ String ]     
})


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;