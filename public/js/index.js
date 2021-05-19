// thay đổi background phần header 
$(".header_navbar_list").hover(function(){
    $(".header").css("background", "black");
}, function(){
    $(".header").css("background", "linear-gradient(#25211e, rgba(37,33,30,0))");
});
//// Xét khi người dùng scroll, phần menu navbar sẽ fixx
var checkScrool = false;
window.addEventListener('scroll', function(ev) {

    var someDiv = document.getElementById('abc');
    var distanceToTop = someDiv.getBoundingClientRect().top;
    // console.log(distanceToTop);
    
    if(distanceToTop <= -42 && checkScrool == false || distanceToTop <= 44 && checkScrool == true){
        checkScrool = true;
        var x1 = -45;
        // $(".header_topbar").css({"background" : "black", "height" : '50px', "z-index" : 4});
        $(".header_topbar").css({"height" : '50px', "z-index" : 4});

        $(".header_navbar").css({"position" : "fixed", "padding-top" : 12+'px', "z-index" : 5});
        // $(".header_topbar").css({"position" : "fixed", "z-index" : 1});
        $(".header_hidden").css({"display" : "block"});
    }else if(distanceToTop == 50 || distanceToTop == 0){
        $(".header_topbar").css({"background" : "", "height" : '', "z-index" : 5});
        $(".header_navbar").css({"position" : "relative","padding-top" : '55px', "z-index" : 4});
        $(".header_hidden").css({"display" : "none"});
    }
 });
