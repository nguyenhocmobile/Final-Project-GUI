var listproduct;
var getlistproduct = localStorage.getItem("item");

function render(type) {
  //render menu
  var result = "";
  for (let i = 0; i < listproduct.length; i++) {
    if (listproduct[i].type === type) {
      result += `<div class="cart-content" style="font-weight: bolder;text-align: center;">
            <div class="hinhanh" style="border: 1px solid red;border-radius: 7px;">
               <img src=${listproduct[i].src} style="border-radius: 7px" alt="">
           </div>
           <p class="ten" style="font-weight: bolder;margin-top: 20px;">${listproduct[i].name}</p>
           <div class="gia">
                <span class="giagoc">${listproduct[i].price}</span>
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
function addValue() {
  // button thêm số lượng
  var getindex = document.getElementsByClassName("add");
  for (let j = 0; j < getindex.length; j++) {
    getindex[j].onclick = function () {
      var findIndex = $(getindex[j]).closest("div").find("input");
      var getvalue = findIndex.val();
      getvalue++;
      findIndex.val(getvalue);
    };
  }
}
function subtractValue() {
  //button giảm số lượng
  var getindex = document.getElementsByClassName("subtract");
  for (let j = 0; j < getindex.length; j++) {
    getindex[j].onclick = function () {
      var findIndex = $(getindex[j]).closest("div").find("input");
      var getvalue = findIndex.val();
      if (getvalue < 2) {
        findIndex.val(1);
      } else {
        getvalue--;
        findIndex.val(getvalue);
      }
    };
  }
}

function changeTab() {
  //chuyển đổi qua lại giữa các menu hàng
  var x = document.getElementsByClassName("sas");
  var l = document.getElementById("content-left");
  var r = document.getElementById("content-right");
  var ctn = document.getElementById("container-cart");
  var ctc = document.getElementById("content-cart");
  for (let i = 0; i < x.length; i++) {
    x[i].onclick = function () {
      l.style.display = "block";
      r.style.display = "flex";
      ctn.style.display = "flex";
      ctc.style.display = "none";
      for (let j = 0; j < x.length; j++) {
        x[j].classList.remove("nav-active");
      }
      x[i].classList.add("nav-active");
      document.getElementById("content-right").innerHTML = "";
      switch (i) {
        case 0:
          render("odd dish");
          setObjectCart();
          addValue();
          subtractValue();

          break;
        case 1:
          render("ice cream");
          setObjectCart();
          addValue();
          subtractValue();

          break;
        case 2:
          render("alone");
          setObjectCart();
          addValue();

          subtractValue();

          break;
        case 3:
          render("couple");
          setObjectCart();
          addValue();
          subtractValue();

          break;
      }
    };
  }
}

render("odd dish");
changeTab();
addValue();
subtractValue();
