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

function setProductItem(typeID, productID, name, price, sale) {
  this.typeID = typeID;
  this.productID = productID;
  this.name = name;
  this.price = price;
  this.sale = sale;
}

function setCartItem(cartID, product) {
  this.cartID = cartID;
  this.product = product;
}

// type list
var arrType = [new setProductType("nike-id", "Nike"), new setProductType("adidas", "Adidas"), new setProductType("fila", "Fila"), new setProductType("champion", "Champion")];

var arrProduct = [
  new setProductItem("nike-id", "nike-01", "nike 01", "1000", "1000000"),
  new setProductItem("nike-id", "nike-02", "nike 02", "2000", "900"),
  new setProductItem("nike-id", "nike-03", "nike 03", "3000", "1000"),
  new setProductItem("nike-id", "nike-04", "nike 04", "4000", "1100"),
  new setProductItem("nike-id", "nike-05", "nike 05", "5000", "1200"),
  new setProductItem("nike-id", "nike-06", "nike 06", "6000", "1300"),
  new setProductItem("nike-id", "nike-07", "nike 07", "7000", "1400"),
  new setProductItem("nike-id", "nike-08", "nike 08", "8000", "1500"),
  new setProductItem("nike-id", "nike-09", "Nike 09", "999", "1000"),
  new setProductItem("nike-id", "nike-10", "nike 10", "250", "1000"),
  new setProductItem("nike-id", "nike-11", "Nike 11", "1", "100"),
];

var cartArr = [new setCartItem("cart-01", arrProduct[0]), new setCartItem("cart-01", arrProduct[1]), new setCartItem("cart-01", arrProduct[2])];

// show product type list onload
function showProductTypeListFnc() {
  listType = "";

  for (let i = 0; i < arrType.length; i++) {
    var type = '<li class="product-type__item id="' + arrType[i].typeID + '" "><a href="" class="product-type__item-link">' + arrType[i].type + "</a></li>";
    listType += type;
  }

  document.getElementById("product-type-list-id").innerHTML = listType;
}

var tempProductArr = [];

// show home product list
function showHomeProductList(pageNumber, maxIndex, arrProduct) {
  var productRow = "";
  var k = maxIndex * (pageNumber - 1);
  var t = 0;

  for (let i = 0; i < 3; i++) {
    if (arrProduct[k] == null) {
      break;
    } else {
      var productCols = "";
      for (let j = 0; j < 3; j++) {
        if (arrProduct[k] == null) {
          break;
        } else {
          tempProductArr[t] = arrProduct[k];
          var productCol =
            '<div class="grid__col-4"><div class="home-product__item"><a href="" class="home-product__item-link"><img src="./access/image/product/nike-boston.jpg" alt="" class="home-product__item-img" /></a><!-- product detail --><div class="home-product__item-container"><div class="home-product__item-title">' +
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

function onloadFnc() {
  showProductTypeListFnc();
  showHomeProductList(1, 9, arrProduct);
  showCartItemList();
}

window.onload = onloadFnc;
