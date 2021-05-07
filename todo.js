function display(validate)
{
  if(validate(true))
   {
       alert("Login Successful!!");
       window.close("index.html");
      window.open("welcome.html");
   }
    validate();
    
}


function validate(some){
if(document.getElementById("user").value=="admin" && document.getElementById("inputPassword").value==12345)
{
  return true;

    }
    if(document.getElementById("user").value!="admin" && document.getElementById("inputPassword")==12345){
            window.alert("Username is Invalid");
            return false;

    }
    if(document.getElementById("user").value=="admin" && document.getElementById("inputPassword")!=12345)
    {
        alert("password is Invalid");
        return false;

    }
    if(document.getElementById("user").value!="admin" && document.getElementById("inputPassword")!=12345){
            alert("Username and password are Invalid");
            return false;

    }
}

//display();
