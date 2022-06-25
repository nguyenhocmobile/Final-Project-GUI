var getlistwaitingcart = localStorage.getItem("waitItem");
let getWaitButton = document.getElementById("order");
var listwaitingitem;

function getwaitingcart() {
  if (getlistwaitingcart) {
    listwaitingitem = JSON.parse(getlistwaitingcart);
  } else {
    listwaitingitem = [];
  }
  localStorage.setItem("waitItem", JSON.stringify(listwaitingitem));
}

function pushItem() {
  var getusername = document.getElementById("js-Username");
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
  var getusername = document.getElementById("js-Username");
  var result = `<tr>
  <th>Stt</th>
  <th>Sản phẩm</th>
  <th>Tổng tiền</th>
  <th>Trạng thái</th>
</tr>`;

  var findItem = listwaitingitem.filter(function (item) {
    return item.username === getusername.innerText;
  });
  var renderItem = findItem.map(function (item, index) {
    var k = item.cart.map((a) => {
      return a.name + ` x ` + a.value + `<br>`;
    });
    return `<tr> <td>${
      index + 1
    }</td> <td><p>${k}</p></td> <td>${item.sumTotal}</td> <td>${item.status}</td> </tr>`;
  });

  result += renderItem.toString().replace(/,/g, " ");

  document.getElementById("waitCart").innerHTML = result;
}
getwaitingcart();
renderWaitCart();
