// checking if users browser supports webRTC
let streamVideo;
function checkReq() {
    return (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia )
}

$("#stopVideo").off('click').on('click', function (e) {
    console.log("e.target", e.target)
})

if(checkReq()){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia

    navigator.getUserMedia({audio: true, video: true}, function (stream) {
        console.log("stream", stream)   
        let video = $('#video');
        streamVideo = stream;
        // video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        console.log("video", video)
        // video.play()

        if (stream.active) {
            console.log("stream.active", stream.active)
        }
        
    }, function (err) {})
}
else
alert('webRTC is not supported')


// console.log("stream.active", streamVideo.active)


console.log('this is working');

$("#btnGetAudioTracks").on("click", function(){ 
    console.log("getAudioTracks"); 
    // console.log(streamVideo.getAudioTracks()); 
 });
   
