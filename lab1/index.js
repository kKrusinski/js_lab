function calculate() {
 
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var num3 = document.getElementById("num3").value;
  var num4 = document.getElementById("num4").value;


  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  num3 = parseFloat(num3);
  num4 = parseFloat(num4);


  var sum = num1 + num2 + num3 + num4;
  var average = sum / 4;
  var min = Math.min(num1, num2, num3, num4);
  var max = Math.max(num1, num2, num3, num4);


  document.getElementById("sum").innerHTML = "Suma: " + sum;
  document.getElementById("average").innerHTML = "Średnia: " + average;
  document.getElementById("min").innerHTML = "Min: " + min;
  document.getElementById("max").innerHTML = "Max: " + max;
}