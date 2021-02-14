
  import firebase  from 'firebase';

  const firebaseApp=
      firebase.initializeApp({
        apiKey: "AIzaSyBwxCnjTbEbsSQY7iD_lGuzyLzGGaXztpo",
        authDomain: "clone-e559e.firebaseapp.com",
        databaseURL: "https://clone-e559e.firebaseio.com",
        projectId: "clone-e559e",
        storageBucket: "clone-e559e.appspot.com",
        messagingSenderId: "122924597147",
        appId: "1:122924597147:web:52768159b209aa20c2eb3e"
    });
    const db=firebaseApp.firestore();
    const auth=firebase.auth();
    const storage=firebase.storage();
  
  
    export {db,auth,storage,firebase,firebaseApp}; 
    