let introVideo = document.getElementById('introVideo');
let introLoop = document.getElementById('introLoop');

console.log(introVideo);

introVideo.onended = function() {
    introLoop.style.display = 'block';
    introVideo.style.display = 'none';
};