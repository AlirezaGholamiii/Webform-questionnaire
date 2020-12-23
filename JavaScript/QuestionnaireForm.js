function questionnaire_Check(form)
{
	Check = [0,0,0,0]
	a = 0
	b = 0
	c = 0
	d = 0
	checkinfo = ""
	alpha = ["a","b","c","d","e","f","g","h","i","j","k"];
	for(j=0; j<11; j++)
	{
		Check[0] = selectedOne(form.querySelectorAll('input[name="' + alpha[j] + 'a"]'))
		Check[1] = selectedOne(form.querySelectorAll('input[name="' + alpha[j] + 'b"]'))
		Check[2] = selectedOne(form.querySelectorAll('input[name="' + alpha[j] + 'c"]'))
		Check[3] = selectedOne(form.querySelectorAll('input[name="' + alpha[j] + 'd"]'))
		check_Uniqueness = Math.pow(Check[0],3)+Math.pow(Check[1],3)+Math.pow(Check[2],3)+Math.pow(Check[3],3)
		//1^3=1, 2^3=8, 3^3=27, 4^3=64 ,total=100 
		if(check_Uniqueness != 100)
		{
			checkinfo += "Question " + (j+1) + ": wrong selection.\n" 
		}
		else
		{
			a += parseInt(Check[0])
			b += parseInt(Check[1])
			c += parseInt(Check[2])
			d += parseInt(Check[3])
		}
	}
		
		
	
	 if (checkinfo == "")
	 {
		 
		 
		var maxval = Math.max(a, b, c, d);
		var color ;
		
		if(maxval == a)
			{
				color = "Orange ";
			}
		    else if (maxval == b)
			{
				color = "Green ";
			}
			else if (maxval == c)
			{
				color = "Blue ";
			}
			else if (maxval == d)
			{
				color = "Gold ";
			}
			else
			{
				alert("Invalid Result\nTry again.")
			}
		
		
		
		
		
		
		alert("Your Color is : "+ color +" with "+ maxval +" points."+ "\n\nOrange: " +a +" points.\nGreen: "+b+" points.\nBlue: "+c+" point.\nGold: "+d+" point.") 
		
	
			if(maxval == a)
			{
				window.open('Orange.html','Orange');
			}
		    else if (maxval == b)
			{
				window.open('Green.html','Green');
			}
			else if (maxval == c)
			{
				window.open('Blue.html','Blue');
			}
			else if (maxval == d)
			{
				window.open('Gold.html','Gold');
			}
			else
			{
				alert("Invalid Result\nTry again.")
			}
	
		return true
	 }
	 else
	 {
		alert(checkinfo)
		return false
	 } 
	 
	 
}



function selectedOne(input)
{
	selectedValue = 0
	for (const data of input) 
	{
		if (data.checked) 
		{
            selectedValue = data.value;
            break;
        }
	}
	return selectedValue
}