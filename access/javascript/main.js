// show login form onclick
function showLoginFormFnc() {
  document.getElementById("modal-id").classList.add("show-component");
  document.getElementById("login-form-id").classList.add("show-component");
}

// hide login form onclick
function hideLoginFormFnc() {
  document.getElementById("modal-id").classList.remove("show-component");
  document.getElementById("login-form-id").classList.remove("show-component");
}

// show register form onclick
function showRegisterFormFnc() {
  document.getElementById("modal-id").classList.add("show-component");
  document.getElementById("register-form-id").classList.add("show-component");
}

// hide register form onclick
function hideRegisterFormFnc() {
  document.getElementById("modal-id").classList.remove("show-component");
  document.getElementById("register-form-id").classList.remove("show-component");
}

function setProductType(typeID, type) {
  this.typeID = typeID;
  this.type = type;
}

function setProductItem(typeID, productID, name, price, sale, img) {
  this.typeID = typeID;
  this.productID = productID;
  this.name = name;
  this.price = price;
  this.sale = sale;
  this.img = img;
}

function setCartItem(cartID, product) {
  this.cartID = cartID;
  this.product = product;
}

// type list

function createType() {
  var arrType = [new setProductType("nike-id", "Nike"), new setProductType("adidas", "Adidas"), new setProductType("fila", "Fila"), new setProductType("champion", "Champion")];
  if (localStorage.getItem("listype") == null) {
    localStorage.setItem("listype", JSON.stringify(arrType));
  }
}

var arrProduct = [];

function createProduct() {
  arrProduct = [
    new setProductItem("nike-id", "nike-01", "nike 01", "1000", "1000000", "nike-1.jpg"),
    new setProductItem("nike-id", "nike-02", "nike 02", "2000", "900", "nike-2.jpg"),
    new setProductItem("nike-id", "nike-03", "nike 03", "3000", "1000", "nike-3.jpg"),
    new setProductItem("nike-id", "nike-04", "nike 04", "4000", "1100", "add-1.jpg"),
    new setProductItem("nike-id", "nike-05", "nike 05", "5000", "1200", "add-2.jpg"),
    new setProductItem("nike-id", "nike-06", "nike 06", "6000", "1300", "nike-1.jpg"),
    new setProductItem("nike-id", "nike-07", "nike 07", "7000", "1400", "nike-2.jpg"),
    new setProductItem("nike-id", "nike-08", "nike 08", "8000", "1500", "nike-3.jpg"),
    new setProductItem("nike-id", "nike-09", "Nike 09", "999", "1000", "add-1.jpg"),
    new setProductItem("nike-id", "nike-10", "nike 10", "250", "1000", "add-2.jpg"),
    new setProductItem("nike-id", "nike-11", "Nike 11", "1", "100", "nike-1.jpg"),
    new setProductItem("nike-id", "nike-12", "Nike 12", "1", "100", "nike-1.jpg"),
    new setProductItem("nike-id", "nike-14", "Nike 14", "1", "100", "nike-1.jpg"),
    new setProductItem("nike-id", "nike-13", "Nike 13", "1", "100", "nike-1.jpg"),
    new setProductItem("nike-id", "nike-15", "Nike 15", "5", "100", "nike-1.jpg"),
    new setProductItem("nike-id", "nike-16", "Nike 16", "5", "100", "nike-1.jpg"),
  ];
  if (localStorage.getItem("listproduct") == null) {
    localStorage.setItem("listproduct", JSON.stringify(arrProduct));
  }
}

// show product type list onload
function showProductTypeListFnc() {
  listType = "";

  arrayType = JSON.parse(localStorage.getItem("listype"));

  for (let i = 0; i < arrayType.length; i++) {
    var type = '<li class="product-type__item"  id="' + arrayType[i].typeID + '" onclick"showHomeProductList(0,15,1)"><a href="#home-product-id" class="product-type__item-link">' + arrayType[i].type + "</a></li>";
    listType += type;
  }

  document.getElementById("product-type-list-id").innerHTML = listType;
}

var tempProductArr = []; // show home product list
// hiển thị sản phẩm từ file JSON
function showHomeProductList(pageNumber, maxIndex, noOfPages) {
  var productRow = "";
  var k = maxIndex * pageNumber;
  var t = 0;

  console.log("k=" + k);

  var arrayProduct = JSON.parse(localStorage.getItem("listproduct"));

  // console.log(arrayProduct);

  for (let i = 0; i < 3; i++) {
    if (arrayProduct[k] == null) {
      break;
    } else {
      var productCols = "";
      for (let j = 0; j < 5; j++) {
        if (arrayProduct[k] == null) {
          break;
        } else {
          tempProductArr[t] = arrayProduct[k];
          console.log(tempProductArr[t].img);
          var productCol =
            '<div class="grid__col-2-4"><div class="home-product__item"><a href="" class="home-product__item-link"><img src="./access/image/product/' +
            tempProductArr[t].img +
            '" alt="product image" class="home-product__item-img" /></a><!-- product detail --><div class="home-product__item-container"><div class="home-product__item-title">' +
            tempProductArr[t].name +
            '</div><div class="home-product__item-price">Giá gốc: <span>' +
            tempProductArr[t].price +
            ' $</span></div><div class="home-product__item-sale">Giảm giá: ' +
            tempProductArr[t].sale +
            ' $</div><div class="home-product__item-btn-field"><button id="' +
            tempProductArr[t].productID +
            '" class="home-product__item-cart-insert btn" onclick="cartAddItem(this.id);">Thêm vào giỏ hàng</button><a href="#" class="home-product__item-link-btn"><button class="home-product__item-buy-btn btn">Mua Ngay</button></a></div></div></div></div>';
          productCols += productCol;
          k++;
          t++;
        }
      }
      productRow += ' <div class="grid__row">' + productCols + "</div>";
    }
  }

  document.getElementById("home-product-id").innerHTML = '<div class="grid">' + productRow + "</div>";

  // for (let i = 0; i < noOfPages; i++) {
  //   if (i == pageNumber) {
  //     document.getElementById("paginationPageNumber-" + pageNumber).classList.add("home-product-pagination-page--actived");
  //   } else {
  //     document.getElementById("paginationPageNumber-" + i).classList.remove("home-product-pagination-page--actived");
  //   }
  // }
}

function cartAddItem(id) {
  console.log(id);
  for (let i = 0; i < tempProductArr.length; i++) {
    if (tempProductArr[i].productID == id) {
      console.log(tempProductArr[i]);
    }
  }
}

function showCartItemList() {
  // empty cart HTML
  var emptyCart = '<div class="page-header-top__right-cart-show empty-cart"><div class="page-header-top__right-cart-empty-noti">Giỏ hàng trống</div></div>';

  // var cartItemBody = '<div class="page-header-top__right-cart-info"><div class="page-header-top__right-cart-name">Tên SP</div><div class="page-header-top__right-cart-quantity">SL: <span>2</span></div><div class="page-header-top__right-cart-total-price">Thành tiền: <span>1000$</span></div></div>';

  var cartItemHead = '<div class="page-header-top__right-cart-item"><img src="./access/image/product/nike-boston.jpg" alt="" class="page-header-top__right-cart-img" />';

  var cartItemTail = '<div class="page-header-top__right-cart-remove"><button class="page-header-top__right-cart-remove-btn">Xoá</button></div></div>';

  if (cartArr.length == 0) {
    document.getElementById("page-header-top__right-cart-box-id").innerHTML = emptyCart;
  } else {
    // pay button HTML
    var pay = '<div class="page-header-top__right-cart-pay"><button class="page-header-top__right-cart-pay-btn btn">Thanh toán</button></div>';

    // cart title HTML

    var cartTitle = '<div class="page-header-top__right-cart-title">Giỏ hàng</div>';
    var cartContainer = "";

    for (let i = 0; i < cartArr.length; i++) {
      var cartItem =
        cartItemHead +
        '<div class="page-header-top__right-cart-info"><div class="page-header-top__right-cart-name">' +
        cartArr[i].product.name +
        '</div><div class="page-header-top__right-cart-quantity">SL: <span>' +
        1 +
        '</span></div><div class="page-header-top__right-cart-total-price">Thành tiền: <span>' +
        cartArr[i].product.sale +
        " $</span></div></div>" +
        cartItemTail;

      cartContainer += cartItem;
    }

    cartContainer = '<div class="page-header-top__right-cart-container">' + cartContainer + "</div>";
    document.getElementById("page-header-top__right-cart-box-id").innerHTML = cartTitle + cartContainer + pay;
  }
}

// check user login
function login() {
  var user = [];
  localStorage.setItem("UserInfo", JSON.stringify(user));
  user = JSON.parse(localStorage.getItem("UserInfo"));
  var userName = document.getElementById("login-form__username").value;
  var password = document.getElementById("login-form__password").value;
  adminArray = JSON.parse(localStorage.getItem("user"));
  if (userName == "" || password == "") {
    alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu");
  } else {
    for (i = 0; i < adminArray.length; i++) {
      if (userName == adminArray[i].userName && password == adminArray[i].password) {
        // window.location = "http://localhost:8080/unitop.vn/Front-end/lambenngoai/web1/do-an-web-1/"
        alert("Dang nhap thanh cong");
        var info = {
          userName: userName,
          fullname: adminArray[i].fullname,
          userType: adminArray[i].userType,
        };
        user.push(info);
        localStorage.setItem("UserInfo", JSON.stringify(user));
        return location.reload();
      }
    }
    alert("Thong tin tai khoan hoạc mat khau khong chinh xac");
  }
}

// logout
function logout() {
  localStorage.removeItem("UserInfo");
  return location.reload();
}

// dang ky thanh vien moi
function reg() {
  var userName = document.getElementById("username").value;
  var phone = document.getElementById("phonenumber").value;
  var fullname = document.getElementById("fullname").value;
  var password = document.getElementById("password").value;
  var password_confim = document.getElementById("password_confirm").value;
  var err_fullname = "";
  var err_userName = "";
  var err_phone = "";
  var err_password = "";
  var err_passwordConfirm = "";
  if (userName == "") {
    err_userName = "<p>Không được bỏ trống userName</p>";
  } else {
    if (userName.length < 8 || userName > 32) {
      err_userName = "<p>Độ dài từ 8 tới 32 ký tự</p>";
    }
  }

  if (fullname == "") {
    err_fullname = "<p>Không được bỏ trống họ và tên</p>";
  } else {
    if (fullname.length < 8 || fullname.length > 32) {
      err_fullname = "<p>Độ dài từ 8 tới 32 ký tự</p>";
    }
  }

  if (phone == "") {
    err_phone = "<p>Không được bỏ trống số điện thoại</p>";
  }
  if (password == "") {
    err_password = "<p>Không được bỏ trống mật khẩu</p>";
  } else {
    if (password.length < 8 || password.length > 32) {
      err_password = "<p>Độ dài từ 8 tới 32 ký tự</p>";
    }
  }
  if (password != password_confim) {
    err_passwordConfirm = "<p>Mật khẩu xác nhận không chính xác</p>";
  }
  document.getElementById("err_userName").innerHTML = err_userName;
  document.getElementById("err_fullname").innerHTML = err_fullname;
  document.getElementById("err_phone").innerHTML = err_phone;
  document.getElementById("err_password").innerHTML = err_password;
  document.getElementById("err_password-confirm").innerHTML = err_passwordConfirm;
  if (err_passwordConfirm == "" && err_userName == "" && err_fullname == "" && err_password == "" && err_phone == "") {
    var user = {
      userName: userName,
      fullname: fullname,
      phone: phone,
      password: password,
      userType: "khachHang",
    };
    userarray = JSON.parse(localStorage.getItem("user"));
    userarray.push(user);
    localStorage.setItem("user", JSON.stringify(userarray));
    alert("Bạn đã đăng ký thành công");
    // window.location = "http://localhost:8080/unitop.vn/Front-end/lambenngoai/web1/do-an-web-1/";
  }
}

// tao admin
function createAdmin() {
  var adminArray = [];
  if (localStorage.getItem("user") == null) {
    var admin1 = {
      userName: "admin",
      password: "admin",
      fullname: "Tran Quang Dao",
      dateSignup: "23-11-1999",
      userType: "admin",
      phone: "099999999",
    };
    var admin2 = {
      userName: "quangdao",
      password: "quangdao",
      fullname: "Tran Van Dong ",
      dateSignup: "23-11-1999",
      userType: "khachHang",
      phone: "099999899",
    };
    adminArray.push(admin1);
    adminArray.push(admin2);
    localStorage.setItem("user", JSON.stringify(adminArray));
  }
}

function showHomeProductPagination() {
  // find number of pages

  var numberOfPages = (20 - (20 % 15)) / 15;

  // find leftItemsQuantity
  var quantityOfPageLeft = 20 - numberOfPages * 15;

  if (quantityOfPageLeft > 0) {
    numberOfPages++;
  }

  var prevArrow = '<a class="home-product-pagination-prev">' + '<ion-icon name="chevron-back-outline"></ion-icon>' + "</a>";
  var nextArrow = '<a class="home-product-pagination-next">' + '<ion-icon name="chevron-forward-outline"></ion-icon>' + "</a>";

  var paginationPage = "";
  for (let i = 0; i < numberOfPages; i++) {
    var paginationPageNumber = '<a id="paginationPageNumber-' + i + '" href="#product-section-id" class="home-product-pagination-page" onclick="showHomeProductList(' + i + ", 15," + numberOfPages + ');">' + parseInt(i + 1) + "</a>";
    paginationPage += paginationPageNumber;
  }

  var pagination = "";
  if (numberOfPages > 1) {
    pagination = prevArrow + paginationPage + nextArrow;
  } else {
    pagination = paginationPage;
  }

  document.getElementById("home-product-pagination-id").innerHTML = pagination;
}

// onload auto tạo form login reg

function createFormLogin() {
  var s =
    '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" onclick="showLoginFormFnc()">Đăng nhập</span></div><div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="showRegisterFormFnc()">Đăng ký</span></div>';
  document.getElementById("form_login_reg").innerHTML = s;
}

function isLogin() {
  // localStorage.removeItem('UserInfo')
  if (localStorage.getItem("UserInfo") == null) {
    createFormLogin();
  } else {
    user = JSON.parse(localStorage.getItem("UserInfo"));
    if (user[0].userType == "khachHang") {
      s =
        '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" >Xin chào: ' +
        user[0].fullname +
        '</span> </div> <div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="logout()" >(Đăng xuất)</span></div>';
      document.getElementById("form_login_reg").innerHTML = s;
    } else {
      s =
        '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" >Xin chào:' +
        user[0].fullname +
        '</span> </div> <div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="logout()" >(Đăng xuất)</span></div><div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span"><a href="admin.html" ><i class="fas fa-forward"></i></a></span></div>';
      document.getElementById("form_login_reg").innerHTML = s;
    }
  }
}

function onloadFnc() {
  createFormLogin();
  createAdmin();
  isLogin();
  // console.log(adminArray);

  createType();
  createProduct();

  showHomeProductList(0, 15, 1);
  showHomeProductPagination();
  showProductTypeListFnc();
  showCartItemList();
}

window.onload = onloadFnc;
