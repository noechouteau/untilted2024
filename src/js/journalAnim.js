import { createSticker } from "./sticker.js";

export function animJournaux(journaux) {
    for(let journal of journaux) {
        journal.style.display = "block";
    }
    gsap.fromTo(journaux[0],
        { 
            x: window.innerWidth/2,
            xPercent: -50,
            transformOrigin: "center center",
            y: -(window.innerHeight/5 - journaux[0].height/2)*12,
            scale: 4.4,
            rotate: -20,
        }, 
        { 
            x: window.innerWidth/2,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/5 - journaux[0].height/2,
            scale: 4.4,
            rotate: 25,
            duration: 1
        }
    );
    gsap.fromTo(journaux[1],
        { 
            x: window.innerWidth/2,
            xPercent: -50,
            transformOrigin: "center center",
            y: (window.innerHeight/5 - journaux[1].height/2)*25,
            scale: 4,
            rotate: -20,
        }, 
        { 
            x: window.innerWidth/2,
            xPercent: -50,
            transformOrigin: "center center",
            y: (window.innerHeight/5 - journaux[1].height/2)*8,
            scale: 4,
            rotate: 5,
            duration: 1.5
        }
    );
    gsap.fromTo(journaux[2],
        { 
            x: -0.30*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: (window.innerHeight/5 - journaux[2].height/2)*12,
            scale: 5,
            rotate: -20,
        }, 
        { 
            x: 0.14*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight,
            scale: 5,
            rotate: 5,
            duration: 1
        }
    ).delay(1);
    gsap.fromTo(journaux[3],
        { 
            x: 0.30*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: (window.innerHeight/5 - journaux[3].height/2)*20,
            scale: 2,
            rotate: -20,
        }, 
        { 
            x: 0.33*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/1.3,
            scale: 2,
            rotate: -5,
            duration: 1
        }
    ).delay(1.3);
    gsap.fromTo(journaux[4],
        { 
            x: 1.15*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/2.8,
            scale: 2,
            rotate: 25,
        }, 
        { 
            x: 0.97*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/2.8,
            scale: 2,
            rotate: -5,
            duration: 1
        }
    ).delay(1.3);
    gsap.fromTo(journaux[5],
        { 
            x: 1.05*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight*1.3,
            scale: 3,
            rotate: 0,
        }, 
        { 
            x: 0.92*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/1.2,
            scale: 3,
            rotate: -5,
            duration: 0.75
        }
    ).delay(1.3);
    gsap.fromTo(journaux[6],
        { 
            x: 0.7*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight*1.8,
            scale: 4,
            rotate: -5,
        }, 
        { 
            x: 0.7*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/1.4,
            scale: 4,
            rotate: 11,
            duration: 1
        }
    ).delay(2);
    gsap.fromTo(journaux[7],
        { 
            x: 0.78*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: -window.innerHeight*2,
            scale: 3,
            rotate: 35,
        }, 
        { 
            x: 0.7*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/15,
            scale: 3,
            rotate: 2,
            duration: 1.5,
            onComplete : () => {setTimeout(createSticker('trump', journaux[7], true, 7), 1500)}
        }
    ).delay(1.5);
    gsap.fromTo(journaux[8],
        { 
            x: 0.05*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: -window.innerHeight*2,
            scale: 4.5,
            rotate: 35,
        }, 
        { 
            x: 0.24*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/4,
            scale: 4.5,
            rotate: 2,
            duration: 1.5
        }
    ).delay(1.9);
    gsap.fromTo(journaux[9],
        { 
            x: 0.05*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: -window.innerHeight*2,
            scale: 1.5,
            rotate: 35,
        }, 
        { 
            x: 0.0*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/4,
            scale: 1.5,
            rotate: 15,
            duration: 1.5
        }
    ).delay(2.2);
    gsap.fromTo(journaux[10],
        { 
            x: 1.1*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/3,
            scale: 1.5,
            rotate: 35,
        }, 
        { 
            x: 0.85*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/2,
            scale: 1.5,
            rotate: 15,
            duration: 1.5
        }
    ).delay(2.2);
    gsap.fromTo(journaux[11],
        { 
            x: 1.1*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: -window.innerHeight,
            scale: 3.6,
            rotate: -85,
        }, 
        { 
            x: 0.87*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/6,
            scale: 3.6,
            rotate: 15,
            duration: 1.5,
            onComplete : () => {setTimeout(createSticker('jo', journaux[11]), 2700)}
        }
    ).delay(2.7);
    gsap.fromTo(journaux[12],
        { 
            x: -0.15*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/2,
            scale: 1.8,
            rotate: -45,
        }, 
        { 
            x: 0.08*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/2,
            scale: 1.8,
            rotate: -15,
            duration: 1,
            onComplete : () => {setTimeout(createSticker('delon_zorro', journaux[12], true, 12), 3000)}
        }
    ).delay(3);
    gsap.fromTo(journaux[13],
        { 
            x: 1.2*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/2,
            scale: 5,
            rotate: 0,
        }, 
        { 
            x: 0.9*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/2,
            scale: 5,
            rotate: 15,
            duration: 1.5
        }
    ).delay(4.25);
    gsap.fromTo(journaux[14],
        { 
            x: 0.1*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight*2,
            scale: 2.5,
            rotate: 0,
        }, 
        { 
            x: 0.25*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/1.2,
            scale: 2.5,
            rotate: -15,
            duration: 1
        }
    ).delay(4);
    gsap.fromTo(journaux[15],
        { 
            x: -0.25*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/4,
            scale: 4,
            rotate: 0,
        }, 
        { 
            x: 0.05*window.innerWidth,
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/4,
            scale: 4,
            rotate: 25,
            duration: 1.5
        }
    ).delay(4)
  }