const mongoose = require('mongoose');
const { Schema } = mongoose;

const imageGallerySchema = new Schema({
  image_url:String,  
  image_description:String,
  createdAt: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('BlogImages', imageGallerySchema);
