

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

function modalChangeBorderColor(id){
    // console.log(id);
    var idColor = '#' + id;
    var dataId = $(idColor).attr('data-id');
    var dataName = $(idColor).attr('data-name');
    // Lấy giá trị numberId sau phần product_color_
    // console.log(numberId);
    $('.app_modal_product_color_list').css('border', '2px solid transparent');
    $(idColor).css({'border' : '2px solid red'});
    // Gán giá trị từ numberId đễ input radio check
    // $('input:radio[name=colorID][value='+numberId+']').prop('checked',true);
    $('[name=modalColorID]').val([dataId]);
    // Lấy giá trị khi đã check
    var myRadio = $('input[name=modalColorID]:checked').val();
    // console.log(myRadio);
}
    
function modalHoverBorderColor(id){
    // console.log(id);
    var idHover = '#' + id;
    var dataId = $(idHover).attr('data-id');
    var dataName = $(idHover).attr('data-name');
    var myRadioColor = $('input[name=modalColorID]:checked').val();
    var idCheck = dataName + myRadioColor;
    if(id == idCheck){
        $(idHover).css({'border' : '2px solid red'});
    }else{
        $(idHover).css({'border' : '2px solid green'});
    }
}
function modalOutBorderColor(id){
    var idHover = '#' + id;
    var dataId = $(idHover).attr('data-id');
    var dataName = $(idHover).attr('data-name');
    var myRadioColor = $('input[name=modalColorID]:checked').val();
    var idCheck = dataName + myRadioColor;
    // console.log(idCheck);
    if(id == idCheck){
        $(idHover).css({'border' : '2px solid red'});
    }else{
        $(idHover).css({'border' : '2px solid transparent'});
    }
    
}

function modalChangeBorderSize(id){
    var idClick = '#' + id;
    var dataId = $(idClick).attr('data-id');
    var dataName = $(idClick).attr('data-name');
    $('.app_modal_product_size_list').css({'border' : '2px solid transparent'});
    $(idClick).css({'border' : '2px solid red'});
    $('input:radio[name=modalSizeID][value='+dataId+']').prop('checked','true');
}
function modalHoverBorderSize(id){
    var idHover = '#' + id;
    var dataId = $(idHover).attr('data-id');
    var dataName = $(idHover).attr('data-name');
    var myRadioSize = $('input[name=modalSizeID]:checked').val();
    var idCheck = dataName + myRadioSize;
    // console.log(id);
    // console.log(idCheck);
    if(id == idCheck){
        $(idHover).css({'border' : '2px solid red'});
    }else{
        $(idHover).css({'border' : '2px solid green'});
    }
}
function modalOutBorderSize(id){
    var idHover = '#' + id;
    var dataId = $(idHover).attr('data-id');
    var dataName = $(idHover).attr('data-name');
    var myRadioSize = $('input[name=modalSizeID]:checked').val();
    var idCheck = dataName + myRadioSize;
    // console.log(id);
    // console.log(idCheck);
    if(id == idCheck){
        $(idHover).css({'border' : '2px solid red'});
    }else{
        $(idHover).css({'border' : '2px solid transparent'});
    }
}
// Tăng qty
function modalPlusQty(){
    // Lấy giá trị hiện tại của modalQty
    var valueQty = parseInt(document.getElementById('modalQty').value);
    // console.log(valueQty);
    var newValue = valueQty+1;
    // console.log(newValue);
    $('#modalQty').val(newValue);
}
function modalMinusQty(){
    var valueQty = parseInt(document.getElementById('modalQty').value);
    console.log(valueQty);
    var newValue;
    if(valueQty === 1){
        newValue = 1;
    }else{
        newValue = valueQty-1;
    }
    // console.log(newValue);
    $('#modalQty').val(newValue);
}
function modalInputQty(){
    var valueInput = document.getElementById('modalQty').value;
    if(isNaN(parseInt(valueInput))){
        // console.log('Nhập sai')
        $('#modalQty').val(1);
    }else{
        // console.log('Nhập đúng');
        $('#modalQty').val(parseInt(valueInput));
    }
    // console.log(p);
}

// Khóa màn hình khi hiển thị modal sản phẩm
function checkboxProduct(id){
    if(document.getElementById('input_checkbox_product').checked ==true){
        $(document.body).css('overflow','hidden');
    }else{
        $('body').css('overflow', '');
    }
}

