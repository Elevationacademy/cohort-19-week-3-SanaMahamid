const Renderer = function(){
    const createCommentsList = function(comments){
        let members =""
        for(let c of comments){
            members+=`<li class="comment" data-id=${c.id}> ${c.text} </li>`
        }
        let list = `<ul id="comments">${members}</ul>`
        return list
    }
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let post of posts){
            console.log(post)
            let comments = createCommentsList(post.comments)
            let p = `<div class="post" data-id=${post.id}>${post.text}</div>`
            $("#posts").append(p).append(comments)
        }
    }

    return {renderPosts}
}