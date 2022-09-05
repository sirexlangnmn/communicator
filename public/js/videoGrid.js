'use strict';

let customRatio = true;

// aspect       0      1      2      3       4
let ratios = ['0:0', '4:3', '16:9', '1:1', '1:2'];
let aspect = 2;

let ratio = getAspectRatio();

/**
 * Get aspect ratio
 * @returns {integer} aspect ratio
 */
function getAspectRatio() {
    customRatio = aspect == 0 ? true : false;
    let ratio = ratios[aspect].split(':');
    return ratio[1] / ratio[0];
}

/**
 * Set aspect ratio
 * @param {integer} index ratios index
 */
function setAspectRatio(index) {
    aspect = index;
    ratio = getAspectRatio();
    resizeVideoMedia();
}

/**
 * Calculate area
 * @param {integer} Increment
 * @param {integer} Count
 * @param {integer} Width
 * @param {integer} Height
 * @param {integer} Margin
 * @returns
 */
function Area(Increment, Count, Width, Height, Margin = 10) {
    ratio = customRatio ? 0.75 : ratio;
    let i = 0;
    let w = 0;
    let h = Increment * ratio + Margin * 2;
    while (i < Count) {
        if (w + Increment > Width) {
            w = 0;
            h = h + Increment * ratio + Margin * 2;
        }
        w = w + Increment + Margin * 2;
        i++;
    }
    if (h > Height) return false;
    else return Increment;
}

/**
 * Resize video elements
 */
function resizeVideoMedia() {
    let Margin = 3;
    let videoMediaContainer = getId('videoMediaContainer');
    let Width = videoMediaContainer.offsetWidth - Margin * 2;
    let Height = videoMediaContainer.offsetHeight - Margin * 2;
    let Cameras = getEcN('Camera');
    let max = 0;

    let bigWidth = Width * 4;
    if (videoMediaContainer.childElementCount == 1) {
        Width = Width - bigWidth;
    }

    // loop (i recommend you optimize this)
    let i = 1;
    while (i < 5000) {
        let w = Area(i, Cameras.length, Width, Height, Margin);
        if (w === false) {
            max = i - 1;
            break;
        }
        i++;
    }

    max = max - Margin * 2;
    
    if (globalClickedPeerId) {
        let w = window.innerWidth;
        let h = window.innerHeight;
        setWidthOfFullScreenOfClickedPeerId(videoMediaContainer, Cameras, w, h, globalClickedPeerId)
    } else {
        setWidth(videoMediaContainer, Cameras, max, bigWidth, Margin, Height);
    }
   
}

/**
 * Set Width
 * @param {object} videoMediaContainer
 * @param {object} Cameras
 * @param {integer} width
 * @param {integer} bigWidth
 * @param {integer} margin
 * @param {integer} maxHeight
 */
function setWidth(videoMediaContainer, Cameras, width, bigWidth, margin, maxHeight) {
    console.log('rex 1 - setWidth');
    console.log('videoMediaContainer', videoMediaContainer);
    console.log('Cameras', Cameras);
    console.log('width', width);
    console.log('bigWidth', bigWidth);
    console.log('margin', margin);
    console.log('maxHeight', maxHeight);
    
    ratio = customRatio ? 0.68 : ratio;
    let isOneVideoElement = videoMediaContainer.childElementCount == 1 ? true : false;
    for (let s = 0; s < Cameras.length; s++) {
        Cameras[s].style.width = width + 'px';
        Cameras[s].style.margin = margin + 'px';
        Cameras[s].style.height = width * ratio + 'px';
        if (isOneVideoElement) {
            Cameras[s].style.width = bigWidth + 'px';
            Cameras[s].style.height = bigWidth * ratio + 'px';
            let camHeigh = Cameras[s].style.height.substring(0, Cameras[s].style.height.length - 2);
            if (camHeigh >= maxHeight) Cameras[s].style.height = maxHeight - 2 + 'px';
        }
    }
}

function setWidthOfFullScreenOfClickedPeerId(videoMediaContainer, Cameras, width, height, peer_id) {
    var obj = document.getElementById(peer_id + '_videoWrap');
    // Object.assign(obj.style, styles);
    const index =Array.from(obj.parentNode.children).indexOf(obj);
    // const index = 1;

    console.log('rex 2 - setWidthOfFullScreenOfClickedPeerId');
    console.log('videoMediaContainer', videoMediaContainer);
    console.log('Cameras', Cameras);
    console.log('Cameras.length', Cameras.length);
    console.log('Cameras[0]', Cameras[0]);
    console.log('Cameras[1]', Cameras[1]);
    console.log('peer_id', peer_id);
    console.log('index', index);
    console.log(' Cameras[*]',  Cameras[index]);
      

    var displayNone = {
        "display": "none",
    };

    for (let s = 0; s < Cameras.length; s++) {
        let ids = document.getElementsByClassName('Camera')[s].id;
        var obj = document.getElementById(ids);
        Object.assign(obj.style, displayNone);
    }
    
   

    var customStyles = {
        "display": "block",
        "width": width+"px",
        "height": height+"px"
    };
        
    if (peer_id) {
        var obj = document.getElementById(peer_id + '_videoWrap');
        Object.assign(obj.style, customStyles);
    } else {
        var obj = document.getElementById('myVideoWrap');
        Object.assign(obj.style, customStyles);
    }
        
}




// it works on 1 participants only
// function setWidthOfFullScreenOfClickedPeerId(videoMediaContainer, Cameras, peer_id) {
//     var obj = document.getElementById(peer_id + '_videoWrap');
//     Object.assign(obj.style, styles);
//     const index =Array.from(obj.parentNode.children).indexOf(obj);
//     // const index = 1;

   

//     console.log('rex 1 - setWidthOfFullScreenOfClickedPeerId');
//     console.log('videoMediaContainer', videoMediaContainer);
//     console.log('Cameras', Cameras);
//     console.log('Cameras.length', Cameras.length);
//     console.log('Cameras[0]', Cameras[0]);
//     console.log('Cameras[1]', Cameras[1]);
//     console.log('peer_id', peer_id);
//     console.log('index', index);
//     console.log(' Cameras[*]',  Cameras[index]);
      
//     let width = window.innerWidth;
//     let height = window.innerHeight;
    
//     var styles = {
//         "width": width+"px",
//         "height": height+"px"
//     };
        
//     var obj = document.getElementById(peer_id + '_videoWrap');
//     Object.assign(obj.style, styles);

//     Cameras[0].style.width = 0 + 'px';
//     Cameras[0].style.margin = 0 + 'px';
//     Cameras[0].style.height = 0 * 0 + 'px';
    
//     Cameras[0].style.width = 0 + 'px';
//     Cameras[0].style.height = 0 * 0 + 'px';
//     let camHeigh = Cameras[0].style.height.substring(0, Cameras[0].style.height.length - 2);
//     if (camHeigh >= maxHeight) Cameras[0].style.height = maxHeight - 2 + 'px';
        
// }




// window.addEventListener('resize', reportWindowSize);

// function reportWindowSize() {
//     if (peer_id) {
//         console.log('window.innerHeight: ' + window.innerHeight);
//         console.log('window.innerWidth: ' + window.innerWidth);
//     }
// }


// window.addEventListener("resize", displayWindowSize);
// function displayWindowSize(){
//     // Get width and height of the window excluding scrollbars
//     var w = document.documentElement.clientWidth;
//     var h = document.documentElement.clientHeight;
    
//     if (peer_id) {
//         // Display result inside a div elements
//         console.log("Width: " + w + ", " + "Height: " + h);
//     }
   
// }

/**
 * Handle window event listener
 */
// I comment this code because hindrance to me code related to window resize event

window.addEventListener(
    'load',
    function (event) {
        resizeVideoMedia();
        window.onresize = resizeVideoMedia;
    },
    false,
);
