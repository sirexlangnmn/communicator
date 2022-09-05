06/09/2022 4:59am


 remoteVideoFullScreenBtn.setAttribute('id', peer_id + '_fullScreen');
    remoteVideoFullScreenBtn.className = 'fas fa-expand';

    remoteCloseVideoFullScreenBtn.setAttribute('id', peer_id + '_closeFullScreen');
    remoteCloseVideoFullScreenBtn.className = 'fas fa-expand';

     videoFullScreenBtn.addEventListener('click', (e) => {
        // alert('videoFullScreenBtn click');
        let Cameras = getEcN('Camera');
        videoFullScreenSetWidth(videoMediaContainer, Cameras, peer_id);
        // gotoFS();
    });


    setAspectRatio(2); // 16:9

    resizeVideoMedia