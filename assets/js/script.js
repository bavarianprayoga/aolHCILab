
// CHANGE BG WHEN GO MOBILE
window.addEventListener('load', changeVideo);
window.addEventListener('resize', changeVideo);

function changeVideo(){
    var video1 = document.getElementById("video-background");
    var video2 = document.getElementById("video-background-2");
    // var video3 = document.getElementById("video-background-3");
    var mediaQuery = window.matchMedia("(max-width: 768px)");

    if(mediaQuery.matches){
        video1.src = '/assets/videos/portrait/nsx.mp4';
        video2.src = '/assets/videos/portrait/c61.mp4';
        // video3.src = '/assets/videos/portrait/agera.mp4';
    } 
    else{
        video1.src = '/assets/videos/landscape/mainvid.mp4';
        video2.src = '/assets/videos/landscape/rwb.mp4';
        // video3.src = '/assets/videos/landscape/gt3rs.mp4';
    }
};

// SCROLL SVG SCRIPT
const scrollIcon = document.querySelector('.scroll-icon-container');
const gameplayDescription = document.getElementById('gameplay-description');

if (scrollIcon && gameplayDescription){ //THIS CAUSED THE PROBLEM HOLY SKIBIDI
    scrollIcon.addEventListener('click', () => {
        gameplayDescription.scrollIntoView({ behavior: 'smooth' });
    });
}

// HAMBURGER MENU SCRIPT
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
