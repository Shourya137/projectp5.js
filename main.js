function setup(){
    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video,100,100,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);

    circle(445,50,80);

    circle(445,445,80);

    circle(50,445,80);

    fill(0,255,0);
    stroke(0,255,0);
    rect(90,40,315,20);

    rect(90,440,315,20);

    rect(40,90,20,315);

    rect(440,90,20,315);
}

function take_snapShot(){
    save('mySelfie.png');
}