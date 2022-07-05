
let getWaitButton = document.getElementById("order");
var listwaitingitem;

function getwaitingcart() {
  var getlistwaitingcart = localStorage.getItem("waitItem");
  if (getlistwaitingcart) {
    listwaitingitem = JSON.parse(getlistwaitingcart);
  } else {
    listwaitingitem = [];
  }
  localStorage.setItem("waitItem", JSON.stringify(listwaitingitem));
}

function pushItem() {
  var getusername = document.getElementById("js-Username");
  var tinh=$('select[name="calc_shipping_provinces"]')
  var quan = $('select[name="calc_shipping_district"]');
  var sdt =document.getElementById('phone').value;
  var arrayClone = valueGetCart.filter(function (item, index) {
    return item.username === getusername.innerText;
  });
  var sumTotal = arrayClone.reduce((a, b) => a + b.price, 0);
  var statusArray = arrayClone.map(function (item) {
    return {
      img: item.img,
      name: item.name,
      price: item.price,
      priceforone: item.priceforone,
      status: "Waiting",
      username: item.username,
      value: item.value,
    };
  });

  listwaitingitem.push({
    username: getusername.innerText,
    cart: statusArray,
    sumTotal: sumTotal,
    status: "Waiting",
    address:"tỉnh " +tinh.children('option:selected').text()+"-"+quan.children('option:selected').text(),
    phone:sdt,
  });

  localStorage.setItem("waitItem", JSON.stringify(listwaitingitem));
  var arrayCartNew = valueGetCart.filter(function (item, index) {
    return item.username !== getusername.innerText;
  });
  localStorage.setItem("cart", JSON.stringify(arrayCartNew));
  valueGetCart = arrayCartNew;
  setObjectCart();
  renderCart();
  deleteItemfromCart();
  additem();
  subtractitem();
  renderWaitCart();
}
function renderWaitCart() {
  var getusername ;
  if(document.getElementById("js-Username")){
    getusername = document.getElementById("js-Username")
  }else{
    getusername='no login'
  }
  var listwaitingitem = JSON.parse(localStorage.getItem("waitItem"));
  var result = `<tr>
  <th>Stt</th>
  <th>Sản phẩm</th>
  <th>Tổng tiền</th>
  <th>Địa chỉ</th>
  <th>Số điện thoại</th>
  <th>Trạng thái</th>
</tr>`;

  var findItem = listwaitingitem.filter(function (item) {
    return item.username === getusername.innerText;
  });
  var renderItem = findItem.map(function (item, index) {
    var k = item.cart.map((a) => {
      return a.name + ` x ` + a.value + `<br>`;
    });
    var color ='green'
    if(item.status=='deny'){
      color='red'
    }else if(item.status=='Waiting'){
      color='blue'
    }
    return `<tr> <td>${
      index + 1
    }</td> <td><p>${k}</p></td> <td>${item.sumTotal} đồng</td><td>${item.address}</td><td>${item.phone}</td> <td style="color:${color}!important;">${item.status}</td> </tr>`;
  });

  result += renderItem.toString().replace(/,/g, " ");

  document.getElementById("waitCart").innerHTML = result;
}
function setUp(){
  Swal.fire({
    title: 'Thông báo!',
    text: "Bạn muốn xác nhận mua đơn hàng này ?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Đồng ý'
  }).then((result) => {
   
    if (result.isConfirmed) {
      $("#dialog-1").dialog("open");
      // pushItem()
    
    }
  })
}
function selectItem(){
  var tinh=$('select[name="calc_shipping_provinces"]')
  var quan = $('select[name="calc_shipping_district"]');
  var sdt =document.getElementById('phone').value;
 
 
  if(tinh.children('option:selected').text()!='Tỉnh / Thành phố' && quan.children('option:selected').text()!='Quận / Huyện' && !isNaN(parseInt(sdt))){
    pushItem()
    $("#dialog-1").dialog("close");
    Swal.fire(
      'Agree!',
      'Đơn hàng của bạn đã được lưu, vui lòng chờ người quản lí xác nhận',
      'success'
    )
  }else{
    $("#dialog-1").dialog("close");
    Swal.fire(
      'Disagree!',
      'Dữ liệu không hợp lệ',
      'warning'
    )
  }






}
getwaitingcart();
renderWaitCart();
