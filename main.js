canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.jpg";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "canvas bg 1.jpg";

function add(){
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = background_image;
    
    car1_image_tag = new Image();
    car1_image_tag.onload = uploadcar1;
    car1_image_tag.src = car1_image;

    car2_image_tag = new Image();
    car2_image_tag.onload = uploadcar2;
    car2_image_tag.src = car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_image_tag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_image_tag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '37'){
        car1_left();
        console.log("left arrow key");
    }

    if (keypressed == '39'){
        car1_right();
        console.log("right arrow key");
    }

    if (keypressed == '65'){
        car2_left();
        console.log("a key");
    }

    if (keypressed == '68'){
        car2_right();
        console.log("d key");
    }

    if (car1_x > '700'){
        document.getElementById("game_status").innerHTML = "Car 1 WON!!!!!!!!!"
    }

    if (car2_x > '700'){
        document.getElementById("game_status").innerHTML = "Car 2 WON!!!!!!!!!"
    }
}

function car1_left(){
    if (car1_x >= 0){
        car1_x = car1_x - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){
    if (car1_x <= 700){
        car1_x = car1_x + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left(){
    if (car2_x >= 0){
        car2_x = car2_x - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right(){
    if (car2_x <= 700){
        car2_x = car2_x + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}