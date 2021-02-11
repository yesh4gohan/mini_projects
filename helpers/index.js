function getImagesfromRequest(blog_images){
    const images_object = {
        blog_title_image:"",
        blog_intro_images:[],
        blog_desc_images:[],
        blog_conc_images:[]
    }
    if(blog_images["A"]){
        images_object.blog_title_image = blog_images["A"][0].img_url;
    }
    if(blog_images["B"]){
        images_object.blog_intro_images = blog_images["B"]
    }
    if(blog_images["C"]){
        images_object.blog_desc_images = blog_images["C"]
    }
    if(blog_images["D"]){
        images_object.blog_conc_images = blog_images["D"]
    }
    return images_object;
}

module.exports = {
    getImagesfromRequest,
}