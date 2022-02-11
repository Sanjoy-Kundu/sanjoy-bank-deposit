

//diposit Balance 

document.getElementById("deposit-button").addEventListener("click", function () {
	//console.log("Button is working");

	const dipositInput = document.getElementById("deposit-input");
	const dipositInputText = dipositInput.value;
	//console.log(dipositInputText);

	//set diposit total
	const dipositTotal = document.getElementById("deposit-total");
	const dipositTotalText = dipositTotal.innerText;
	//console.log(dipositTotalText);

	/*diposit er je inner text ace sei innertext er sathe bortoman diposit balace (diposit total text) er sathe diposit input er ja rakbo mane (diposit input text) jog korte hobe*/
	dipositTotal.innerText = parseFloat(dipositTotalText) + parseFloat(dipositInputText);



	//diposit balace added to current ballance 
	const currentBalance = document.getElementById("balance-total");
	const currentBalanceText = currentBalance.innerText;
	//console.log(currentBalanceText);

	currentBalance.innerText = parseFloat(currentBalanceText) + parseFloat(dipositInputText); //curren balance er sathe input er value jog korte hobe (dipositInputText)

	//clear input
	dipositInput.value = " ";

});

//withdraw diposit 
document.getElementById("withdraw-button").addEventListener("click", function () {
	const withdrawInput = document.getElementById("withdraw-input");
	const withdrawInputText = withdrawInput.value;
	//console.log(withdrawInputText);

	//update withdraw total 
	const withdrawTotal = document.getElementById("withdraw-total");
	const withdrawTotalText = withdrawTotal.innerText;
	withdrawTotal.innerText = parseFloat(withdrawTotalText) + parseFloat(withdrawInputText); // total withdraw text er sathe value jog hobe


	//update balance after withdraw
	const balaceTotal = document.getElementById("balance-total");
	const balaceTotalText = balaceTotal.innerText;
	balaceTotal.innerText = parseFloat(balaceTotalText) - parseFloat(withdrawInputText);







})




