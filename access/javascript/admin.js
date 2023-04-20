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
function showproduct() {
    products = JSON.parse(localStorage.getItem("listproduct"));
    var s = "";
    s += "<table class='tbl-product'> <thead><tr><th>Mã sản phẩm</th><th>Ảnh</th><th>Tên</th><th>Gía</th><th>Tác Gỉa</th><th>Nhà Xuất bản</th><th>Thao tác</th></tr></thead><tbody>";
    for (i = 0; i < products.length; i++) {
        s +=
            "<tr><td>" +
            products[i].productID +
            "</td><td><img src='access/image/product/" +
            products[i].img +
            "' alt=''></td><td>" +
            products[i].name +
            "</td><td>" +
            products[i].price +
            "</td><td>" + products[i].author + "</td><td>" + products[i].nxb + "</td><td><i id='" +
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
            document.getElementById("detailupdate").value = listproduct[i].detail

            document.getElementById("authorupdate").value = listproduct[i].author
            document.getElementById("nxbupdate").value = listproduct[i].nxb

            var authorupdate = document.getElementById("authorupdate");
            authorupdate.setAttribute("readonly", "readonly")

            var nxbupdate = document.getElementById("nxbupdate");
            nxbupdate.setAttribute("readonly", "readonly")

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
    if (confirm("Bạn có muốn xóa sản phẩm này không ?") == true) {
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
    var detailproduct = document.getElementById("detailproduct").value
    var nxb = document.getElementById("nxb").value;
    var author = document.getElementById("author").value;

    if (imgproduct == "" || name == "" || price == "" || code == "" || author == "" || nxb == "") {
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
            detail: detailproduct,
            nxb: nxb,
            author: author
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
function showuser() {
    var s = "";
    listuser = JSON.parse(localStorage.getItem("user"));
    s += "<table class='listuser'><thead><tr><th>Họ và tên</th><th>Username</th><th>Usertype</th><th>Sdt</th><th>Thao tác</th><th>Xem</th></tr></thead><tbody>";
    if (listuser.length == 1) {
        s += "<tr><td>" + listuser[0].fullname + "</td><td>" + listuser[0].userName + "</td><td>" + listuser[0].userType + "</td><td>" + listuser[0].phone + "</td><td>  <i onclick='updateuser(this)' id='" + listuser[0].userName + "' class='fas fa-pen-alt'></i></td></tr>";
    } else {
        for (i = 0; i < listuser.length; i++) {
            if (listuser[i].userName == "admin") {
                s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].userName + "</td><td>" + listuser[i].userType + "</td><td>" + listuser[i].phone + "</td><td><i onclick='updateuser(this)' id='" + listuser[i].userName + "' class='fas fa-pen-alt'></i></td></tr>";

            } else {
                s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].userName + "</td><td>" + listuser[i].userType + "</td><td>" + listuser[i].phone + "</td><td><i onclick='deleteuser(this)' id='" + listuser[i].userName + "' class='fas fa-trash-alt'></i><td onclick='infouser(this)' id='" + listuser[i].userName + "'>Xem</td></tr>";

            }
        }
    }
    s += "    </tbody></table>";
    var user = ""
    user += "<div class='form-add-user'><h1>Tìm kiếm</h1><input type='text' id='searchslow' value=''  placeholder='Tìm kiếm' ><input type='submit' onclick='searchuser()' value='Tìm kiếm' class='btn-search' ><h1>Thêm thành viên</h1><label>Username</label><input placeholder='Username' type='text' id='usernameReg' value=''><label>Họ và tên</label><input placeholder='Họ và tên' type='text' id='fullnameReg' value=''><label>Số điện thoại</label><input type='text' placeholder='Số điện thoại' id='phoneReg' value=''><label>Mật khẩu</label><input type='password' placeholder='Mật khẩu' value='' id='passwordReg'><label>Nhập lại mật khẩu</label><input type='password' placeholder='Nhập lại mật khẩu' id='passwordConfirmReg' value=''> <input type='submit' value='Thêm thành viên' class='btn-add-user' onclick='adduser()'></div>"
    document.getElementById("list").innerHTML = s;
    document.getElementById("right").innerHTML = user;
}

//  xem thonog tin thanh vien
function infouser(obj) {
    var s = ""
    s += "<h1>Thong tin khach hang</h1>"
    listuser = JSON.parse(localStorage.getItem("user"));
    for (i = 0; i < listuser.length; i++) {
        if (listuser[i].userName == obj.id) {
            s += "<div class='thumbuser'><img src='access/image/product/ava.jpg' ></div>"
            s += "<p>Họ và tên:<strong>" + listuser[i].fullname + "</strong></p><p>Tên đăng nhập:<strong>" + listuser[i].userName + "</strong></p><p>Số điện thoại:<strong>" + listuser[i].phone + "</strong></p><p>Ngày đăng ký:<strong>" + listuser[i].dateSignup + "</strong></p><p>Địa chỉ:<strong>A 39 tổ 25 khu phố 2 phường Trung Mỹ Tây Quận 12 Thành Phố Hồ Chí Minh</strong></p>"
            break
        }
    }
    document.getElementById("list").innerHTML = s;
    document.getElementById("right").innerHTML = "";
    document.getElementById("paginate").innerHTML = "";

}
// THÊM THÀNH VIÊN
function adduser() {
    var usernameReg = document.getElementById("usernameReg").value;
    var fullnameReg = document.getElementById("fullnameReg").value;
    var phoneReg = document.getElementById("phoneReg").value;
    var passwordReg = document.getElementById("passwordReg").value;
    var passwordConfirmReg = document.getElementById("passwordConfirmReg").value;
    if (usernameReg == "" || fullnameReg == "" || phoneReg == "" || passwordReg == "" || passwordConfirmReg == "") {
        alert("Vui lòng nhập đầy đủ thông tin")
    } else {
        if (usernameReg.length < 8 || phoneReg.length < 8 || passwordReg.length < 8) {
            alert("Độ dài username ,số điện thoại,mật khẩu phải trên 8 ký tự")
        } else {
            if (passwordConfirmReg != passwordReg) {
                alert("Mật khẩu xác nhận không chính xác")
            } else {
                var user = {
                    userName: usernameReg,
                    password: passwordReg,
                    fullname: fullnameReg,
                    phone: phoneReg,
                    userType: "admin"
                }
                users = JSON.parse(localStorage.getItem("user"))
                users.push(user)
                localStorage.setItem("user", JSON.stringify(users))
                alert("Đã thêm thành viên")
            }

        }
    }
}
// load form them sp them type
function loadform() {
    var s = "";
    // s += "    </input><form action='' class='form-add' name='formadd'><label for=''>Tên sản phẩm</label > <input type='text' name='nameproduct' id='nameproduct' value='' placeholder='Nhập tên sản phẩm' /><label for=''>Mã sản phẩm</label><input type='text' name='codeproduct' id='codeproduct' value='' placeholder='Nhập mã sản phẩm'/><label for=''>Gía sản phẩm</label><input type='text' name='priceproduct' id='priceproduct' value='' placeholder='Nhập giá sản phẩm' /><label>Chi tiết sản phẩm</label><textarea placeholder='Chi tiêt sản phẩm' id='detailproduct'></textarea><label for=''>Chọn danh mục sản phẩm</label><select name='typeproduct' id='type_product'></select> <label for='myfile'>Anh sản phẩm:</label><input type='file' id='imgproduct' name='myfile' /><input type='submit' name='btn-add' id='' onclick='addproduct()' class='btn-add' value='Thêm sản phẩm' /></form><h2>Thêm danh mục sản phẩm</h2><form action='' class='addtype'><label for='add'>Thêm danh mục</label><input type='text' name='type' id='addtype' placeholder='Nhập tên danh mục'><label for=''>Id danh mục</label><input type='text' name='typeID' id='addtypeID' placeholder='Nhập id danh mục'><input type='submit' onclick='formaddtype()' id='submit' value='Thêm danh mục' class='btn-add'></form>";

    s += "<h2>Tìm kiếm sản phẩm </h2><input type='text' id='searchproductslow' placeholder='Tìm kiếm'><input type='submit' onclick='searchproduct()' value='Tìm kiếm' class='btn-search'><h2>Thêm sản phẩm</h2><form action='' class='form-add' name='formadd'><label for=''>Tên sản phẩm</label > <input type='text' name='nameproduct' id='nameproduct' value='' placeholder='Nhập tên sản phẩm' /><label for=''>Mã sản phẩm</label><input type='text' name='codeproduct' id='codeproduct' value='' placeholder='Nhập mã sản phẩm'/><label for=''>Gía sản phẩm</label><input type='text' name='priceproduct' id='priceproduct' value='' placeholder='Nhập giá sản phẩm' /><label>Chi tiết sản phẩm</label><textarea placeholder='Chi tiêt sản phẩm' id='detailproduct'></textarea><label for=''>Chọn danh mục sản phẩm</label><select name='typeproduct' id='type_product'></select> <label for='myfile'>Anh sản phẩm:</label><input type='file' id='imgproduct' name='myfile' /><label>Tác giả</label><input placeholder='Tác giả' type='text' id='author'><label>Nhà xuất bản</label><input placeholder='Nhà xuất bản' type='text' id='nxb'><input type='submit' name='btn-add' id='' onclick='addproduct()' class='btn-add' value='Thêm sản phẩm' /></form><h2>Thêm danh mục sản phẩm</h2><form action='' class='addtype'><label for='add'>Thêm danh mục</label><input type='text' name='type' id='addtype' placeholder='Nhập tên danh mục'><label for=''>Id danh mục</label><input type='text' name='typeID' id='addtypeID' placeholder='Nhập id danh mục'><input type='submit' onclick='formaddtype()' id='submit' value='Thêm danh mục' class='btn-add'></form>";
    document.getElementById("right").innerHTML = s;
}

function searchproduct() {
    var listsearch = []
    var searchproductslow = document.getElementById("searchproductslow").value
    listproduct = JSON.parse(localStorage.getItem("listproduct"))
    var s = ""
    s += "<table class='tbl-product'> <thead><tr><th>Mã sản phẩm</th><th>Ảnh</th><th>Tên</th><th>Gía</th><th>Tác giả</th><th>Nhà xuất bản</th><th>Thao tác</th></tr></thead><tbody>";
    var dem = 0;

    for (i = 0; i < listproduct.length; i++) {
        if (listproduct[i].name.includes(searchproductslow) == true) {
            dem++;
            listsearch.push(listproduct[i])
        }
    }

    for (j = 0; j < dem; j++) {
        s +=
            "<tr><td>" +
            listsearch[j].productID +
            "</td><td><img src='access/image/product/" +
            listsearch[j].img +
            "' alt=''></td><td>" +
            listsearch[j].name +
            "</td><td>" +
            listsearch[j].price +
            "</td><td>" + listsearch[j].author + "</td><td>" + listsearch[j].nxb + "</td><td><i id='" +
            listsearch[j].productID +
            "' onclick='deleteproduct(this)' class='fas fa-trash-alt'></i>   ----  <i id='" +
            listsearch[j].productID +
            "' onclick='showformupdate(this)' class='fas fa-pen-alt'></i></td> </tr>";
    }
    if (dem > 0) {
        localStorage.setItem("listproductsearch", JSON.stringify(listsearch))
        s += "</tbody></table>";
        document.getElementById("list").innerHTML = s;


    } else {
        document.getElementById("list").innerHTML = "Không có sản phẩm nào"
        document.getElementById("paginate").innerHTML = "";
    }

}

function paginate_reslove(numproduct, numpage, type) {
    var sotrang = Math.ceil(numproduct / numpage); // số trang
    var s = "";
    s += "<ul class='paginate'>";
    for (i = 1; i <= sotrang; i++) {
        s += "<li onclick='load_reslove(this)' typeload='" + type + "' attr=" + numpage + " id='" + i + "'>" + i + "</li>";
    }
    s += "</ul>";
    document.getElementById("paginate").innerHTML = s;
}
// load sản phẩm theo yêu cầu

function load_reslove(obj) {
    var page = obj.getAttribute("attr"); // thuộc tính để biết số sản phẩm trong 1 trang
    var type = obj.getAttribute("typeload"); // nếu là 1 thì load sp 2 thì load user
    var id = obj.id;
    var start = (id - 1) * page; // sản phẩm bắt đầu
    products = JSON.parse(localStorage.getItem("listproductsearch"));
    listuser = JSON.parse(localStorage.getItem("listusersearch"));
    var s = "";
    if (type == 1) {
        // nếu =1 thì load sản phẩm
        s += "<table class='tbl-product'> <thead><tr><th>Mã sản phẩm</th><th>Ảnh</th><th>Tên</th><th>Gía</th><th>Tác Gỉa</th><th>Nhà xuất bản</th><th>Thao tác</th></tr></thead><tbody>";

        if (start - -page >= products.length) {
            for (i = start; i < products.length; i++) {
                s +=
                    "<tr><td>" +
                    products[i].productID +
                    "</td><td><img src='access/image/product/" +
                    products[i].img +
                    "' alt=''></td><td>" +
                    products[i].name +
                    "</td><td>" +
                    products[i].price +
                    "</td><td>" + products[i].author + "</td><td>" + products[i].nxb + "</td><td><i id='" +
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
        s += "<table class='listuser'><thead><tr><th>Họ và tên</th><th>Username</th><th>Usertype</th><th>Sdt</th><th>Thao tác</th></tr></thead><tbody>";

        if (start - -page >= listuser.length) {
            for (i = start; i < listuser.length; i++) {

                if (listuser[i].userName == "admin") {
                    s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].userName + "</td><td>" + listuser[i].userType + "</td><td>" + listuser[i].phone + "</td><td><i onclick='updateuser(this)' id='" + listuser[i].userName + "' class='fas fa-pen-alt'></i></td></tr>";

                } else {
                    s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].userName + "</td><td>" + listuser[i].userType + "</td><td>" + listuser[i].phone + "</td><td><i onclick='deleteuser(this)' id='" + listuser[i].userName + "' class='fas fa-trash-alt'></i>---</i>   ----  <i onclick='updateuser(this)' id='" + listuser[i].userName + "' class='fas fa-pen-alt'></i></td></tr>";

                }
            }
        } else {
            for (i = start; i < page - -start; i++) {
                if (listuser[i].userName == "admin") {
                    s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].userName + "</td><td>" + listuser[i].userType + "</td><td>" + listuser[i].phone + "</td><td><i onclick='updateuser(this)' id='" + listuser[i].userName + "' class='fas fa-pen-alt'></i></td></tr>";

                } else {
                    s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].userName + "</td><td>" + listuser[i].userType + "</td><td>" + listuser[i].phone + "</td><td><i onclick='deleteuser(this)' id='" + listuser[i].userName + "' class='fas fa-trash-alt'></i>---</i>   ----  <i onclick='updateuser(this)' id='" + listuser[i].userName + "' class='fas fa-pen-alt'></i></td></tr>";

                }
            }
        }

        s += "</tbody></table>";
    }
    document.getElementById("list").innerHTML = s;
}

/// load trang chủ
function loadmain() {
    var s = "Thống kê";
    document.getElementById("list").innerHTML = s;
    document.getElementById("right").innerHTML = "";
    document.getElementById("paginate").innerHTML = "";
}
// xử lý phân trang sau khi tìm kiếm

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
        s += "<table class='tbl-product'> <thead><tr><th>Mã sản phẩm</th><th>Ảnh</th><th>Tên</th><th>Gía</th><th>Tác giả</th><th>Nhà xuất bản</th><th>Thao tác</th></tr></thead><tbody>";

        if (start - -page >= products.length) {
            for (i = start; i < products.length; i++) {
                s +=
                    "<tr><td>" +
                    products[i].productID +
                    "</td><td><img src='access/image/product/" +
                    products[i].img +
                    "' alt=''></td><td>" +
                    products[i].name +
                    "</td><td>" +
                    products[i].price +
                    "</td><td>" + products[i].nxb + "</td><td>" + products[i].author + "</td><td><i id='" +
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
        s += "<table class='listuser'><thead><tr><th>Họ và tên</th><th>Username</th><th>Usertype</th><th>Sdt</th><th>Thao tác</th></tr></thead><tbody>";

        if (start - -page >= listuser.length) {
            for (i = start; i < listuser.length; i++) {

                if (listuser[i].userName == "admin") {
                    s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].userName + "</td><td>" + listuser[i].userType + "</td><td>" + listuser[i].phone + "</td><td><i onclick='updateuser(this)' id='" + listuser[i].userName + "' class='fas fa-pen-alt'></i></td></tr>";

                } else {
                    s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].userName + "</td><td>" + listuser[i].userType + "</td><td>" + listuser[i].phone + "</td><td><i onclick='deleteuser(this)' id='" + listuser[i].userName + "' class='fas fa-trash-alt'></i>---</i>   ----  <i onclick='updateuser(this)' id='" + listuser[i].userName + "' class='fas fa-pen-alt'></i></td></tr>";

                }
            }
        } else {
            for (i = start; i < page - -start; i++) {
                if (listuser[i].userName == "admin") {
                    s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].userName + "</td><td>" + listuser[i].userType + "</td><td>" + listuser[i].phone + "</td><td><i onclick='updateuser(this)' id='" + listuser[i].userName + "' class='fas fa-pen-alt'></i></td></tr>";

                } else {
                    s += "<tr><td>" + listuser[i].fullname + "</td><td>" + listuser[i].userName + "</td><td>" + listuser[i].userType + "</td><td>" + listuser[i].phone + "</td><td><i onclick='deleteuser(this)' id='" + listuser[i].userName + "' class='fas fa-trash-alt'></i>---</i>   ----  <i onclick='updateuser(this)' id='" + listuser[i].userName + "' class='fas fa-pen-alt'></i></td></tr>";

                }
            }
        }

        s += "</tbody></table>";
    }
    document.getElementById("list").innerHTML = s;
}
// xóa thành viên
function deleteuser(obj) {
    if (confirm("Bạn có muốn xóa thành viên này không ?") == true) {
        listuser = JSON.parse(localStorage.getItem("user"))
        for (i = 0; i < listuser.length; i++) {
            if (listuser[i].userName == obj.id) {
                listuser.splice(i, 1);
                localStorage.setItem("user", JSON.stringify(listuser))
                alert("Đã xóa thành viên")
            }
        }
    }

}
// cập nhật thông tin user
function updateuser(obj) {
    document.getElementById("updateuser").classList.add("showformupdateuser")
    listuser = JSON.parse(localStorage.getItem("user"))
    for (i = 0; i < listuser.length; i++) {
        if (listuser[i].userName == obj.id) {
            user = document.getElementById("usernameUpdate")
            user.setAttribute("readonly", "readonly")
            document.getElementById("usernameUpdate").value = listuser[i].userName
            document.getElementById("fullnameUpdate").value = listuser[i].fullname
            document.getElementById("phoneUpdate").value = listuser[i].phone
            document.getElementById("passwordUpdate").value = listuser[i].password
        }
    }
    document.getElementById("list").innerHTML = ""
    document.getElementById("paginate").innerHTML = ""
}

function hideformupdateuser() {
    // alert("okk")
    document.getElementById("updateuser").classList.remove("showformupdateuser")
    numuser = JSON.parse(localStorage.getItem("user"));
    // pagination(numuser.length, 4, 2); //tổng sản phẩm , 3 sản phẩm 1 trang, load user
    showuser();
}

function checkupdateuser() {
    username = document.getElementById("usernameUpdate").value
        // alert(username)
    fullnameUpdate = document.getElementById("fullnameUpdate").value
    phoneUpdate = document.getElementById("phoneUpdate").value
    passwordUpdate = document.getElementById("passwordUpdate").value
    listuser = JSON.parse(localStorage.getItem("user"))

    if (fullnameUpdate == "" || phoneUpdate == "" || passwordUpdate == "") {
        alert("Vui lòng nhập đầy đủ thông tin ")
    } else {
        if (phoneUpdate.length < 8 || passwordUpdate.length < 8) {
            alert("Độ dài mật khẩu và sdt phải trên 8 ký tự")
        } else {
            for (i = 0; i < listuser.length; i++) {
                if (username == listuser[i].userName) {
                    listuser[i].fullname = fullnameUpdate
                    listuser[i].phone = phoneUpdate
                    listuser[i].password = passwordUpdate
                    localStorage.setItem("user", JSON.stringify(listuser))
                    alert("Cập nhật thông tin thành công")
                    return location.reload()
                }
            }
        }
    }

}

function logoutadmin() {
    if (confirm("Xác nhận đăng xuất tài khoản")) {
        localStorage.removeItem("UserInfo")
        window.location = "index.html"
    }
}

// tìm user
function searchuser() {
    textsearch = document.getElementById("searchslow").value
    listuser = JSON.parse(localStorage.getItem("user"))
    var list = []
    var s = ""
    s += "<table class='listuser'><thead><tr><th>Họ và tên</th><th>Username</th><th>Usertype</th><th>Sdt</th><th>Thao tác</th></tr></thead><tbody>";
    var dem = 0;
    for (i = 0; i < listuser.length; i++) {
        if (listuser[i].userName.includes(textsearch) == true || listuser[i].fullname.includes(textsearch) == true) {
            dem++
            list.push(listuser[i])
        }
    }
    var h = 4
    if (dem <= 4) {
        h = dem
    }
    for (j = 0; j < h; j++) {
        if (list[j].userName == "admin") {
            s += "<tr><td>" + list[j].fullname + "</td><td>" + list[j].userName + "</td><td>" + list[j].userType + "</td><td>" + list[j].phone + "</td><td><i onclick='updateuser(this)' id='" + list[j].userName + "' class='fas fa-pen-alt'></i></td></tr>";

        } else {
            s += "<tr><td>" + list[j].fullname + "</td><td>" + list[j].userName + "</td><td>" + list[j].userType + "</td><td>" + list[j].phone + "</td><td><i onclick='deleteuser(this)' id='" + list[j].userName + "' class='fas fa-trash-alt'></i>---</i>   ----  <i onclick='updateuser(this)' id='" + list[j].userName + "' class='fas fa-pen-alt'></i></td></tr>";

        }
    }
    localStorage.setItem("listusersearch", JSON.stringify(list))
    s += "    </tbody></table>";
    document.getElementById("list").innerHTML = s;
    paginate_reslove(dem, 4, 2)


}


function showsTatistical() {
    s = ""
    var right = ""
    listCheckOut = JSON.parse(localStorage.getItem("listCheckOut"))
    if (localStorage.getItem("listCheckOut") != null) {
        s += " <table class='thongke'><thead><tr><th>MaDh</th><th>Họ và tên</th><th>Số điện thoại</th><th>Địa chỉ</th><th>Ghi chú</th><th>Thanh toán</th><th>Trạng thái</th><th>Thời gian</th><th>Chi tiết</th></tr></thead><tbody>"
        for (i = 0; i < listCheckOut.length; i++) {
            s += "<tr><td>" + listCheckOut[i].maDH + "</td><td>" + listCheckOut[i].fullname + "</td><td>" + listCheckOut[i].phone + "</td><td>" + listCheckOut[i].address + "</td><td>" + listCheckOut[i].note + "</td><td>" + listCheckOut[i].payment + "</td><td>" + listCheckOut[i].status + "</td><td>" + listCheckOut[i].time + "</td><td onclick='showdetailcart(this)' id='" + listCheckOut[i].maDH + "'>Chi tiết</td></tr>"
        }
        s += "</tbody></table>"
        right += "<h2>Trạng thái đơn hàng</h2><select id='statuscart' ><option value='all'>Tất cả</option><option value='Đang xử lý' >Đang xử lý</option><option value='Đã hoàn thành'>Đã hoàn thành</option></select><input class='btn-search' type='submit' value='Tìm kiếm' onclick='searchcart()'> "
    } else {
        s += "<p>Không có đơn hàng nào</p>"
    }
    document.getElementById("list").innerHTML = s
    document.getElementById("paginate").innerHTML = ""
    document.getElementById("right").innerHTML = right
}

function searchcart() {
    var statuscart = document.getElementById("statuscart").value

    listCheckOut = JSON.parse(localStorage.getItem("listCheckOut"))
    var s = ""
    s += " <table class='thongke'><thead><tr><th>MaDh</th><th>Họ và tên</th><th>Số điện thoại</th><th>Địa chỉ</th><th>Ghi chú</th><th>Thanh toán</th><th>Trạng thái</th><th>Chi tiết</th></tr></thead><tbody>"
    if (statuscart != "all") {
        for (i = 0; i < listCheckOut.length; i++) {
            if (listCheckOut[i].status == statuscart) {
                s += "<tr><td>" + listCheckOut[i].maDH + "</td><td>" + listCheckOut[i].fullname + "</td><td>" + listCheckOut[i].phone + "</td><td>" + listCheckOut[i].address + "</td><td>" + listCheckOut[i].note + "</td><td>" + listCheckOut[i].payment + "</td><td>" + listCheckOut[i].status + "</td><td onclick='showdetailcart(this)' id='" + listCheckOut[i].maDH + "'>Chi tiết</td></tr>"
            }

        }
    } else {
        for (i = 0; i < listCheckOut.length; i++) {
            s += "<tr><td>" + listCheckOut[i].maDH + "</td><td>" + listCheckOut[i].fullname + "</td><td>" + listCheckOut[i].phone + "</td><td>" + listCheckOut[i].address + "</td><td>" + listCheckOut[i].note + "</td><td>" + listCheckOut[i].payment + "</td><td>" + listCheckOut[i].status + "</td><td onclick='showdetailcart(this)' id='" + listCheckOut[i].maDH + "'>Chi tiết</td></tr>"


        }
    }
    s += "</tbody></table>"
    right = "<h2>Trạng thái đơn hàng</h2><select id='statuscart' ><option value='all'>Tất cả</option><option value='Đang xử lý' >Đang xử lý</option><option value='Đã hoàn thành'>Đã hoàn thành</option></select><input class='btn-search' type='submit' value='Tìm kiếm' onclick='searchcart()'> "
    document.getElementById("right").innerHTML = right
    document.getElementById("list").innerHTML = s
}

function showdetailcart(obj) {

    document.getElementById("detailCart").classList.add("hien")
    document.getElementById("list").innerHTML = ""
    var s = ""
    var sum = 0
    s += "    <table><thead><tr><th>Tên sản phẩm</th><th>Gía</th><th>Số lượng</th><th onclick='hidedetailcart()'>Tắt</th></tr></thead> <tbody>"
    listCartCheckout = JSON.parse(localStorage.getItem("listCartCheckout"))
    for (i = 0; i < listCartCheckout.length; i++) {

        if (listCartCheckout[i].maDH == obj.id) {
            sum += listCartCheckout[i].numOrder * listCartCheckout[i].price
            s += "<tr><td>" + listCartCheckout[i].productName + "</td><td>" + listCartCheckout[i].price + "</td><td>" + listCartCheckout[i].numOrder + "</td></tr>"

        }
    }
    s += "     </tbody ></table> <div class='sum'><p class='sum'><strong>Tổng tiền:" + sum + ".đ</strong></p></div><div class='statuscart'><label>Trạng thái đơn hàng</label><select  id='status'><option value='Đang xử lý'>Đang xử lý</option><option value='Đã hoàn thành'>Đã hoàn thành</option></select><input type='submit' class='btn-update' onclick='updatestatus(this)' id='" + obj.id + "' value='Cập nhật trạng thái đơn hàng'></div>"


    document.getElementById("listproductcart").innerHTML = s
    document.getElementById("right").innerHTML = ""


}

function updatestatus(obj) {
    var status = document.getElementById("status").value
    listCheckOut = JSON.parse(localStorage.getItem("listCheckOut"))
    for (i = 0; i < listCheckOut.length; i++) {
        if (listCheckOut[i].maDH == obj.id) {
            listCheckOut[i].status = status

            alert("Đã cập nhật trạng thái đơn hàng")
        }
    }
    localStorage.setItem("listCheckOut", JSON.stringify(listCheckOut))
    document.getElementById("detailCart").classList.remove("hien")
    showsTatistical()
}


function hidedetailcart() {
    document.getElementById("detailCart").classList.remove("hien")
    showsTatistical()

}

function showbill() {
    var s = ""
    s += "    <table class='bill'><thead><tr><th>Mã hóa đơn</th><th>Thời gian</th><th>Khách hàng</th><th>Người thanh toáns</th><th>Xem</th><th>Thao tac</th></tr></thead> <tbody>"
    listCheckOut = JSON.parse(localStorage.getItem("listCheckOut"))
    for (i = 0; i < listCheckOut.length; i++) {
        s += "<tr><td>" + listCheckOut[i].maDH + "</td><td>" + listCheckOut[i].time + "</td><td>" + listCheckOut[i].fullname + "</td><td>Trần Văn Đồng</td><td onclick='detailbill(this)' id='" + listCheckOut[i].maDH + "'>Xem</td><td> <i onclick='deletebill(this)' id='" + listCheckOut[i].maDH + "' class = 'fas fa-trash-alt' ></i></td> </tr>"
    }
    document.getElementById("list").innerHTML = s
    document.getElementById("right").innerHTML = ""
    document.getElementById("paginate").innerHTML = ""

}


function detailbill(obj) {
    if (localStorage.getItem("UserInfo") == null) {
        alert("Vui lòng đăng nhập để tiếp tục");
    } else {
        var s = "";
        s += "<div class='bil'>"
        var listcart = JSON.parse(localStorage.getItem("listCartCheckout"));
        listCheckOut = JSON.parse(localStorage.getItem("listCheckOut"));
        var UserInfo = JSON.parse(localStorage.getItem("UserInfo"));
        var check = 0;
        for (i = 0; i < listCheckOut.length; i++) {
            if (listCheckOut[i].maDH == obj.id) {
                s += "<span>" + listCheckOut[i].time + "</span><span>Mã đơn hàng:" + listCheckOut[i].maDH + "</span><table><thead> <tr> <th>Stt</th><th>Tên sản phẩm</th><th>Số lượng</th><th>Đơn giá</th><th>Thành tiền</th></tr></thead><tbody>";
                var sum = 0;
                var count = 1;
                for (j = 0; j < listcart.length; j++) {
                    if (listCheckOut[i].maDH == listcart[j].maDH) {
                        s += "<tr><td>" + count + "</td><td>" + listcart[j].productName + "</td><td>" + listcart[j].numOrder + "</td><td>" + listcart[j].price + "</td> <td>" + listcart[j].price * listcart[j].numOrder + "</td> </tr>";
                        sum += listcart[j].price * listcart[j].numOrder;
                        count++;
                    }
                }
                s += "</tbody></table><div class='total'><p>Tổng tiền:</p>   <strong>" + sum.toLocaleString() + " VND</strong> </div></div>";
                check++;
            }
        }

        document.getElementById("list").innerHTML = s;
        document.getElementById("right").innerHTML = "";
        document.getElementById("paginate").innerHTML = ""


    }
}



function show(obj) {
    switch (obj.id) {
        case "sp":
            {
                numproduct = JSON.parse(localStorage.getItem("listproduct"));
                // pagination(numproduct.length, 5, 1); // tổng sản phẩm , 3 sản phẩm 1 trang, load sp
                showproduct();
                loadform();
                showtype();


                var check = document.querySelector("#formsearchproduct");
                if (check.classList.contains("none") == true) {
                    document.getElementById("formsearchproduct").classList.remove("none")
                }
                var check2 = document.querySelector("#formseacrch");
                if (check2.classList.contains("none") == true) {

                } else {
                    document.getElementById("formseacrch").classList.add("none")
                }
                break;
            }
        case "qtv":
            {
                numuser = JSON.parse(localStorage.getItem("user"));
                // pagination(numuser.length, 4, 2); //tổng sản phẩm , 3 sản phẩm 1 trang, load user
                showuser();
                var check3 = document.querySelector("#formseacrch");
                if (check3.classList.contains("none")) {
                    document.getElementById("formseacrch").classList.remove("none")
                }
                var check3 = document.querySelector("#formsearchproduct");
                if (check3.classList.contains("none") == false) {
                    document.getElementById("formsearchproduct").classList.add("none")
                }


                break;
            }
        case "qldh":
            {
                showsTatistical()
                break;
            };

            // default:
            //     loadmain();
    }
}

function onloadFnc() {
    numproduct = JSON.parse(localStorage.getItem("listproduct"));
    // pagination(numproduct.length, 5, 1); // tổng sản phẩm , 3 sản phẩm 1 trang, load sp
    showproduct();
    document.getElementById("formsearchproduct").classList.remove("none")
    loadform();
    showtype();

}

window.onload = onloadFnc;