06/09/2022 4:59am





videoMediaContainer == layout1



function showChatRoomDraggable() {
    playSound('newMessage');
    if (isMobileDevice) {
        buttonsBar.style.display = 'none';
        isButtonsVisible = false;
    }
    chatRoomBtn.className = 'fas fa-comment-slash';
    msgerDraggable.style.top = '50%';
    msgerDraggable.style.left = isMobileDevice ? '50%' : '25%';
    msgerDraggable.style.display = 'flex';
    isChatRoomVisible = true;
    // only for desktop
    if (!isMobileDevice) {
        setTippy(chatRoomBtn, 'Close the chat', 'right-start');
    }
}

 remoteActiveSpeakerViewBtn.setAttribute('id', peer_id + '_activeSpeakerView');
    remoteActiveSpeakerViewBtn.className = 'fas fa-th-list';









 <section id="msgerDraggable" class="msger-draggable fadein">
            <section id="msger" class="msger">
                <header id="msgerHeader" class="msger-header">
                    <div class="msger-header-title"><button id="msgerClose" class="fas fa-times"></button></div>
                    <div class="msger-header-options">
                        <button id="msgerTheme" class="fas fa-ghost"></button>
                        <button id="msgerSaveBtn" class="fas fa-save"></button>
                        <button id="msgerClean" class="fas fa-trash"></button>
                    </div>
                </header>

                <main id="msgerChat" class="msger-chat"></main>

                <!-- Start emoji picker 
                https://github.com/nolanlawson/emoji-picker-element ] 
                -->

                <section id="msgerEmojiPicker" class="hidden fadein">
                    <emoji-picker class="dark"></emoji-picker>
                    <!-- <emoji-picker class="light"></emoji-picker> -->
                </section>

                <!-- End emoji picker -->

                <div class="msger-inputarea">
                    <textarea
                        rows="1"
                        cols="1"
                        id="msgerInput"
                        class="msger-input"
                        placeholder="💬 Enter your message..."
                    ></textarea>
                    <button id="msgerEmojiBtn" class="fas fa-smile"></button>
                    <button id="msgerMarkdownBtn" class="fab fa-markdown"></button>
                    <button id="msgerVideoUrlBtn" class="fab fa-youtube"></button>
                    <button id="msgerCPBtn" class="fas fa-users"></button>
                    <button id="msgerSendBtn" class="fas fa-paper-plane"></button>
                </div>
            </section>

            <!-- Start private msg -->

            <section id="msgerCP" class="center fadein">
                <section id="msgerCPSec" class="msger">
                    <header id="msgerCPHeader" class="msger-private-header">
                        <div class="msger-header-title"><i class="fas fa-comment-alt"></i> Send Private messages</div>
                        <div class="msger-header-options">
                            <button id="msgerCPCloseBtn" class="fas fa-times"></button>
                        </div>
                    </header>
                    <main id="msgerCPChat" class="msger-chat">
                        <div class="search-container">
                            <input
                                id="searchPeerBarName"
                                type="text"
                                placeholder=" 🔍 Search peer by name..."
                                name="search"
                                onkeyup="searchPeer()"
                            />
                        </div>
                        <br />
                        <div id="msgerCPList"></div>
                    </main>
                </section>
            </section>

            <!-- End private msg -->
        </section>







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