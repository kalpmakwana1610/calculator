function display(value) {

   document.getElementById ('result').value += value

   //return value

 }

 function clearscreen() {

   
   document.getElementById ('result').value = ''
 }

 function solve() {

   let x = document.getElementById('result').value

   let y = eval(x);

   document.getElementById('result').value = y

   return y
 }