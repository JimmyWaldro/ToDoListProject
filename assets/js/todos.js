// // check off specific todos by clicking

// // Long winded way of doing it

// $("li").click(function() {
// 	//check if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		// turn it black
// 		$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 		});
// 		}
// 	//else		
// 	else {
// 		$(this).css({
// 		//turn it gray
// 		color: "gray",
// 		textDecoration: "line-through"
// 		});
// 	}

// });

//Quick way of doing it using CSS

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut("slow", function() {
        $(this).remove();
    });
    event.stopPropagation();
})

//add items to the todo list
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val()
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();

})
