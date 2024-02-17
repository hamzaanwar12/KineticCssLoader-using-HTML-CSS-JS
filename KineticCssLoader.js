//Not neeeded Javascript
let leftTriangle = document.getElementById("left")
let rightTriangle = document.getElementById("right")
let leftAngle = 83
let rightAngle = 91

console.log(rightTriangle)
console.log(leftTriangle)
let i = 0;

setInterval(() => {


    if (i % 2 == 0) {
        leftTriangle.style.transform = `rotate(${leftAngle}deg)`
        leftAngle += 100
    }
    else {
        rightTriangle.style.transform = `rotate(${rightAngle}deg)`
        rightAngle += 91
    }

    setTimeout(() => {
        ++i
    }, 0330);



}, 0700);