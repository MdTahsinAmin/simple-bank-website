 // login event handler
         const loginBtn = document.getElementById('enter-btn');
         loginBtn.addEventListener('click',function(){
            const loginArea = document.getElementById('login-area');
            loginArea.style.display ="none";
            const transactionArea = document.getElementById('transaction-area');
            transactionArea.style.display = "block";
         })
         // deposit event handler
         const addDeposit = document.getElementById('addDeposit');
          addDeposit.addEventListener('click',function(){
             const depositAmount = document.getElementById('deposit-amount').value;
             const depositNumber = parseFloat(depositAmount);

             updateSpanTag('currentDeposit',depositNumber);

             updateSpanTag('current-balance',depositNumber);

             document.getElementById('deposit-amount').value = "";
          })

          // withdraw event handler
         const addWithdraw =  document.getElementById('addWithdraw');
            
            addWithdraw.addEventListener('click',function(){
             const withdrawAmount = document.getElementById('withdraw-amount').value;
              
               const withdrawNumber = parseFloat(withdrawAmount);

               updateSpanTag('current-withdraw',withdrawNumber);

               substractSpanTag('current-balance',withdrawNumber);

               document.getElementById('withdraw-amount').value = "";
            })
          
          
          function updateSpanTag(id ,depositNumber){
             const current= document.getElementById(id).innerText;
             const  currentNumber = parseFloat(current);
             const totalBalance = depositNumber+currentNumber;
             document.getElementById(id).innerText = totalBalance;
             
          }

          function substractSpanTag(id,withdrawNumber){
              const current = document.getElementById(id).innerText;
              const currentNumber = parseFloat(current);
              const totalSub = (current-withdrawNumber);
              document.getElementById(id).innerText = totalSub; 

          }