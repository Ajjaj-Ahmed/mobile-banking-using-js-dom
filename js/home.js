document.getElementById('addMoney-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const pinNumber = parseInt(document.getElementById('pin-number').value);
    const addAmount = parseFloat(document.getElementById('amount').value);
    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const newBalance = addAmount + mainBalance;

    // mainBalance.innerText = totalAmount;
    if (pinNumber === 1234) {
        mainBalanceElement.innerText = newBalance;

    } else {
        console.log('did not match')
    }

})

// cash Out code
document.getElementById('cashOut-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = parseFloat(document.getElementById('cashOutAmount').value);
    const CashOutPinNumber = parseInt(document.getElementById('CashOutPinNumber').value)
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const newBalance = mainBalance - cashOutAmount;

    if (CashOutPinNumber === 1234 && cashOutAmount < mainBalance) {
        document.getElementById('main-balance').innerText = newBalance;
        document.getElementById('cashOutAmount').value = '';
        document.getElementById('CashOutPinNumber').value='';
    } else {
        alert('check your pin or amount')
    }
})