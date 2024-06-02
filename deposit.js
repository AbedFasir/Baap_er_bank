document.getElementById('deposit-btn').addEventListener('click', function () {
   const depositing = document.getElementById('deposit-field');
   const depositing_str = depositing.value;
   const depositing_new = parseFloat(depositing_str);

   depositing.value = '';

   if(isNaN(depositing_new)) {
      alert('Enter Number');
      return;
   }
   const deposited = document.getElementById('deposited');
   const deposited_str = deposited.innerText;
   const deposited_new = parseFloat(deposited_str);

   deposited.innerText = deposited_new + depositing_new;

   const old_balance = document.getElementById('old-balance');
   const balance_str = old_balance.innerText
   const balance = parseFloat(balance_str);

   old_balance.innerText = depositing_new + balance;
})