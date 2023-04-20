function loadcart() {
    listproduct = JSON.parse(localStorage.getItem("listCart"));
    var s = ''
    var count = 0
    var sum = 0
    if (listproduct.length > 0) {
        s += '  <div class="grid"> <h2>Danh sách đã chọn</h2> <table class="cart"><thead><th>Stt</th> <th>Mã sản phẩm</th> <th>Anh sản phẩm</th> <th>Tên sản phẩm</th><th>Gía</th><th>Số lượng</th><th>Thao tác</th> </thead> <tbody>'

        for (i = 0; i < listproduct.length; i++) {
            s += '   <tr><td>' + count + '</td> <td>' + listproduct[i].productID + '</td> <td><img src="access/image/product/' + listproduct[i].image + '" alt=""></td><td>' + listproduct[i].name + '</td> <td>' + listproduct[i].price + '</td>  <td> <input type="number" id="' + listproduct[i].productID + '" value="' + listproduct[i].numOrder + '" style="padding: 5px;" min="0" max="10" value="4"></td>  <td onclick="deletecart(this)" id="' + listproduct[i].productID + '">xóa</td> </tr>'
            count -= -1
            sum -= -(listproduct[i].price * listproduct[i].numOrder)
        }

        s += '</tbody></table><div class="sum" ><strong>Tổng tiền:</strong>' + sum.toLocaleString() + '.đ</div><div class="foot"><a href="index.html"><input type="submit" value="Tiếp tục mua"></a><input type="submit" onclick="goToFormCheckout()"  value="Thanh toán"><input type="submit" value="Cập nhật giỏ hàng" onclick="updatecart()"></div></div>'
    } else {
        s += '<p style="font-size:20px" >Không có sản phẩm nào trong giỏ hàng</p><div class="foot"><a href="index.html"><input type="submit" value="Tiếp tục mua"></a></div>'

    }
    document.getElementById("product-section-id").innerHTML = s
}

function updatecart() {
    listproduct = JSON.parse(localStorage.getItem("listCart"));
    for (i = 0; i < listproduct.length; i++) {
        var num = document.getElementById(listproduct[i].productID).value
        if (num == 0) {
            listproduct.splice(i, 1);
        } else {
            listproduct[i].numOrder = num
        }

    }
    localStorage.setItem("listCart", JSON.stringify(listproduct))
    location.reload()
}

function deletecart(obj) {
    // alert("ok")
    listproduct = JSON.parse(localStorage.getItem("listCart"));
    for (i = 0; i < listproduct.length; i++) {
        if (obj.id == listproduct[i].productID) {
            listproduct.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("listCart", JSON.stringify(listproduct))
    alert("Đã xóa sản phẩm khỏi giỏ hàng")
    location.reload()
}

function goToFormCheckout() {
    if (localStorage.getItem("UserInfo") === null) {
        alert("Bạn cần đăng nhập để hoàn tất thanh toán");
    } else {
        var sum = 0
        listCart = JSON.parse(localStorage.getItem("listCart"))
        var s = '<div class="grid flex"  ><div class="infocustomer"><label class="form-checkout-label">Họ và tên</label><input class="form-check-out-input" type="text" id="fullnameuser" value="" placeholder="Họ và tên">    <label class="form-checkout-label" for="">Số điện thoại</label>  <input class="form-check-out-input" type="text" id="phoneuser" value="" placeholder="Số điện thoại">                    <label class="form-checkout-label" for="">Địa chỉ giao hàng</label> <textarea class="form-checkout-textarea" name="" id="address" cols="5" placeholder="Địa chỉ giao hàng" rows="5"></textarea>                    <label class="form-checkout-label" for="">Ghi chú</label><textarea class="form-checkout-textarea"  id="notes" cols="5" rows="5" placeholder="Ghi chú"></textarea>                    <label class="form-checkout-label form-checkout-pay-method" >Hình thức thanh toán</label>  <select name="payment" id="payment"> <option value="">------Chọn------</option> <option value="Thanh toán khi nhận hàng">Thanh toán khi nhận hàng</option> <option value="Thanh toán qua thẻ">Thanh toán qua thẻ</option> </select><input class="form-checkout-submit-btn" type="submit"  onclick="checkOut()" value="Thanh toán" class="btn-checkout"></div>'
        s += '<div class="listcart">'
        for (i = 0; i < listCart.length; i++) {
            s += '<div class="item"><div class="thumb"><img src="access/image/product/' + listCart[i].image + '" ></div><div class="info"><p style="margin-bottom:10px"><strong>' + listCart[i].name + '</strong></p><span><strong>Số lượng</strong>:' + listCart[i].numOrder + '</span></div></div>'
            sum -= -(listCart[i].numOrder * listCart[i].price)
        }
        s += '<p style="font-size:20px">Tổng tiền:<strong>' + sum.toLocaleString() + '.đ</strong></p></div></div>'
        document.getElementById("product-section-id").innerHTML = s
        var userArr = JSON.parse(localStorage.getItem("UserInfo"));
        document.getElementById("fullnameuser").value = userArr[0].fullname;
        document.getElementById("phoneuser").value = userArr[0].phoneNumber;
    }

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
    var address = document.getElementById("address").value;
    if (listCheckOut1 == null) {
        random = 1;
    } else {
        var random = listCheckOut1.length + 1;
    }
    if (address == "" || phone == "" || fullname == "") {
        alert("Nhập đầy đủ thông tin thanh toán");
    } else {
        var checkoutArr = JSON.parse(localStorage.getItem("listCart"));

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

        alert("Đã thanh toán đơn hàng");
        window.location = 'index.html'
    }
}

function onloadFnc() {
    loadcart()
}
window.onload = onloadFnc