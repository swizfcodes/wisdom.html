

document.getElementById("click+").onclick = function(){
    const result = num1 + num2;
}

document.getElementById("click-").onclick = function(){
    const result = num1 - num2;
}

document.getElementById("click*").onclick = function(){
    const result = num1 * num2;
}

 let ans = ""
document.getElementById("click/").onclick = function(){
  if (num1||num2 === 0){ans = "invalid";} 

  else if (num1 > num2){ans = num1 / num2;}
}
const result = console.log(ans);


document.getElementById("click=").onclick = function(){
        console.log(result);
}

document.getElementById("click1").onclick = 
   "form1.answer.value += '1'";
