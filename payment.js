let paymentForm = document.getElementById("payment-form");
let payButton = document.getElementById("pay-button");

paymentForm.addEventListener("submit", function(event){
   event.preventDefault();
    let name = document.getElementById("name").value;
    let cardNumber = document.getElementById("card-number").value;
    let cvc = document.getElementById("cvc").value;
    let expirationDate = document.getElementById("expiration-date").value;

    if (
        name.trim() === ""||
        cardNumber.trim() === "" ||
        cvc.trim() === "" ||
        expirationDate.trim() === "")
        {
        alert("please fill all the required Fields!");
        return;
    }

    if (!cardNumber.match(/^\d{13,16}$/)){
        alert("Plaese enter a valid card number!")
        return;
    }

    if (!cvc.match(/^\d{3,4}$/)){
        alert("Plaese enter a valid card CVC!")
        return;
    }
    alert("Payment details are valid. Submitting...");
    paymentForm.submit(); 

});

 