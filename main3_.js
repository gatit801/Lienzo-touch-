var last_position_of_x, last_position_of_y;
color = "red";
grosor = 6;

Lienzo = document.getElementById("mycanvas");
ctx = Lienzo.getContext("2d");

var width = screen.width

new_width = screen.width
new_height = screen.width

if(width < 992){
    document.getElementById("mycanvas").width = new_width;
    document.getElementById("mycanvas").height = new_height;
    document.body.style.overflow
}

Lienzo.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart")

    color = document.getElementById("color").value;
    grosor = document.getElementById("linea_gros").value;

    mouse_x = e.touches[0].clientX - Lienzo.offLeft;
    mouse_y = e.touches[0].clientY - Lienzo.offsetTop;

}



Lienzo.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    mouse_x = e.touches[0].clientX - Lienzo.offLeft;
    mouse_y = e.touches[0].clientY - Lienzo.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(mouse_x,mouse_y)
    ctx.stroke();

    last_position_of_y = mouse_y;   
    last_position_of_x = mouse_x
    

    }  
function refresh(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    }