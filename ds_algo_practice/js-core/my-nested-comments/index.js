const commentArr = new Array();
document.addEventListener('DOMContentLoaded',function(){
    const comment_section = document.getElementById('post')
    const name = document.getElementById('name')
    const add_post_button  = document.getElementsByClassName('add-post')[0]
    const comment_list = document.getElementsByClassName('comment_list')[0]
    if(localStorage.getItem("comments") !== null){
        renderComments();
    }

    function renderComment(comment){
        const str = `
            <div>name: ${comment.sentBy}</div>
            <h5>${comment.content}</h5>
        `
        comment_list.innerHTML+=str
    }

    add_post_button.addEventListener('click',function(e){
        let content = comment_section.value;
        let sentBy = name.value;
        let id = `comment_${commentArr.length}`;
        let type = "post";
        const comment = new Comment({content,sentBy,id,type})
        renderComment(comment);
    })
    
})


class Comment {
    constructor(id,content, sentBy, type, parentID, childrenIds){
        this.id = id;
        this.time = new Date();
        this.sentBy = sentBy;
        this.type = type;
        this.parentID = parentID;
        this.content = content;
        this.childrenIds = childrenIds;
    }
}