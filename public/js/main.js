// thay đổi background phần header 
$(".header_navbar_list").hover(function(){
    $(".header").css("background", "black");
}, function(){
    $(".header").css("background", "linear-gradient(#25211e, rgba(37,33,30,0))");
});

// Check phần cart, nếu checkcart đã check thì khóa màn hình body
// function checkedCart(){
//     if(document.getElementById('input_checkbox__cart').checked ==true){
//         $(document.body).css('overflow','');
//     }else{
//         $('body').css('overflow', 'hidden');
//     }
// }
// Xét độ rộng màn hình để xử lý phần hover navbar sản phẩm 
var widthAll = screen.width;
var heightAll = screen.height;
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
    var idDiv = '#' + id;
    var dataId = $(idDiv).attr('data-id');
    var dataName = $(idDiv).attr('data-name');
    var dataNameBot = $(idDiv).attr('data-nameBot');
    idClass1 = '#' + dataName + dataId;
    idClass2 = '#' + dataNameBot + dataId;
    $(idClass1).css('border', '1px solid red');
    $(idClass2).css({'visibility' : 'visible'});
}
function Outevent(id){
    var idDiv = '#' + id;
    var dataId = $(idDiv).attr('data-id');
    var dataName = $(idDiv).attr('data-name');
    var dataNameBot = $(idDiv).attr('data-nameBot');
    idClass1 = '#' + dataName + dataId;
    idClass2 = '#' + dataNameBot + dataId;
    $(idClass1).css('border', '1px solid whitesmoke');
    $(idClass2).css({'visibility' : 'hidden'});
}

// Thêm hoặc xóa yêu thích
function addFavourite(id){
    var idDiv = '#' + id;
    var dataId = $(idDiv).attr('data-id');
    var dataNameNo = $(idDiv).attr('data-name-no');
    var dataNameHave = $(idDiv).attr('data-name-have');
    var idAdd = '#' + dataNameNo + dataId;
    var idRemove = '#' + dataNameHave + dataId;
    $(idAdd).addClass('hidden_heart');
    $(idRemove).removeClass('hidden_heart');
}
function removeFavourite(id){
    var idDiv = '#' + id;
    var dataId = $(idDiv).attr('data-id');
    var dataNameNo = $(idDiv).attr('data-name-no');
    var dataNameHave = $(idDiv).attr('data-name-have');
    var idAdd = '#' + dataNameNo + dataId;
    var idRemove = '#' + dataNameHave + dataId;
    $(idAdd).removeClass('hidden_heart');
    $(idRemove).addClass('hidden_heart');
}

// Xet top, right(margin) cho modal sản phẩm
var topModalP = (heightAll - 600)/4 + 'px';
var rightModalP = (widthAll - 900)/2 + 'px';
// console.log(topModalP);
$('.app_modal_product_content').css({'top' : topModalP, 'right' : rightModalP});


// Radio sản phẩm phần xem nhanh

function changeBorderColor(id){
    // console.log(id);
    var idColor = '#' + id;
    // Lấy giá trị numberId sau phần product_color_
    var numberId = id.slice(14);
    // console.log(numberId);
    $('.app_modal_product_color_list').css('border', '2px solid transparent');
    $(idColor).css({'border' : '2px solid red'});
    // Gán giá trị từ numberId đễ input radio check
    // $('input:radio[name=colorID][value='+numberId+']').prop('checked',true);
    $('[name=colorID]').val([numberId]);
    // Lấy giá trị khi đã check
    var myRadio = $('input[name=colorID]:checked').val();
    // console.log(myRadio);
}
    
function hoverBorderColor(id){
    // console.log(id);
    var idHover = '#' + id;
    var myRadioColor = $('input[name=colorID]:checked').val();
    var idCheck = 'product_color_' + myRadioColor;
    if(id == idCheck){
        $(idHover).css({'border' : '2px solid red'});
    }else{
        $(idHover).css({'border' : '2px solid green'});
    }
}
function outBorderColor(id){
    var idHover = '#' + id;
    var myRadioColor = $('input[name=colorID]:checked').val();
    var idCheck = 'product_color_' + myRadioColor;
    // console.log(idCheck);
    if(id == idCheck){
        $(idHover).css({'border' : '2px solid red'});
    }else{
        $(idHover).css({'border' : '2px solid transparent'});
    }
    
}

function changeBorderSize(id){
    var idClick = '#' + id;
    $('.app_modal_product_size_list').css({'border' : '2px solid transparent'});
    $(idClick).css({'border' : '2px solid red'});
    var numberSize = id.slice(13);
    $('input:radio[name=sizeID][value='+numberSize+']').prop('checked','true');
}
function hoverBorderSize(id){
    var idHover = '#' + id;
    var myRadioSize = $('input[name=sizeID]:checked').val();
    var idCheck = 'product_size_' + myRadioSize;
    // console.log(id);
    // console.log(idCheck);
    if(id == idCheck){
        $(idHover).css({'border' : '2px solid red'});
    }else{
        $(idHover).css({'border' : '2px solid green'});
    }
}
function outBorderSize(id){
    var idHover = '#' + id;
    var myRadioSize = $('input[name=sizeID]:checked').val();
    var idCheck = 'product_size_' + myRadioSize;
    // console.log(id);
    // console.log(idCheck);
    if(id == idCheck){
        $(idHover).css({'border' : '2px solid red'});
    }else{
        $(idHover).css({'border' : '2px solid transparent'});
    }
}
// Khóa màn hình khi hiển thị modal sản phẩm
function checkboxProduct(id){
    if(document.getElementById('input_checkbox_product').checked ==true){
        $(document.body).css('overflow','hidden');
    }else{
        $('body').css('overflow', '');
    }
}