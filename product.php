<?php
$listproduct = $_POST["listproduct"];
// print_r(($listproduct));
// foreach ($listproduct as $products) {
//     print_r($products["pro"]);
// }

$out = "";
$out .= "<table class='tbl-product'> <thead><tr><th>Mã sản phẩm</th><th>Type</th><th>Ảnh</th><th>Tên</th><th>Gía</th><th>Thao tác</th></tr></thead><tbody>";
if($_POST["textinput"]!=null){
    foreach ($listproduct as $products) {
        $pop = strpos($products["name"], $_POST["textinput"]);
        if($pop !== false){
            $out .="<tr><td>" . $products["productID"] . "</td><td>" .  $products["typeID"] .
            "</td><td><img src='access/image/product/" .
            $products["img"] .
            "' alt=''></td><td>" .
            $products["name"] .
            "</td><td>" .
            $products["price"] .
            "</td><td><i id='" .
            $products["productID"] .
            "' onclick='deleteproduct(this)' class='fas fa-trash-alt'></i>   ----  <i id='" .
            $products["productID"] .
            "' onclick='showformupdate(this)' class='fas fa-pen-alt'></i></td> </tr>";
        }
      
    }
}else {
    foreach ($listproduct as $products) {
      
            $out .="<tr><td>" . $products["productID"] . "</td><td>" .  $products["typeID"] .
            "</td><td><img src='access/image/product/" .
            $products["img"] .
            "' alt=''></td><td>" .
            $products["name"] .
            "</td><td>" .
            $products["price"] .
            "</td><td><i id='" .
            $products["productID"] .
            "' onclick='deleteproduct(this)' class='fas fa-trash-alt'></i>   ----  <i id='" .
            $products["productID"] .
            "' onclick='showformupdate(this)' class='fas fa-pen-alt'></i></td> </tr>";
        
      
    }
}

$out .= "</tbody></table>";
 echo $out;
