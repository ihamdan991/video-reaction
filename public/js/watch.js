let mediaStream;
const videoData = JSON.parse(localStorage.getItem('videoSelected'))

document.title = `${videoData.title} - YouTube`;
document.getElementById("videTitle").innerHTML = videoData.title;
document.getElementById("videChannelName").innerHTML = videoData.channelName;
document.getElementById("videChannelIcon").src = videoData.channelIcon;
document.getElementById("videoView").innerHTML = videoData.view + ' x ditonton';
document.getElementById("videoDate").innerHTML = videoData.date;

// Get the video element
const video = document.getElementById('videoPlayer');
const faceExpression = document.getElementById('video')

var heightVideo, widthVideo;

// Update the source of the video
video.querySelector('source').src = videoData.video;
video.load();

// Get meta data
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    faceapi.nets.ageGenderNet.load('/models')
])

video.addEventListener('loadedmetadata', function () {
    const videoLength = video.duration;
    console.log('Video length:', videoLength);
    startVideo()
});

video.addEventListener('play', function () {
    console.log('Video played');
    let canvas = document.getElementById('overlay');
    canvas.style.display = 'block';
});

video.addEventListener('pause', function () {
    console.log('Video paused');
    let canvas = document.getElementById('overlay');
    canvas.style.display = 'none';
});

faceExpression.addEventListener('loadedmetadata', function () {
    widthVideo = this.videoWidth;
    heightVideo = this.videoHeight;
});

video.addEventListener('timeupdate', async function () {
    var currentTime = video.currentTime;
    console.log("currentTime: ", currentTime);
    const detections = await faceapi.detectAllFaces(faceExpression, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withAgeAndGender()

    const expression = detections.length > 0 ? detections[0].expressions : {
        "neutral": 0,
        "happy": 0,
        "sad": 0,
        "angry": 0,
        "fearful": 0,
        "disgusted": 0,
        "surprised": 0
    };

    const angry = document.getElementById('angry');
    const disgusted = document.getElementById('disgusted');
    const fearful = document.getElementById('fearful');
    const happy = document.getElementById('happy');
    const sad = document.getElementById('sad');
    const neutral = document.getElementById('neutral');
    const surprised = document.getElementById('surprised');

    angry.style.width = (expression.angry * 100).toFixed(2).toString() + '%';
    angry.setAttribute('aria-valuenow', (expression.angry * 100).toFixed(2));
    angry.innerHTML = `${(expression.angry * 100).toFixed(2)}%`;

    disgusted.style.width = (expression.disgusted * 100).toFixed(2).toString() + '%';
    disgusted.setAttribute('aria-valuenow', (expression.disgusted * 100).toFixed(2));
    disgusted.innerHTML = `${(expression.disgusted * 100).toFixed(2)}%`;

    fearful.style.width = (expression.fearful * 100).toFixed(2).toString() + '%';
    fearful.setAttribute('aria-valuenow', (expression.fearful * 100).toFixed(2));
    fearful.innerHTML = `${(expression.fearful * 100).toFixed(2)}%`;

    happy.style.width = (expression.happy * 100).toFixed(2).toString() + '%';
    happy.setAttribute('aria-valuenow', (expression.happy * 100).toFixed(2));
    happy.innerHTML = `${(expression.happy * 100).toFixed(2)}%`;

    sad.style.width = (expression.sad * 100).toFixed(2).toString() + '%';
    sad.setAttribute('aria-valuenow', (expression.sad * 100).toFixed(2));
    sad.innerHTML = `${(expression.sad * 100).toFixed(2)}%`;

    neutral.style.width = (expression.neutral * 100).toFixed(2).toString() + '%';
    neutral.setAttribute('aria-valuenow', (expression.neutral * 100).toFixed(2));
    neutral.innerHTML = `${(expression.neutral * 100).toFixed(2)}%`;

    surprised.style.width = (expression.surprised * 100).toFixed(2).toString() + '%';
    surprised.setAttribute('aria-valuenow', (expression.surprised * 100).toFixed(2));
    surprised.innerHTML = `${(expression.surprised * 100).toFixed(2)}%`;

    let canvas = document.getElementById('overlay');

    const displaySize = { width: widthVideo, height: heightVideo }
    faceapi.matchDimensions(canvas, displaySize)

    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    faceapi.draw.drawDetections(canvas, resizedDetections)
});

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => {
            mediaStream = stream
            faceExpression.srcObject = stream
        },
        err => console.error(err)
    )
}
