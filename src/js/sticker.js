let mesStickersAnimee = [];
let mesOmbresAnimee = [];

export function createSticker(ref, journal, animated, maxframe) {
    // ref : string 
    // journal : objet html
    // animated : boolean
    // maxframe : int -> nb max frame 
    let stickerWrapper = document.getElementById('stickers-wrapper');


    let stickerdiv = document.createElement("div");

    let newSticker = document.createElement("img");
    newSticker.draggable = false;
   // newSticker.style.position = 'absolute';
  //  newSticker.style.pointerEvents = 'auto';
    newSticker.zIndex = 10;

    let journalSize = journal.getBoundingClientRect()
    newSticker.draggable = false;
    newSticker.style.position = 'absolute';
    newSticker.style.pointerEvents = 'auto';
    newSticker.style.top =  (journalSize.top + (journalSize.height/4)) + "px" ; 
    newSticker.style.left = (journalSize.left + (journalSize.width/4)) + "px"; 
    newSticker.style.zIndex = 11;

    if(animated){
        newSticker.src = '../assets/stickers/' + ref + "/1.png";
        newSticker.maxFrame = maxframe;
        newSticker.currentFrame =  1;
        newSticker.refName = ref;
        mesStickersAnimee.push(newSticker);
        
    }else{
        newSticker.src = '../assets/stickers/' + ref + ".png";
    }
    let newStickerOmbre = document.createElement("img");
    newStickerOmbre.draggable = false;
    newStickerOmbre.style.position = 'absolute';
    newStickerOmbre.style.pointerEvents = 'auto';
    newStickerOmbre.style.zIndex = 10;
    newStickerOmbre.style.top =  (journalSize.top + (journalSize.height/4)) + "px" ; 
    newStickerOmbre.style.left = (journalSize.left + (journalSize.width/4)) + "px"; 

    if(animated){ 
        newStickerOmbre.src = '../assets/stickers/' + ref + "/1_ombres.png";
        mesOmbresAnimee.push(newStickerOmbre);
    }else{
        newStickerOmbre.src =  '../assets/stickers/' + ref + "_ombre.png";
    }

    gsap.fromTo(newStickerOmbre,
        { 
            scale: 0,
        }, 
        { 
            scale: 1,
            duration: 1.2
        }
    );
   // document.getElementById('ombrage-wrapper').append(newStickerOmbre)


    gsap.fromTo(newSticker,
        { 
            scale: 0,
        }, 
        { 
            scale: 1,
            duration: 1
        }
    );
    


    //stickerWrapper.append(newSticker);
    stickerdiv.append(newSticker);
    stickerdiv.append(newStickerOmbre);
    stickerWrapper.append(stickerdiv);
    updateSticker();
}

export function createStickerCustomPos(ref, posX, posY, animated, maxframe) {
    // ref : string 
    // journal : objet html
    // animated : boolean
    // maxframe : int -> nb max frame 
    let stickerWrapper = document.getElementById('stickers-wrapper');

    let stickerdiv = document.createElement("div");

    let newSticker = document.createElement("img");
    newSticker.draggable = false;
   // newSticker.style.position = 'absolute';
  //  newSticker.style.pointerEvents = 'auto';
    newSticker.zIndex = 10;

    newSticker.draggable = false;
    newSticker.style.position = 'absolute';
    newSticker.style.pointerEvents = 'auto';
    newSticker.style.top =  posY + "px" ; 
    newSticker.style.left = posX + "px"; 
    newSticker.style.zIndex = 11;

    if(animated){
        newSticker.src = '../assets/stickers/' + ref + "/1.png";
        newSticker.maxFrame = maxframe;
        newSticker.currentFrame =  1;
        newSticker.refName = ref;
        mesStickersAnimee.push(newSticker);
        
    }else{
        newSticker.src = '../assets/stickers/' + ref + ".png";
    }
    let newStickerOmbre = document.createElement("img");
    newStickerOmbre.draggable = false;
    newStickerOmbre.style.position = 'absolute';
    newStickerOmbre.style.pointerEvents = 'auto';
    newStickerOmbre.style.zIndex = 10;
    newStickerOmbre.style.top =  posY + "px" ; 
    newStickerOmbre.style.left = posX + "px"; 

    if(animated){ 
        newStickerOmbre.src = '../assets/stickers/' + ref + "/1_ombres.png";
        mesOmbresAnimee.push(newStickerOmbre);
    }else{
        newStickerOmbre.src =  '../assets/stickers/' + ref + "_ombre.png";
    }

    gsap.fromTo(newStickerOmbre,
        { 
            scale: 0,
        }, 
        { 
            scale: 1,
            duration: 1.2
        }
    );
   // document.getElementById('ombrage-wrapper').append(newStickerOmbre)


    gsap.fromTo(newSticker,
        { 
            scale: 0,
        }, 
        { 
            scale: 1,
            duration: 1
        }
    );
    


    //stickerWrapper.append(newSticker);
    stickerdiv.append(newSticker);
    stickerdiv.append(newStickerOmbre);
    stickerWrapper.append(stickerdiv);
    updateSticker();
}


function updateSticker(){
    let sizeImg = null;
    let stickerWrapper = document.getElementById('stickers-wrapper');
    //   onComplete : () => {setTimeout(createSticker('plouf', journaux[8], true, 11), 1900)}
    stickerWrapper.childNodes.forEach( (e,i) => {
        e.addEventListener('mousedown', (event) => { 
        
            sizeImg = e.childNodes[0].getBoundingClientRect();

            let offsetX = sizeImg.left - event.clientX;
            let offSetY = sizeImg.top - event.clientY;
    
            const mouseMoveHandler = (ev) => followImg(ev, offsetX, offSetY, i);
            
            window.addEventListener('mousemove', mouseMoveHandler);
    
            window.addEventListener('mouseup', () => {
                window.removeEventListener('mousemove', mouseMoveHandler);
                gsap.to(stickerWrapper.childNodes[i].childNodes[1], {
                    scale : 0.8,
                    duration : 1
                })
            });               
        })
    }); 
  
}
let currentIndex = 10;

function followImg(ev, offsetX, offSetY, index){
    currentIndex = currentIndex + 2;
    let stickerWrapper = document.getElementById('stickers-wrapper').childNodes[index];


    stickerWrapper.childNodes[0].style.top = (ev.clientY + offSetY)+ "px"
    stickerWrapper.childNodes[0].style.left = (ev.clientX + offsetX) + "px"

    stickerWrapper.childNodes[1].style.top = (ev.clientY + offSetY)+ "px"
    stickerWrapper.childNodes[1].style.left =  (ev.clientX + offsetX) + "px"

    stickerWrapper.childNodes[0].style.zIndex = currentIndex;
    stickerWrapper.childNodes[1].style.zIndex = currentIndex - 1;

    gsap.to(stickerWrapper.childNodes[1], {
        scale : 1.2,
        duration : 1
    })

}


export function fadeSticker(){
    for(let i = 0; i < mesStickersAnimee.length; i++){
        gsap.to(mesStickersAnimee[i], {
            opacity : 0,
            duration : 1
        })
        gsap.to(mesOmbresAnimee[i], {
            opacity : 0,
            duration : 1
        })
    }
}


let frame = 0;

function animationSticker(){
    frame = frame + 1;

    if(frame%10 == 0){
        /*
        for(let sticker of mesStickersAnimee){
            if(sticker.currentFrame < sticker.maxFrame){
                sticker.currentFrame =  sticker.currentFrame + 1;
            }else{
                sticker.currentFrame = 1;
            }
            sticker.src = '../assets/stickers/' + sticker.refName + "/" + sticker.currentFrame  + ".png";
        }
        */
        for(let i = 0; i < mesStickersAnimee.length; i++){
            if(mesStickersAnimee[i].currentFrame < mesStickersAnimee[i].maxFrame){
                mesStickersAnimee[i].currentFrame =  mesStickersAnimee[i].currentFrame + 1;
            }else{
                mesStickersAnimee[i].currentFrame = 1;
            }
            mesStickersAnimee[i].src = '../assets/stickers/' + mesStickersAnimee[i].refName + "/" + mesStickersAnimee[i].currentFrame  + ".png";
            mesOmbresAnimee[i].src = '../assets/stickers/' + mesStickersAnimee[i].refName + "/" + mesStickersAnimee[i].currentFrame  + "_ombres.png";
        }
    }
    

    window.requestAnimationFrame(animationSticker);
   
}

window.requestAnimationFrame(animationSticker);


