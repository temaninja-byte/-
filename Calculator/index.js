function add(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  if (num1 <= num2) {
    return num2 - num1;
  } else {
    return num1 - num2;
  }

}

function divide(num1, num2) {
  if (num1 <= num2) {
    return num2 / num1;
  } else {
    return num1 / num2;
  }
}

function multiply(num1, num2) {
  num1 * num2;
}

function prectange(num1, num2) {
if(num1 <= num2){
  return (num1 * 100)% num2;
}else{
  return (num2 * 100)% num1;
}
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
