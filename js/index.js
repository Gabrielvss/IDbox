 // Initialize Firebase
  var config = {
    
    apiKey: "AIzaSyCSteal3DSLrenQgQFaWr-BHZKCl9kHl8I",
    authDomain: "idbox-76d4e.firebaseapp.com",
    databaseURL: "https://idbox-76d4e.firebaseio.com",
    projectId: "idbox-76d4e",
    storageBucket: "idbox-76d4e.appspot.com",
    messagingSenderId: "708708640728"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');

  
  
     //log ou do ultimo usuario
      firebase.auth().signOut();



  // Add um login
  btnLogin.addEventListener('click', e => {
   
    // pegando email e senha
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();
      //autenticando
    const promise = auth.signInWithEmailAndPassword(email,pass);

    promise.catch(e => window.alert('Usuario nao Cadastrado'));

    console.log('supinpa')
    

  });

 


       //vericando em tempo real
   firebase.auth().onAuthStateChanged(firebaseUser => {
     if(firebaseUser){
       console.log(firebaseUser);
      
       window.location.href ='table.html';
       
     } else {
       console.log('nenhum ususario logado');
      
     }

 });
