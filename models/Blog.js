const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  blog_title: String,
  blog_tags: [String],
  blog_intro: String,
  blog_desc: String,
  blog_difficulty:String,
  blog_appx_cost:String,
  blog_month_visited:String,
  blog_id:String,
  blog_author_name:String,
  blog_title_image:String,
  blog_intro_images:[{}],
  blog_desc_images:[{}],
  blog_conc_images:[{}],
  createdAt: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Blog', blogSchema);


// blog_intro_images:[{ type: Schema.Types.ObjectId, ref: 'BlogImages' }],
// blog_desc_images:[{ type: Schema.Types.ObjectId, ref: 'BlogImages' }],
// blog_conc_images:[{ type: Schema.Types.ObjectId, ref: 'BlogImages' }],