"use strict"

// test 2

let arr1 = [];
for(let i = 1; i <= 99; i++){
 if(i % 3 == 0 && i % 7 == 0){
   arr1.push("OpenSource");
 } else if(i % 3 == 0){
   arr1.push("Open");
 } else if(i % 7 == 0){
  arr1.push("Sourse");
 } else {
   arr1.push(i);
 }
}
let x = document.querySelector(".conteiner2").innerHTML = arr1;

// test 3

let conteinerChildren = document.querySelector(".conteyner3").children;
console.log("Test 3");
console.log(conteinerChildren);


// test 4

let arr = ['1', 'a', '25', '13.1'];
function sumInteger(array){
  return array.reduce((sum, item) => {
    if(Number.isInteger(+item) && !isNaN(+item)){
      sum += +item;
    }
    return sum;
  }, 0);
}
console.log("Test 4");
let res4 = sumInteger(arr);
resultTest4.innerHTML = res4;
console.log(res4);


// test 5

fetch("https://jsonplaceholder.typicode.com/posts").then(responce => responce.json()).then(result => {
  for(let i = 0; i < result.length; i++){
    if(result[i].id == 5){
      return result[i];
    }
  }
}).then(result => {
  console.log("Test 5");
  resultTest5.innerHTML = JSON.stringify(result);
  console.log(result);
});

//или можно сделать так (результат в консоли)
test5.addEventListener("click", finedID)
function finedID(){
  let postID = document.getElementById("postID").value;
  fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`).then(responce => responce.json()).then(result => {
    console.log("Test 5");
    console.log(result);
  });
}


// test 6

function clickStr(regExp){
  let str = document.getElementById("searchStr").value;
  console.log(str);
  let result = str.match(/Softeq|#rules/gi);
  //console.log(result);
  let res = "";
  result == null ? res = "String not contain both element" : result.length == 2 ? res = "String contain both element" : res = "String not contain both element";;
  document.querySelector(".resultTest7").innerHTML = res;
}
document.querySelector("#test6").addEventListener("click", clickStr);


// test 7

function showAlpha(){
  let arr = [];
  for(let i = 65; i <= 90; i++){
    arr.push(String.fromCodePoint(i));
  }
  return arr;
}
console.log("Test 7")
let res7 = showAlpha();
resultTest7.innerHTML = res7;
console.log(res7);

// test 8

let hideNumber = 0;
let min = 1;
let max = 1000000;
let result = [];
let count = 0;
function click(){
  console.log("Test 8");
  hideNumber = document.getElementById("search").value;
  for(let i = count; i < 50; i++){
    verify(+hideNumber)
    if(result[result.length-1] == 0) break;
  }
  //console.log(hideNumber, result, count);
  resultTest8.innerHTML = `Искомое число ${hideNumber}; Массив результатов поиска ${result}; Функция verifi вызывалась ${count} раз`
}
document.querySelector("#test8").addEventListener("click", click);

function verify(value) {
  let middle;
  count++;
  while (min <= max) {
      middle = Math.floor((min + max)/2);
      console.log(middle);
      if (middle == value || value == max || value == min) {
        result.push(0);
        return 0;
      } else if (middle > value) {
          result.push(1);
          max = middle + 1;
          return 1
      } else if(middle < value){
          result.push(-1);
          min = middle - 1;
          return -1;
      }
  }
}


