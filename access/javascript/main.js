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

function exitCheckOutFormFNC() {
    document.getElementById("modal-id").classList.remove("show-component");
    document.getElementById("form-checkout").classList.remove("cart__display");
}

function setProductType(typeID, type) {
    this.typeID = typeID;
    this.type = type;
}

function setProductItem(typeID, productID, name, price, sale, img, detail, nxb, author) {
    this.typeID = typeID;
    this.productID = productID;
    this.name = name;
    this.price = price;
    this.sale = sale;
    this.img = img;
    this.detail = detail;
    this.nxb = nxb;
    this.author = author;
}

function setCartItem(cartID, product) {
    this.cartID = cartID;
    this.product = product;
}

// type list

function createType() {
    var arrType = [new setProductType("all", "Tất cả"), new setProductType("book1", "Sách khoa học"), new setProductType("book2", "Sách tài liệu"), new setProductType("book3", "Sách Văn"), new setProductType("book4", "Giao án")];
    if (localStorage.getItem("listype") == null) {
        localStorage.setItem("listype", JSON.stringify(arrType));
    }
}

var arrProduct = [];

function createProduct() {
    arrProduct = [
        new setProductItem("book1", "b1", "Người lái đò", "650000", "100", "b1.jpg", "Chúng ta đã biết, sách luôn giữ một vị trí quan trọng trong việc học tập và bồi dưỡng kiến thức cho học sinh. Sách tốt thì định hướng tốt, ngược lại, sách có nội dung không phù hợp dễ làm học sinh có sự tiếp nhận sai dẫn đến hành động sai. Hiện nay, trên thị trường, sách nhiều không kể xiết, hàng trăm hàng nghìn loại sách với hình thức đa dạng và nội dung phong phú. Bên cạnh những cuốn sách có giá trị giáo dục, còn xuất hiện những cuốn sách sai lệch về kiến thức cho học sinh...", "Kim Đồng", "Tô Hoài"),
        new setProductItem("book2", "b2", "Truyện kiều", "650000", "100", "b2.jpg", "Chúng ta đã biết, sách luôn giữ một vị trí quan trọng trong việc học tập và bồi dưỡng kiến thức cho học sinh. Sách tốt thì định hướng tốt, ngược lại, sách có nội dung không phù hợp dễ làm học sinh có sự tiếp nhận sai dẫn đến hành động sai. Hiện nay, trên thị trường, sách nhiều không kể xiết, hàng trăm hàng nghìn loại sách với hình thức đa dạng và nội dung phong phú. Bên cạnh những cuốn sách có giá trị giáo dục, còn xuất hiện những cuốn sách sai lệch về kiến thức cho học sinh...", "Tuổi trẻ", "Xuân Diệu"),
        new setProductItem(
            "book1",
            "b3",
            "Tấm cám",
            "1100000",
            "100",
            "b3.jpg",
            "Chúng ta đã biết, sách luôn giữ một vị trí quan trọng trong việc học tập và bồi dưỡng kiến thức cho học sinh. Sách tốt thì định hướng tốt, ngược lại, sách có nội dung không phù hợp dễ làm học sinh có sự tiếp nhận sai dẫn đến hành động sai. Hiện nay, trên thị trường, sách nhiều không kể xiết, hàng trăm hàng nghìn loại sách với hình thức đa dạng và nội dung phong phú. Bên cạnh những cuốn sách có giá trị giáo dục, còn xuất hiện những cuốn sách sai lệch về kiến thức cho học sinh...",
            "Kim Đồng",
            "Ngô Tất Tố"),
        new setProductItem(
            "book1",
            "b4",
            "Lão hạc",
            "900000",
            "100",
            "b4.jpg",
            "Chúng ta đã biết, sách luôn giữ một vị trí quan trọng trong việc học tập và bồi dưỡng kiến thức cho học sinh. Sách tốt thì định hướng tốt, ngược lại, sách có nội dung không phù hợp dễ làm học sinh có sự tiếp nhận sai dẫn đến hành động sai. Hiện nay, trên thị trường, sách nhiều không kể xiết, hàng trăm hàng nghìn loại sách với hình thức đa dạng và nội dung phong phú. Bên cạnh những cuốn sách có giá trị giáo dục, còn xuất hiện những cuốn sách sai lệch về kiến thức cho học sinh...",
            "Nhà xuất bản tri thức",
            "Trần Quang Đạo", ),
        new setProductItem(
            "book1",
            "b5",
            "Chiếc thuyền ngoài xa",
            "900000",
            "100",
            "b5.jpg",
            "Chúng ta đã biết, sách luôn giữ một vị trí quan trọng trong việc học tập và bồi dưỡng kiến thức cho học sinh. Sách tốt thì định hướng tốt, ngược lại, sách có nội dung không phù hợp dễ làm học sinh có sự tiếp nhận sai dẫn đến hành động sai. Hiện nay, trên thị trường, sách nhiều không kể xiết, hàng trăm hàng nghìn loại sách với hình thức đa dạng và nội dung phong phú. Bên cạnh những cuốn sách có giá trị giáo dục, còn xuất hiện những cuốn sách sai lệch về kiến thức cho học sinh...",
            "Văn Đồng",
            "Trần Văn Đồng", ),
        new setProductItem(
            "book2",
            "b6",
            "Đất nước",
            "1900000",
            "1000000",
            "b6.jpg",
            "Chúng ta đã biết, sách luôn giữ một vị trí quan trọng trong việc học tập và bồi dưỡng kiến thức cho học sinh. Sách tốt thì định hướng tốt, ngược lại, sách có nội dung không phù hợp dễ làm học sinh có sự tiếp nhận sai dẫn đến hành động sai. Hiện nay, trên thị trường, sách nhiều không kể xiết, hàng trăm hàng nghìn loại sách với hình thức đa dạng và nội dung phong phú. Bên cạnh những cuốn sách có giá trị giáo dục, còn xuất hiện những cuốn sách sai lệch về kiến thức cho học sinh...",
            "Nhà xuất bản Hà Nội", "Ngô Tất Tố", ),
        new setProductItem(
            "book2",
            "b7",
            "Vợ chồng a phủ",
            "750000",
            "900",
            "b7.jpg",
            "Chúng ta đã biết, sách luôn giữ một vị trí quan trọng trong việc học tập và bồi dưỡng kiến thức cho học sinh. Sách tốt thì định hướng tốt, ngược lại, sách có nội dung không phù hợp dễ làm học sinh có sự tiếp nhận sai dẫn đến hành động sai. Hiện nay, trên thị trường, sách nhiều không kể xiết, hàng trăm hàng nghìn loại sách với hình thức đa dạng và nội dung phong phú. Bên cạnh những cuốn sách có giá trị giáo dục, còn xuất hiện những cuốn sách sai lệch về kiến thức cho học sinh...", "kim Đồng", "Trịnh Công Sơn",
        ), new setProductItem(
            "book3",
            "b8",
            "Văn thơ Việt Nam",
            "1250000",
            "750000",
            "b8.jpg",
            "Chúng ta đã biết, sách luôn giữ một vị trí quan trọng trong việc học tập và bồi dưỡng kiến thức cho học sinh. Sách tốt thì định hướng tốt, ngược lại, sách có nội dung không phù hợp dễ làm học sinh có sự tiếp nhận sai dẫn đến hành động sai. Hiện nay, trên thị trường, sách nhiều không kể xiết, hàng trăm hàng nghìn loại sách với hình thức đa dạng và nội dung phong phú. Bên cạnh những cuốn sách có giá trị giáo dục, còn xuất hiện những cuốn sách sai lệch về kiến thức cho học sinh...",
            "Tuổi trẻ", "Xuân Quỳnh",
        ), new setProductItem(
            "book3",
            "b9",
            "Thày dạy làm hề",
            "750000",
            "1100",
            "b9.jpg",
            "Chỉ vì bạn đang ở cùng nhóm của mình cả cuối tuần không có nghĩa là bạn sẽ bỏ qua phong cách. Hãy mặc chiếc áo phông adidas này và tạo nên cảm giác 3-Stripes đích thực. Dù bạn đến đâu trong ngày, hãy giữ nó bình dị và cổ điển.", "Kim Đồng", "Tố Hữu",
        ), new setProductItem(
            "book3",
            "b10",
            "Vợ nhặt",
            "750000",
            "1400",
            "b10.jpg",
            "Chúng ta đã biết, sách luôn giữ một vị trí quan trọng trong việc học tập và bồi dưỡng kiến thức cho học sinh. Sách tốt thì định hướng tốt, ngược lại, sách có nội dung không phù hợp dễ làm học sinh có sự tiếp nhận sai dẫn đến hành động sai. Hiện nay, trên thị trường, sách nhiều không kể xiết, hàng trăm hàng nghìn loại sách với hình thức đa dạng và nội dung phong phú. Bên cạnh những cuốn sách có giá trị giáo dục, còn xuất hiện những cuốn sách sai lệch về kiến thức cho học sinh...",
            "Kim Đồng", "Xuân Diệu"),
    ];
    if (localStorage.getItem("listproduct") == null) {
        localStorage.setItem("listproduct", JSON.stringify(arrProduct));
    }
}

var txtType = "";
var correctTypeProductArr = [];
var numberOfItems;

// show product type list onload
function showProductTypeListFnc() {
    var listType = "";

    arrayType = JSON.parse(localStorage.getItem("listype"));

    for (let i = 0; i < arrayType.length; i++) {
        txtType = "'" + arrayType[i].typeID + "'";
        var type = '<li class="product-type__item"  id="' + arrayType[i].typeID + '" onclick="showHomeProductList(0,15,' + txtType + ');"><a href="#home-product-id" class="product-type__item-link">' + arrayType[i].type + "</a></li>";
        listType += type;
    }

    document.getElementById("product-type-list-id").innerHTML = listType;
}

// hiển thị sản phẩm từ file JSON
function showHomeProductList(pageNumber, maxIndex, typeID) {
    numberOfItems = 0;
    var productRow = "";
    var k = maxIndex * pageNumber;
    var t = 0;

    // console.log("k=" + k);

    var originalArray = JSON.parse(localStorage.getItem("listproduct"));
    if (typeID === "all") {
        for (let i = 0; i < originalArray.length; i++) {
            correctTypeProductArr[i] = originalArray[i];
        }
    } else {
        var j = 0;
        for (let i = 0; i < originalArray.length; i++) {
            if (originalArray[i].typeID === typeID) {
                numberOfItems++;
                correctTypeProductArr[j] = originalArray[i];
                j++;
            }
        }
        correctTypeProductArr.length = j;
    }

    var tempProductArr = []; // show home product list
    for (let i = 0; i < 3; i++) {
        var productCols = "";
        for (let j = 0; j < 5; j++) {
            if (correctTypeProductArr[k] == null) {
                break;
            } else {
                tempProductArr[t] = correctTypeProductArr[k];
                var productCol = "";

                productCol =
                    '<div class="grid__col-2-4"><div class="home-product__item"><a href="" class="home-product__item-link"><img src="./access/image/product/' +
                    tempProductArr[t].img +
                    '" alt="product image" class="home-product__item-img" /></a><!-- product detail --><div class="home-product__item-container"><div class="home-product__item-title">' +
                    tempProductArr[t].name +
                    '</div><div class="home-product__item-price">Giá: <span>' +
                    tempProductArr[t].price +
                    ' VND</span></div><div class="home-product__item-btn-field"><button id="' +
                    tempProductArr[t].productID +
                    '" class="home-product__item-cart-insert btn" onclick="showDetail(this.id);">Xem chi tiết</button><a href="#" class="home-product__item-link-btn"><button class="home-product__item-buy-btn btn">Mua Ngay</button></a></div></div></div></div>';
                productCols += productCol;
                k++;
                t++;
            }
        }
        productRow += ' <div class="grid__row">' + productCols + "</div>";
        showHomeProductPagination();
    }

    document.getElementById("home-product-id").innerHTML = '<div class="grid">' + productRow + "</div>";
}

// function showDetail(id) {
//     console.log(id);
//     for (let i = 0; i < tempProductArr.length; i++) {
//         if (tempProductArr[i].productID == id) {
//             console.log(tempProductArr[i]);
//         }
//     }
// }

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
                    phoneNumber: adminArray[i].phone,
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
    if (confirm("Xác nhận đăng xuất tài khoản")) {
        localStorage.removeItem("UserInfo");
        return location.reload();
    }
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
    listuser = JSON.parse(localStorage.getItem("user"));
    if (userName == "") {
        err_userName = "<p>Không được bỏ trống userName</p>";
    } else {
        if (userName.length < 8 || userName > 32) {
            err_userName = "<p>Độ dài từ 8 tới 32 ký tự</p>";
        } else {
            for (i = 0; i < listuser.length; i++) {
                if (userName == listuser[i].userName) {
                    err_userName = "<p>Usernam đã tồn tại trong hệ thống</p>";
                }
            }
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
        hideRegisterFormFnc();
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
        var admin3 = {
            userName: "vandong123",
            password: "vandong123",
            fullname: "Trần Văn Đồng",
            dateSignup: "23-11-1999",
            userType: "khachHang",
            phone: "099999999",
        };
        var admin4 = {
            userName: "vantuan123",
            password: "vantuan123",
            fullname: "Trần Văn Tuấn ",
            dateSignup: "23-11-1999",
            userType: "khachHang",
            phone: "099999899",
        };
        var admin5 = {
            userName: "thihuong123",
            password: "thihuong123",
            fullname: "Trần Thị Hương",
            dateSignup: "23-11-1999",
            userType: "khachHang",
            phone: "099999999",
        };
        var admin6 = {
            userName: "trihai123",
            password: "trihai123",
            fullname: "Trần Trí Hải ",
            dateSignup: "23-11-1999",
            userType: "khachHang",
            phone: "099999899",
        };
        var admin7 = {
            userName: "trinam123",
            password: "trinam123",
            fullname: "Trần Trí Nam",
            dateSignup: "23-11-1999",
            userType: "khachHang",
            phone: "099999999",
        };
        var admin8 = {
            userName: "chienminh1b",
            password: "chienminh1b",
            fullname: "Trần Minh Chiến ",
            dateSignup: "23-11-1999",
            userType: "khachHang",
            phone: "099999899",
        };

        adminArray.push(admin1);
        adminArray.push(admin2);
        adminArray.push(admin3);
        adminArray.push(admin4);
        adminArray.push(admin5);
        adminArray.push(admin6);
        adminArray.push(admin7);
        adminArray.push(admin8);
        localStorage.setItem("user", JSON.stringify(adminArray));
    }
}

function searchProduct(noOfPages, typeID) {
    numberOfItems = 0;
    var productRow = "";
    var k = 15 * 0;
    var t = 0;

    // console.log("k=" + k);
    var text = document.getElementById("page-header-search-field").value;

    var originalArray = JSON.parse(localStorage.getItem("listproduct"));
    var j = 0;
    var check = 0
    for (let i = 0; i < originalArray.length; i++) {
        // đoạn này kiểm tra sản phẩm có tồn tại text không
        if (originalArray[i].name.includes(text) == true || originalArray[i].author.includes(text) == true) {
            // alert(text)
            numberOfItems++;
            correctTypeProductArr[j] = originalArray[i];
            j++;
            check++
        }
    }
    if (check == 0) {
        return alert("Không có sản phẩm cần tìm")
    }
    correctTypeProductArr.length = j;

    var tempProductArr = []; // show home product list
    for (let i = 0; i < 3; i++) {
        var productCols = "";
        for (let j = 0; j < 5; j++) {
            if (correctTypeProductArr[k] == null) {
                break;
            } else {
                tempProductArr[t] = correctTypeProductArr[k];
                var productCol = "";

                productCol =
                    '<div class="grid__col-2-4"><div class="home-product__item"><a href="" class="home-product__item-link"><img src="./access/image/product/' +
                    tempProductArr[t].img +
                    '" alt="product image" class="home-product__item-img" /></a><!-- product detail --><div class="home-product__item-container"><div class="home-product__item-title">' +
                    tempProductArr[t].name +
                    '</div><div class="home-product__item-price">Giá: <span>' +
                    tempProductArr[t].price +
                    '$</span></div><div class="home-product__item-btn-field"><button id="' +
                    tempProductArr[t].productID +
                    '" class="home-product__item-cart-insert btn" onclick="showDetail(this.id);">Xem chi tiết</button><a href="#" class="home-product__item-link-btn"><button class="home-product__item-buy-btn btn">Mua Ngay</button></a></div></div></div></div>';
                productCols += productCol;
                k++;
                t++;
            }
        }
        productRow += ' <div class="grid__row">' + productCols + "</div>";
        showHomeProductPagination();
    }

    document.getElementById("home-product-id").innerHTML = '<div class="grid">' + productRow + "</div>";
}

function showHomeProductListPage(page, noOfPages) {
    var productRow = "";
    var k = 15 * page;
    var t = 0;

    var tempProductArr = []; // show home product list
    for (let i = 0; i < 3; i++) {
        var productCols = "";
        for (let j = 0; j < 5; j++) {
            if (correctTypeProductArr[k] == null) {
                break;
            } else {
                tempProductArr[t] = correctTypeProductArr[k];
                var productCol = "";

                productCol =
                    '<div class="grid__col-2-4"><div class="home-product__item"><a href="" class="home-product__item-link"><img src="./access/image/product/' +
                    tempProductArr[t].img +
                    '" alt="product image" class="home-product__item-img" /></a><!-- product detail --><div class="home-product__item-container"><div class="home-product__item-title">' +
                    tempProductArr[t].name +
                    '</div><div class="home-product__item-price">Giá: <span>' +
                    tempProductArr[t].price +
                    ' VND</span></div><div class="home-product__item-btn-field"><button id="' +
                    tempProductArr[t].productID +
                    '" class="home-product__item-cart-insert btn" onclick="showDetail(this.id);">Xem chi tiết</button><a href="#" class="home-product__item-link-btn"><button class="home-product__item-buy-btn btn">Mua Ngay</button></a></div></div></div></div>';
                productCols += productCol;
                k++;
                t++;
            }
        }
        productRow += ' <div class="grid__row">' + productCols + "</div>";
        showHomeProductPagination();
    }
    document.getElementById("home-product-id").innerHTML = '<div class="grid">' + productRow + "</div>";
}

function showHomeProductPagination() {
    // find number of pages
    var numberOfPages = (correctTypeProductArr.length - (correctTypeProductArr.length % 15)) / 15;

    // find leftItemsQuantity
    var quantityOfPageLeft = correctTypeProductArr.length - numberOfPages * 15;

    if (quantityOfPageLeft > 0) {
        numberOfPages++;
    }

    // var prevArrow = '<a class="home-product-pagination-prev">' + '<ion-icon name="chevron-back-outline"></ion-icon>' + "</a>";
    // var nextArrow = '<a class="home-product-pagination-next">' + '<ion-icon name="chevron-forward-outline"></ion-icon>' + "</a>";

    var paginationPage = "";
    for (let i = 0; i < numberOfPages; i++) {
        var paginationPageNumber = '<a id="paginationPageNumber-' + i + '" href="#product-section-id" class="home-product-pagination-page" onclick="showHomeProductListPage(' + i + "," + numberOfPages + ');">' + parseInt(i + 1) + "</a>";
        paginationPage += paginationPageNumber;
    }

    var pagination = "";
    if (numberOfPages > 1) {
        // pagination = prevArrow + paginationPage + nextArrow;
        pagination = paginationPage;
    } else {
        pagination = paginationPage;
    }
    document.getElementById("home-product-pagination-id").innerHTML = pagination;
}

function showDetail(productID_detail) {
    products = JSON.parse(localStorage.getItem("listproduct"));
    var s = "";
    var home = '<button class="to-home-button btn" onclick="location.reload();">Tiếp tục mua</button>';

    for (i = 0; i < products.length; i++) {
        var home = '<button class="to-home-button btn" onclick="location.reload();">Tiếp tục mua</button>';
        if (productID_detail == products[i].productID) {
            s +=
                "   <div class='detailproduct'><div class='thumbnail'><img src='access/image/product/" +
                products[i].img +
                "' alt=''></div><div class='information'><h1 class='name'>" +
                products[i].name +
                "</h1> <p class='code'><strong>Ma san pham:</strong>" +
                products[i].productID +
                "</p> <p class='price'> <strong>Gia san pham:</strong>" +
                products[i].price +
                "</p> <p class='detail'> <strong>Chi tiết: </strong>:" +
                products[i].detail +
                "</p><p><strong>Tác giả</strong>:" + products[i].author + "</p><p><strong>Nhà xuất bản:</strong>" + products[i].nxb + "</p><div><button id='" +
                products[i].productID +
                "' onclick='addProductToCart(this.id)' class='add_to_cart'>Thêm vào giỏ hàng</button>" +
                home +
                "</div></div></div>";
            break;
        }
    }
    document.getElementById("home-product-pagination-id").innerHTML = " ";
    document.getElementById("home-product-id").innerHTML = s;
}

function setCart(productID, image, price, name, numOrder) {
    this.productID = productID;
    this.image = image;
    this.price = price;
    this.name = name;
    this.numOrder = numOrder;
}

function addProductToCart(thisID) {
    var id = thisID;
    listproduct = JSON.parse(localStorage.getItem("listproduct"));

    cartt = JSON.parse(localStorage.getItem("listCart"));
    for (i = 0; i < listproduct.length; i++) {
        if (listproduct[i].productID == id) {
            if (localStorage.getItem("listCart") == null) {
                var product = [new setCart(listproduct[i].productID, listproduct[i].img, listproduct[i].price, listproduct[i].name, 1)];

                localStorage.setItem("listCart", JSON.stringify(product));
                alert("Đã thêm sản phẩm vào giỏ hàng");
                return location.reload();
            } else {
                for (k = 0; k < cartt.length; k++) {
                    if (cartt[k].productID == id) {
                        cartt[k].numOrder++;
                        localStorage.setItem("listCart", JSON.stringify(cartt));
                        alert("Đã thêm sản phẩm vào giỏ hàng");
                        return location.reload();
                    }
                }
                var product = {
                    productID: listproduct[i].productID,
                    image: listproduct[i].img,
                    price: listproduct[i].price,
                    name: listproduct[i].name,
                    numOrder: 1,
                };
                cartt.push(product);
                localStorage.setItem("listCart", JSON.stringify(cartt));
                alert("Đã thêm sản phẩm vào giỏ ");
                return location.reload();
            }
        }
    }
}

function goToFormCheckout() {
    if (localStorage.getItem("UserInfo") === null) {
        alert("Bạn cần đăng nhập để hoàn tất thanh toán");
    } else {
        document.getElementById("modal-id").classList.add("show-component");
        document.getElementById("form-checkout").classList.add("cart__display");
    }
}


function showCheckOutItem() {
    var userArr = JSON.parse(localStorage.getItem("UserInfo"));
    document.getElementById("fullnameuser").value = userArr[0].fullname;
    document.getElementById("phoneuser").value = userArr[0].phoneNumber;

    if (localStorage.getItem("listCart") != null) {
        var checkoutArr = JSON.parse(localStorage.getItem("listCart"));
        var sum = 0;
        s = "";
        for (let i = 0; i < checkoutArr.length; i++) {
            sum = sum - -(checkoutArr[i].price * checkoutArr[i].numOrder);
            var s1 = '<li class="check-out-product-item">' + '<div class="thumb">' + '<img src="./access/image/product/' + checkoutArr[i].image + '" alt="">' + "</div>" + '<div class="moreinfo">' + "<p>Số lượng: " + checkoutArr[i].numOrder + "</p>" + "</div>";
            ("</li>");
            s += s1;
        }
    }
    document.getElementById("detailCheckout").innerHTML = '<ul class="listproduct">' + s + "</ul>" + '<p class="form-checkout-total"><strong>Tổng tiền: ' + sum + "</strong></p>";
}

function setCheckoutInfo(fullname, phone, address, note, payment, maDH) {
    this.fullname = fullname;
    this.phone = phone;
    this.address = address;
    this.note = note;
    this.payment = payment;
    this.maDH = maDH;
}

function checkOut() {
    var fullname = document.getElementById("fullnameuser").value;
    var phone = document.getElementById("phoneuser").value;
    listCheckOut1 = JSON.parse(localStorage.getItem("listCheckOut"));

    if (listCheckOut1 == null) {
        random = 1;
    } else {
        var random = listCheckOut1.length + 1;
    }
    if ((address = document.getElementById("address").value === "" || phone === "" || fullname === "")) {
        alert("Nhập đầy đủ thông tin thanh toán");
    } else {
        var checkoutArr = JSON.parse(localStorage.getItem("listCart"));
        var address = document.getElementById("address").value;
        var note = document.getElementById("notes").value;
        var payment = document.getElementById("payment").value;
        var cartArr = [];

        var list = JSON.parse(localStorage.getItem("listCartCheckout"));
        for (let i = 0; i < checkoutArr.length; i++) {
            var check = {
                maDH: "DH" + random,
                productName: checkoutArr[i].name,
                numOrder: checkoutArr[i].numOrder,
                price: checkoutArr[i].price,
            };
            cartArr.push(check);
        }
        if (localStorage.getItem("listCartCheckout") == null) {
            localStorage.setItem("listCartCheckout", JSON.stringify(cartArr));
        } else {
            var h = list.concat(cartArr);
            localStorage.setItem("listCartCheckout", JSON.stringify(h));
        }

        var UserInfo = JSON.parse(localStorage.getItem("UserInfo"));
        var today = new Date();
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;

        var checkOutInfo = {
            userName: UserInfo[0].userName,
            fullname: fullname,
            time: dateTime,
            phone: phone,
            address: address,
            note: note,
            payment: payment,
            status: "Đang xử lý",
            maDH: "DH" + random,
        };
        if (localStorage.getItem("listCheckOut") == null) {
            var arr = [];
            arr.push(checkOutInfo);
            localStorage.setItem("listCheckOut", JSON.stringify(arr));
        } else {
            listCheckOut1.push(checkOutInfo);
            localStorage.setItem("listCheckOut", JSON.stringify(listCheckOut1));
        }

        localStorage.removeItem("listCart");
        document.getElementById("modal-id").classList.remove("show-component");
        document.getElementById("form-checkout").classList.remove("cart__display");
        alert("Đã thanh toán đơn hàng");
        location.reload();
    }
}



// lịch sử thanh toán
function listcart() {
    if (localStorage.getItem("UserInfo") == null) {
        alert("Vui lòng đăng nhập để tiếp tục");
    } else {
        document.getElementById("listbill").classList.add("hien");
        var s = "";
        var listcart = JSON.parse(localStorage.getItem("listCartCheckout"));
        listCheckOut = JSON.parse(localStorage.getItem("listCheckOut"));
        var UserInfo = JSON.parse(localStorage.getItem("UserInfo"));
        var check = 0;
        for (i = 0; i < listCheckOut.length; i++) {
            if (listCheckOut[i].userName == UserInfo[0].userName) {
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
                s += "</tbody></table><div class='total'><p>Tổng tiền:</p>   <strong>" + sum.toLocaleString() + " VND</strong> </div><div class='status'><p>Trạng thái:</p><strong>" + listCheckOut[i].status + "</strong></div>";
                check++;
            }
        }
        if (check == 0) {
            document.getElementById("bill").innerHTML = "Bạn không có đơn hàng nào";
        } else {
            document.getElementById("bill").innerHTML = s;
        }

    }
}

function hidelistbill() {
    return document.getElementById("listbill").classList.remove("hien");
}
// onload auto tạo form login reg

function createFormLogin() {
    var s =
        '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" onclick="showLoginFormFnc()">Đăng nhập</span></div><div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="showRegisterFormFnc()">Đăng ký</span></div>';
    document.getElementById("form_login_reg").innerHTML = s;
}

function showinfouser() {

}



function infouser(obj) {
    document.getElementById("forminfo").classList.add("hien")
    user = JSON.parse(localStorage.getItem("user"))
    for (i = 0; i < user.length; i++) {
        if (user[i].userName == obj.id) {

            document.getElementById("infousername").value = user[i].userName
            document.getElementById("infofullname").value = user[i].fullname
            document.getElementById("infophone").value = user[i].phone
            document.getElementById("infopassword").value = user[i].password
            var username = document.getElementById("infousername")
            username.setAttribute("readonly", "readonly")

            break;
        }
    }
}

function xulycapnhat() {
    var username = document.getElementById("infousername").value
    var fullname = document.getElementById("infofullname").value
    var phone = document.getElementById("infophone").value
    var password = document.getElementById("infopassword").value

    if (username == "" || fullname == "" || phone == "" || password == "") {
        alert("Không được bỏ trống thông tin")
    } else {
        user = JSON.parse(localStorage.getItem("user"))
        for (i = 0; i < user.length; i++) {
            if (user[i].userName == username) {
                user[i].fullname = fullname
                user[i].password = password
                user[i].phone = phone
                localStorage.setItem("user", JSON.stringify(user))
                return alert("Đã cập nhật thông tin")
            }
        }
    }


}

function hide() {
    document.getElementById("forminfo").classList.remove("hien")
}

function isLogin() {
    // localStorage.removeItem('UserInfo')
    if (localStorage.getItem("UserInfo") == null) {
        createFormLogin();
    } else {
        user = JSON.parse(localStorage.getItem("UserInfo"));
        if (user[0].userType == "khachHang") {
            s =
                '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" onclick="infouser(this)" id="' + user[0].userName + '" > ' +
                user[0].fullname +
                '</span> </div> <div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="logout()" >(Đăng xuất)</span></div>';
            document.getElementById("form_login_reg").innerHTML = s;
        } else {
            s =
                '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" onclick="infouser(this)" id="' + user[0].userName + '" >' +
                user[0].fullname +
                '</span></div> <div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="logout()" >(Đăng xuất)</span></span></div><div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span"><a href="admin.html" ><i class="fas fa-forward go-to-admin-icon"></i></a></span></div>';
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
    showHomeProductList(0, 15, "all");
    showHomeProductPagination();
    showProductTypeListFnc();
    showCheckOutItem();

}

window.onload = onloadFnc;