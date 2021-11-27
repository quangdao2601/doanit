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

// type list
var arrType = [new setProductType("nike-id", "Nike"), new setProductType("adidas", "Adidas"), new setProductType("fila", "Fila"), new setProductType("champion", "Champion")];

var arrProduct = [
  new setProductItem("nike-id", "nike-01", "nike 01", "1000$", "800$"),
  new setProductItem("nike-id", "nike-02", "nike 02", "2000$", "900$"),
  new setProductItem("nike-id", "nike-03", "nike 03", "3000$", "1000$"),
  new setProductItem("nike-id", "nike-04", "nike 04", "4000$", "1100$"),
  new setProductItem("nike-id", "nike-05", "nike 05", "5000$", "1200$"),
  new setProductItem("nike-id", "nike-06", "nike 06", "6000$", "1300$"),
  new setProductItem("nike-id", "nike-07", "nike 07", "7000$", "1400$"),
  new setProductItem("nike-id", "nike-08", "nike 08", "8000$", "1500$"),
  new setProductItem("nike-id", "nike-09", "Nike 09", "999$", "1000$"),
  new setProductItem("nike-id", "nike-10", "nike 10", "250$", "1000$"),
  new setProductItem("nike-id", "nike-11", "Nike 11", "1$", "100$"),
];

// show product type list onload
function showProductTypeListFnc() {
  listType = "";

  for (let i = 0; i < arrType.length; i++) {
    var type = '<li class="product-type__item id="' + arrType[i].typeID + '" "><a href="" class="product-type__item-link">' + arrType[i].type + "</a></li>";
    listType += type;
  }

  document.getElementById("product-type-list-id").innerHTML = listType;
}

// show home product list
function showHomeProductList(pageNumber, maxIndex, arrProduct) {
  var productRow = "";
  var tempProductArr = [];
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
          var productCol = '<div class="grid__col-4"><div class="home-product__item">' + tempProductArr[t].name + "-" + tempProductArr[t].price + "</div></div>";
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

function onloadFnc() {
  showProductTypeListFnc();
  showHomeProductList(1, 9, arrProduct);
}

window.onload = onloadFnc;
