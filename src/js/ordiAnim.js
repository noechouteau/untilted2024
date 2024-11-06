export function ongletsAnim(collageWrapper, pcWrapper, mondeOnglet, hugoOnglet, twitterOnglet, afpOnglet, redditOnglet, bfmOnglet, ukraineOnglet) { 
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