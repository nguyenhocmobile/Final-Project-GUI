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
    var tinh = $('select[name="calc_shipping_provinces"]')
    var quan = $('select[name="calc_shipping_district"]');
    var sdt = document.getElementById('phone').value;
    var arrayClone = valueGetCart.filter(function(item, index) {
        return item.username === getusername.innerText;
    });
    var sumTotal = arrayClone.reduce((a, b) => a + b.price, 0);
    var statusArray = arrayClone.map(function(item) {
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
        address: "Tỉnh " + tinh.children('option:selected').text() + "-" + quan.children('option:selected').text(),
        phone: sdt,
    });

    localStorage.setItem("waitItem", JSON.stringify(listwaitingitem));
    var arrayCartNew = valueGetCart.filter(function(item, index) {
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
    deleteItemWaiCart()
}

function renderWaitCart() {
    var getusername;
    if (document.getElementById("js-Username")) {
        getusername = document.getElementById("js-Username")
    } else {
        getusername = 'no login'
    }
    var listwaitingitem = JSON.parse(localStorage.getItem("waitItem"));
    var result = `<tr>
  <th>Stt</th>
  <th>Sản phẩm</th>
  <th>Tổng tiền</th>
  <th>Địa chỉ</th>
  <th>Số điện thoại</th>
  <th>Trạng thái</th>
  <th>Thao tác</th> 
</tr>`;
    var findItem = listwaitingitem.filter(function(item) {
        return item.username === getusername.innerText;
    });
    var renderItem = findItem.map(function(item, index) {
        var k = item.cart.map((a) => {
            return a.name + ` x ` + a.value + `<br>`;
        });
        var color = 'green'
        if (item.status == 'Deny') {
            color = 'red'
        } else if (item.status == 'Waiting') {
            color = 'blue'
        }
        return `<tr> <td>${
      index + 1
    }</td> 
    <td><p>${k}</p></td> 
    <td>${item.sumTotal} đồng</td>
    <td>${item.address}</td>
    <td>${item.phone}</td> 
    <td style="color:${color}!important;">${item.status}</td> 
    <td><a href="javascript:;" class="fa-solid fa-delete-left deleteWaitCart"></a></td>
    </tr>`;
    });

    result += renderItem.toString().replace(/,/g, " ");

    document.getElementById("waitCart").innerHTML = result;
}

function setUp() {
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
          

        }
    })
}

function selectItem() {
    var tinh = $('select[name="calc_shipping_provinces"]')
    var quan = $('select[name="calc_shipping_district"]');
    var sdt = document.getElementById('phone').value;


    if (tinh.children('option:selected').text() != 'Tỉnh / Thành phố' && quan.children('option:selected').text() != 'Quận / Huyện' && !isNaN(parseInt(sdt))) {
        pushItem()
        $("#dialog-1").dialog("close");
        Swal.fire(
            'Thành công!',
            'Đơn hàng của bạn đã được lưu, vui lòng chờ người quản lí xác nhận',
            'success'
        )
    } else {
        $("#dialog-1").dialog("close");
        Swal.fire(
            'Không thành công!',
            'Dữ liệu không hợp lệ',
            'warning'
        )
    }

}
function deleteItemWaiCart(){
    let getindex = document.getElementsByClassName("deleteWaitCart")
    var getusername;
    if (document.getElementById("js-Username")) {
        getusername = document.getElementById("js-Username")
    } else {
        getusername = 'no login'
    }
    var listwaitingitem = JSON.parse(localStorage.getItem("waitItem"));
    var indexWaitCart= listwaitingitem.map((a,b)=>{
        return {item:a,index:b}
    })
    var findItem = indexWaitCart.filter(function(e) {
        return e.item.username === getusername.innerText;
    });
    for(let i=0;i<getindex.length;i++){
        getindex[i].onclick = function(){
            Swal.fire({
                title: 'Bạn chắc chắn muốn hủy đơn hàng này?',
            
                showCancelButton: true,
                cancelButtonText:'Không',
                confirmButtonText: 'Có',
                
              }).then((result) => {
           
                if (result.isConfirmed) {
                   if(findItem[i].item.status!='Accept'){
                    listwaitingitem.splice(parseInt(findItem[i].index),1)
                    localStorage.setItem("waitItem", JSON.stringify(listwaitingitem));
                    renderWaitCart()
                    deleteItemWaiCart()
                  Swal.fire('Đơn hàng đã được hủy!', '', 'success')
                   }else{
                    Swal.fire('Đơn hàng đã được hệ thống xác nhận, không thể hủy!', '', 'warning')
                   }
                }
              })
        }
    }
}
getwaitingcart();
renderWaitCart();
deleteItemWaiCart()
