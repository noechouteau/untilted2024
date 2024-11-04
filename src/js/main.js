let introVideo = document.getElementById('introVideo');
let introLoop = document.getElementById('introLoop');

console.log(introVideo);

introVideo.onended = function() {
    introLoop.style.display = 'block';
    introVideo.style.display = 'none';
};

let imgWrapper = document.getElementById('collage-wrapper');

for(let i = 1; i < 17; i++) {
    let newImg = document.createElement("img");
    newImg.src = '../../assets/journal/journal' + i + '.jpeg';
    newImg.id = 'journal' + i;
    newImg.style.width = '8vw';
    newImg.addEventListener('click', function() {
        for(let j = 1; j < 6; j++) {
            setTimeout(function() {
                newImg.src = '../../assets/journal/anims/journal7/journal7-' + j + '.png';
            }, j*200);
        }

    });
    imgWrapper.appendChild(newImg);
}

if(imgWrapper.children.length > 15) {
    console.log("test")
    let journal1 = document.getElementById('journal1');
    gsap.fromTo(journal1,{ y: -40}, { y: 120, duration: 1});
}