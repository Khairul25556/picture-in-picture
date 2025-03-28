const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

//*prompt to select media stream, pass to video element, then play

async function selectMediaStream() { //to use await we need to use async function
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); //We can capture live streams content by calling this
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    //Here, we are setting a constant that is going to have our mediaStream data and we are waiting to assign that untill the user has actually selected which scrren or window they want to share. And then we are passing that media stream into our video src object. Then when the video has loaded it's metadata it's gonna call a function to play the video.*/

    } catch(err){
        //catch error here
        console.log('whoops, error here:', err);
    }
}

button.addEventListener('click', async () => {
    //*disable button
    button.disabled = true;
    //*start Picture in Picture
    await videoElement.requestPictureInPicture();
    //*re-enable button
    button.disabled = false; 
}); // when we will select which window we wanna share successfully then we can see the picture in picture by clicking the button

//*on load
selectMediaStream();
