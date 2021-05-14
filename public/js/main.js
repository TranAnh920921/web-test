// thay đổi background phần header 
$(".header_navbar_list").hover(function(){
    $(".header").css("background", "black");
}, function(){
    $(".header").css("background", "linear-gradient(#25211e, rgba(37,33,30,0))");
});

// Check phần cart, nếu checkcart đã check thì khóa màn hình body
function checkedCart(){
    if(document.getElementById('input_checkbox__cart').checked ==true){
        $(document.body).css('overflow','');
    }else{
        $('body').css('overflow', 'hidden');
    }
}
// Xét độ rộng màn hình để xử lý phần hover navbar sản phẩm 
var widthAll = screen.width;
// console.log(widthAll);
$('.header_navbar_item_product_modal').width(widthAll);
var x = $(".header_navbar_item_product").offset().left;
document.getElementById("item_product").style.left = -x+"px";

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

 // Xét ở phần search, khi user nhập vào thì cho phần search toàn màn hình
$(".app_modal_search_input").on('input', function(e){
    // $('.app_modal_search').css({'height' : '100%'});
    var count = e.target.value.length;
    if(count == 0){
        $('.app_modal_search').css({'height' : '100px'});
    }else{
        $('.app_modal_search').css({'height' : '100%'});
    }
});

// Hover vào sản phẩm thêm phần border,
// Hover vào sản phẩm thêm phần xem/mua hàng
function Hoverevent(id){
    var idClass = id;
    idClass1 = '#' + 'product_item_' + idClass.slice(-1);
    idClass2 = '#' + 'product_item_bot_' + idClass.slice(-1);
    $(idClass1).css('border', '1px solid whitesmoke');
    $(idClass2).css({'visibility' : 'visible'});
}
function Outevent(id){
// $(".product_item").css('border', '1px solid transparent');
    // $('.product_item_bot').css({'visibility' : 'hidden'});
    var idClass = id;
    idClass1 = '#' + 'product_item_' + idClass.slice(-1);
    idClass2 = '#' + 'product_item_bot_' + idClass.slice(-1);
    $(idClass1).css('border', '1px solid transparent');
    $(idClass2).css({'visibility' : 'hidden'});
}