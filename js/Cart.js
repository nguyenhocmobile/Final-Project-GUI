var navres = document.getElementById("more-nav");
var boxmore = document.getElementById("box-more");
var getlistproduct = localStorage.getItem("item");
var getcart = localStorage.getItem("cart");
var valueGetCart = JSON.parse(getcart);
var valueGetProduct = JSON.parse(getlistproduct);
var listCart;
navres.onclick = function () {
  boxmore.classList.toggle("visible");
};
function delay(){
  document.body.classList.remove('hidden')
  document.getElementById('login-ctn').style.animation='rotation 0.6s infinite linear';
  document.getElementById('login-ctn').style.animationIterationCount='1';
}
function addItemtoCart(name, value, img, price, priceforone, status, username) {
  //render sản phẩm khi đã có đủ dữ liệu
  var cartItem = {
    name: name,
    value: value,
    img: img,
    price: price,
    priceforone: priceforone,
    status: status,
    username: username,
  };
  var check = document
    .querySelector(".js-HandlerLR")
    .classList.contains("js-isLogin");
  if (!check || username == "no login"){

  document.getElementById("dangnhap").style.visibility = "visible";
  setTimeout(delay,0)
  }
  else {
    for (var i = 0; i < valueGetCart.length; i++) {
      if (valueGetCart[i].name == name) {
        if (valueGetCart[i].username == username) {
          var h = parseInt(valueGetCart[i].value);
          var k = parseInt(valueGetCart[i].price);
          h += parseInt(value);
          k = parseInt(priceforone) * h;
          valueGetCart.splice(i, 1);
          cartItem.value = h;
          cartItem.price = k;
        }
      }
    }
    valueGetCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(valueGetCart));
    deleteItemfromCart();
    additem();
    subtractitem();
    renderCart();
    swal.fire({
      icon: 'success',
      title: 'Đã thêm vào giỏ hàng ',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

function setObjectCart() {
  // tạo dữ liệu cho sản phẩm rồi push lên local storage + render
  var getindex = document.getElementsByClassName("them");
  var getnamebyselect = document.getElementsByClassName("ten");
  var getusername = document.getElementById("js-Username");
  var valueGetProduct = JSON.parse(localStorage.getItem('item'));
  var valueGetCart = JSON.parse(localStorage.getItem('cart'));
  if (getusername == null) {
    getusername = "no login";
  }
  for (let j = 0; j < getindex.length; j++) {
    getindex[j].onclick = function () {
      var findvalue = $(getindex[j]).closest("div").find("input");
      var getname = getnamebyselect[j].textContent;
      for (let i = 0; i < valueGetProduct.length; i++) {
        if (getname == valueGetProduct[i].name) {
          addItemtoCart(
            getname,
            findvalue.val(),
            valueGetProduct[i].src,
            parseInt(valueGetProduct[i].price) * findvalue.val(),
            parseInt(valueGetProduct[i].price),
            "unconfimred",
            getusername.innerText
          );
        }
      }
    };
  }
}
function gotoCart() {
  //chuyển main content sang cart
  var m = document.querySelectorAll(".header-cart");
  var l = document.getElementById("content-left");
  var r = document.getElementById("content-right");
  var ctn = document.getElementById("container-cart");
  var ctc = document.getElementById("content-cart");
  var getusername = document.getElementById("js-Username");

    for(let element of m){
      element.onclick = function () {
        var x = document.getElementsByClassName("sas");
        if(getusername==null){
          document.getElementById("dangnhap").style.visibility = "visible";
          setTimeout(delay,0)
        }
        else{
          for (let j = 0; j < x.length; j++) {
            x[j].classList.remove("nav-active");
          }
        l.style.display = "none";
        r.style.display = "none";
        ctn.style.display = "block";
        ctc.style.display = "block";
        setObjectCart();
        renderCart();
        deleteItemfromCart();
        additem();
        subtractitem();
        renderWaitCart();
        deleteItemWaiCart();
        }
      };
    }
  
 
}

function renderCart() {
  //hàm render cart

  var result = `<tr>
   <th>Sản Phẩm</th>
   <th>Đơn Giá</th>
   <th>Số Lượng</th>
   <th>Thành Tiền</th>
   <th>Thao Tác</th>
</tr>`;
  var k = 0;
  var sumPrice = 0;
  for (let i = 0; i < valueGetCart.length; i++) {
    var getusername = document.getElementById("js-Username");
    if (getusername == null) {
      getusername = "no login";
    }
    if (
      valueGetCart[i].username == getusername.innerText &&
      valueGetCart[i].status == "unconfimred"
    ) {
      k++;
      result += `<tr>
      <td><img src=${valueGetCart[i].img}>
         <p class="nameOfCart">${valueGetCart[i].name}</p>
      </td><td>
      ${valueGetCart[i].priceforone} đồng
      </td>
      <td><button class="subtractCart" id="subtractCart" >-</button> <p class="valueCart">${valueGetCart[i].value}</p> <button class="addCart" id="addCart">+</button></td>
      <td>${valueGetCart[i].price} đồng</td>
      <td><Button id="deleteItem"  class="deleteItem">Xóa</Button></td>
   </tr>`;
      sumPrice += parseInt(valueGetCart[i].price);
    }
  }
  result += `<td><p>Tổng tiền :${sumPrice} đồng</p></td>`;
  result += `<td></td>`;
  result += `<td></td>`;
  result += `<td></td>`;
  result += `<td><Button id="order" onclick="setUp()">Đặt Hàng</Button></td>`;
  if (k == 0) {
    result = `<img src="Image/cart.png" alt="" srcset="">`;

    setObjectCart();
    deleteItemfromCart();
    additem();
    subtractitem();
  } else {
    setObjectCart();
    deleteItemfromCart();
    additem();
    subtractitem();
  }

  document.getElementById("tableCart").innerHTML = result;
}

function deleteItemfromCart() {
  //xóa sản phẩm khỏi cart
  var m = document.getElementsByClassName("deleteItem");
  for (let i = 0; i < m.length; i++) {
    m[i].onclick = function () {
      Swal.fire({
        title: 'Thông báo!',
        text: "Bạn có chắc chắn muốn xóa món hàng này?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý',
      
      }).then((result) => {
        if (result.isConfirmed) {
          valueGetCart.splice(i, 1);
          localStorage.setItem("cart", JSON.stringify(valueGetCart));
          setObjectCart();
          renderCart();
          deleteItemfromCart();
          additem();
          subtractitem();
          Swal.fire(
            'Deleted!',
            'Món hàng đã được xóa',
            'success'
          )
        }
      })
    };
  }
}
function additem() {
  //thêm số lượng sản phẩm cùng loại
  var getindex = document.getElementsByClassName("addCart");
  var getIndexP = document.getElementsByClassName("valueCart");
  for (let j = 0; j < getindex.length; j++) {
    getindex[j].onclick = function () {
      var getusername = document.getElementById("js-Username");
      var findParent = $(getindex[j]).closest("tr").find("p");
      for (var i = 0; i < valueGetCart.length; i++) {
        if (valueGetCart[i].name == findParent[0].innerText) {
          if (valueGetCart[i].username == getusername.innerText) {
            var valuee = valueGetCart[i].value;
            valueGetCart[i].value = parseInt(valuee) + 1;
            valueGetCart[i].price =
              parseInt(valueGetCart[i].value) *
              parseInt(valueGetCart[i].priceforone);
            // var item = {
            //   name: valueGetCart[i].name,
            //   value: valueGetCart[i].value,
            //   img: valueGetCart[i].img,
            //   price: valueGetCart[i].price,
            //   priceforone: valueGetCart[i].priceforone,
            //   status: valueGetCart[i].status,
            //   username: valueGetCart[i].username,
            // };
            // valueGetCart.splice(i, 1);
            //valueGetCart.setItem(item)
          }
        }
      }
      localStorage.setItem("cart", JSON.stringify(valueGetCart));
      setObjectCart();
      renderCart();
      deleteItemfromCart();
      additem();
      subtractitem();
    };
  }
}
function subtractitem() {
  //giảm số lượng sản phẩm cùng loại
  var getindex = document.getElementsByClassName("subtractCart");
  for (let j = 0; j < getindex.length; j++) {
    getindex[j].onclick = function () {
      var m = valueGetCart[j].value;
      if (m >= 2) {
        valueGetCart[j].value = parseInt(m) - 1;
        valueGetCart[j].price =
          parseInt(valueGetCart[j].priceforone) *
          parseInt(valueGetCart[j].value);
        localStorage.setItem("cart", JSON.stringify(valueGetCart));
        setObjectCart();
        renderCart();
        deleteItemfromCart();
        additem();
        subtractitem();
      } else {
        valueGetCart[j].value = parseInt(1);
        valueGetCart[j].price =
          parseInt(valueGetCart[j].priceforone) *
          parseInt(valueGetCart[j].value);
        localStorage.setItem("cart", JSON.stringify(valueGetCart));
        setObjectCart();
        renderCart();
        deleteItemfromCart();
        additem();
        subtractitem();
      }
    };
  }
}

createCart();
gotoCart();
setObjectCart();
renderCart();
deleteItemfromCart();
additem();
subtractitem();
