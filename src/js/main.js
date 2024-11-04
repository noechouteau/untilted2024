import { animJournaux } from "./journalAnim.js";

let introVideo = document.getElementById('introVideo');
let introLoop = document.getElementById('introLoop');
let ordiImage = document.getElementById('ordiImage');
let bin = document.getElementById('bin');

console.log(introVideo);

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(MotionPathPlugin)
    // gsap code here!
   });

let assetsLoaded = 0;
const assets = [
    {src: '../../assets/journal/journal1.jpeg', id: 'blablaid', asset: null, zindex: 3},
    {src: '../../assets/journal/journal2.jpeg', id: 'blablaid', asset: null, zindex: 4},
    {src: '../../assets/journal/journal3.jpeg', id: 'blablaid', asset: null, zindex: 2},
    {src: '../../assets/journal/journal4.jpeg', id: 'blablaid', asset: null, zindex: 3},
    {src: '../../assets/journal/journal5.jpeg', id: 'blablaid', asset: null, zindex: 3},
    {src: '../../assets/journal/journal6.jpeg', id: 'blablaid', asset: null, zindex: 2},
    {src: '../../assets/journal/journal7.jpeg', id: 'blablaid', asset: null, zindex: 4},
    {src: '../../assets/journal/journal8.jpeg', id: 'blablaid', asset: null, zindex: 5},
    {src: '../../assets/journal/journal9.jpeg', id: 'blablaid', asset: null, zindex: 3},
    {src: '../../assets/journal/journal10.jpeg', id: 'blablaid', asset: null, zindex: 4},
    {src: '../../assets/journal/journal11.jpeg', id: 'blablaid', asset: null, zindex: 4},
    {src: '../../assets/journal/journal12.jpeg', id: 'blablaid', asset: null, zindex: 3},
    {src: '../../assets/journal/journal13.jpeg', id: 'blablaid', asset: null, zindex: 4},
    {src: '../../assets/journal/journal14.jpeg', id: 'blablaid', asset: null, zindex: 6},
    {src: '../../assets/journal/journal15.jpeg', id: 'blablaid', asset: null, zindex: 6},
    {src: '../../assets/journal/journal16.jpeg', id: 'blablaid', asset: null, zindex: 5},
]

for (const element of assets) {
    let asset = element;
    let img = new Image();
    img.src = asset.src;
    img.onload = function() {
        asset.asset = img;
        assetsLoaded++;
        if (assetsLoaded === assets.length) {
            console.log('All assets loaded');
            initImages();
        }
    }
}

introVideo.onended = function() {
    introLoop.style.display = 'block';
    introVideo.style.display = 'none';
    animate();
};

let imgWrapper = document.getElementById('collage-wrapper');

let journaux = []

const initImages = () => {
    for(let i = 0; i < assets.length; i++) {
        let newImg = assets[i].asset
        newImg.id = 'journal' + i;
        newImg.style.zIndex = assets[i].zindex;
        newImg.style.width = '8vw';
        newImg.style.display = "none";
        newImg.style.position = 'absolute';
        newImg.style.left = 0
        newImg.style.cursor = 'pointer';
        newImg.style.top = 0
        newImg.addEventListener('click', function() {
            newImg.style.pointerEvents = 'none';
            for(let j = 1; j < 6; j++) {
                setTimeout(function() {
                    newImg.src = '../../assets/journal/anims/journal7/journal7-' + j + '.png';
                }, j*150);
            }
            gsap.to(newImg, {
                duration: 1,
                scale: 0.7,
                ease: 'power2.inOut',
            }).then(()=>{
                gsap.to(newImg, {
                    duration: 1,
                    // motionPath: {
                    //     path: [
                    //         { x: newImg.x, y: newImg.y }, // Point de départ
                    //         { x: window.innerWidth - 15, y: window.innerHeight - 40 },
                    //         { x: window.innerWidth - 30, y: window.innerHeight - 80 },
                    //         { x: window.innerWidth - 40, y: window.innerHeight - 120 } // Point d'arrivée
                    //     ],
                    //     type: 'cubic',
                    //     curviness: 1.5,
                    // },
                    x: window.innerWidth - 40,
                    y: window.innerHeight-120 ,
                    ease: 'power2.inOut',
                }).then(()=>{
                    newImg.style.display = 'none';
                });
                if(bin.src.includes('Empty')) {
                    setTimeout(function() {
                        bin.src = '../../assets/ordi/binFull.png';
                    }, 700);
                }
            });
        });
        journaux.push(newImg);
        imgWrapper.appendChild(newImg);
    }
}

let journauxEnd = false;

const animate = () => {
    console.log('animate');
    if(imgWrapper.children.length > 15) {
        console.log(journaux[0].getBoundingClientRect().height)
        animJournaux(journaux);
    }
    setTimeout(function() {
        imgWrapper.style.pointerEvents = 'auto';
        introLoop.style.display = 'none';
        ordiImage.style.display = 'block';

    }, 5500);
    console.log(journaux[15])
}


