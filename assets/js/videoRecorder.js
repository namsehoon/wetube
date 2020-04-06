const recordContainer = document.getElementById("jsRecordContainer");
const videoPreview = document.getElementById("jsVideoPreview");
const recordBtn = document.getElementById("jsRecordBtn");

let streamObject;

const handleVideoData = (event) => {
  console.log(event);
};

const startRecording = () => {
  const videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData);
};

const getRecord = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    recordBtn.innerHTML = "Stop recording";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.innerHTML = "You can not recording asshole";
  } finally {
    recordBtn.removeEventListener("click", getRecord);
  }
};

function init() {
  recordBtn.addEventListener("click", getRecord);
}

if (recordContainer) {
  init();
}
