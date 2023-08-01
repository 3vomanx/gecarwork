$(document).ready(function(){
    $(".switch").click(function(){
        $("body").toggleClass("dark-mode");
    if($("body").hasClass("dark-mode")){
        $(".switch").attr("name", "sunny-outline");
        $(".headerlogo").attr("src", "/Images/Logos/gcw-logo-white.png")
    }else{
        $(".switch").attr("name", "moon-outline"); 
        $(".headerlogo").attr("src", "/Images/Logos/gcw-logo.png")
    }
  });
});