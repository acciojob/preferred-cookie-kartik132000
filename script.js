// Function to get a cookie by name
document.addEventListner("DOMcontentLoaded",()=>{
	const usernameInput = document.getElementById("username");
	const passwordInput = document.getElementById("password");
	const checkboxInput = document.getElementById("checkbox");
	const submitInput = document.getElementById("submit");
	const existingButtonIput = document.getElementById("existing");
	
	function updateExistingButton() {
		const savedUsername = localstorage.getItem("username");
		const savedPassword = localstorage.getItem("password");
		existingButton.style.display = (savedname & savedPassword) ? "block" : "none"; 
	}

	updateExistingButton();

	document.getElementById("loginform").addEventListener("submit",(e) =>{
		e.preventDefault();
		const username = usenameInput.value;
		const password  = passwordInput.value;
		
		alert(`logged in as ${username}`);
		if(checkbox.cheked){
			localstorage.setItem("username",username);
			localstorage.setItem("password",password);
		}else{
			localstorage.removeItem("username",username);
			localstorage.removeItem("password",password);
		}
		updateExistingButton();
	});

	existingButton.addEventListener("click",() => {
	const savedUsername  = localstorage.getItem("username");
		alert(`logged in as${savedUsername}`);
	});
});