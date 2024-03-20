function placeOrder(){
    const books = ["Basic Web Programming", "Intro to PHP", "Advanced JQuery"];
    const prices = [19.99, 86.00, 55.00];
    let total = 0;
    let details = "";

    for(let i = 1; i <= 3; i++){
        let quantityInput = document.getElementById("quantity" + i);
        let quantity = parseInt(quantityInput.value);

        // Calculate the total for each item
        let itemTotal = quantity * prices[i-1];
        total += itemTotal;

        // Check if the input is an integer
        if (isNaN(quantity) || quantity < 0) {
            alert("Please enter a valid integer quantity for all items.");
            return; // Stop the function if invalid input is found
        }

        // Build the order summary
        details += "<b>"+books[i-1] + ` (Quantity: ${quantity}): ` + "</b>" + `$${itemTotal.toFixed(2)} ` + "<br>";
    }

    // Display the order summary and total
    let orderSummaryElement = document.getElementById('orderSummary');
    orderSummaryElement.innerHTML = details + "<br>" + "<b>Final Total:</b> $" + total.toFixed(2);
}