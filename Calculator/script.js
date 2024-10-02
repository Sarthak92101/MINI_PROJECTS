let str = "";
let nums = document.querySelectorAll(".btn");
Array.from(nums).forEach((num) => {
    num.addEventListener('click', function (e) {
        if (e.target.value == "C") {
            str = "";
            document.querySelector(".calculatorscreen").innerHTML = str;
        }
        else if(e.target.value == "="){
            str = eval(str);
            document.querySelector(".calculatorscreen").innerHTML = str;
        }
        else{
            str = str + e.target.value;
            document.querySelector(".calculatorscreen").innerHTML = str;
        }
    })
})