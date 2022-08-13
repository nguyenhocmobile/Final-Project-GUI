var listproduct;
var listCart;
var getlistwaitingcart = localStorage.getItem('waitItem')
$(document).ready(function() {
    const d = new Date();
    let hour = d.getHours();

    if (hour > 19 || hour < 5) {
        document.body.classList.toggle("darkmode");
    }
    $("#dialog-1").dialog({
        autoOpen: false,
    })

    let m = document.querySelectorAll(".ui-icon-closethick")
    for (let element of m) {
        element.className = "fa-solid fa-xmark"
    }
});
function getproduct() {
    var getlistproduct = localStorage.getItem('item')
    if (getlistproduct) {
        listproduct = JSON.parse(getlistproduct);
    } else {
        listproduct = [{
                name: "Combo 3 miếng ức gà áp chảo",
                type: "odd dish",
                srcpice: "60000 đồng",
                heso: "0",
                src: "Image/anh1.png",
                price: "60000 đồng",
                value: "1",
            },
            {
                name: "Mì spaghetti số bò bằm",
                type: "odd dish",
                srcpice: "45000 đồng",
                heso: "0",
                src: "Image/anh2.png",
                price: "45000 đồng",
                value: "1",
            },
            {
                name: "Mì spaghetti cay",
                type: "odd dish",
                srcpice: "35000 đồng",
                heso: "0",
                src: "Image/anh3.png",
                price: "35000 đồng",
                value: "1",
            },
            {
                name: "Khoai tây chiên",
                type: "odd dish",
                srcpice: "20000 đồng",
                heso: "0",
                src: "Image/anh4.png",
                price: "20000 đồng",
                value: "1",
            },
            {
                name: "Bò bít tết",
                type: "odd dish",
                srcpice: "55000 đồng",
                heso: "0",
                src: "Image/anh5.png",
                price: "55000 đồng",
                value: "1",
            },
            {
                name: "Hamberger bò",
                type: "odd dish",
                srcpice: "35000 đồng",
                heso: "0",
                src: "Image/anh6.png",
                price: "35000 đồng",
                value: "1",
            },

            {
                name: "Kem ốc quế vị trà xanh",
                type: "ice cream",
                srcpice: "15000 đồng",
                heso: "0",
                src: "Image/kem1.png",
                price: "15000 đồng",
                value: "1",
            },
            {
                name: "Kem ốc quế vị Chocolate",
                type: "ice cream",
                srcpice: "15000 đồng",
                heso: "0",
                src: "Image/kem2.png",
                price: "15000 đồng",
                value: "1",
            },
            {
                name: "Kem ốc quế vị dâu tây",
                type: "ice cream",
                srcpice: "15000 đồng",
                heso: "0",
                src: "Image/kem3.png",
                price: "15000 đồng",
                value: "1",
            },
            {
                name: "Kem viên hạnh phúc",
                type: "ice cream",
                srcpice: "30000 đồng",
                heso: "0",
                src: "Image/kem4.png",
                price: "30000 đồng",
                value: "1",
            },
            {
                name: "Kem viên như ý",
                type: "ice cream",
                srcpice: "45000 đồng",
                heso: "0",
                src: "Image/kem5.png",
                price: "45000 đồng",
                value: "1",
            },

            {
                name: "Cơm gà đùi lớn",
                type: "alone",
                srcpice: "45000 đồng",
                heso: "0",
                src: "Image/alone1.png",
                price: "45000 đồng",
                value: "1",
            },
            {
                name: "Gà viên chiên giòn",
                type: "alone",
                srcpice: "20000 đồng",
                heso: "0",
                src: "Image/alone2.png",
                price: "20000 đồng",
                value: "1",
            },
            {
                name: "Xúc xích Đức",
                type: "alone",
                srcpice: "10000 đồng",
                heso: "0",
                src: "Image/alone3.png",
                price: "10000 đồng",
                value: "1",
            },
            {
                name: "Cá viên phô mai",
                type: "alone",
                srcpice: "30000 đồng",
                heso: "0",
                src: "Image/alone4.png",
                price: "30000 đồng",
                value: "1",
            },
            {
                name: "Combo đặc biệt",
                type: "alone",
                srcpice: "89000 đồng",
                heso: "0",
                src: "Image/alone5.png",
                price: "89000 đồng",
                value: "1",
            },
            {
                name: "Hamberger bò 2 tầng",
                type: "alone",
                srcpice: "45000 đồng",
                heso: "0",
                src: "Image/alone6.png",
                price: "45000 đồng",
                value: "1",
            },

            {
                name: "Combo 1",
                type: "couple",
                srcpice: "69000 đồng",
                heso: "0",
                src: "Image/couple1.png",
                price: "69000 đồng",
                value: "1",
            },
            {
                name: "Combo 2",
                type: "couple",
                srcpice: "109000 đồng",
                heso: "0",
                src: "Image/couple2.png",
                price: "109000 đồng",
                value: "1",
            },
            {
                name: "Combo 3",
                type: "couple",
                srcpice: "55000 đồng",
                heso: "0",
                src: "Image/couple3.png",
                price: "55000 đồng",
                value: "1",
            }, {
                name: "7 Up",
                type: "water",
                srcpice: "10000 đồng",
                heso: "0",
                src: "Image/7up.png",
                price: "10000 đồng",
                value: "1",
            },
            {
                name: "Ice hương đào",
                type: "water",
                srcpice: "10000 đồng",
                heso: "0",
                src: "Image/ice.png",
                price: "10000 đồng",
                value: "1",
            },
            {
                name: "Revive",
                type: "water",
                srcpice: "10000 đồng",
                heso: "0",
                src: "Image/revice.png",
                price: "10000 đồng",
                value: "1",
            },
            {
                name: "Coca Cola",
                type: "water",
                srcpice: "10000 đồng",
                heso: "0",
                src: "Image/coca.png",
                price: "10000 đồng",
                value: "1",
            },
            {
                name: "Mirinda vị cam",
                type: "water",
                srcpice: "10000 đồng",
                heso: "0",
                src: "Image/mirinda.png",
                price: "10000 đồng",
                value: "1",
            },
            {
                name: "Pepsi",
                type: "water",
                srcpice: "10000 đồng",
                heso: "0",
                src: "Image/pepsi.png",
                price: "10000 đồng",
                value: "1",
            },
            {
                name: "Mirinda vị xá xị",
                type: "water",
                srcpice: "10000 đồng",
                heso: "0",
                src: "Image/xaxi.png",
                price: "10000 đồng",
                value: "1",
            },
            {
                name: "Mirinda vị soda kem",
                type: "water",
                srcpice: "10000 đồng",
                heso: "0",
                src: "Image/sodakem.png",
                price: "10000 đồng",
                value: "1",
            },
            {
                name: "Pepsi không calo",
                type: "water",
                srcpice: "10000 đồng",
                heso: "0",
                src: "Image/nocalo.png",
                price: "10000 đồng",
                value: "1",
            },
            {
                name: "Bánh Tiramisu",
                type: "bonus",
                srcpice: "28000 đồng",
                heso: "30",
                src: "Image/banhsale1.png",
                price: "28000 đồng",
                value: "1",
            },
            {
                name: "Combo khuyến mãi 1",
                type: "bonus",
                srcpice: "65000 đồng",
                heso: "25",
                src: "Image/gaca.png",
                price: "65000 đồng",
                value: "1",
            },
            {
                name: "Combo khuyến mãi 2",
                type: "bonus",
                srcpice: "55000 đồng",
                heso: "28",
                src: "Image/bonus2.png",
                price: "55000 đồng",
                value: "1",
            },
            {
                name: "Bánh Pavlova",
                type: "bonus",
                srcpice: "25000 đồng",
                heso: "10",
                src: "Image/pavlova.png",
                price: "25000 đồng",
                value: "1",
            },
            {
                name: "Bánh Crepe",
                type: "bonus",
                srcpice: "25000 đồng",
                heso: "15",
                src: "Image/creep.png",
                price: "25000 đồng",
                value: "1",
            },
            {
                name: "Bánh Phomat",
                type: "bonus",
                srcpice: "25000 đồng",
                heso: "13",
                src: "Image/phomat.png",
                price: "25000 đồng",
                value: "1",
            },

        ];
        var setUp = listproduct.map((a) => {
            return a.price = parseInt(a.srcpice) - (parseInt(a.srcpice) * (parseInt(a.heso) / 100));
        })

        localStorage.setItem("item", JSON.stringify(listproduct));
    }
}

function createCart() {
    var getcart = localStorage.getItem('cart')
    if (getcart) {
        listCart = JSON.parse(getcart)
    } else {
        listCart = [];

    }
    localStorage.setItem('cart', JSON.stringify(listCart))
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
(function() {

    var backTop = document.getElementsByClassName('js-cd-top')[0],
        offset = 300,
        offsetOpacity = 1200,
        scrollDuration = 000,
        scrolling = false;

    if (backTop) {
        window.addEventListener("scroll", function(event) {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 000): window.requestAnimationFrame(checkBackToTop);
            }
        });
        backTop.addEventListener('click', function(event) {
            event.preventDefault();
            (!window.requestAnimationFrame) ? window.scrollTo(0, 0): Util.scrollTo(0, scrollDuration);
        });
    }

    function checkBackToTop() {
        var windowTop = window.scrollY || document.documentElement.scrollTop;
        (windowTop > offset) ? Util.addClass(backTop, 'cd-top--is-visible'): Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
        (windowTop > offsetOpacity) && Util.addClass(backTop, 'cd-top--fade-out');
        scrolling = false;
    }
})();
var hieuung = document.querySelectorAll("#check");
for (var j = 0; j < hieuung.length; j++) {
    hieuung[j].addEventListener('change', function() {
        document.body.classList.toggle('darkmode')
    })
}
$('#js-RG_gmail').on('blur', function() {
        let warning = document.getElementById("warningEmail")
        let confirmEmail = document.getElementById("confirm-Email")
        let error = document.getElementById("errorEmail")
        if (!$(this).val().includes("@gmail.com")) {
            $(this).addClass("changeBorder")
            warning.classList.remove("invisible")
            confirmEmail.classList.add("invisible")
            error.classList.remove("invisible")
        } else {
            $(this).removeClass("changeBorder")
            warning.classList.add("invisible")
            confirmEmail.classList.remove("invisible")
            error.classList.add("invisible")
        }

    })
    // tk
$('#js-RG_account').on('blur', function() {
        var userArray = JSON.parse(localStorage.getItem("user"));
        let warning = document.getElementById("warningAccount")
        let confirmEmail = document.getElementById("confirm-Account")
        let error = document.getElementById("errorAccount")
        let checkwarningAccountExist = document.getElementById("warningAccountExist")
        if (!$(this).val().trim() == "") {
            $(this).removeClass("changeBorder")
            confirmEmail.classList.remove("invisible")
            warning.classList.add("invisible")
            error.classList.add("invisible")
            checkwarningAccountExist.classList.add("invisible")
        } else {

            $(this).addClass("changeBorder")
            confirmEmail.classList.add("invisible")
            warning.classList.remove("invisible")
            error.classList.remove("invisible")
            checkwarningAccountExist.classList.add("invisible")
        }
        for (i = 0; i < userArray.length; i++) {
            if ($(this).val() == userArray[i].username) {
                $(this).addClass("changeBorder")
                confirmEmail.classList.add("invisible")
                checkwarningAccountExist.classList.remove("invisible")
                error.classList.remove("invisible")
            }
        }
    })
    //mk
$('#js-RG_password').on('blur', function() {
        let warning = document.getElementById("warningPasswork")
        let confirmEmail = document.getElementById("confirm-Password")
        let error = document.getElementById("errorPasswork")
        if (!$(this).val().trim() == "") {
            $(this).removeClass("changeBorder")
            confirmEmail.classList.remove("invisible")
            warning.classList.add("invisible")
            error.classList.add("invisible")
        } else {

            $(this).addClass("changeBorder")
            confirmEmail.classList.add("invisible")
            warning.classList.remove("invisible")
            error.classList.remove("invisible")
        }
    })
    // Re mk
$('#js-RG_RePassword').on('blur', function() {
        let warning = document.getElementById("warningRePasswork")
        let confirmEmail = document.getElementById("confirm-RePassword")
        let error = document.getElementById("errorRePasswork")
        let passwork = document.getElementById("js-RG_password").value;
        let checkEqualPass = document.getElementById("warningRePassworkCheckEqual")
        if (!$(this).val().trim() == "") {
            $(this).removeClass("changeBorder")
            confirmEmail.classList.remove("invisible")
            warning.classList.add("invisible")
            error.classList.add("invisible")
            checkEqualPass.classList.add("invisible")
        } else {
            $(this).addClass("changeBorder")
            confirmEmail.classList.add("invisible")
            warning.classList.remove("invisible")
            error.classList.remove("invisible")
            checkEqualPass.classList.add("invisible")
        }
        if ($(this).val() != passwork) {
            $(this).addClass("changeBorder")
            confirmEmail.classList.add("invisible")
            checkEqualPass.classList.remove("invisible")
            error.classList.remove("invisible")
            checkEqualPass.classList.remove("invisible")
            warning.classList.add("invisible")
        } else {
            $(this).removeClass("changeBorder")
            confirmEmail.classList.remove("invisible")
            checkEqualPass.classList.add("invisible")
            error.classList.add("invisible")
            checkEqualPass.classList.add("invisible")
        }

    })
    // Login tk
$('#js-LG_account').on('blur', function() {
        let warning = document.getElementById("warningAccountLG")
        let confirmEmail = document.getElementById("confirm-AccountLG")
        let error = document.getElementById("errorAccountLG")
        if (!$(this).val().trim() == "") {
            $(this).removeClass("changeBorder")
            confirmEmail.classList.remove("invisible")
            warning.classList.add("invisible")
            error.classList.add("invisible")
        } else {

            $(this).addClass("changeBorder")
            confirmEmail.classList.add("invisible")
            warning.classList.remove("invisible")
            error.classList.remove("invisible")
        }
    })
    // Login Mk
$('#js-LG_password').on('blur', function() {
    let warning = document.getElementById("warningPassworkLG")
    let confirmEmail = document.getElementById("confirm-PasswordLG")
    let error = document.getElementById("errorPassworkLG")
    if (!$(this).val().trim() == "") {
        $(this).removeClass("changeBorder")
        confirmEmail.classList.remove("invisible")
        warning.classList.add("invisible")
        error.classList.add("invisible")
    } else {

        $(this).addClass("changeBorder")
        confirmEmail.classList.add("invisible")
        warning.classList.remove("invisible")
        error.classList.remove("invisible")
    }
})
createAccount();
getproduct();
createCart();