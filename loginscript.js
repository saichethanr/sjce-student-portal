// alert('You can only access the notes and notification by signing in with the given user id and password')
let login=document.getElementById("login")
function loginu()
{
    document.user_form.action = "academics.html";
    return true;

    alert("suscessfully logged in")
     
}
loginu()

let cancel=document.getElementById("cancel")
function home()
{
    document.user_form.action="sai.html";
    return true;
    alert("You are redirected to our sign in page");
  
}
home()