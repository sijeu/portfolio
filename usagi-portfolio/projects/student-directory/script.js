// $(document).ready(function(){
//     $("p").css("color", "green")
// })


$(".colorbtn").click(function(){
    $(this).css("background", "pink")
})

$("p:first").css("color", "red")

$("ul li:first-child").css("color", "orange")

$("[href]").css("color","brown")

$("tr:even").css("background", "lightblue")
$("tr:odd").css("background", "aqua")

$("#button").click(function(){
    $("#title").text("Hello BSIT!")
})

$("#button").dblclick(function(){
    $("#title").text("You double clicked the button!")
})

$("#button1").click(function(){
    $("#info").hide("slow")
})

$("#button2").click(function(){
    $("#info").show("slow")
})
// button
$("#button").mouseenter(function(){
    $("#message").text("Your mouse reached change title button!")
})

$("#button").mouseleave(function(){
    $("#message").text("Your mouse leave the button!")
})
// button1
$("#button1").mouseenter(function(){
    $("#message").text("Your mouse reached the hide button!")
})

$("#button1").mouseleave(function(){
    $("#message").text("Your mouse leave the button!")
})
// button2
$("#button2").mouseenter(function(){
    $("#message").text("Your mouse reached the show button!")
})

$("#button2").mouseleave(function(){
    $("#message").text("Your mouse leave the button!")
})

$("#name").focus(function(){
    $("#message").text("Typing...")
    $(this).css("background", "lightgreen")
})

$("#name").blur(function(){
    $("#message").text("Waiting...")
    $(this).css("background", "blanchedalmond")
})

$("#course").change(function(){
    $("#message").text($(this).val())
})

$("#odd").click(function(){
    $("tr:even").css("background", "aqua")
    $("tr:odd").css("background", "ligthblue")
})

$("#even").click(function(){
    $("#tr").odd("background", "aqua")
    $("#tr").even("background", "ligthblue")
})