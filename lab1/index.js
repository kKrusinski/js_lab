const calcBt = document.querySelector('.calcButton')
let buttonClicked = false


function calculate() {
 
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let num4 = document.getElementById("num4").value;


  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  num3 = parseFloat(num3);
  num4 = parseFloat(num4);

  if(isNaN(num1)) num1 = 0;
  if(isNaN(num2)) num2 = 0;
  if(isNaN(num3)) num3 = 0;
  if(isNaN(num4)) num4 = 0;

  let sum = num1 + num2 + num3 + num4;
  let average = sum / 4;
  let min = Math.min(num1, num2, num3, num4);
  let max = Math.max(num1, num2, num3, num4);


  document.getElementById("sum").innerHTML = "Suma: " + sum;
  document.getElementById("average").innerHTML = "Średnia: " + average;
  document.getElementById("min").innerHTML = "Min: " + min;
  document.getElementById("max").innerHTML = "Max: " + max;

}


function handleClick(){
    document.getElementById("num1").addEventListener("input", calculate);
    document.getElementById("num2").addEventListener("input", calculate);
    document.getElementById("num3").addEventListener("input", calculate);
    document.getElementById("num4").addEventListener("input", calculate);
    buttonClicked = true
}

calcBt.addEventListener('click',() => {
    calculate();
    handleClick();
})