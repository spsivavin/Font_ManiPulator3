noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;




function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.x;
        console.log("noseX = " + noseX +" noseY = " + noseY)

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
    }
}


function modelLoaded() {
    console.log('PoseNet Is Intialized');
}

function draw() {
    background('#969A97');
    textSize(difference);
    fill(0, 102, 153);
    text('PRUDVI NATH', 20, 70);
    document.getElementById("square_sides").innerHTML = "font size of the text will be =" + difference + "px";
    
}