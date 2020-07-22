// login area 
    const loginBtn = document.getElementById("btn1st");
        loginBtn.addEventListener("click" , function(){
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transactionDiv = document.getElementById("transaction");
        transactionDiv.style.display = "block";
        const leaveBtn = document.getElementById("leave-btn");
        leaveBtn.style.display = "block";
        })

    // transaction area

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click" , function(){
                                                        // const depositAmount = document.getElementById("deposit-amount").value;
                                                        // const depositNumber = parseFloat(depositAmount);    
                                                        // const currentDeposit = document.getElementById("current-deposit").innerText;
                                                        // const currentDepositNumber = parseFloat(currentDeposit);
const depositNumber = getInputNumber("deposit-amount")                                                   // const totalDeposit = depositNumber + currentDepositNumber;
                                                        // document.getElementById("current-deposit").innerText = totalDeposit;
    
 updatedSpan ("current-deposit" , depositNumber);
 updatedSpan ("current-balance" , depositNumber);
 document.getElementById("deposit-amount").value = ""; 
                                                        // const currentBalance = document.getElementById("current-balance").innerText;
                                                        // const currentBalanceNumber = parseFloat(currentBalance);
                                                        // const totalBalance = depositNumber + currentBalanceNumber;
                                                        // document.getElementById("current-balance").innerText = totalBalance;
   
})
    const withdrawBtn = document.getElementById("withdraw-btn");
    withdrawBtn.addEventListener("click" , function(){
                                                        // const withdrawAmount = document.getElementById("withdraw-amount").value;
                                                        // const withdrawNumber = parseFloat(withdrawAmount);
        const withdrawNumber = getInputNumber("withdraw-amount");
        document.getElementById("withdraw-amount").value = "";
                                                        // const currentWithdraw = document.getElementById("current-withdrawal").innerText;
                                                        // const currentWithdrawNumber = parseFloat(currentWithdraw);
                                                        // const totalWithdraw = withdrawNumber + currentWithdrawNumber;
                                                        // document.getElementById("current-withdrawal").innerText = totalWithdraw;
        updatedSpan("current-withdrawal" ,withdrawNumber );
        updatedSpan("current-balance" , -1 * withdrawNumber);
    })

    function getInputNumber(id){
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;

    }
function updatedSpan (id , depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}
const leaveBtn = document.getElementById("leave-btn");
leaveBtn.addEventListener("click" , function(){
    transaction.style.display = "none";
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "block";
    
})