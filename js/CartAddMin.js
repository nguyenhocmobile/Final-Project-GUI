var getlistwaitingcart = localStorage.getItem("waitItem");
var listwaitingitem;

function getwaitingcart() {
  if (getlistwaitingcart) {
    listwaitingitem = JSON.parse(getlistwaitingcart);
  } else {
    listwaitingitem = [];
  }
  localStorage.setItem("waitItem", JSON.stringify(listwaitingitem));
}
getwaitingcart();

function renderCartAdmin() {
  var listwaitingitem = JSON.parse(localStorage.getItem("waitItem"));
  var listOder = document.getElementById("listTheOrder");
  var result = `  <tr>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
</tr>`;
  var renderResult = listwaitingitem.map((item, index) => {
    var listwait = item.cart.map((e) => {
      return e.name + ` x ` + e.value + `<br>`;
    });
    var color ='green'
    if(item.status=='deny'){
      color='red'
    }else if(item.status=='Waiting'){
      color='yellow'
    }
    return `<tr> <td>${item.username}</td> <td><p>${listwait}</p></td><td>${item.phone}</td><td>${item.address}</td><td style="color:${color}!important;">${item.status}</td> <td>${item.sumTotal} đồng</td> <td><a href="javascript:;" class="confirm" id="${index}" onclick="confirmCart()">Thao tác</a></td> </tr>`;
  });
  result += renderResult.toString().replace(/,/g, " ");

  listOder.innerHTML = result;
}
function renderListAccount() {
  var userArray = JSON.parse(localStorage.getItem("user"));
  var listAcc = document.getElementById("listaccount");
  var findUser = userArray.filter((a) => {
    return a.userType === "user";
  });
  var result = ` <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    
</tr>`;
  var renderResult = findUser.map((item) => {
    return `<tr> <td><p class="nameUser">${item.username}</p></td> <td>${item.password}</td> <td>${item.RegisterDay}</td> <td><button class="deleteAccount" id="${item.username}">Xóa</button></td> </tr>`;
  });
  result += renderResult.toString().replace(/,/g, " ");

  listAcc.innerHTML = result;
}
function deleteAccount() {
  var select = document.getElementsByClassName("deleteAccount");

  for (let i = 0; i < select.length; i++) {
    select[i].onclick = function () {
      var userArray = JSON.parse(localStorage.getItem("user"));
      var newArray = [];
      var us = select[i].id;
      for (let j of userArray) {
        if (us !== j.username) {
          newArray.push(j);
        }
      }
      userArray = newArray;
      localStorage.setItem("user", JSON.stringify(userArray));
      renderListAccount();
      deleteAccount();
    };
  }
}
function confirmCart() {
  var select = document.getElementsByClassName("confirm");
  var listwaitingitem = JSON.parse(localStorage.getItem("waitItem"));
  for (let i = 0; i < select.length; i++) {
    select[i].onclick = function () {
      var index = select[i].id;
      Swal.fire({
        title: 'Thao tác',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Xác nhận',
        denyButtonText: `Từ chối`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          listwaitingitem[index].status = "accept";
          localStorage.setItem("waitItem", JSON.stringify(listwaitingitem));

          renderCartAdmin();
          confirmCart();
       
          Swal.fire('Đã xác nhận đơn hàng', '', 'success')
        } else if (result.isDenied) {
          listwaitingitem[index].status = "deny";
          localStorage.setItem("waitItem", JSON.stringify(listwaitingitem));
          renderCartAdmin();
          confirmCart();
          Swal.fire('Đã từ chối đơn hàng', '', 'warning')
        }
      })
      // swal(
      //   {
      //     title: "",
      //     text: "Thao tác",
      //     type: "",

      //     cancelButtonText: "Hủy",
      //     showCancelButton: true,
      //     cancelButtonColor: "#DD6B55",
      //     showCloseButton: true,
      //     confirmButtonColor: "#DD6B55",
      //     confirmButtonText: "Xác nhận",
      //     closeOnConfirm: true,
      //     closeOnCancel: true,
          
      //   },
      //   function (isConfirm) {
      //     if (isConfirm) {
  
      //     } else {
    
         
      //     }
      //   }
      // );
    };
  }
}
function renderProducts() {
  var listproducts = JSON.parse(localStorage.getItem("item"));
  var focus = document.getElementById("listprodurt");

  var result = ` <tr>
  <th>Stt</th>
  <th>Tên</th>
  <th>Ảnh minh họa</th>
  <th>Loại</th>
  <th>Giá</th>
  <th>Thao tác</th>
</tr>`;

  var mainArray = listproducts.map((a, b) => {
    var typp =''
    if(a.type=='odd dish'){
      typp ='Món lẻ'
    }else if(a.type=='ice cream'){
      typp='Kem'
    }else if(a.type=='alone'){
      typp='Combo 1 người'
    }else if(a.type=='couple'){
      typp='Combo nhóm'
    }else if(a.type=='water'){
      typp='Nước'
    }else if(a.type=='bonus'){
      typp='Khuyến mãi'
    }
    return `<tr> <th> ${b + 1}</th> <th>${a.name}</th><th> <img src="${
      a.src
    }" alt="" srcset=""></th>  <th>${typp}</th> <th>${
      a.price
    }</th> <th><a href="javascript:;" class="settingbutton ${b}">Sửa</a><a href="javascript:;" class="deletebutton ${b}" onclick="deleteProduct(${b})">Xóa</a></th></tr>`;
  });

  result += mainArray.toString().replace(/,/g, " ");
  focus.innerHTML = result;
}

function deleteProduct(index) {
  var listproducts = JSON.parse(localStorage.getItem("item"));
  listproducts.splice(index, 1);
  localStorage.setItem("item", JSON.stringify(listproducts));
  renderProducts();
  settingProducts();
}
function settingProducts() {
  var d = document.getElementsByClassName("settingbutton");
  var listproducts = JSON.parse(localStorage.getItem("item"));
  for (let i = 0; i < d.length; i++) {
    d[i].onclick = function () {
    
      $("#adjustButton").attr("class", `${this.className.substring(14)}`);
      $("#adjustButtonIII").attr("class", `${this.className.substring(14)}`);
      if(listproducts[i].type=='bonus'){
        $("#dialog-3").dialog("open");
      }else{
        $("#dialog-1").dialog("open");
      }
    };
  }
}
function saveSetting() {
  var m = document.getElementById("adjustButton");
  m.onclick = function () {
    var listproducts = JSON.parse(localStorage.getItem("item"));
    var index = m.className;
    var name = document.getElementById("nameI").value;
    var price = document.getElementById("priceI").value;
    var src = document.getElementById("fileUpload").value.substring(12);
    var type = document.getElementById("typeI").value;
    listproducts[index].name = name;
    listproducts[index].srcpice = price + " đồng";
    listproducts[index].src = src;
    listproducts[index].type = type;
    listproducts[index].price=parseInt(parseInt(price)-(parseInt(price)*(parseInt(listproducts[index].heso)/100)));
    localStorage.setItem("item", JSON.stringify(listproducts));
    renderProducts();
    settingProducts();
    saveSetting();
    $("#dialog-1").dialog("close")
  };
  var n = document.getElementById('adjustButtonIII');
  n.onclick = function(){
    var listproducts = JSON.parse(localStorage.getItem("item"));
    var index = n.className;
    var name = document.getElementById("nameIII").value;
    var price = document.getElementById("priceIII").value;
    var src = document.getElementById("fileUploadIII").value.substring(12);
    var heso = document.getElementById("hesoIII").value;
    listproducts[index].name=name;
    listproducts[index].srcpice=price +" đồng";
    listproducts[index].src=src;
    listproducts[index].heso=heso;
    listproducts[index].price=parseInt(parseInt(price)-(parseInt(price)*(parseInt(heso)/100)));
    localStorage.setItem("item", JSON.stringify(listproducts));
    renderProducts();
    settingProducts();
    saveSetting();
    
    $("#dialog-3").dialog("close")
  }
}
function openAdd() {
  $("#dialog-2").dialog("open");
}
function openBonusAdd(){
  $("#dialog-4").dialog("open");
}
function addProducts() {
  var m = document.getElementById("adjustButtonI");
  m.onclick = function () {
    var listproducts = JSON.parse(localStorage.getItem("item"));
    var name = document.getElementById("nameII").value;
    var price = document.getElementById("priceII").value;
    var src = document.getElementById("fileUploadII").value.substring(12);
    var type = document.getElementById("typeII").value;
    var sameName='no same'
   if(name!=""&&price!=""&&src!=""&&!isNaN(parseInt(price))){
      for(let item of listproducts){
        if(item.name==name){
          sameName=name;
        }
      }
     if(sameName=='no same'){
      listproducts.push({
        name: name,
        type: type,
        srcpice:price+" đồng",
        heso:"0",
        src: src,
        price: parseInt(parseInt(price)-(parseInt(price)*(parseInt(0)/100))),
        value: "1",
      });
      localStorage.setItem("item", JSON.stringify(listproducts));
      renderProducts();
      settingProducts();
      saveSetting();
      Swal.fire({
        icon: 'success',
        title: 'Đã thêm sản phẩm mới',
        showConfirmButton: false,
        timer: 1500
      })
     }
     else{
      Swal.fire({
        icon: 'error',
        title: 'Lỗi',
        text: 'Sai dữ liệu hoặc đã có món hàng trùng tên !',
        
      })
    }
   }else{
    Swal.fire({
      icon: 'error',
      title: 'Lỗi',
      text: 'Sai dữ liệu hoặc đã có món hàng trùng tên !',
      
    })
   }

    $("#dialog-2").dialog("close")
  };
}
function addBonusProducts() {
  var m = document.getElementById("adjustButtonIV");
  m.onclick = function () {
    var listproducts = JSON.parse(localStorage.getItem("item"));
    var name = document.getElementById("nameIV").value;
    var price = document.getElementById("priceIV").value;
    var src = document.getElementById("fileUploadIV").value.substring(12);
    var sameName='no same'
    var heso = document.getElementById("hesoIV").value;
    if(name!=""&&price!=""&&src!=""&&!isNaN(parseInt(price))&&!isNaN(parseInt(heso))){
      for(let item of listproducts){
        if(item.name==name){
          sameName=name;
        }
      }
     if(sameName=='no same'){
      listproducts.push({
        name: name,
        type: 'bonus',
        srcpice:price+" đồng",
        heso:heso,
        src: src,
        price: parseInt(parseInt(price)-(parseInt(price)*(parseInt(heso)/100))) ,
        value: "1",
      });
      localStorage.setItem("item", JSON.stringify(listproducts));
      renderProducts();
      settingProducts();
      saveSetting();
      Swal.fire({
        icon: 'success',
        title: 'Đã thêm sản phẩm mới',
        showConfirmButton: false,
        timer: 1500
      })
     }
     else{
      Swal.fire({
        icon: 'error',
        title: 'Lỗi',
        text: 'Sai dữ liệu hoặc đã có món hàng trùng tên !',
        
      })
    }
   }else{
    Swal.fire({
      icon: 'error',
      title: 'Lỗi',
      text: 'Sai dữ liệu hoặc đã có món hàng trùng tên !',
      
    })
   }

    $("#dialog-4").dialog("close")
  };
}
renderListAccount();
deleteAccount();
renderCartAdmin();
confirmCart();
renderProducts();
settingProducts();
saveSetting();
addProducts();
addBonusProducts();
