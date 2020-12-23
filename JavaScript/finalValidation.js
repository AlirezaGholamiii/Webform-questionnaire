
function check(form)/*function to check Name & password*/
{

	//If both are correct then go to next page
  if(form.userid.value == "user1" && form.pswrd.value == "passAdmin01#")
	{
		window.open('QuestionnaireForm.html')
    } 
	
	//If both are empty then Alert
  else if (form.userid.value == "" && form.pswrd.value == "")
  {
	  alert ("Please Enter Your Name and Password.")
	  document.getElementById("userid").focus();
	  
  }
  //If Name is empty then Alert
  else if (form.userid.value == "")
  { 
	 alert ("Please enter your name.\n")
	 document.getElementById("userid").focus(); 
  }
  //If pass is empty then Alert
  else if (form.pswrd.value == "")
  {
	  alert ("Please enter your password\n")
	  document.getElementById("pswrd").value = ''
	  document.getElementById("pswrd").focus();
  }	
  //If both name and pass are invalid then Alert
	else if (form.userid.value != "user1" && form.pswrd.value != "passAdmin01#")
	{
		   alert("Name and Password are not correct.")
		   document.getElementById("userid").value = ''
		   document.getElementById("pswrd").value = ''
		   document.getElementById("userid").focus();
		   
    }
  
  //If user enter a wrong Name then Alert
  else if (form.userid.value != "user1")
  { 
	 alert ("Your name is invalid.\n")
	 document.getElementById("userid").value = ''
	 document.getElementById("userid").focus(); 
  }
  
  //If user enter a wrong Pass then Alert
  else if (form.pswrd.value != "passAdmin01#")
  { 
	 alert ("Your password is invalid.\n")
	 document.getElementById("pswrd").value = ''
	 document.getElementById("pswrd").focus(); 
  }  

 
}
