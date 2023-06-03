function calculate(){
   let deposit = document.querySelector("#deposit").value;

   let com = parseFloat(deposit)*0.05;
   let tax = parseFloat(com)*0.5;
   let final = parseFloat(com) - parseFloat(tax);

   document.querySelector(".com").innerHTML = com;
   document.querySelector(".tax").innerHTML = tax;
   document.querySelector(".final").innerHTML = final;
}