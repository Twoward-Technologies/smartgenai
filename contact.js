const firebaseConfig = {
  apiKey: "AIzaSyCkUZuMTmGEWpPEZhLyjlN2EktXLhkcuhs",
  authDomain: "smartgen-contact.firebaseapp.com",
  databaseURL: "https://smartgen-contact-default-rtdb.firebaseio.com",
  projectId: "smartgen-contact",
  storageBucket: "smartgen-contact.appspot.com",
  messagingSenderId: "755190365052",
  appId: "1:755190365052:web:54ab8a0212742b7a4c42f9",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");

  saveData(name, email);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 4000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveData = (name, email) => {
  var newContactFormDB = contactFormDB.push();

  newContactFormDB.set({
    name: name,
    email: email,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
