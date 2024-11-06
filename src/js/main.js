import { animJournaux } from "./journalAnim.js";

let collageWrapper = document.getElementById('collage-wrapper');
let pcWrapper = document.getElementById('pc-wrapper');

let introVideo = document.getElementById('introVideo');
let introLoop = document.getElementById('introLoop');
let zappingVideo = document.getElementById('zappingVideo');
let ordiImage = document.getElementById('ordiImage');
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
                const duration = distance * 250;
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
                        ongletsAnim();
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

/** A déplacer quand tous les onglets auront été créés */
const ongletsAnim = () => {
    collageWrapper.style.pointerEvents = 'none';
    pcWrapper.style.pointerEvents = 'auto';
    pcWrapper.style.display = 'block';

    gsap.to(mondeOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
    });
    gsap.to(hugoOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
        onComplete: function() {
            hugoOnglet.children[1].children[0].play();
        }
    }).delay(0.5);
    gsap.to(twitterOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
    }).delay(0.7);
    gsap.to(afpOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
    }).delay(1.2);
    gsap.to(redditOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
    }).delay(1.5);
    gsap.to(bfmOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
        onComplete: function() {
            bfmOnglet.children[1].play();
        }
    }).delay(1.6);
    gsap.to(ukraineOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
        onComplete: function() {
            ukraineOnglet.children[1].play();
        }
    }).delay(1.9);
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

const teleTransition = () => {
    errorOnglet.style.display = 'none';

    for(const element of onglets) {
        if(element !== chosenOnglet) {
            gsap.to(element, {
                duration: 0.5,
                scale: 0,
            }).then(() => {
                if(element == bfmOnglet) {
                    bfmOnglet.children[1].pause();
                } else if(element == ukraineOnglet) {
                    ukraineOnglet.children[1].pause();
                }
                element.style.display = 'none';
            });
        }
    }

    gsap.to(chosenOnglet, {
        x: window.innerWidth/2 - chosenOnglet.getBoundingClientRect().width/2,
        y: window.innerHeight/2 - chosenOnglet.children[1].getBoundingClientRect().height/2,
        top: 0,
        left: 0,
        duration: 1,
    }).then(()=>{

        zappingVideo.style.display = 'block';
        gsap.to(zappingVideo, {
            x: window.innerWidth/2 - zappingVideo.getBoundingClientRect().width/2,
            y: window.innerHeight/2 - zappingVideo.getBoundingClientRect().height/2,
            duration: 0.01,
        })
        // zappingVideo.play();

        gsap.to(bin, {
            duration: 1,
            opacity: 0,
        })
        gsap.to(bin2, {
            duration: 1,
            opacity: 0,
        });
        for(const element of journaux) {
            gsap.to(element, {
                duration: 1,
                opacity: 0,
            });
        }
        gsap.to(chosenOnglet.children[1], {
            width: "1000px",
            height: "570px",
            yPercent: -18,
            xPercent: -19.28,
            duration: 1,
        });
        gsap.to(chosenOnglet.children[1].children[0], {
            duration: 1,
            scale: 1.12,
            top: "-43px",
        });
        gsap.to(ordiImage, {
            duration: 1,
            scale: 0,
        }).then(()=>{
            bin.style.display = 'none';
            bin2.style.display = 'none';
            ordiImage.style.display = 'none';
        });
    });
}

window.closeOnglet = closeOnglet;
window.teleTransition = teleTransition;
