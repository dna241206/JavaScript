console.log("aaa")


//Phạm vi toàn cục
let globalVar = "Tôi là biến toàn cục";
function show() {
 console.log(globalVar); // Truy cập được
}
show();
console.log(globalVar) // Truy cập được

//Phạm vi trong hàm
function sayHi() {
 let name = "hoidanit";
 console.log("Hi " + name);
}
sayHi();
console.log(name); // Lỗi: name is not defined

//Phạm vi khối
if (true) {
 let x = 10;
 const y = 20;
 console.log(x, y); // Truy cập được
}
console.log(x); // Lỗi: x is not defined
