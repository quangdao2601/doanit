// show home page
function showHomePage() {
  window.location = "index.html";
}

// show danh sach danh muc trong select
function showtype() {
  listTypes = JSON.parse(localStorage.getItem("listype"));
  var s = "";

  for (i = 0; i < listTypes.length; i++) {
    s += "    <option value='" + listTypes[i].typeID + "'>" + listTypes[i].type + "</option>";
  }

  document.getElementById("type_product").innerHTML = s;
}

// show ds sp
function showproduct(obj) {
  products = JSON.parse(localStorage.getItem("listproduct"));
  var s = "";
  s += "<table class='tbl-product'> <thead><tr><th>Mã sản phẩm</th><th>Type</th><th>Ảnh</th><th>Tên</th><th>Gía</th><th>Thao tác</th></tr></thead><tbody>";
  for (i = 0; i < obj; i++) {
    s +=
      "<tr><td>" +
      products[i].productID +
      "</td><td>" +
      products[i].typeID +
      "</td><td><img src='access/image/product/" +
      products[i].img +
      "' alt=''></td><td>" +
      products[i].name +
      "</td><td>" +
      products[i].price +
      "</td><td><i id='" +
      products[i].productID +
      "' onclick='deleteproduct(this)' class='fas fa-trash-alt'></i>   ----  <i id='" +
      products[i].productID +
      "' onclick='showformupdate(this)' class='fas fa-pen-alt'></i></td> </tr>";
  }
  s += "</tbody></table>";
  document.getElementById("list").innerHTML = s;
}

// showform update sản phẩm
function showformupdate(obj) {
  document.getElementById("update").classList.add("hien");
  listproduct = JSON.parse(localStorage.getItem("listproduct"));
  document.getElementById("list").innerHTML = "";
  document.getElementById("right").innerHTML = "";
  document.getElementById("paginate").innerHTML = "";
  for (i = 0; i < listproduct.length; i++) {
    if (obj.id == listproduct[i].productID) {
      document.getElementById("nameupdate").value = listproduct[i].name;
      document.getElementById("priceupdate").value = listproduct[i].price;
      document.getElementById("codeupdate").value = listproduct[i].productID;
      var infocode = document.getElementById("codeupdate");
      infocode.setAttribute("readonly", "readonly");
      document.getElementById("typeIDproduct").value = listproduct[i].typeID;
      var infotype = document.getElementById("typeIDproduct");
      infotype.setAttribute("readonly", "readonly");
      var info = document.getElementById("infoproduct");
      info.setAttribute("src", "access/image/product/" + listproduct[i].image);

      break;
    }
  }
}

// update sản phẩm
function updateproduct() {
  var name = document.getElementById("nameupdate").value;
  var price = document.getElementById("priceupdate").value;
  var code = document.getElementById("codeupdate").value;
  if (name == "" || price == "") {
    alert("Nhập đầy đủ thông tin sản phẩm");
  } else {
    listproduct = JSON.parse(localStorage.getItem("listproduct"));
    for (i = 0; i < listproduct.length; i++) {
      if (code == listproduct[i].productID) {
        listproduct[i].name = name;
        listproduct[i].price = price;
        localStorage.setItem("listproduct", JSON.stringify(listproduct));
        alert("Đã cập nhật sản phẩm thành công");
        location.reload();
      }
    }
  }
}

function hide() {
  document.getElementById("update").classList.remove("hien");
  numproduct = JSON.parse(localStorage.getItem("listproduct"));
  pagination(numproduct.length, 4, 1); // tổng sản phẩm , 3 sản phẩm 1 trang, load sp
  showproduct(4);
  loadform();
  showtype();
}

// xóa sản phẩm
function deleteproduct(obj) {
  products = JSON.parse(localStorage.getItem("listproduct"));
  for (i = 0; i < products.length; i++) {
    if (obj.id == products[i].productID) {
      products.splice(i, 1);
      localStorage.setItem("listproduct", JSON.stringify(products));
      alert("Bạn đã xóa thành công");
      return location.reload();
    }
  }
}

// thêm sản phẩm
function addproduct() {
  var url = document.getElementById("imgproduct").value;
  var img = url.split("\\");
  var imgp = img[2];
  var name = document.getElementById("nameproduct").value;
  var price = document.getElementById("priceproduct").value;
  var code = document.getElementById("codeproduct").value;
  var imgproduct = document.getElementById("imgproduct").value;
  var type = document.getElementById("type_product").value;
  if (imgproduct == "" || name == "" || price == "" || code == "") {
    return alert("Vui lòng nhập đầy đủ thông tin sản phẩm");
  } else {
    listproduct = JSON.parse(localStorage.getItem("listproduct"));
    for (i = 0; i < listproduct.length; i++) {
      if (code == listproduct[i].productID || name == listproduct[i].name) {
        return alert("Sản phẩm đã tồn tại trên hệ thống");
      }
    }
    var info_product = {
      typeID: type,
      productID: code,
      name: name,
      price: price,
      img: imgp,
    };
    listproduct.push(info_product);
    localStorage.setItem("listproduct", JSON.stringify(listproduct));
    alert("Đã thêm sản phẩm thành công");
    return location.reload();
  }
}

// thêm 1 type sản phẩm
function formaddtype() {
  var type = document.getElementById("addtype").value;
  var typeID = document.getElementById("addtypeID").value;
  if (type == "" || typeID == "") {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else {
    listtype = JSON.parse(localStorage.getItem("listype"));
    for (i = 0; i < listtype.length; i++) {
      if (type == listtype[i].type || typeID == listtype[i].typeID) {
        return alert("Type đã tồn tại trên hệ thống");
      }
    }
    var info_type = {
      type: type,
      typeID: typeID,
    };
    listtype.push(info_type);
    localStorage.setItem("listype", JSON.stringify(listtype));
    alert("Bạn đã thêm danh mục thành công");
  }
}

// show danh sách user
function showuser(obj) {
  var s = "";
  listuser = JSON.parse(localStorage.getItem("user"));
  s += "<table class='listuser'><thead><tr><th>Họ và tên</th><th>Username</th><th>Usertype</th><th>Sdt</th></tr></thead><tbody>";
  for (i = 0; i < obj; i++) {
    s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].userName + "</td><td>" + listuser[i].userType + "</td><td>" + listuser[i].phone + "</td></tr>";
  }
  s += "    </tbody></table>";

  document.getElementById("list").innerHTML = s;
  document.getElementById("right").innerHTML = "";
}

// load form them sp them type
function loadform() {
  var s = "";
  s +=
    " <h2>Thêm sản phẩm</h2><form action='' class='form-add' name='formadd'><label for=''>Tên sản phẩm</label > <input type='text' name='nameproduct' id='nameproduct' value='' placeholder='Nhập tên sản phẩm' /><label for=''>Mã sản phẩm</label><input type='text' name='codeproduct' id='codeproduct' value='' placeholder='Nhập mã sản phẩm'/><label for=''>Gía sản phẩm</label><input type='text' name='priceproduct' id='priceproduct' value='' placeholder='Nhập giá sản phẩm' /><label for=''>Chọn danh mục sản phẩm</label><select name='typeproduct' id='type_product'></select> <label for='myfile'>Anh sản phẩm:</label><input type='file' id='imgproduct' name='myfile' /><input type='submit' name='btn-add' id='' onclick='addproduct()' class='btn-add' value='Thêm sản phẩm' /></form><h2>Thêm danh mục sản phẩm</h2><form action='' class='addtype'><label for='add'>Thêm danh mục</label><input type='text' name='type' id='addtype' placeholder='Nhập tên danh mục'><label for=''>Id danh mục</label><input type='text' name='typeID' id='addtypeID' placeholder='Nhập id danh mục'><input type='submit' onclick='formaddtype()' id='submit' value='Thêm danh mục' class='btn-add'></form>";
  document.getElementById("right").innerHTML = s;
}

/// load trang chủ
function loadmain() {
  var s = "Thống kê";
  document.getElementById("list").innerHTML = s;
  document.getElementById("right").innerHTML = "";
  document.getElementById("paginate").innerHTML = "";
}

// xử lý thanh phân trang
function pagination(numproduct, numpage, type) {
  // numproduct:số sản phẩm   numpage:số sản phẩm 1 trang  type 1 là sp 2 là user

  var sotrang = Math.ceil(numproduct / numpage); // số trang
  var s = "";
  s += "<ul class='paginate'>";
  for (i = 1; i <= sotrang; i++) {
    s += "<li onclick='loaddata(this)' typeload='" + type + "' attr=" + numpage + " id='" + i + "'>" + i + "</li>";
  }
  s += "</ul>";
  document.getElementById("paginate").innerHTML = s;
}
// load sản phẩm trên từng thanh phân trang
function loaddata(obj) {
  var page = obj.getAttribute("attr"); // thuộc tính để biết số sản phẩm trong 1 trang
  var type = obj.getAttribute("typeload"); // nếu là 1 thì load sp 2 thì load user
  var id = obj.id;
  var start = (id - 1) * page; // sản phẩm bắt đầu
  products = JSON.parse(localStorage.getItem("listproduct"));
  listuser = JSON.parse(localStorage.getItem("user"));
  var s = "";
  if (type == 1) {
    // nếu =1 thì load sản phẩm
    s += "<table class='tbl-product'> <thead><tr><th>Mã sản phẩm</th><th>Type</th><th>Ảnh</th><th>Tên</th><th>Gía</th><th>Thao tác</th></tr></thead><tbody>";

    if (start - -page >= products.length) {
      for (i = start; i < products.length; i++) {
        s +=
          "<tr><td>" +
          products[i].productID +
          "</td><td>" +
          products[i].typeID +
          "</td><td><img src='access/image/product/" +
          products[i].img +
          "' alt=''></td><td>" +
          products[i].name +
          "</td><td>" +
          products[i].price +
          "</td><td><i id='" +
          products[i].productID +
          "' onclick='deleteproduct(this)' class='fas fa-trash-alt'></i>   ----  <i id='" +
          products[i].productID +
          "' onclick='showformupdate(this)' class='fas fa-pen-alt'></i></td> </tr>";
      }
    } else {
      for (i = start; i < page - -start; i++) {
        s +=
          "<tr><td>" +
          products[i].productID +
          "</td><td>" +
          products[i].typeID +
          "</td><td><img src='access/image/product/" +
          products[i].img +
          "' alt=''></td><td>" +
          products[i].name +
          "</td><td>" +
          products[i].price +
          "</td><td><i id='" +
          products[i].productID +
          "' onclick='deleteproduct(this)' class='fas fa-trash-alt'></i>   ----  <i id='" +
          products[i].productID +
          "' onclick='showformupdate(this)' class='fas fa-pen-alt'></i></td> </tr>";
      }
    }
    s += "</tbody></table>";
  } else {
    // nếu 2 thì load ra user
    s += "<table class='listuser'><thead><tr><th>Họ và tên</th><th>Username</th><th>Usertype</th><th>Sdt</th></tr></thead><tbody>";

    if (start - -page >= listuser.length) {
      for (i = start; i < listuser.length; i++) {
        s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].username + "</td><td>" + listuser[i].usertype + "</td><td>" + listuser[i].phone + "</td></tr>";
      }
    } else {
      for (i = start; i < page - -start; i++) {
        s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].username + "</td><td>" + listuser[i].usertype + "</td><td>" + listuser[i].phone + "</td></tr>";
      }
    }

    s += "</tbody></table>";
  }
  document.getElementById("list").innerHTML = s;
}

function show(obj) {
  switch (obj.id) {
    case "tc": {
      loadmain();
      break;
    }
    case "sp": {
      numproduct = JSON.parse(localStorage.getItem("listproduct"));
      pagination(numproduct.length, 4, 1); // tổng sản phẩm , 3 sản phẩm 1 trang, load sp
      showproduct(4);
      loadform();
      showtype();
      break;
    }
    case "qtv": {
      numuser = JSON.parse(localStorage.getItem("user"));
      pagination(numuser.length, 2, 2); //tổng sản phẩm , 3 sản phẩm 1 trang, load user
      showuser(2);
      break;
    }
    default:
      loadmain();
  }
}

function onloadFnc() {
  numproduct = JSON.parse(localStorage.getItem("listproduct"));
  pagination(numproduct.length, 4, 1); // tổng sản phẩm , 3 sản phẩm 1 trang, load sp
  showproduct(4);
  loadform();
  showtype();
}

window.onload = onloadFnc;
