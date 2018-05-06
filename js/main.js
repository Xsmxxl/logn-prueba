firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Bienvenido : " + email_id +" a este pequeño proyecto :D";
      setTimeout ("logout(), redireccionar()", 2500);

    }
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block"
  }
});

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    //window.alert(userEmail + " " +userPass);
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : "+ errorMessage);
      // ...
    });
}

function logout(){
  firebase.auth().signOut();
}

function redireccionar(){
    //window.locationf="https://xsmxxl.github.io/responsive-pag-001/";
    var url = "https://xsmxxl.github.io/responsive-pag-001/";
    $(location).attr('href',url);
}
