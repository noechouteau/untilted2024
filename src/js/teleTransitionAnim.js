export function teleTransition( onglets, chosenOnglet, bin, bin2, journaux, ordiImage, zappingVideo, powerButton ) {
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
        })
        gsap.to(ordiImage, {
            duration: 1,
            scale: 0,
        }).then(()=>{
            bin.style.display = 'none';
            bin2.style.display = 'none';
            ordiImage.style.display = 'none';

            zappingVideo.style.opacity = 0;
            zappingVideo.style.display = 'block';
            gsap.to(zappingVideo, {
                x: window.innerWidth/2 - zappingVideo.getBoundingClientRect().width/2,
                y: window.innerHeight/2 - zappingVideo.getBoundingClientRect().height/2,
                duration: 0.01,
            }).then(()=>{
                zappingVideo.style.opacity = 1;
                chosenOnglet.children[1].children[0].currentTime = 0;
                chosenOnglet.children[1].children[0].loop = false;

                chosenOnglet.children[1].children[0].onended = function() {
                    chosenOnglet.style.display = 'none';
                    zappingVideo.play();
                    zappingVideo.onended = function() {
                        zappingVideo.currentTime = 13.75;
                        zappingVideo.play();
                        powerButton.style.display = 'block';
                        gsap.to(powerButton, {
                            duration: 1,
                            opacity: 1,
                        });

                    }
                }
            })
        });
    });
}