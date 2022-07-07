function search(value) {
  var k = document.getElementById("searchResult");

  var listproducts = JSON.parse(localStorage.getItem("item"));
  var ar = listproducts.filter((a) => {
    var r = a.name.toLowerCase();
    var l = value.toLowerCase();
    return r.includes(l);
  });
  if (value.length < 1 || ar.length < 1) {
    k.style.display = "none";
  } else {
    k.style.display = "block";
  }
  renderSearch(ar, k);
}

function renderSearch(array, target) {
  var result = ``;
  var rs = array.map((a) => {
    return `<div><a href="#content-right" onclick="clickProduct(this.textContent)">${a.name}</a>   <img src="${a.src}" alt="" srcset=""></div>`;
  });
  result += rs.toString().replace(/,/g, " ");
  target.innerHTML = result;
}

function clickProduct(value) {
  var k = document.getElementById("searchResult");
  var listproducts = JSON.parse(localStorage.getItem("item"));
  var l = document.getElementById("content-left");
  var r = document.getElementById("content-right");
  var ctn = document.getElementById("container-cart");
  var ctc = document.getElementById("content-cart");
  l.style.display = "block";
  r.style.display = "flex";
  ctn.style.display = "flex";
  ctc.style.display = "none";
  for (const element of listproducts) {
    if (element.name == value) {
      rendersearch(element.name);
      setObjectCart();
      addValue();
      subtractValue();
    }
  }
  k.style.display = "none";
}

function rendersearch(name) {
  //render menu
  var listproducts = JSON.parse(localStorage.getItem("item"));
  var x = document.getElementsByClassName("sas");
  for (let j = 0; j < x.length; j++) {
    x[j].classList.remove("nav-active");
  }
  var result = "";
  for (let i = 0; i < listproduct.length; i++) {
    if (listproduct[i].name === name) {
      result += `<div class="cart-content" style="font-weight: bolder;text-align: center;">
              <div class="hinhanh" style="border: 1px solid red;border-radius: 7px;">
                 <img src=${listproduct[i].src} style="border-radius: 7px" alt="">
             </div>
             <p class="ten" style="font-weight: bolder;margin-top: 20px;">${listproduct[i].name}</p>
             <div class="gia">
                  <span class="giagoc">${listproduct[i].price} đồng</span>
               </div>
               <button class="subtract" id="subtract" >-</button>
               <input type="number" readonly style="width:60px;" overflow:hidden; class="soluong" value="1">
               <button class="add" id="add">+</button>
               <button class="them" id="them">Thêm vào giỏ hàng</button>
           </div>`;
    }
  }
  document.getElementById("content-right").innerHTML = result;
}

function filterResult(array) {
  //render menu
  var listproducts = JSON.parse(localStorage.getItem("item"));
  var x = document.getElementsByClassName("sas");
  for (let j = 0; j < x.length; j++) {
    x[j].classList.remove("nav-active");
  }
  var result = "";
  for (item of array) {
    for (let i = 0; i < listproduct.length; i++) {
      if (listproduct[i].name === item.name) {
        result += `<div class="cart-content" style="font-weight: bolder;text-align: center;">
                  <div class="hinhanh" style="border: 1px solid red;border-radius: 7px;">
                     <img src=${listproduct[i].src} style="border-radius: 7px" alt="">
                 </div>
                 <p class="ten" style="font-weight: bolder;margin-top: 20px;">${listproduct[i].name}</p>
                 <div class="gia">
                      <span class="giagoc">${listproduct[i].price} đồng</span>
                   </div>
                   <button class="subtract" id="subtract" >-</button>
                   <input type="number" readonly style="width:60px;" overflow:hidden; class="soluong" value="1">
                   <button class="add" id="add">+</button>
                   <button class="them" id="them">Thêm vào giỏ hàng</button>
               </div>`;
      }
    }
  }
  document.getElementById("content-right").innerHTML = result;
}

function filter() {
  var listproducts = JSON.parse(localStorage.getItem("item"));
  var type = document.getElementById("searchType").value;
  var price = document.getElementById("searchPrice").value;
  var sortPrice = document.getElementById("sortPrice").value;

  var arr;
  if (type) {
    arr = listproducts.filter((a) => {
      var min = parseInt(price.substring(0, 6));
      var max = parseInt(price.substring(7));
      return (
        a.type == type && parseInt(a.price) >= min && parseInt(a.price) < max
      );
    });
  } else {
    arr = listproducts.filter((a) => {
      var min = parseInt(price.substring(0, 6));
      var max = parseInt(price.substring(7));
      return parseInt(a.price) >= min && parseInt(a.price) < max;
    });
  }

  if (sortPrice == "Tăng dần") {
    arr = arr.sort((a, b) => {
      if (parseInt(a.price) < parseInt(b.price)) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    arr = arr.sort((a, b) => {
      if (parseInt(a.price) > parseInt(b.price)) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  filterResult(arr);
  setObjectCart();
  addValue();
  subtractValue();
}

function showbonus() {
  render("bonus");
  setObjectCart();
  addValue();
  subtractValue();
}

function refesh() {
  getproduct();
  render("odd dish");
  changeTab();
  addValue();
  subtractValue();
  createCart();
  gotoCart();
  setObjectCart();
  renderCart();
  deleteItemfromCart();
  additem();
  subtractitem();
  getwaitingcart();
  renderWaitCart();
  deleteItemWaiCart()
}
function delaySlide(){
  let element = document.getElementById("navigation-bar-responsive");
  element.classList.toggle("show");
}
function delayBackGround(){
  let element2 = document.getElementById("blurSidebar");
  element2.classList.toggle("visiblee")
}
function showNavigationBar() {
  let element2 = document.getElementById("blurSidebar");
  element2.classList.toggle("visiblee")
  setTimeout(delaySlide,0)
  
}
function cancel(){
event.stopPropagation();

}

function hiddenSideBar(){
  let element = document.getElementById("navigation-bar-responsive");
  element.classList.toggle("show");
  
  setTimeout(delayBackGround,500)
  
  event.stopPropagation();
}
function hotLine(){
  Swal.fire('Liên hệ với chúng tôi với hotLine:0376681323')

}
