function compute() {
    //Retrieve the values 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
    //Create the Interest text
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark>";

}

//Update the rate value
function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}

//Validate user input
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var greaterThanZero = parseInt(principal) > 0;
    if (!greaterThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
else if( document.getElementById("principal").value ==""){
    alert("Amount is blank");
     document.getElementById("principal").focus();
    }
}
