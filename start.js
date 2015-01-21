$(document).ready(function(){

    //Initialization.
    $("#intro").show();
    $("#work").hide();
    $("#cv").hide();
    $("#contact").hide();
    $("#m1").css("color", "#CCC");
    $("#m2").css("color", "#CCC");
    $("#m3").css("color", "#CCC");

    //click logo
    $("#logo").click(function(){
        $("#intro").show();
        $("#work").hide();
        $("#cv").hide();
        $("#contact").hide();                                 
    });

    //click "work" on menu.
    $("#m1").click(function(){
        $("#m1").css("color", "#56617D");
        $("#m2").css("color", "#CCC");
        $("#m3").css("color", "#CCC");
        $("#intro").hide();
        $("#work").show();
        $("#cv").hide();
        $("#contact").hide();                                   
    });

    //click "cv" on menu.
    $("#m2").click(function(){
        $("#m1").css("color", "#CCC");
        $("#m2").css("color", "#56617D");
        $("#m3").css("color", "#CCC");
        $("#intro").hide();
        $("#work").hide();
        $("#cv").show();
        $("#contact").hide();                                 
    });

    //click "contact" on menu.
    $("#m3").click(function(){
        $("#m1").css("color", "#CCC");
        $("#m2").css("color", "#CCC");
        $("#m3").css("color", "#56617D");
        $("#intro").hide();
        $("#work").hide();
        $("#cv").hide();
        $("#contact").show();                                 
    });

    //click "中文" on menu.
    $("#m4").click(function(){
    });

});











