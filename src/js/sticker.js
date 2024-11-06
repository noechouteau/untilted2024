export function createSticker(ref, journal) {
    let stickerWrapper = document.getElementById('stickers-wrapper');
    let newSticker = document.createElement("img");
    newSticker.draggable = false;
    newSticker.style.position = 'absolute';
    newSticker.style.pointerEvents = 'auto';
    newSticker.zIndex = 10;

    let journalSize = journal.getBoundingClientRect()
    console.log('On Complete Called');
    newSticker.style.top =  (journalSize.top ) + "px"; 
    newSticker.style.left = (journalSize.left ) + "px"; 

    newSticker.src = '../assets/stickers/' + ref + ".png";
    gsap.fromTo(newSticker,
        { 
            scale: 0,
        }, 
        { 
            scale: 0.75,
            duration: 1
        }
    );
    stickerWrapper.append(newSticker);
    updateSticker();
}


function updateSticker(){
    let sizeImg = null;
    let stickerWrapper = document.getElementById('stickers-wrapper');
    stickerWrapper.childNodes.forEach( (e,i) => {
        e.addEventListener('mousedown', (event) => { 
            sizeImg = e.getBoundingClientRect();
            let offsetX = sizeImg.left - event.clientX;
            let offSetY = sizeImg.top - event.clientY;
    
            const mouseMoveHandler = (ev) => followImg(ev, offsetX, offSetY, i);
            
            window.addEventListener('mousemove', mouseMoveHandler);
    
            window.addEventListener('mouseup', () => {
                window.removeEventListener('mousemove', mouseMoveHandler);
            });               
        })
    });
}

function followImg(ev, offsetX, offSetY, index){
    let stickerWrapper = document.getElementById('stickers-wrapper');
    stickerWrapper.childNodes[index].style.top = (ev.clientY + offSetY)+ "px"
    stickerWrapper.childNodes[index].style.left = (ev.clientX + offsetX) + "px"
}