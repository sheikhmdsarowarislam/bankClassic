let loginCatch = document.getElementById('login').addEventListener('click', function(){
    const loginBtn = document.getElementById('login-area');
    loginBtn.style.display = 'none';

    const transectionArea = document.getElementById('transection-area');
    transectionArea.style.display = 'block';
})


const withdrawBtn = document.getElementById("WithdrawEnter").addEventListener('click', function(){
    const withdrawInput = document.getElementById('WithdrawAmount').value;
    const convertWithdrawAmount =  parseFloat(withdrawInput);

    const withdrawstart = document.getElementById('WithdrawStatus').innerText;
    const withdrawStartNumber = parseFloat(withdrawstart);

    const totalWithdrawAmount = convertWithdrawAmount + withdrawStartNumber;

    document.getElementById('WithdrawStatus').innerText = totalWithdrawAmount;
    
})


const dipositBtn = document.getElementById('addDiposit').addEventListener('click', function(){
    const dipositInput = document.getElementById('dipositAmount').value;
    const convertDipositAmount = parseFloat(dipositInput);
    



    const currentDiposite = document.getElementById('currentDiposite').innerText;
    const NumberFloat = parseFloat(currentDiposite);
    const total = convertDipositAmount + NumberFloat;

    
    document.getElementById('currentDiposite').innerText = total;


    const currentballance2 = document.getElementById('currentBallance').innerText;
    const currentUpdateAmount = parseFloat(currentballance2);
    const finalTotal = convertDipositAmount + currentUpdateAmount;

    document.getElementById('currentBallance').innerText = finalTotal;

    document.getElementById('dipositAmount').value = '';
})



