function calculate() {
    var amount = $('#amount');
    var amountString = amount.val();
    var amountNumber = parseInt(amountString, 10);
    var startAmount = 500;
    
    console.log(amountNumber);

    if(amountNumber != false) {
        var totalNumber = amountNumber + startAmount;
        $('#total').html('Your new total is: $' + totalNumber);
    } else{
        $('#total').html('Insufficient Funds');
    }
}