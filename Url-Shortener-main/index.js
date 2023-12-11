function removeNumbers(){
    let email=document.getElementById("email").value;
   let v=email.replace(/[0-9]/g,'');
   document.write(v);
    }
function signInVal(){
let Email=document.getElementById("floatingInput").value;

if(Email.endsWith("in")|| Email.endsWith("org")|| Email.endsWith("com")|| Email.endsWith("edu")|| Email.endsWith("gov.in")){
if(Email.length>=10){

}
}
else {
    alert("enter the valid email with .com,.in,.edu");
}
let password=document.getElementById("floatingPassword").value;
let confirm=document.getElementById("floatingconfirm").value;
if(password.length>=5){

}
else{
    alert("Enter some strong passwords with more than the 5 Characters");
}
if(password===confirm){

}
else{
    alert("password and confirm password should be same");
}
}
