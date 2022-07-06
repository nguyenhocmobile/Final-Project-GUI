// Rigester from
function register() {
  var btnRegister = document.querySelector("#js-btn-register");
  btnRegister.addEventListener("click", () => {
    var today = new Date();
    var userArray = JSON.parse(localStorage.getItem("user"));
    var gmail = document.getElementById("js-RG_gmail");
    var username = document.getElementById("js-RG_account");
    var password = document.getElementById("js-RG_password");
    var REpassword = document.querySelector("#js-RG_RePassword");
    var RadioOption = document.querySelector("#js-RG_radio");
    var RegisterDay =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    var checkAcc = userArray.some((item) => {
      return item.username == username.value;
    });

    var checkGmail = userArray.some((item) => {
      return item.gmail == gmail.value;
    });

    if (checkGmail) {
    
     
      Swal.fire({
        icon: 'error',
        title: 'Lỗi đăng nhập',
        text: 'Đã có có người sử dụng gmail này để đăng kí !\n Vui lòng sử dụng gmail khác !',
      })
    } else if (checkAcc) {
 
     
      Swal.fire({
        icon: 'error',
        title: 'Lỗi đăng nhập',
        text: 'Đã có người sử dụng tên đăng nhập này rồi !',
      })
    } else {
      var filter =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!filter.test(gmail.value)) {
      
        gmail.focus;
        
        Swal.fire({
          icon: 'error',
          title: 'Lỗi đăng nhập',
          text: 'Địa chỉ Email không hợp lệ.\nVí dụ: Example@gmail.com',
        })
        return false;
      }

      if (gmail.value.length == 0) {
     
        gmail.focus();
   
        Swal.fire({
          icon: 'error',
          title: 'Lỗi đăng nhập',
          text: 'gmail ko được để trống !',
        })
        return false;
      }

      if (username.value.length == 0) {
 
        username.focus();
      
        Swal.fire({
          icon: 'error',
          title: 'Lỗi đăng nhập',
          text: 'Tên người dùng ko được để trống !',
        })
        return false;
      }

      if (password.value.length == 0) {
    
        password.focus();
    
        Swal.fire({
          icon: 'error',
          title: 'Lỗi đăng nhập',
          text: 'Mật khẩu ko được để trống !',
        })
        return false;
      }

      if (REpassword.value != password.value) {

        REpassword.focus();
   
        Swal.fire({
          icon: 'error',
          title: 'Lỗi đăng nhập',
          text: 'Mật khẩu và mật khẩu xác nhận phải giống nhau !!',
        })
        return false;
      }

      if (!RadioOption.checked) {
    
      
        Swal.fire({
          icon: 'error',
          title: 'Lỗi đăng nhập',
          text: 'Bạn phải xác nhận chấp nhận điều khoản của chúng tôi !',
        })
        return false;
      }

      var user = {
        username: username.value,
        password: password.value,
        gmail: gmail.value,
        RegisterDay: RegisterDay,
        userType: "user",
      };
      userArray.push(user);
      localStorage.setItem("user", JSON.stringify(userArray));
      Swal.fire({
    
        icon: 'success',
        title: 'Your work has been saved',
        text:"Đăng kí tài khoản thành công !\n Chúc bạn mua sắm vui vẻ",
        showConfirmButton: false,
        timer: 1500
      })
 
      document.querySelector(".form-login").classList.remove("isOpenLR");
      dong()
      document.getElementById("dangnhap").style.visibility = "hidden";
      gmail.value = "";
      username.value = "";
      password.value = "";
      REpassword.value = "";
      RadioOption.checked = false;
    }
  });
}
//  function logout user
function Handle_LogOut() {
  var isLogin = document.querySelectorAll(".js-isLogin");
  var logout = document.querySelectorAll(".header-navbar-logout");
  
  for(let element of isLogin){

    element.addEventListener("click", () => {
      for(let el of logout){
        el.classList.add("is-Logout");
        event.stopPropagation();
      }
 
    });
  }

for(let element of logout){
  element.onclick = () => {
    window.location.reload();
  };
}
 
}
// function logout admin
function Handle_LogOutAdmin() {
  var isLogin = document.querySelectorAll(".js-isLogin");
  var logout = document.querySelectorAll(".header-navbar-logout");

  var temp = document.querySelectorAll(".js-isLogin > a");

  for(let element of isLogin){
    element.addEventListener("click", () => {
      logout.classList.add("is-Logout");
      event.stopPropagation();
    });
  }

  for(let element of logout){
    element.onclick = () => {
      window.location.reload();
    };
  }

  for(let element of temp){
    el.addEventListener("click", () => {
      event.stopPropagation();
    });
  }
}
// xử lí form from
function login() {
  var btnLogin = document.querySelector("#js-btn-login");
  btnLogin.addEventListener("click", () => {
    var username = document.getElementById("js-LG_account");
    var password = document.getElementById("js-LG_password");
    var userArray = JSON.parse(localStorage.getItem("user"));

    if (username.value.length === 0) {
      username.focus();
     
      Swal.fire({
        icon: 'error',
        title: 'Lỗi đăng nhập',
        text: 'Vui lòng nhập tên tài khoản !',
      })
  
      return false;
    }

    if (password.value.length === 0) {
      
      password.focus();
    
      Swal.fire({
        icon: 'error',
        title: 'Lỗi đăng nhập',
        text: 'vui lòng nhập mật khẩu !',
      })

      return false;
    }
    var checkAcc = userArray.some((item) => {
      return item.username == username.value;
    });

    if (!checkAcc) {
    
      Swal.fire({
        icon: 'error',
        title: 'Lỗi đăng nhập',
        text: 'Tên tài khoản không tồn tại !',
      })
    } else {
      for (i = 0; i < userArray.length; i++) {
        // nếu người đăng nhập là Admin
        if (
          userArray[i].username == username.value &&
          userArray[i].password == password.value &&
          userArray[i].userType === "admin"
        ) {
          let showTitle =document.querySelectorAll(".js-HandlerLR");
            for(let element of showTitle){
              element.innerHTML = `
							<a href="./admin.html" style="color: black; text-decoration: none;" target="_blank">
								<i class="header-user--icon fas fa-user-cog"></i>
							</a>
							<span id="js-Username">${userArray[i].username}</span>
							<div class="header-navbar-logout is-absoluted">Đăng xuất</div>
					`;
                element.classList.add("js-isLogin");
            }
      
          document.getElementById("dangnhap").remove();
          Swal.fire({
         
            icon: 'success',
            title: 'Đăng nhập thành công',
            showConfirmButton: false,
            timer: 1500
          })
          Handle_LogOutAdmin();
          break;
        } else {
          if (
            userArray[i].username == username.value &&
            userArray[i].password != password.value
          ) {
        
            Swal.fire({
              icon: 'error',
              title: 'Lỗi đăng nhập',
              text: 'Sai mật khẩu !',
            })
            break;
          }

          if (
            userArray[i].username == username.value &&
            userArray[i].password == password.value
          ) {
            let showTitle =document.querySelectorAll(".js-HandlerLR")
            for(let element of showTitle){
              element.innerHTML = `
              <i class="header-user--icon far fa-user"></i>
              <span id="js-Username">${userArray[i].username}</span>
              <div class="header-navbar-logout is-absoluted">Đăng xuất</div>
          `;
            element.classList.add("js-isLogin");
            }
            document.getElementById("dangnhap").remove();
            Swal.fire({
         
              icon: 'success',
              title: 'Đăng nhập thành công',
              showConfirmButton: false,
              timer: 1500
            })
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
            Handle_LogOut();
          }
        }
      }
    }
  });
}
// -----------------------------------------------------------------
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};
function delay(){
  document.body.classList.remove('hidden')
  document.getElementById('login-ctn').style.animation='rotation 0.6s infinite linear';
  document.getElementById('login-ctn').style.animationIterationCount='1';
}
function dieu_huong() {
  document.getElementById("dangnhap").style.visibility = "visible";
    setTimeout(delay,0)
}
function dong() {
  
  document.getElementById("dangnhap").style.visibility = "hidden";
  document.body.classList.add('hidden')
  document.getElementById('login-ctn').style.animation='';
  document.getElementById('login-ctn').style.animationIterationCount='';
}

login();
register();
