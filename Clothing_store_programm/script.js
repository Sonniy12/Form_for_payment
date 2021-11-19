
function fillOutForms()
{//name
	let Temp_name=/^(([A-z]|[А-я])+)?([\-]?[\,]?[\.]?[\s]?)?([A-z]|[А-я]){2,}$/;
	//phone
	let Temp_phone=/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	let name=document.getElementById("nameUser").value;
		let phone=document.getElementById("phoneUser").value;

	
	//card
	let Temp_card=/\d{16}$/;
		let card=document.getElementById("UserCard").value;

	//address
		
	let Temp_address=/^(([A-z]|[А-я])+)?([\-]?[\,]?[\.]?[\s]?)?([A-z]|[А-я]){2,}([\-]?[\,]?[\.]?[\s]?)?(([A-z]|[А-я])+)?([\-]?[\,]?[\.]?[\s]?)?(([A-z]|[А-я])+)?([\-]?[\,]?[\.]?[\s]?)?([\d]?[\s]?)?([A-z]|[А-я]){2,}([\-]?[\,]?[\.]?[\s]?)?(([A-z]|[А-я])+)?([\,]?[\s]?)?[\d]+([\,]?[\s]?)?[\d]+/i;
		let address=document.getElementById("addressUser").value;
	
	//++++++++++++++++++++++
	if(!Temp_name.test(name)){
			alert("----FALSE---");
		return false;}	
	
	if(!Temp_phone.test(phone)){
			alert("----FALSE---");
		return false;}	
	if(!Temp_card.test(card)){
			alert("----FALSE---");
		return false;}	
		if(!Temp_address.test(address)){
			alert("----FALSE---");
		return false;}	
	
	
	alert("----TRUE---");
		//alert(Temp_card.test(card));
	//alert(Temp_phone.test(phone));
	//alert(Temp_name.test(name));
	alert(Temp_address.test(address));
	return true;
}
