const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const {getImagesfromRequest} = require('../helpers');
const Blog = mongoose.model('Blog');
const clearCache = require('../middlewares/redisCache');
module.exports = app => {
  app.get('/api/blogs/:id', requireLogin, async (req, res) => {
    const blog = await Blog.findOne({
      _user: req.user.googleId,
      _id: req.params.id
    })
    .cache(req.user.googleId);
    res.send(blog);
  });

  app.get('/api/blogs', requireLogin, async (req, res) => {
    try {
      const blogs = await Blog.find({ _user: req.user.googleId });
      res.send(blogs);

    } catch (error) {
      console.log(err)
    }

  });

  app.post('/api/blog', requireLogin, clearCache, async (req, res) => {
    const { blog_title, blog_tags, blog_intro, blog_desc,blog_conclusion, blog_difficulty, blog_appx_cost, blog_month_visited, blog_id, blog_author_name, blog_images} = req.body;
    const {blog_title_image,blog_intro_images,blog_desc_images,blog_conc_images} = getImagesfromRequest(blog_images);
    const blog = new Blog({
      blog_title,
      blog_tags,
      blog_intro,
      blog_desc,
      blog_difficulty,
      blog_appx_cost,
      blog_month_visited,
      blog_id,
      blog_author_name,
      blog_title_image,
      blog_intro_images,
      blog_desc_images,
      blog_conc_images,
      blog_conclusion,
      _user: req.user
    });

    try {
      await blog.save();
      res.send(blog);
    } catch (err) {
      res.send(400, err);
    }
  });
};
