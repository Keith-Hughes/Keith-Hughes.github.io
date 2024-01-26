var isTyping = false;
var i = 0;
var speed = 50
function typeWriter(cursorID, className, txt) {
  ;
  if (isTyping) {
    speed-=10;
    return;
  }
  if (!document.getElementById(cursorID).classList.contains("off")){
  document.getElementById(cursorID).classList.toggle("off")
  }
  isTyping = true;
  var lines = txt.split('\n');
  var j = 0;

  
      // If it's the first line, clear the existing content
      if (i === 0) {
          document.getElementsByClassName(className).item(0).innerHTML = "<div></div>";
      }

      var withoutCursor=document.getElementsByClassName(className).item(0).innerHTML
      function typeCharacter() {
        var line = lines[i];
        if (j < line.length) {
            if(line[j] == "<"){
                withoutCursor += line
                j= line.length -1
            }
            else{
            withoutCursor += line[j]
            }
            document.getElementsByClassName(className).item(0).innerHTML = withoutCursor;
            
            document.getElementsByClassName(className).item(0).innerHTML += "<span class='cursor' id='typing-cursor'>|</span>"
            j++;
            setTimeout(typeCharacter, speed);
        } else {
            i++;
            j=0;
            // Move to the next line after typing the entire line
            if (i < lines.length) {
                withoutCursor += '<br>';
                document.getElementsByClassName(className).item(0).innerHTML = withoutCursor;
                setTimeout(typeCharacter, speed);
            } else {
                isTyping = false; // Reset the flag when animation is complete
                i = 0;
                speed=50;
                return;
            }
        }      
  }
  typeCharacter();
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

    const card = document.querySelector(".card__inner");
    const card2 = document.querySelector(".card2").querySelector(".card__inner")
    const card3 = document.querySelector(".card3").querySelector(".card__inner")

        card3.addEventListener("click", function (e) {
            card3.classList.toggle('is-flipped');
        });
        card2.addEventListener("click", function (e) {
            card2.classList.toggle('is-flipped');
        });
        card.addEventListener("click", function (e) {
            card.classList.toggle('is-flipped');
        });
        
});



