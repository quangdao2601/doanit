<?php


$users=$_POST["users"];
$out="";
$out.="<table class='listuser'><thead><tr><th>Họ và tên</th><th>Username</th><th>Usertype</th><th>Sdt</th><th>Thao tác</th></tr></thead><tbody>";
if($_POST["query"]!=null){
foreach($users as $user){
    $pop = strpos($user["userName"], $_POST["query"]);
    if($pop !== false){
         $out.="<tr><td>".$user["fullname"]."</td><td>".$user["userName"]."</td><td>" .$user["userType"]. "</td><td>".+$user["phone"]."</td><td><i onclick='deleteuser(this)' id='" .$user["userName"]. "' class='fas fa-trash-alt'></i>---</i>   ----  <i onclick='updateuser(this)' id='" .$user["userName"]."' class='fas fa-pen-alt'></i></td></tr>";
    }
}}
else {
    foreach($users as $user){
        $out.="<tr><td>".$user["fullname"]."</td><td>".$user["userName"]."</td><td>" .$user["userType"]. "</td><td>".+$user["phone"]."</td><td><i onclick='deleteuser(this)' id='" .$user["userName"]. "' class='fas fa-trash-alt'></i>---</i>   ----  <i onclick='updateuser(this)' id='" .$user["userName"]."' class='fas fa-pen-alt'></i></td></tr>";
    } 
}

$out.= "</tbody></table>";
echo $out;
