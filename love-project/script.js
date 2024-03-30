
let loveText = document.querySelector(".loveText");

let phoneNumber = document.querySelector(".phoneNumber");


  setInterval(() => {
    setTimeout(() => {
        loveText.innerHTML="<span class='i'>I</span>"; 
    }, 1000);
    setTimeout(() => {
        loveText.innerHTML="<span class='love'>LOVE</span>"; 
    }, 2000);
    setTimeout(() => {
        loveText.innerHTML="<span class='you'>YOU</span>"; 
    }, 3000);
    setTimeout(() => {
        loveText.innerHTML="<span class='i'>JAN</span>"; 
    }, 4000);
  }, 4000);



  document.addEventListener("mousemove", function(r){
    var body =document.querySelector('body');
    var circle = document.createElement('span');
    circle.setAttribute("class","circle");
    var size = Math.random()*100;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    var x= r.offsetX;
    var y= r.offsetY;
    circle.style.left=x+'px';
    circle.style.top=y+'px';
    circle.style.width=20+size+'px';
    circle.style.height=20+size+'px';

    body.appendChild(circle);

    setTimeout(()=>{
   circle.remove();
    },3000)
});
