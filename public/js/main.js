// thay đổi background phần header 
$(".header_navbar_list").hover(function(){
    $(".header").css("background", "black");
}, function(){
    $(".header").css("background", "linear-gradient(#25211e, rgba(37,33,30,0))");
});


// Xét độ rộng màn hình để xử lý phần hover navbar sản phẩm 
var widthAll = screen.width;
// console.log(widthPro);
$('.header_navbar_item_product_model').width(widthAll);
var x = $(".header_navbar_item_product").offset().left;
document.getElementById("item_product").style.left = -x+"px";

//// Xét khi người dùng scroll, phần menu navbar sẽ fixx
window.addEventListener('scroll', function(ev) {

    var someDiv = document.getElementById('abc');
    var distanceToTop = someDiv.getBoundingClientRect().top;
    if(distanceToTop <= 35 && distanceToTop > 0 || distanceToTop <0){
        var x1 = -45;
        $(".header_navbar").css({"position" : "fixed", "padding-top" : (55+x1)+'px', "z-index" : 5});
        $(".header_topbar").css({"background" : "black", "height" : '50px', "z-index" : 4});
        
    }else if(distanceToTop == 0){
        $(".header_navbar").css({"position" : "relative","padding-top" : '55px', "z-index" : 4});
        $(".header_topbar").css({"background" : "", "height" : '', "z-index" : 5});
    }
 });
