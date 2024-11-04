export function animJournaux(journaux) {
    for(let journal of journaux) {
        journal.style.display = "block";
    }
    gsap.fromTo(journaux[0],
        { 
            x: "50vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: -(window.innerHeight/5 - journaux[0].height/2)*12,
            scale: 4,
            rotate: -20,
        }, 
        { 
            x: "50vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/5 - journaux[0].height/2,
            scale: 4,
            rotate: 25,
            duration: 1
        }
    );
    gsap.fromTo(journaux[1],
        { 
            x: "50vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: (window.innerHeight/5 - journaux[1].height/2)*25,
            scale: 4,
            rotate: -20,
        }, 
        { 
            x: "50vw",
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
            x: "-30vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: (window.innerHeight/5 - journaux[2].height/2)*12,
            scale: 5,
            rotate: -20,
        }, 
        { 
            x: "14vw",
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
            x: "30vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: (window.innerHeight/5 - journaux[3].height/2)*20,
            scale: 2,
            rotate: -20,
        }, 
        { 
            x: "27vw",
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
            x: "115vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/2.8,
            scale: 2,
            rotate: 25,
        }, 
        { 
            x: "97vw",
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
            x: "105vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight*1.3,
            scale: 3,
            rotate: 0,
        }, 
        { 
            x: "92vw",
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
            x: "70vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight*1.3,
            scale: 4,
            rotate: -5,
        }, 
        { 
            x: "70vw",
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
            x: "78vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: -window.innerHeight*2,
            scale: 3,
            rotate: 35,
        }, 
        { 
            x: "70vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/15,
            scale: 3,
            rotate: 2,
            duration: 1.5
        }
    ).delay(1.5);
    gsap.fromTo(journaux[8],
        { 
            x: "5vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: -window.innerHeight*2,
            scale: 4,
            rotate: 35,
        }, 
        { 
            x: "20vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/4,
            scale: 4,
            rotate: 2,
            duration: 1.5
        }
    ).delay(1.9);
    gsap.fromTo(journaux[9],
        { 
            x: "5vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: -window.innerHeight*2,
            scale: 1.5,
            rotate: 35,
        }, 
        { 
            x: "0vw",
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
            x: "110vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/3,
            scale: 1.5,
            rotate: 35,
        }, 
        { 
            x: "85vw",
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
            x: "110vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: -window.innerHeight,
            scale: 3,
            rotate: -85,
        }, 
        { 
            x: "90vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/6,
            scale: 3,
            rotate: 15,
            duration: 1.5
        }
    ).delay(2.7);
    gsap.fromTo(journaux[12],
        { 
            x: "-15vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/2,
            scale: 1.8,
            rotate: -45,
        }, 
        { 
            x: "8vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/2,
            scale: 1.8,
            rotate: -15,
            duration: 1
        }
    ).delay(3);
    gsap.fromTo(journaux[13],
        { 
            x: "120vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/2,
            scale: 5,
            rotate: 0,
        }, 
        { 
            x: "90vw",
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
            x: "10vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight*2,
            scale: 2.5,
            rotate: 0,
        }, 
        { 
            x: "25vw",
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
            x: "-25vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/4,
            scale: 4,
            rotate: 0,
        }, 
        { 
            x: "10vw",
            xPercent: -50,
            transformOrigin: "center center",
            y: window.innerHeight/4,
            scale: 4,
            rotate: 25,
            duration: 1.5
        }
    ).delay(4)
  }