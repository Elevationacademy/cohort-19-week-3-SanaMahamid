posts = [{name:"Sana" ,text:"hello"},{name:"Ameen", text:"welcome"}]
const render = function(){
    for(let post of posts){
    $("#posts").append(`<div class="post"> ${post.name}: ${post.text}</div>`)
    }
}
render()
$("#submit").on("click",function(){
    posts.push({name:$("#name").val(),text:$("#text").val()})
    $("#posts").empty()
    render()
    $("#name").val("")
    $("#text").val("")
})
