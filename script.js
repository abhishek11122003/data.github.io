function calculate() {
    let deposit = parseFloat(document.querySelector("#deposit").value);
 
    // Calculate the commission as 0.5% of the deposit
    let com = deposit * 0.005; // 0.5% represented as a decimal
    let tax = com * 0.05; // 5% tax on the commission
    let final = com - tax; // Final amount after deducting tax
 
    document.querySelector(".com").innerHTML = com.toFixed(2); // Display with 2 decimal places
    document.querySelector(".tax").innerHTML = tax.toFixed(2); // Display with 2 decimal places
    document.querySelector(".final").innerHTML = final.toFixed(2); // Display with 2 decimal places
}
