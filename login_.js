function myFunction()
{
 var un = document.forms["myForm"] ["uname"].value;
 var pw = document.forms["myForm"] ["pass"].value;
 if(un == "student" && pw == "1234")
 {
     window.location.href="index3.html"
 }
 else{
     alert("invalid username and password");
 }
}