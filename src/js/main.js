import { animJournaux } from "./journalAnim.js";
import { ongletsAnim } from "./ordiAnim.js";
import { createSticker, createStickerCustomPos, fadeSticker } from "./sticker.js";
import { teleTransition } from "./teleTransitionAnim.js";

let collageWrapper = document.getElementById('collage-wrapper');
let pcWrapper = document.getElementById('pc-wrapper');

let introVideo = document.getElementById('introVideo');
let introLoop = document.getElementById('introLoop');
let zappingVideo = document.getElementById('zappingVideo');
let ordiImage = document.getElementById('ordiImage');
let finaleVideo = document.getElementById('finaleVideo');

let bin = document.getElementById('bin');
let bin2 = document.getElementById('bin2');

let clickedJournaux = 0;

let mondeOnglet = document.getElementById('mondeOnglet');
let afpOnglet = document.getElementById('afpOnglet');
let redditOnglet = document.getElementById('redditOnglet');
let twitterOnglet = document.getElementById('twitterOnglet');
let hugoOnglet = document.getElementById('hugoOnglet');
let bfmOnglet = document.getElementById('bfmOnglet');
let ukraineOnglet = document.getElementById('ukraineOnglet');

let powerButton = document.getElementById('powerButton');

let onglets = [mondeOnglet, afpOnglet, redditOnglet, twitterOnglet, hugoOnglet, bfmOnglet, ukraineOnglet];

let errorOnglet = document.getElementById('errorOnglet');
let chosenOnglet = null;

console.log(introVideo);

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(MotionPathPlugin)
    // gsap code here!
   });

let assetsLoaded = 0;
const assets = [
    {src: '../../assets/journal/journal1/journal1-00.png', id: 'blablaid', asset: null, zindex: 3},
    {src: '../../assets/journal/journal2/journal2-00.png', id: 'blablaid', asset: null, zindex: 2},
    {src: '../../assets/journal/journal3/journal3-00.png', id: 'blablaid', asset: null, zindex: 4},
    {src: '../../assets/journal/journal4/journal4-00.png', id: 'blablaid', asset: null, zindex: 3},
    {src: '../../assets/journal/journal5/journal5-00.png', id: 'blablaid', asset: null, zindex: 3},
    {src: '../../assets/journal/journal6/journal6-00.png', id: 'blablaid', asset: null, zindex: 2},
    {src: '../../assets/journal/journal7/journal7-00.png', id: 'blablaid', asset: null, zindex: 4},
    {src: '../../assets/journal/journal8/journal8-00.png', id: 'blablaid', asset: null, zindex: 5},
    {src: '../../assets/journal/journal9/journal9-00.png', id: 'blablaid', asset: null, zindex: 3},
    {src: '../../assets/journal/journal10/journal10-00.png', id: 'blablaid', asset: null, zindex: 4},
    {src: '../../assets/journal/journal11/journal11-00.png', id: 'blablaid', asset: null, zindex: 4},
    {src: '../../assets/journal/journal12/journal12-00.png', id: 'blablaid', asset: null, zindex: 3},
    {src: '../../assets/journal/journal13/journal13-00.png', id: 'blablaid', asset: null, zindex: 4},
    {src: '../../assets/journal/journal14/journal14-00.png', id: 'blablaid', asset: null, zindex: 6},
    {src: '../../assets/journal/journal15/journal15-00.png', id: 'blablaid', asset: null, zindex: 6},
    {src: '../../assets/journal/journal16/journal16-00.png', id: 'blablaid', asset: null, zindex: 5},
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

let introMusic = new Audio('../../assets/intro/introMusic.mp3');
let neonLoop = new Audio('../../assets/intro/neonbuzzloop.wav');
neonLoop.loop = true;
neonLoop.volume = 0;

const startAnim = () => {
    document.getElementById('introVideo').play()
    introMusic.volume = 0.3;
    introMusic.play();
    neonLoop.play();

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
            let randSon = Math.floor(Math.random() * 2) + 1;
            let journalSon = new Audio('../../assets/journal/sons/journalSon-'+randSon+'.wav');
            journalSon.volume = 0.5;
            if(randSon === 3) {
                journalSon.volume = 0.2;
            }
            journalSon.play();
            gsap.to(introMusic, {
                duration: 1,
                volume: introMusic.volume - 0.00666666666,
            })
            gsap.to(neonLoop, {
                duration: 1,
                volume: neonLoop.volume + 0.002,
            })

            for(let j = 0; j < 7; j++) {
                setTimeout(function() {
                    if(j < 5) {
                        newImg.src = '../../assets/journal/journal'+(i+1)+'/journal'+(i+1)+'-0' + j + '.png';
                    } else {
                        let randBoule = Math.floor(Math.random() * 3) + 1;
                        console.log(randBoule);
                        newImg.src = '../../assets/journal/BoulettesFinales/boulette-'+randBoule + '.png';
                    }
                }, j*150);
            }
            gsap.to(newImg, {
                duration: 1,
                scale: 1,
                zIndex: 9,
                ease: 'power2.inOut',
            }).then(()=>{
                const distance = Math.sqrt(Math.pow(window.innerWidth - 40 - newImg.getBoundingClientRect().x, 2) + 
                Math.pow(window.innerHeight - 120 - newImg.getBoundingClientRect().y, 2));
                console.log(distance);
                gsap.to(newImg, {
                    duration : 1,
                    motionPath: {
                        path: [
                            // { x: newImg.getBoundingClientRect().x, y: newImg.getBoundingClientRect().y },
                            {
                                x: ((newImg.getBoundingClientRect().x + (window.innerWidth - 40)) / 2), // Mi-chemin en X
                                y: Math.max(((newImg.getBoundingClientRect().y + (window.innerHeight - 120)) / 2) - distance/3, 10) // Mi-chemin en Y
                            },
                            { x: window.innerWidth - 40, y: window.innerHeight - 120 }
                        ],
                        curviness:1.2,
                    },
                    // x: window.innerWidth - 40,
                    // y: window.innerHeight-120 ,
                    ease: "power1.inOut",
                })
                .then(()=>{
                    clickedJournaux++;
                    if(clickedJournaux === 16) {
                        ongletsAnim(collageWrapper, pcWrapper, mondeOnglet, hugoOnglet, twitterOnglet, afpOnglet, redditOnglet, bfmOnglet, ukraineOnglet);
                        gsap.to(introMusic, {
                            duration: 1,
                            volume: 0,
                        })
                    }
                });
            });
        });
        journaux.push(newImg);
        imgWrapper.appendChild(newImg);
    }
}

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
        gsap.to(bin, {
            duration: 1,
            opacity: 1,
            ease: 'power2.inOut',
        });
        gsap.to(bin2, {
            duration: 1,
            opacity: 1,
            ease: 'power2.inOut',
        });
    }, 5500);
    console.log(journaux[15])
}


const closeOnglet = (onglet) => {
    console.log("test");
    let closedElement = document.getElementById(onglet);
    if(closedElement == hugoOnglet) {
        errorOnglet.style.display = 'block';
        let errorSound = new Audio('../../assets/ordi/macError.mp3');
        errorSound.play();
        chosenOnglet = closedElement;
    } else {
        let closeSound = new Audio('../../assets/ordi/sons/close1.mp3');
        closeSound.volume = 0.3;
        closeSound.play();
        gsap.to(closedElement, {
            duration: 0.7,
            scale: 0,
            ease: 'back.in(1.4)',
        }).then(
            () => {
                closedElement.style.display = 'none';
                onglets = onglets.filter((onglet) => onglet !== closedElement);
                if(closedElement == bfmOnglet) {
                    console.log(bfmOnglet.children[1]);
                    bfmOnglet.children[1].pause();
                } else if(closedElement == ukraineOnglet) {
                    ukraineOnglet.children[1].pause();
                }
            }
        )
    }
}

const callTeleTransition = () => {
    teleTransition(onglets, chosenOnglet, bin, bin2, journaux, ordiImage, zappingVideo, powerButton );
    setTimeout(() =>(createSticker('taiwan', zappingVideo, true, 5 )),500)
    setTimeout(() =>(createStickerCustomPos('boxe', (window.innerWidth / 100) * 70, (window.innerHeight / 100) * 50, true, 16)),16000)
    setTimeout(() =>(createSticker('kamala_griffon', zappingVideo, true, 6)),22000)
    setTimeout(() =>(createStickerCustomPos('valence', (window.innerWidth / 100) * 40, (window.innerHeight / 100) * 70, true, 9)),24000)

}

const powerOff = () => {
    zappingVideo.pause();
    zappingVideo.style.display = 'none';
    fadeSticker()
    finaleVideo.style.display = 'block';
    powerButton.style.display = 'none';
    finaleVideo.volume = 0.7;
    finaleVideo.play();


}

window.startAnim = startAnim;
window.closeOnglet = closeOnglet;
window.callTeleTransition = callTeleTransition;
window.powerOff = powerOff;
