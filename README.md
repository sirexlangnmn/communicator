06/09/2022 4:59am


 remoteVideoFullScreenBtn.setAttribute('id', peer_id + '_fullScreen');
    remoteVideoFullScreenBtn.className = 'fas fa-expand';

    remoteCloseVideoFullScreenBtn.setAttribute('id', peer_id + '_closeFullScreen');
    remoteCloseVideoFullScreenBtn.className = 'fas fa-expand';

     videoFullScreenBtn.addEventListener('click', (e) => {
        // alert('videoFullScreenBtn click');
        let Cameras = getEcN('Camera');
        setWidthOfFullScreenOfClickedPeerId(videoMediaContainer, Cameras, peer_id);
        // gotoFS();
    });


    setAspectRatio(2); // 16:9

    resizeVideoMedia


    if (peer_id) {
        let closeFullScreenElementId = getId(peer_id + '_closeFullScreen');
        closeFullScreenElementId.addEventListener('click', (e) => {
            let Cameras = getEcN('Camera');

            var displayNone = {
                "display": "",
            };
        
            for (let s = 0; s < Cameras.length; s++) {
                let ids = document.getElementsByClassName('Camera')[s].id;
                var obj = document.getElementById(ids);
                Object.assign(obj.style, displayNone);
            }

            resizeVideoMedia();
        });
    }


    if (peer_id) {
        window.addEventListener('resize', reportWindowSize);

        function reportWindowSize() {
            let Cameras = getEcN('Camera');
            // let width = window.innerWidth;
            // let height = window.innerHeight;

            let width = document.documentElement.clientWidth;
            let height = document.documentElement.clientHeight;
            console.log('peer_id sa loob ng resize', peer_id);
    
            // setWidthOfFullScreenOfClickedPeerId(videoMediaContainer, Cameras, width, height, peer_id);
            
        }
    }