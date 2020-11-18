//javascript change box 1

var redBox = document.querySelector(".redBox");

var changBtn1 = document.querySelector(".changeBtn1");

var colorCheckRed = true;

changBtn1.addEventListener("click",function(){
    console.log("click btn1 working");

    document.getElementsByClassName("redbox").style.background

    if(colorCheckRed){
        colorCheckRed = false;
        redBox.setAttribute("class","purpleBox");
    }else{
        colorCheckRed = true;
        redBox.setAttribute("class", "redBox")
    }

    
})

//change box 2 with jQuery
var checkBox2Color = true;

$(".changeBtn2").click(function(){
    console.log("box 2 changebtn working")

    // if(checkBox2Color){
    //     checkBox2Color = false;
    //     $(".blueBox").addClass("orangeBox");
    // }else{
    //     checkBox2Color = true;
    //     $(".blueBox").removeClass("orangeBox");
    // }

    $(".blueBox").toggleClass( "redBox", "blueBox");
    
})

//change all
$(".changeBtnAll").click(function(){
    $(".redBox").addClass("blueBox");
    $(".greenBox").addClass("blueBox");
    $(".blueBox").addclass("blueBox")
})

$(document).ready(function(){
    //The colored boxes
       $('.changeBtn1').on('click',function() {
           $('.redBox').css('background-color', 'yellow');
   });
        $('.changeBtn2').on('click',function() {
           $('.blueBox').css('background-color', 'pink');
        });
      $('.changeBtn3').on('click',function() {
          $('.greenBox').css('background-color', 'orange');
    });
        $('.changeBtnAll').on('click',function() {
            $('.greenBox, .blueBox, .redBox').css('background-color', 'black');
        });

    //Hide boxes
    $('.hideBtn1').on('click',function() {
        $('.redBox').hide();
    });
    $('.hideBtn2').on('click',function() {
        $('.blueBox').hide();
    });
    $('.hideBtn3').on('click',function() {
        $('.greenBox').hide();
    });
    $('.hideBtnAll').on('click',function() {
        $('.redBox, .blueBox, .greenBox').hide();
    });
    // Reset Colors
    $('.resetColors').on('click',function() {
        $('.redBox').css('background-color', 'red');
        $('.blueBox').css('background-color', 'blue');
        $('.greenBox').css('background-color', 'green');
    });
    })
    //Show All
    $('.showAll').on('click',function() {
        $('.redBox, .blueBox, .greenBox').show();
    });