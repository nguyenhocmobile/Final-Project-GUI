

var listproduct;
var listCart;
var getlistwaitingcart=localStorage.getItem('waitItem')


function getproduct() {
  var getlistproduct=localStorage.getItem('item')
    if (getlistproduct) {
      listproduct = JSON.parse(getlistproduct);
    } else {
      listproduct = [
        {
          name: "Combo 3 miếng ức gà áp chảo",
          type: "odd dish",
          src: "Image/anh1.png",
          price: "60000 đồng",
          value: "1",
        },
        {
          name: "Mì spaghetti số bò bằm",
          type: "odd dish",
          src: "Image/anh2.png",
          price: "45000 đồng",
          value: "1",
        },
        {
          name: "Mì spaghetti cay",
          type: "odd dish",
          src: "Image/anh3.png",
          price: "35000 đồng",
          value: "1",
        },
        {
          name: "Khoai tây chiên",
          type: "odd dish",
          src: "Image/anh4.png",
          price: "20000 đồng",
          value: "1",
        },
        {
          name: "Bò bít tết",
          type: "odd dish",
          src: "Image/anh5.png",
          price: "55000 đồng",
          value: "1",
        },
        {
          name: "Hamberger bò",
          type: "odd dish",
          src: "Image/anh6.png",
          price: "35000 đồng",
          value: "1",
        },
  
        {
          name: "Kem ốc quế vị trà xanh",
          type: "ice cream",
          src: "Image/kem1.png",
          price: "15000 đồng",
          value: "1",
        },
        {
          name: "Kem ốc quế vị Chocolate",
          type: "ice cream",
          src: "Image/kem2.png",
          price: "15000 đồng",
          value: "1",
        },
        {
          name: "Kem ốc quế vị dâu tây",
          type: "ice cream",
          src: "Image/kem3.png",
          price: "15000 đồng",
          value: "1",
        },
        {
          name: "Kem viên hạnh phúc",
          type: "ice cream",
          src: "Image/kem4.png",
          price: "30000 đồng",
          value: "1",
        },
        {
          name: "Kem viên như ý",
          type: "ice cream",
          src: "Image/kem5.png",
          price: "45000 đồng",
          value: "1",
        },
  
        {
          name: "Cơm gà đùi lớn",
          type: "alone",
          src: "Image/alone1.png",
          price: "45000 đồng",
          value: "1",
        },
        {
          name: "Gà viên chiên giòn",
          type: "alone",
          src: "Image/alone2.png",
          price: "20000 đồng",
          value: "1",
        },
        {
          name: "Xúc xích Đức",
          type: "alone",
          src: "Image/alone3.png",
          price: "10000 đồng",
          value: "1",
        },
        {
          name: "Cá viên phô mai",
          type: "alone",
          src: "Image/alone4.png",
          price: "30000 đồng",
          value: "1",
        },
        {
          name: "Combo đặc biệt",
          type: "alone",
          src: "Image/alone5.png",
          price: "89000 đồng",
          value: "1",
        },
        {
          name: "Hamberger bò 2 tầng",
          type: "alone",
          src: "Image/alone6.png",
          price: "45000 đồng",
          value: "1",
        },
  
        {
          name: "Combo 1",
          type: "couple",
          src: "Image/couple1.png",
          price: "69000 đồng",
          value: "1",
        },
        {
          name: "Combo 2",
          type: "couple",
          src: "Image/couple2.png",
          price: "109000 đồng",
          value: "1",
        },
        {
          name: "Combo 3",
          type: "couple",
          src: "Image/couple3.png",
          price: "55000 đồng",
          value: "1",
        },   {
          name: "7 Up",
          type: "water",
          src: "Image/7up.png",
          price: "10000 đồng",
          value: "1",
        },
        {
          name: "Ice hương đào",
          type: "water",
          src: "Image/ice.png",
          price: "10000 đồng",
          value: "1",
        },
        {
          name: "Revive",
          type: "water",
          src: "Image/revice.png",
          price: "10000 đồng",
          value: "1",
        },
        {
          name: "Coca Cola",
          type: "water",
          src: "Image/coca.png",
          price: "10000 đồng",
          value: "1",
        },
        {
          name: "Mirinda vị cam",
          type: "water",
          src: "Image/mirinda.png",
          price: "10000 đồng",
          value: "1",
        },
        {
          name: "Pepsi",
          type: "water",
          src: "Image/pepsi.png",
          price: "10000 đồng",
          value: "1",
        },
        {
          name: "Mirinda vị xá xị",
          type: "water",
          src: "Image/xaxi.png",
          price: "10000 đồng",
          value: "1",
        },
        {
          name: "Mirinda vị soda kem",
          type: "water",
          src: "Image/sodakem.png",
          price: "10000 đồng",
          value: "1",
        },
        {
          name: "Pepsi không calo",
          type: "water",
          src: "Image/nocalo.png",
          price: "10000 đồng",
          value: "1",
        },
        {
          name: "Bánh Tiramisu",
          type: "bonus",
          src: "Image/banhsale1.png",
          price: "28000 đồng",
          value: "1",
        },
        {
          name: "Combo khuyến mãi 1",
          type: "bonus",
          src: "Image/gaca.png",
          price: "65000 đồng",
          value: "1",
        },
        {
          name: "Combo khuyến mãi 2",
          type: "bonus",
          src: "Image/bonus2.png",
          price: "55000 đồng",
          value: "1",
        },
        {
          name: "Bánh Pavlova",
          type: "bonus",
          src: "Image/pavlova.png",
          price: "25000 đồng",
          value: "1",
        },
        {
          name: "Bánh Crepe",
          type: "bonus",
          src: "Image/creep.png",
          price: "25000 đồng",
          value: "1",
        },
        {
          name: "Bánh Phomat",
          type: "bonus",
          src: "Image/phomat.png",
          price: "25000 đồng",
          value: "1",
        },
        
      ];
      localStorage.setItem("item", JSON.stringify(listproduct));
    }
  }
function createCart(){
  var getcart = localStorage.getItem('cart')
    if(getcart){
        listCart=JSON.parse(getcart)
    }else{
        listCart=[];
        
    }
    localStorage.setItem('cart',JSON.stringify(listCart))
 }
 function createAccount() {
  var userArray = [];
  if (localStorage.getItem('user') == null) {
      var admin = {
          username: 'admin',
          password: '123',
          gmail: 'admin@gmail.com',
          RegisterDay: `9-2-2002`,
          userType: 'admin',
      };
      userArray.push(admin);
      // Tạo thêm  tài khoản ảo để test
      for (var i = 1; i <= 3; i++) {
          var temp = {
              username: `user${i}`,
              password: `${124 + i}`,
              gmail: `user${i}@gmail.com`,
              RegisterDay: `${i}-1-1999`,
              userType: 'user',
          };
          userArray.push(temp);
      }
      localStorage.setItem('user', JSON.stringify(userArray)); // đẩy dữ liệu lên Local Storage
  }
}
(function(){
   
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 300, 
		offsetOpacity = 1200, 
		scrollDuration = 700,
		scrolling = false;

	if( backTop ) {
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 000) : window.requestAnimationFrame(checkBackToTop);
			}
		});
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();
var hieuung = document.getElementById("check");
hieuung.addEventListener('change', function () {
  document.body.classList.toggle("darkmode")
})
createAccount();
 getproduct();
 createCart();
