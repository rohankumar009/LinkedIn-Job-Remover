setInterval(function(){
	document.getElementsByClassName('artdeco-button--tertiary')[1].click();
	
	ls = document.getElementsByClassName('image-text-lockup__text');
	
	if( ls[2].textContent.includes("Remove job") )
		ls[2].click();
	else
		ls[3].click();
	
	setTimeout(function(){
		document.getElementsByClassName('artdeco-toast-item__dismiss')[0].click()
	},500);
	
},1000); 
