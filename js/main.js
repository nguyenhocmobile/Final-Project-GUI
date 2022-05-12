var getlistproduct=localStorage.getItem('item')
var getcart = localStorage.getItem('cart')
var listproduct;
var getlistproduct = localStorage.getItem("item");
function getproduct() {
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
          name: " Mì spaghetti số bò bằm",
          type: "odd dish",
          src: "Image/anh2.png",
          price: "45000 đồng",
          value: "1",
        },
        {
          name: " Mì spaghetti cay",
          type: "odd dish",
          src: "Image/anh3.png",
          price: "35000 đồng",
          value: "1",
        },
        {
          name: " Khoai tây chiên",
          type: "odd dish",
          src: "Image/anh4.png",
          price: "20000 đồng",
          value: "1",
        },
        {
          name: " Bò bít tết",
          type: "odd dish",
          src: "Image/anh5.png",
          price: "55000 đồng",
          value: "1",
        },
        {
          name: " Hamberger bò",
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
        },
      ];
      localStorage.setItem("item", JSON.stringify(listproduct));
    }
  }
function createCart(){
    if(getcart){
        listCart=JSON.parse(getcart)
    }else{
        listCart=[];
        
    }
    localStorage.setItem('cart',JSON.stringify(listCart))
 }
 getproduct();
 createCart();