canvas= document.getElementById("my_CANVAS");
ctx= canvas.getContext("2d");
color= "red";

ctx.beginPath();
ctx.strokeStyle = color ;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e){



    mouse_x =e.clientX-canvas.offsetLeft;
   mouse_y =e.clientY-canvas.offsetTop;

    console.log(mouse_x+mouse_y);
    circle(mouse_x,mouse_y);  
}
function circle(mouse_x,mouse_y){

    color = document.getElementById("color").value;
    console.log(color);

    ctx.beginPath();
    ctx.strokeStyle = color ;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
    
}
function clear_1(){
   ctx.clearRect(0,0,canvas.width,canvas.height);


}