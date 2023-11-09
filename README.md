# TAC-TwitchAdsCrusher
TwitchAdsCrusher Extension is designed to improve the user experience on the Twitch website by automatically managing and removing various types of advertisements that may appear during video playback.

## explaination
## const `checkInterval` 

const `checkInterval` = 100;: This line sets the checkInterval constant to 100 milliseconds, which means that the code will check for and attempt to skip ads on Twitch every 100 milliseconds. 

## function `closeOverlayAds()`

function `closeOverlayAds()`{ ... }: This function is defined to close overlay ads. It selects all elements with the class name "ad-overlay" and then checks for a "close" button within each overlay. If a "close" button is found, it simulates a click on that button to close the overlay ad.

## function `handlePlayerAds()` 
function `handlePlayerAds()`{ ... }: This function is responsible for handling ads within the Twitch video player. It first selects the video player element with the class name "video-player" and checks for the presence of an "ad-indicator" within the player. If there's an ad being indicated, it performs the following actions:
It looks for a "mute-button" within the player and clicks it to mute the ad.
After a delay of 1000 milliseconds (1 second), it looks for a "skip-button" within the player and clicks it to skip the ad.

## function `handleTwitchAds()`
function `handleTwitchAds()` { ... }: This function serves as a coordinator for handling Twitch ads. It calls the closeOverlayAds function to close overlay ads and then calls the handlePlayerAds function to handle ads within the video player.

## `setInterval(handleTwitchAds, checkInterval);`

`setInterval(handleTwitchAds, checkInterval);`: This line sets up an interval that repeatedly calls the handleTwitchAds function every 100 milliseconds (as defined by checkInterval). This ensures that the code continuously checks for and attempts to handle and skip Twitch ads while the page is open.
