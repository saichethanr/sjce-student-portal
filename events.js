let text =document.getElementById('text');
window.addEventListener('scroll',()=>{
    let value = window.scrollY;

    text.style.top =  30 + value* -0.5+ '%';})
    let bird1 = document.getElementById('bird1');
    window.addEventListener('scroll',()=>{
        let value = window.scrollY;

        bird1.style.top =  value * -1.5+ 'px';
        bird1.style.left = value * 2+ 'px';
    
           })



    let bird2 = document.getElementById('bird2');
    window.addEventListener('scroll',()=>{
        let value = window.scrollY;

        bird2.style.top = value * -1.5+ 'px';
        bird2.style.left = value * -5+ 'px';

           })


    let btn = document.getElementById('btn');
    window.addEventListener('scroll',()=>{
        let value = window.scrollY;

     
        btn.style.marginTop = value * 1.5+ 'px';
  
           })


    let rocks = document.getElementById('rocks');
    window.addEventListener('scroll',()=>{
        let value = window.scrollY;

        
       rocks.style.top = value * -0.12+ 'px';
 
           })


    let forest= document.getElementById('forest');
    window.addEventListener('scroll',()=>{
        let value = window.scrollY;

   
       forest.style.top = value * 0.25+ 'px';
       header.style.top = value * -0.5 + 'px';
           })


 


    let header = document.getElementById('header');
    window.addEventListener('scroll',()=>{
        let value = window.scrollY;

    
       header.style.top = value * -0.5 + 'px';
           })

    