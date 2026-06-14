function calculateSplit(){

let expense =
document.getElementById("expense").value;

let people =
document.getElementById("people").value;

if(expense === "" || people === ""){
document.getElementById("answer").innerHTML =
"Please enter all details";
return;
}

let result =
expense / people;

document.getElementById("answer").innerHTML =
"Each person should pay ₹" +
result.toFixed(2);
}
