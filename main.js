var i = 0;
var j = 0;
var txt = "In the world of sales, I began my career,\nBut my passion for IT was always near.\n\nTransitioning to tech, I found my delight,\nGaining expertise and knowledge, shining bright.\n\nAs a mentor, I guide the tech-savvy youth,\nEmpowering them to learn, grow, and sleuth.\n\nWith empathy and patience, I lend an ear,\nFostering a positive tech atmosphere, crystal clear.\n\nAs a freelance web developer, I broke free,\nCreating websites for all to see.\n\nCoding and configuring with skill and grace,\nBuilding online spaces, a valuable embrace.\n\nMy journey in IT is diverse and grand,\nFrom consultancy to accounts, I take my stand.\n\nWith Java and Python, I weave my code,\nSolving problems with skills that I hold.\n\nInnov8 Makerthon sparked a brilliant creation,\nA device to detect cable disruption, a sensation.\n\nEarning recognition for our innovative spree,\nRunner-up at the Makerthon, a proud victory for me.\n\nWith a blend of sales, finance, and IT in my hand,\nI march forward with passion across the land.\n\nExcited for the opportunities that come my way,\nIn the world of IT, I thrive and stay.";

var speed = 100;

function typeWriter() {
  var lines = txt.split('\n');
  if (i < lines.length) {
    var line = lines[i];
    if (i == 0){
        document.getElementsByClassName("intro-text").item(0).innerHTML="<div></div>";
    }
    document.getElementsByClassName("intro-text").item(0).innerHTML += line + '<br>';
    i++;
    setTimeout(typeWriter, speed);
  }
}



document.addEventListener("DOMContentLoaded", function () {
    // Hide the loading screen and show the main content after the video duration
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');
    const loadingVideo = document.getElementById('loading-video');
    var headerHeight = document.querySelector('.my-title').offsetHeight;
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function() {
        var headerHeight = document.querySelector('.my-title').offsetHeight;
        menu.style.top = headerHeight + 'px';
      menu.classList.toggle('show');
      
    });
    // Set padding for the content based on the header height
    document.querySelector('.border').style.paddingTop = headerHeight+3 + 'px';
    loadingVideo.addEventListener('ended', function () {                
        loadingScreen.style.opacity = 0;                // Listen for the 'transitionend' event to hide the loading screen after the fade-out transition
        loadingScreen.addEventListener('transitionend', function () {
            loadingScreen.style.display = 'none';
        });

        // Set opacity to 1 for fade-in effect
        mainContent.style.opacity = 1;
    });
        
});

