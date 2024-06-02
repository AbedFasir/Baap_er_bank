document.getElementById('withdraw-btn').addEventListener('click', function () {
   const withdrawing = document.getElementById('withdraw-field');
   const withdraw_str = withdrawing.value;
   const withdraw = parseFloat(withdraw_str);

   withdrawing.value = '';
   if(isNaN(withdraw)) {
      alert('Enter valid input');
      return;
   }

   const withdrawed = document.getElementById('withdrawed');
   const withdrawed_str = withdrawed.innerText;
   const withdrawed_new = parseFloat(withdrawed_str);

   const old_balance = document.getElementById('old-balance');
   const balance_str = old_balance.innerText;
   const balance = parseFloat(balance_str);

   if(withdraw > balance) {
      alert('You do not enough money to withdraw')
      return;
   }

   withdrawed.innerText = withdraw + withdrawed_new;

   old_balance.innerText = balance - withdraw;
})