// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyA1vCdvxRBKg4qiEvEiuaRBZXlRo80BlAU",
      authDomain: "keithhughescv.firebaseapp.com",
      projectId: "keithhughescv",
      storageBucket: "keithhughescv.appspot.com",
      messagingSenderId: "33187779200",
      appId: "1:33187779200:web:996c27ce3e10615f648c65"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
  
           // Form submission event listener
           document.getElementById("contactForm").addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
            };

            try {
                const docRef = await addDoc(collection(db, "contacts"), formData);
                console.log("Document written with ID: ", docRef.id);

                //reset the form after successful submission
                event.target.reset();
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        });

        document.addEventListener("DOMContentLoaded", function () {
            // Hide the loading screen and show the main content after the video duration
            const loadingScreen = document.querySelector('.loading-screen');
            const mainContent = document.querySelector('.main-content');
            const loadingVideo = document.getElementById('loading-video');
        
            loadingVideo.addEventListener('ended', function () {                
                    loadingScreen.style.display = 'none';
                    mainContent.style.display = 'block';
                
            });
        });

