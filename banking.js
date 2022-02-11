
document.getElementById("deposit-btn").addEventListener("click", function(){
    const depoValue = document.getElementById('deposit-amount');
    const newDepositeText = depoValue.value;
    const newDepositeAmount = parseFloat(newDepositeText);
    // console.log(depositeValue);
    const depositTotal = document.getElementById("deposit-resent");
    const priviousDepositText =  depositTotal.innerText;
    const priviousDepositAmount = parseFloat(priviousDepositText)

    // sum  
    const newDepositeTotle = priviousDepositAmount + newDepositeAmount;
    depositTotal.innerText = newDepositeTotle;




    const balanceText = document.getElementById("balance-now");
    const balanceValues = balanceText.innerText;
    const priviousvalueBalance = parseFloat(balanceValues);
    // console.log( typeof priviousvalueBalance)

    // console.log(newDepositeAmount)
    // console.log(priviousvalueBalance)
    // console.log(BalanceDepositeTotals)
    const BalanceDepositeTotal = priviousvalueBalance + newDepositeAmount;

    balanceText.innerText = BalanceDepositeTotal;
    // clear value 
    depoValue.value = ''; 
});


document.getElementById("Withdraw-Btn").addEventListener('click', function(){
     
    const withdrawInput = document.getElementById("Withdraw-amount");
    const withdrawAmount = withdrawInput.value; 
    const withdrowsAmount = parseFloat(withdrawAmount);
    
    // dashboard amount 
    
    const withdrawDeshboard = document.getElementById("withdraw-resent");
    const withdrawDeshboardAmount = withdrawDeshboard.innerText;
    const mainWithdowsDeshbord = parseFloat(withdrawDeshboardAmount)


    // balance
    const balanceText = document.getElementById("balance-now");
    const balanceValues = balanceText.innerText;
    const totalPriviousvalueBalance = parseFloat(balanceValues);

    console.log(totalPriviousvalueBalance);
    // Show in deshboard 

    const totalWithdraw = mainWithdowsDeshbord + withdrowsAmount;

    withdrawDeshboard.innerText = totalWithdraw;

 


    const totalBalanceAfterwithdraw = totalPriviousvalueBalance - withdrowsAmount;
    balanceText.innerText = totalBalanceAfterwithdraw;

    // clear input 
    withdrawInput.value = "";

})