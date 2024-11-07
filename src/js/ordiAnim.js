import { createSticker } from "./sticker.js";

export function ongletsAnim(collageWrapper, pcWrapper, mondeOnglet, hugoOnglet, twitterOnglet, afpOnglet, redditOnglet, bfmOnglet, ukraineOnglet) { 
    collageWrapper.style.pointerEvents = 'none';
    pcWrapper.style.pointerEvents = 'auto';
    pcWrapper.style.display = 'block';

    // Animation et son pour mondeOnglet
    gsap.to(mondeOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
    });
    let randXyl = Math.floor(Math.random() * 7) + 1;
    let previousRand = randXyl;
    let xylSound = new Audio('../../assets/ordi/sons/xyl' + randXyl + '.mp3');
    xylSound.volume = 0.15;
    xylSound.play();

    // Animation et son pour hugoOnglet
    gsap.to(hugoOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
        onComplete: function() {
            hugoOnglet.children[1].children[0].play();
        }
    }).delay(0.5);
    setTimeout(() => {
        randXyl = Math.floor(Math.random() * 7) + 1;
        while(randXyl == previousRand) {
            randXyl = Math.floor(Math.random() * 7) + 1;
        }
        previousRand = randXyl;
        xylSound = new Audio('../../assets/ordi/sons/xyl' + randXyl + '.mp3');
        xylSound.volume = 0.15;
        xylSound.play();
    }, 500); // 0.5 seconde de délai

    // Animation et son pour twitterOnglet
    gsap.to(twitterOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
        onComplete : () => {setTimeout(createSticker('robot', twitterOnglet, true, 7), 700)}
    }).delay(0.7);
    setTimeout(() => {
        randXyl = Math.floor(Math.random() * 7) + 1;
        while(randXyl == previousRand) {
            randXyl = Math.floor(Math.random() * 7) + 1;
        }
        previousRand = randXyl;
        xylSound = new Audio('../../assets/ordi/sons/xyl' + randXyl + '.mp3');
        xylSound.volume = 0.15;
        xylSound.play();
    }, 700); // 0.7 seconde de délai

    // Animation et son pour afpOnglet
    gsap.to(afpOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
    }).delay(1.2);
    setTimeout(() => {
        randXyl = Math.floor(Math.random() * 7) + 1;
        while(randXyl == previousRand) {
            randXyl = Math.floor(Math.random() * 7) + 1;
        }
        previousRand = randXyl;
        xylSound = new Audio('../../assets/ordi/sons/xyl' + randXyl + '.mp3');
        xylSound.volume = 0.15;
        xylSound.play();
    }, 1200); // 1.2 secondes de délai

    // Animation et son pour redditOnglet
    gsap.to(redditOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
    }).delay(1.5);
    setTimeout(() => {
        randXyl = Math.floor(Math.random() * 7) + 1;
        while(randXyl == previousRand) {
            randXyl = Math.floor(Math.random() * 7) + 1;
        }
        previousRand = randXyl;
        xylSound = new Audio('../../assets/ordi/sons/xyl' + randXyl + '.mp3');
        xylSound.volume = 0.15;
        xylSound.play();
    }, 1500); // 1.5 secondes de délai

    // Animation et son pour bfmOnglet
    gsap.to(bfmOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
        onComplete: function() {
            bfmOnglet.children[1].play();
            createSticker('plouf', bfmOnglet, true, 11);
        }
    }).delay(1.6);
    setTimeout(() => {
        randXyl = Math.floor(Math.random() * 7) + 1;
        while(randXyl == previousRand) {
            randXyl = Math.floor(Math.random() * 7) + 1;
        }
        previousRand = randXyl;
        xylSound = new Audio('../../assets/ordi/sons/xyl' + randXyl + '.mp3');
        xylSound.volume = 0.15;
        xylSound.play();
    }, 1600); // 1.6 secondes de délai

    // Animation et son pour ukraineOnglet
    gsap.to(ukraineOnglet, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
        onComplete: function() {
            ukraineOnglet.children[1].play();
            createSticker('missile', ukraineOnglet, true, 11);
        }
    }).delay(1.9);
    setTimeout(() => {
        randXyl = Math.floor(Math.random() * 7) + 1;
        while(randXyl == previousRand) {
            randXyl = Math.floor(Math.random() * 7) + 1;
        }
        previousRand = randXyl;
        xylSound = new Audio('../../assets/ordi/sons/xyl' + randXyl + '.mp3');
        xylSound.volume = 0.15;
        xylSound.play();
    }, 1900); // 1.9 secondes de délai

}