let pin = prompt(`"Welcome To Bank Al Habib ATM", Enter Your Pin`)
if (pin == "1234") {
    let option = prompt(` Choose An Option, 1:Deposit  2:Withdraw  3:Check Balance  4:Exit`)
    let balance = 100
    switch (option) {
        case "1":
            let deposit = +prompt(`Your Current Balance Is Rs ${balance}, Enter Your Deposit Amount`)
            let result1 = balance + deposit
            alert(` Now Your Current Balance Is Rs ${result1}`)
            break;

        case "2":
            let withdraw = +prompt(`Your Current Balance Is Rs ${balance}, Enter Your Withdraw Amount`)
            let result2 = balance - withdraw
            if (balance >= withdraw) {
                alert(`Now Your Current Balance Is Rs ${result2}`)
            }
            else {
                alert(`Insufficient Balance`)
            }
            break;

        case "3":
            alert(`Your Current Balance Is Rs ${balance}`)
            break;

        case "4":
            alert(`Thank You For Using ATM. Good Bye!`)
            break;

        default:
            alert(`Invalid Option`)
            break;
    }
}
else {
    alert(`Wrong Pin`)
}