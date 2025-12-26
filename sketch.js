let video;
let poseNet;
let pose;
let skeleton;

function setup() {
    const canvas = createCanvas(640, 480);
    canvas.parent("canvas-container");

    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    poseNet = ml5.poseNet(video, () => {
        console.log("PoseNet model loaded");
    });

    poseNet.on("pose", (results) => {
        if (results.length > 0) {
            pose = results[0].pose;
            skeleton = results[0].skeleton;
        }
    });
}

function draw() {
    image(video, 0, 0);

    if (pose) {
        fill(0, 255, 0);
        noStroke();
        for (let i = 0; i < pose.keypoints.length; i++) {
            ellipse(
                pose.keypoints[i].position.x,
                pose.keypoints[i].position.y,
                10,
                10
            );
        }

        stroke(0, 255, 255);
        strokeWeight(3);
        for (let i = 0; i < skeleton.length; i++) {
            let a = skeleton[i][0];
            let b = skeleton[i][1];
            line(
                a.position.x,
                a.position.y,
                b.position.x,
                b.position.y
            );
        }
    }
}
