const splash=document.querySelector('.splash');
document.addEventListener('DOMContentLoaded',(e)=>{
setTimeout(()=>{
   splash.classList.add('display-none');
},1500);

})
function sav()
{
let name=prompt("Enter your name,mobile number for contacting ");
console.log(name)
}
var i = 0;
var txt = '';
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener('scroll',()=>{
    
  let content=document.querySelector(".timeline-row");
  let currentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(currentPosition<screenPosition){
      content.classList.add('active');

  }
  else{
      content.classList.remove('active');
  }
});
window.addEventListener('scroll',()=>{
  
  let content=document.querySelector(".timeline-row-1");
  let currentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(currentPosition<screenPosition){
      content.classList.add('active');

  }
  else{
      content.classList.remove('active');
  }
});
window.addEventListener('scroll',()=>{
  
  let content=document.querySelector(".timeline-row-2");
  let currentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(currentPosition<screenPosition){
      content.classList.add('active');

  }
  else{
      content.classList.remove('active');
  }
});
window.addEventListener('scroll',()=>{
  
  let content=document.querySelector(".timeline-row-3");
  let currentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(currentPosition<screenPosition){
      content.classList.add('active');

  }
  else{
      content.classList.remove('active');
  }
});
window.addEventListener('scroll',()=>{
  
  let content=document.querySelector(".timeline-row-4");
  let currentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(currentPosition<screenPosition){
      content.classList.add('active');

  }
  else{
      content.classList.remove('active');
  }
});
window.addEventListener('scroll',()=>{
  
  let content=document.querySelector(".timeline-row-5");
  let currentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(currentPosition<screenPosition){
      content.classList.add('active');

  }
  else{
      content.classList.remove('active');
  }
});
window.addEventListener('scroll',()=>{
  
  let content=document.querySelector(".timeline-row-6");
  let currentPosition=content.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  if(currentPosition<screenPosition){
      content.classList.add('active');

  }
  else{
      content.classList.remove('active');
  }
});
window.sr = ScrollReveal({reset:true})
sr.reveal('jayciana',{duration:200});



function toggle(){

  document.querySelector('.popup').classList.toggle('passive');}

  let card = document.querySelector('.card');
  let cardtoggle = document.querySelector('.takla');
  cardtoggle.onclick = function(){
      card.classlist.toggle('active')
  }