var navres = document.getElementById('more-nav')
var boxmore= document.getElementById('box-more')
var getlistproduct=localStorage.getItem('item')
var getcart = localStorage.getItem('cart')
var valueGetCart=JSON.parse(getcart)
var valueGetProduct=JSON.parse(getlistproduct)
var listCart;
navres.onclick = function(){
   boxmore.classList.toggle('visible')
   
}

function addItemtoCart(name,value,img,price,priceforone){ //render sản phẩm khi đã có đủ dữ liệu
      var cartItem ={name:name,value:value,img:img,price:price,priceforone:priceforone}
      valueGetCart.push(cartItem)
      localStorage.setItem('cart',JSON.stringify(valueGetCart));
      
      renderCart();
}

function setObjectCart(){ // tạo dữ liệu cho sản phẩm rồi push lên local storage + render
   var getindex = document.getElementsByClassName('them');
   var getnamebyselect = document.getElementsByClassName('ten')
   for(let j=0;j<getindex.length;j++){
      getindex[j].onclick=function(){
          var findvalue=$(getindex[j]).closest('div').find("input");
          var getname=getnamebyselect[j].textContent;
          for(let i=0;i<valueGetProduct.length;i++){
            if(getname==valueGetProduct[i].name){        
    
               addItemtoCart(getname,findvalue.val(),valueGetProduct[i].src,parseInt(valueGetProduct[i].price)*findvalue.val(),parseInt(valueGetProduct[i].price));
            }
          }
        
      }
  }
}
function gotoCart(){ //chuyển main content sang cart
   var m = document.getElementById('header-cart');
   var l=document.getElementById('content-left');
   var r=document.getElementById('content-right');
   var ctn=document.getElementById('container-cart')
   var ctc=document.getElementById('content-cart')
   m.onclick= function(){
    l.style.display='none';
    r.style.display='none';
    ctn.style.display='block'
    ctc.style.display='block'
    setObjectCart();
    renderCart();
    deleteItemfromCart();
    additem();
    subtractitem()
   }
}
function renderCart(){ //hàm render cart
   
   var result=`<tr>
   <th>Sản Phẩm</th>
   <th>Đơn Giá</th>
   <th>Số Lượng</th>
   <th>Thành Tiền</th>
   <th>Thao Tác</th>
</tr>`
   for(let i=0;i<valueGetCart.length;i++){
      result+=`<tr>
      <th><img src=${valueGetCart[i].img}>
         <p>${valueGetCart[i].name}</p>
      </th><th>
      ${valueGetCart[i].priceforone} đồng
      </th>
      <th><button class="subtractCart" id="subtractCart" >-</button>${valueGetCart[i].value} <button class="addCart" id="addCart">+</button></th>
      <th>${valueGetCart[i].price} đồng</th>
      <th><Button id="deleteItem"  class="deleteItem">Xóa</Button></th>
   </tr>`
   }
      result+=`<tr><p>Tổng tiền :${sumOfAllItem()} đồng</p></tr>`
      if(valueGetCart.length==0){
         result=`<img src="Image/cart.png" alt="">`;
      }else{
         result=result;
      }
   document.getElementById("tableCart").innerHTML=result;
   
}
  
   function sumOfAllItem(){ //tổng tiền của tất cả sản phẩm trong cart
      var result=0;
      for(let i=0;i<valueGetCart.length;i++){
         result+=valueGetCart[i].price;
      }
      return result;
   }
   function deleteItemfromCart(){ //xóa sản phẩm khỏi cart
      var m=document.getElementsByClassName("deleteItem")
      for(let i=0;i<m.length;i++){
         m[i].onclick=function(){
              valueGetCart.splice(i,1);
              localStorage.setItem('cart',JSON.stringify(valueGetCart));
      renderCart();
      deleteItemfromCart()
         }
      }
   }
 function additem(){ //thêm số lượng sản phẩm cùng loại
      var getindex = document.getElementsByClassName("addCart");
      for (let j = 0; j < getindex.length; j++) {

        getindex[j].onclick = function () {
         var m=valueGetCart[j].value;
         valueGetCart[j].value=parseInt(m)+1;
         valueGetCart[j].price=parseInt(valueGetCart[j].priceforone)*parseInt(valueGetCart[j].value)
         localStorage.setItem('cart',JSON.stringify(valueGetCart));
         setObjectCart();
         renderCart();
         deleteItemfromCart()
         additem()
         subtractitem()
         };
     
      }
     
   }
   function subtractitem(){ //giảm số lượng sản phẩm cùng loại
      var getindex = document.getElementsByClassName("subtractCart");
      for (let j = 0; j < getindex.length; j++) {
        getindex[j].onclick = function () {
         var m=valueGetCart[j].value;
         if(m>=2){
            valueGetCart[j].value=parseInt(m)-1;
            valueGetCart[j].price=parseInt(valueGetCart[j].priceforone)*parseInt(valueGetCart[j].value)
            localStorage.setItem('cart',JSON.stringify(valueGetCart));
            setObjectCart();
            renderCart();
            deleteItemfromCart()
            additem()
            subtractitem()
         }else{
            valueGetCart[j].value=parseInt(1);
            valueGetCart[j].price=parseInt(valueGetCart[j].priceforone)*parseInt(valueGetCart[j].value)
            localStorage.setItem('cart',JSON.stringify(valueGetCart));
            setObjectCart();
            renderCart();
            deleteItemfromCart()
            additem()
            subtractitem()
         }
         };
     
      }
     
   }
   createCart()
gotoCart();
setObjectCart();
renderCart();
deleteItemfromCart()
additem()
subtractitem()