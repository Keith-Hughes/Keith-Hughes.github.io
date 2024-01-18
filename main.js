var i = 0;
var txt = 'I completed high school in 2012 and began my career in sales. However, my true passion lies in IT, and I eventually transitioned into the field, gaining practical experience through various positions. Wanting to deepen my knowledge, I pursued further education in IT at WeThinkCode. With a diverse background in sales, finance, and IT, I possess valuable skills for different industries. My unwavering passion for IT and commitment to growth drive me to continually expand my expertise. I am excited about the future opportunities that my combined background can offer, and I am determined to pursue my interests and passions in the field of IT.'
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    if (i == 0){
        document.getElementsByClassName("intro-text").item(0).innerHTML="";
    }
    document.getElementsByClassName("intro-text").item(0).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function openTab(tabId) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
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

