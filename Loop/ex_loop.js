// Ex: Reverse Number
function reverNum() {
  let number = parseInt(document.getElementById("rev").value);
  // Method 1:
  var reverse = 0,
    remainder;
  while (number != 0) {
    remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = Math.floor(number / 10);
  }

  // Method 2:

  // reverse = ""
  // while ((number/10) != 0) {
  //   reverse += number % 10
  //   number = Math.floor(number/10)
  // }

  // Method 3:
  //   let finalResult
  //   let string = prompt("Nhập 1 số bất kỳ: ");
  //   let arr = string.split("");
  //   arr.reverse();
  //   finalResult = arr.join("");

  document.getElementById("result").innerHTML =
    "<strong class='text-danger'>The reverse number is:  </strong>" + reverse;
}

//Ex 1: Print when num == 99 betwen 1 and 100
function count100() {
  for (let i = 1; i <= 100; i++) {
    if (i == 99) {
      document.getElementById("result_1").innerHTML = "Program finished !";
      break;
    }
    document.getElementById("result_2").innerHTML += i + "<br>";
  }
}

//Ex: Calculate sum in series number 
function sumNum() {
  let num1 = +document.getElementById("num1").value
  let num2 = +document.getElementById("num2").value
  let result = 0 

  if (num1 == num2){
    result = "Please input two different number, try again !"
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
  } else if ( num1 > num2) {
    for (let i = num2; i <= num1; i++){
      result += i
      console.log(result)
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      result  +=i
      console.log(result)
    }
  }
  document.getElementById("result_3").innerHTML =  result 
}
