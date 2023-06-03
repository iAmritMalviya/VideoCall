
const socket = io('/');
let videoGrid = $(".video-grid")
let videoStream;
let video = $('<video />');
video.muted = true;

let peer = new Peer()

peer.on('open', function (id) {
    console.log("peer id", id)
})

let conn = peer.connect('peer-id');
conn.on('open', function () {
    conn.on('data', function (data) {
        console.log("received", data)
 })
 conn.send('hi');
})


peer.on('connection', function (conn) {

    console.log("conn", conn)
})


peer.on('connection', function (conn) {
    conn.on('data', function (data) {
        console.log("data", data)
    })
})

navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
})
.then(stream => {
    let call = peer.call('id', stream);
    videoStream = stream;
    addVideoStream(video, stream)
})


const addVideoStream = (video,stream) =>{
    video.srcObject = stream;
    video.on("loadedmetadata", () => {
        video.play();
        videoGrid.append(video)
    })
}