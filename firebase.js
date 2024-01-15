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
                message: document.getElementById("message").value,
            };
            emailjs.sendForm("service_4e2pfbh", "template_zstrssg", "#contactForm", "Xq85xZ7tP-UhqL50I")
                .then(function(response) {
                    console.log('SUCCESS! Email Sent', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });
            emailjs.sendForm("service_4e2pfbh", "template_ed04fsd", "#contactForm", "Xq85xZ7tP-UhqL50I")
                .then(function(response) {
                    console.log('SUCCESS! Email Sent', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });    
            try {
                const docRef = await addDoc(collection(db, "contacts"), formData);
                console.log("Document written with ID: ", docRef.id);
                event.target.reset();

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        });

        