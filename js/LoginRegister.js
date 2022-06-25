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
      alert(
        "Đã có có người sử dụng gmail này để đăng kí !\n Vui lòng sử dụng gmail khác !"
      );
    } else if (checkAcc) {
      alert("Đã có người sử dụng tên đăng nhập này rồi !");
    } else {
      var filter =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!filter.test(gmail.value)) {
        alert("Địa chỉ Email không hợp lệ.\nVí dụ: Example@gmail.com");
        gmail.focus;
        return false;
      }

      if (gmail.value.length == 0) {
        alert("gmail ko được để trống !");
        gmail.focus();
        return false;
      }

      if (username.value.length == 0) {
        alert("Tên người dùng ko được để trống !");
        username.focus();
        return false;
      }

      if (password.value.length == 0) {
        alert("Mật khẩu ko được để trống !");
        password.focus();
        return false;
      }

      if (REpassword.value != password.value) {
        alert("Mật khẩu và mật khẩu xác nhận phải giống nhau !");
        REpassword.focus();
        return false;
      }

      if (!RadioOption.checked) {
        alert("Bạn phải xác nhận chấp nhận điều khoảng của chúng tôi !");
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
      alert("Đăng kí tài khoản thành công !\n Chúc bạn mua sắm vui vẻ");
      document.querySelector(".form-login").classList.remove("isOpenLR");
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
  var isLogin = document.querySelector(".js-isLogin");
  var logout = document.querySelector(".header-navbar-logout");
  var header = document.querySelector(".header");
  var container = document.querySelector(".container");

  isLogin.addEventListener("click", () => {
    logout.classList.add("is-Logout");
    event.stopPropagation();
  });

  logout.onclick = () => {
    window.location.reload();
  };
  header.addEventListener("click", () => {
    logout.classList.remove("is-Logout");
  });

  container.addEventListener("click", () => {
    logout.classList.remove("is-Logout"); //
  });
}
// function logout admin
function Handle_LogOutAdmin() {
  var isLogin = document.querySelector(".js-isLogin");
  var logout = document.querySelector(".header-navbar-logout");
  var header = document.querySelector(".header");
  var container = document.querySelector(".container");
  var temp = document.querySelector(".js-isLogin > a");

  isLogin.addEventListener("click", () => {
    logout.classList.add("is-Logout");
    event.stopPropagation();
  });

  logout.onclick = () => {
    window.location.reload();
  };

  header.addEventListener("click", () => {
    logout.classList.remove("is-Logout");
  });

  container.addEventListener("click", () => {
    logout.classList.remove("is-Logout"); //
  });
  temp.addEventListener("click", () => {
    event.stopPropagation();
  });
}
// xử lí form from
function login() {
  var btnLogin = document.querySelector("#js-btn-login");
  btnLogin.addEventListener("click", () => {
    var username = document.getElementById("js-LG_account");
    var password = document.getElementById("js-LG_password");
    var userArray = JSON.parse(localStorage.getItem("user"));

    if (username.value.length === 0) {
      alert("vui lòng nhập tên tài khoản !");
      username.focus();
      return false;
    }

    if (password.value.length === 0) {
      alert("vui lòng nhập mật khẩu !");
      password.focus();
      return false;
    }
    var checkAcc = userArray.some((item) => {
      return item.username == username.value;
    });

    if (!checkAcc) {
      alert("Tên tài khoản không tồn tại !");
    } else {
      for (i = 0; i < userArray.length; i++) {
        // nếu người đăng nhập là Admin
        if (
          userArray[i].username == username.value &&
          userArray[i].password == password.value &&
          userArray[i].userType === "admin"
        ) {
          document.querySelector(".js-HandlerLR").innerHTML = `
							<a href="./admin.html" style="color: black; text-decoration: none;" target="_blank">
								<i class="header-user--icon fas fa-user-cog"></i>
							</a>
							<span id="js-Username">${userArray[i].username}</span>
							<div class="header-navbar-logout is-absoluted">Đăng xuất</div>
					`;
          document.querySelector(".js-HandlerLR").classList.add("js-isLogin"); // thêm class is_Login
          document.getElementById("dangnhap").remove();
          Handle_LogOutAdmin();
          break;
        } else {
          if (
            userArray[i].username == username.value &&
            userArray[i].password != password.value
          ) {
            alert("Sai mật khẩu !");
            break;
          }

          if (
            userArray[i].username == username.value &&
            userArray[i].password == password.value
          ) {
            document.querySelector(".js-HandlerLR").innerHTML = `
								<i class="header-user--icon far fa-user"></i>
								<span id="js-Username">${userArray[i].username}</span>
								<div class="header-navbar-logout is-absoluted">Đăng xuất</div>
						`;
            document.querySelector(".js-HandlerLR").classList.add("js-isLogin");
            document.getElementById("dangnhap").remove();
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
function dieu_huong() {
  document.getElementById("dangnhap").style.visibility = "visible";
}
function dong() {
  document.getElementById("dangnhap").style.visibility = "hidden";
}

login();
register();
