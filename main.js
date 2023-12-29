// homepage-animation
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);
//Mouse-over element in homepage
$("#dish-1").hide();
$("#dish-2").hide();
$("#dish-3").hide();
$("#dish-4").hide();
$("#dish-5").hide();
$("#dish-6").hide();
$("#dish-7").hide();
$("#dish-8").hide();

$("#dishlist-1").hover(function(){
    $("#dish-1").show();
    $("#dish-2").hide();
    $("#dish-3").hide();
    $("#dish-4").hide();
    $("#dish-5").hide();
    $("#dish-6").hide();
    $("#dish-7").hide();
    $("#dish-8").hide();
});

$("#dishlist-2").hover(function(){
    $("#dish-1").hide();
    $("#dish-2").show();
    $("#dish-3").hide();
    $("#dish-4").hide();
    $("#dish-5").hide();
    $("#dish-6").hide();
    $("#dish-7").hide();
    $("#dish-8").hide();
});

$("#dishlist-3").hover(function(){
    $("#dish-1").hide();
    $("#dish-2").hide();
    $("#dish-3").show();
    $("#dish-4").hide();
    $("#dish-5").hide();
    $("#dish-6").hide();
    $("#dish-7").hide();
    $("#dish-8").hide();
});

$("#dishlist-4").hover(function(){
    $("#dish-1").hide();
    $("#dish-2").hide();
    $("#dish-3").hide();
    $("#dish-4").show();
    $("#dish-5").hide();
    $("#dish-6").hide();
    $("#dish-7").hide();
    $("#dish-8").hide();
});

$("#dish-list5").hover(function(){
    $("#dish-1").hide();
    $("#dish-2").hide();
    $("#dish-3").hide();
    $("#dish-4").hide();
    $("#dish-5").show();
    $("#dish-6").hide();
    $("#dish-7").hide();
    $("#dish-8").hide();
});

$("#dish-list6").hover(function(){
    $("#dish-1").hide();
    $("#dish-2").hide();
    $("#dish-3").hide();
    $("#dish-4").hide();
    $("#dish-5").hide();
    $("#dish-6").show();
    $("#dish-7").hide();
    $("#dish-8").hide();
});

$("#dish-list7").hover(function(){
    $("#dish-1").hide();
    $("#dish-2").hide();
    $("#dish-3").hide();
    $("#dish-4").hide();
    $("#dish-5").hide();
    $("#dish-6").hide();
    $("#dish-7").show();
    $("#dish-8").hide();
});

$("#dish-list8").hover(function(){
    $("#dish-1").hide();
    $("#dish-2").hide();
    $("#dish-3").hide();
    $("#dish-4").hide();
    $("#dish-5").hide();
    $("#dish-6").hide();
    $("#dish-7").hide();
    $("#dish-8").show();
});



//Re-direct page in shop container

$("#buycard1").hide();
$("#buycard2").hide();
$("#buycard3").hide();
$("#buycard4").hide();
$("#buycard5").hide();
$("#buycard6").hide();
$("#buycard7").hide();
$("#buycard8").hide();
$("#buycard9").hide();
$("#buycard10").hide();
$("#buycard11").hide();
$("#buycard12").hide();
$("#buycard13").hide();
$("#buycard14").hide();
$("#buycard15").hide();
$("#buycard16").hide();
$(".buy-now-overlay").hide();

$("#but1").click(function(){
    $("#buycard1").show();
    $(".buy-now-overlay").show();
});

$("#but2").click(function(){
    $("#buycard2").show();
    $(".buy-now-overlay").show();
});
$("#but3").click(function(){
    $("#buycard3").show();
    $(".buy-now-overlay").show();
});
$("#but4").click(function(){
    $("#buycard4").show();
    $(".buy-now-overlay").show();
});
$("#but5").click(function(){
    $("#buycard5").show();
    $(".buy-now-overlay").show();
});
$("#but6").click(function(){
    $("#buycard6").show();
    $(".buy-now-overlay").show();
});
$("#but7").click(function(){
    $("#buycard7").show();
    $(".buy-now-overlay").show();
});
$("#but1").click(function(){
    $("#buycard1").show();
    $(".buy-now-overlay").show();
});
$("#but8").click(function(){
    $("#buycard8").show();
    $(".buy-now-overlay").show();
});
$("#but9").click(function(){
    $("#buycard9").show();
    $(".buy-now-overlay").show();
});
$("#but10").click(function(){
    $("#buycard10").show();
    $(".buy-now-overlay").show();
});
$("#but11").click(function(){
    $("#buycard11").show();
    $(".buy-now-overlay").show();
});
$("#but12").click(function(){
    $("#buycard12").show();
    $(".buy-now-overlay").show();
});
$("#but13").click(function(){
    $("#buycard13").show();
    $(".buy-now-overlay").show();
});
$("#but14").click(function(){
    $("#buycard14").show();
    $(".buy-now-overlay").show();
});
$("#but15").click(function(){
    $("#buycard15").show();
    $(".buy-now-overlay").show();
});
$("#but16").click(function(){
    $("#buycard16").show();
    $(".buy-now-overlay").show();
});


$("#button1").click(function(){
    $("#buycard1").hide();
    $(".buy-now-overlay").hide();
})
$("#button2").click(function(){
    $("#buycard2").hide();
    $(".buy-now-overlay").hide();
})
$("#button3").click(function(){
    $("#buycard3").hide();
    $(".buy-now-overlay").hide();
})
$("#button4").click(function(){
    $("#buycard4").hide();
    $(".buy-now-overlay").hide();
})
$("#button5").click(function(){
    $("#buycard5").hide();
    $(".buy-now-overlay").hide();
})
$("#button6").click(function(){
    $("#buycard6").hide();
    $(".buy-now-overlay").hide();
})
$("#button7").click(function(){
    $("#buycard7").hide();
    $(".buy-now-overlay").hide();
})
$("#button8").click(function(){
    $("#buycard8").hide();
    $(".buy-now-overlay").hide();
})
$("#button9").click(function(){
    $("#buycard9").hide();
    $(".buy-now-overlay").hide();
})
$("#button10").click(function(){
    $("#buycard10").hide();
    $(".buy-now-overlay").hide();
})
$("#button11").click(function(){
    $("#buycard11").hide();
    $(".buy-now-overlay").hide();
})
$("#button12").click(function(){
    $("#buycard12").hide();
    $(".buy-now-overlay").hide();
})
$("#button13").click(function(){
    $("#buycard13").hide();
    $(".buy-now-overlay").hide();
})
$("#button14").click(function(){
    $("#buycard14").hide();
    $(".buy-now-overlay").hide();
})
$("#button15").click(function(){
    $("#buycard15").hide();
    $(".buy-now-overlay").hide();
})
$("#button16").click(function(){
    $("#buycard16").hide();
    $(".buy-now-overlay").hide();
})




$("#add-minus1").click(function(){
    document.getElementById("add-slider-number1").stepDown();
});
$("#add-plus1").click(function(){
    document.getElementById("add-slider-number1").stepUp();
});

$("#add-minus3").click(function(){
    document.getElementById("add-slider-number3").stepDown();
});
$("#add-plus3").click(function(){
    document.getElementById("add-slider-number3").stepUp();
});

$("#add-minus2").click(function(){
    document.getElementById("add-slider-number2").stepDown();
});
$("#add-plus2").click(function(){
    document.getElementById("add-slider-number2").stepUp();
});



$("#add-minus4").click(function(){
    document.getElementById("add-slider-number4").stepDown();
});
$("#add-plus4").click(function(){
    document.getElementById("add-slider-number4").stepUp();
});
$("#add-minus5").click(function(){
    document.getElementById("add-slider-number5").stepDown();
});
$("#add-plus5").click(function(){
    document.getElementById("add-slider-number5").stepUp();
});
$("#add-minus6").click(function(){
    document.getElementById("add-slider-number6").stepDown();
});
$("#add-plus6").click(function(){
    document.getElementById("add-slider-number6").stepUp();
});
$("#add-minus7").click(function(){
    document.getElementById("add-slider-number7").stepDown();
});
$("#add-plus7").click(function(){
    document.getElementById("add-slider-number7").stepUp();
});
$("#add-minus8").click(function(){
    document.getElementById("add-slider-number8").stepDown();
});
$("#add-plus8").click(function(){
    document.getElementById("add-slider-number8").stepUp();
});
$("#add-minus9").click(function(){
    document.getElementById("add-slider-number9").stepDown();
});
$("#add-plus9").click(function(){
    document.getElementById("add-slider-number9").stepUp();
});
$("#add-minus10").click(function(){
    document.getElementById("add-slider-number10").stepDown();
});
$("#add-plus10").click(function(){
    document.getElementById("add-slider-number10").stepUp();
});
$("#add-minus11").click(function(){
    document.getElementById("add-slider-number11").stepDown();
});
$("#add-plus11").click(function(){
    document.getElementById("add-slider-number11").stepUp();
});
$("#add-minus12").click(function(){
    document.getElementById("add-slider-number12").stepDown();
});
$("#add-plus12").click(function(){
    document.getElementById("add-slider-number12").stepUp();
});
$("#add-minus13").click(function(){
    document.getElementById("add-slider-number13").stepDown();
});
$("#add-plus13").click(function(){
    document.getElementById("add-slider-number13").stepUp();
});
$("#add-minus14").click(function(){
    document.getElementById("add-slider-number14").stepDown();
});
$("#add-plus14").click(function(){
    document.getElementById("add-slider-number14").stepUp();
});
$("#add-minus15").click(function(){
    document.getElementById("add-slider-number15").stepDown();
});
$("#add-plus15").click(function(){
    document.getElementById("add-slider-number15").stepUp();
});
$("#add-minus16").click(function(){
    document.getElementById("add-slider-number16").stepDown();
});
$("#add-plus16").click(function(){
    document.getElementById("add-slider-number16").stepUp();
});



//Validation for subscription-container

$("#subscription-email").click(function(){
    document.getElementById("not-valid").innerText = "";
});

$("#subscription-name").click(function(){
    document.getElementById("not-valid").innerText = "";
});


function validation(){
    if((document.getElementById("subscription-email").value == "") || (document.getElementById("subscription-name").value == "")){
        document.getElementById("not-valid").innerText = "Please filled in all required information";
        return false;
    } else{
        document.getElementById("not-valid").style = "color: black; font-weight: bolder; margin-left: -30px;"
        document.getElementById("not-valid").innerText = "You are now a member!";
        return true;
    };

}
