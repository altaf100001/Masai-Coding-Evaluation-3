// Store the wallet amount to your local storage with key "amount"
var bag = JSON.parse(localStorage.getItem("amount"));
function walletfun()
{
    document.getElementById("wallet").innerHTML= null;
    
   let amount =  document.getElementById("amount").value

   bag = bag + +amount

   localStorage.setItem("amount",JSON.stringify(bag))

   

  appent(bag)

//    console.log(bag)
}

let show = JSON.parse(localStorage.getItem("amount")) || 0

appent(show)

function appent(bag)
{
    document.getElementById("wallet").append(bag)
}

