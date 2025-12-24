console.log("Haha")

for(let i = 0; i <= 5; i++){
    console.log("i = ", i)
}

//while
//không dùng được const bởi vì giá trị luôn đổi
let score = 10

while(score > 5){
    console.log("check score:", score)
    score--;
}

//do-while
let score1 = 10
do {
    console.log("check score:", score1)
    score1--;
} while (score1 > 5);

//Câu lệnh điều khiển: break và continue

for(let i = 1; i < 10; i++){
    console.log("i = ", i)
    if(i === 5){ // 5 so sánh "5" number vs String
        break
    }
}

for(let i = 1; i < 10; i++){
    
    if(i === 5){ // lần lặp hiện tại
        continue;
    }
    console.log("i = ", i)
}