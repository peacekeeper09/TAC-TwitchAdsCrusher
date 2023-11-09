const checkInterval = 100;


function closeOverlayAds() {
  const adOverlays = document.querySelectorAll('.ad-overlay');

  adOverlays.forEach(overlay => {
    const closeButton = overlay.querySelector('.close'); 
    if (closeButton) {
      closeButton.click();
    }
  });
}
function handlePlayerAds() {
  const player = document.querySelector('.video-player'); 
  const adIndicator = player.querySelector('.ad-indicator'); 
  if (adIndicator) {

    const muteButton = player.querySelector('.mute-button');
    if (muteButton) {
      muteButton.click();
    }


    setTimeout(() => {
      const skipButton = player.querySelector('.skip-button'); 
      if (skipButton) {
        skipButton.click();
      }
    }, 1000);
  }
}


function handleTwitchAds() {
  closeOverlayAds();
  handlePlayerAds();
}

setInterval(handleTwitchAds, checkInterval);
