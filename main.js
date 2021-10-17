function setup() {
    video = createCapture(VIDEO);
    video.size(650,600);
    video.position(260,150);

    canvas = createCanvas(650,500);
    canvas.position(960,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw() {
    background('#969A97');
}