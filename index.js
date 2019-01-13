function calculate() {
    let amount = $('#amount');
    let amountString = amount.val();
    let amountNumber = parseInt(amountString, 10);
    let startAmount = 500;
    
    console.log(amountNumber);

    if(amountNumber >= 0.1) {
        console.log(`you deposited ${amountNumber},you now have ${amountNumber + startAmount}`);
    }
}