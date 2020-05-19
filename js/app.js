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
    const amountUI = document.getElementById('tipAmount');
    const percentageUI = document.getElementById('tipPercentage');
    
    //CONVERSION
    const amount = parseFloat(amountUI.value);
    const percentage = parseFloat(percentageUI.value)/100;

    //CALCS
    let tipCalc = amount * percentage;
    let total = amount + tipCalc;

    //OUTPUTS
    const tipTotalEL = document.getElementById('tipTotal');
    const totalAmountEL = document.getElementById('totalAmount'); 

    //BIND CALCS TO OUTPUTS
    tipTotalEL.value = tipCalc.toFixed(2);
    totalAmountEL.value = total.toFixed(2);

    document.getElementById('results').style.display = 'block';
    document.getElementById('spinner').style.display = 'none';

};



