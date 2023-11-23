// let login=document.getElementById("login")
// function loginu()
// {
//     document.user_form.action = "academics.html";
//   return true;
//   alert("suscessfully logged in")
// }
// loginu()

// let cancel=document.getElementById("Cancel")
// function home()
// {
//     document.user_form.action="proj`1.html";
//     alert("You are redirected to our sign in page");
//     return true;
// }
// home()

let login=document.getElementById("login")
function loginu()
{
    document.user_form.action = "academics.html";
    // alert("suscessfully logged in")
     return true;
}
loginu()

let cancel=document.getElementById("Cancel")
function home()
{
    document.user_form.action="proj`1.html";
    // alert("You are redirected to our sign in page");
    return true;
}
home()

let srno= document.querySelector('.srno');
let lawda = srno.value;
console.log(lawda)