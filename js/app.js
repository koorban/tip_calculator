const form = document.getElementById('tipForm');

form.addEventListener('submit', spinner)

function spinner(e) {
    document.getElementById('spinner').style.display = 'block';
    document.getElementById('results').style.display = 'none';

    setTimeout(calculateTip, 2000);

    e.preventDefault();
};

function calculateTip() {
    //INPUTS
    const amountUI = document.getElementById('amount');
    const tipPercentageUI = document.getElementById('tip-percentage');
    const taxPercentageUI = document.getElementById('sales-tax');
    
    //CONVERSION
    const billAmount = parseFloat(amountUI.value);
    const tipPercentage = parseFloat(tipPercentageUI.value)/100;
    const taxPercentage = parseFloat(taxPercentageUI.value)/100;

    //CALCULATIONS
    let tipTotal = billAmount * tipPercentage;
    let taxTotal = billAmount * taxPercentage;
    let totalAmount = billAmount + tipTotal + taxTotal;
    
    //OUTPUTS
    const tipTotalUI = document.getElementById('tip-total');
    const totalAmountUI = document.getElementById('amount-total'); 
    const taxTotalUI = document.getElementById('tax-total');

    //BIND CALCULATIONS TO OUTPUTS
    tipTotalUI.value = tipTotal.toFixed(2);
    totalAmountUI.value = totalAmount.toFixed(2);
    taxTotalUI.value = taxTotal.toFixed(2);

    document.getElementById('results').style.display = 'block';
    document.getElementById('spinner').style.display = 'none';
};




