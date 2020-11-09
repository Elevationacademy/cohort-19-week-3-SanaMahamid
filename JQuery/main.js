
/*$("h1").css("color", "blue")
$(".red-div").css("color", "red")
$("li:first-child").css("color", "green")
$("li:last-child").css("color", "pink")
$("#brown-div").css("color", "brown")

$("#b1").addClass("box")
$("#b2").addClass("box")

$("#my-input").val("Terabyte")

const data = $("div").data()
console.log("Item with barcode " + data.barcode + 
" will expire on " + data.expirationdate) //notice how we use expirationdate, even though in the HTML it's expirationDate

$("#d").hover(function () {
    $("#d").css("background-color","blue")
})

$("button").on("click",function(){
    alert($("#my-input").val())
})

$(".box").hover(function() {
    $(this).css("background-color","blue")
})

const aDynamicDiv = "<div class='mine'>Oh yes</div>"
const elem = $(aDynamicDiv)
console.log(elem)

$(".feedme").on("click", function(){
    let divCopy = `<div class=feedme> ${$(this).text()}</div>` //use template literals and $(this)
    
    $("body").append(divCopy)
  })

  /*$(".feedme").on("click", function(){
    let divCopy = `<div class=feedme> ${$(this).text()} </div>`
    
    $("body").append(divCopy)
  })

  const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]
for(let i=0;i<names.length;i++){
    $("body").append(`<div class="human"> ${names[i].first}-${names[i].last}</div>`)
} 

$(".bad").hover(function(){$(this).remove()})

$("button").on("click",function(){
    $("#blogs").append(`<div class="blog"> bloggg </div>`)
})


$("#blogs").on("click", ".blog", function(){
    $(this).text("blargh") 
  })*/


  //ex1
$("button").on("click",function(){
    $("ul").append(`<li> ${$("input").val()}</li>`)
    $("input").val("")
})

//ex2
$("ul").on("click","li",function(){
    $(this).remove()
})

//ex4
$("#items").on("click",".item",function(){
    const data = $(this).data()
    if(data.instock == true){
        $("#cart").append(`<div class="cart-item"> ${$(this).text()} </div>`)
    }
})
 
  