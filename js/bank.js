
function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';
    return inputValue;
}
function getElement(elementId){
    const element = document.getElementById(elementId);
    const elementInnerTextString = element.innerText;
    const elementInnerText = parseFloat(elementInnerTextString);
    return elementInnerText;


}
function setElement(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}




document.getElementById('btn-deposit').addEventListener('click', function(){

    const newDeposit = getInput('user-deposit');
    if(isNaN(newDeposit)){
        alert('deposit some money');
        return;
    };
    const previousDeposit = getElement('deposit');
    const balance = getElement('balance');
    const depositResult = newDeposit + previousDeposit;
    setElement('deposit', depositResult);
    const newBalance = balance + newDeposit;
    setElement('balance', newBalance);
    
    

})
document.getElementById('btn-withdraw').addEventListener('click', function(){

    const newWithdraw = getInput('user-withdraw');
    if(isNaN(newWithdraw)){
        alert('Withdraw some money');
        return;
    };
    const previousWithdraw = getElement('withdraw');
    const balance = getElement('balance');
    if(balance < newWithdraw){
        alert('insufficient balance');
        return;
    }
    const withdrawResult = newWithdraw + previousWithdraw;
    setElement('withdraw', withdrawResult);
    const newBalance = balance - newWithdraw;
    setElement('balance', newBalance);

})


