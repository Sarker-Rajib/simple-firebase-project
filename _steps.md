# steps
initial setup ///
* visit firebase.google.com (console)
* create a new firebase project
* go to docs/firebase : Authentication > web > getting started
* register web app > firebase project home > click web > give name and register
* install firebase fir your project : npm install firebase
* dangerous step: get firebase init codes and putting publicly
* export firebase init codes (export default)
// ------------
 setup provider
// -----------
* create auth using getAuth from firebase by using app from fire base init file
* create goole auth provider
* go to firebase > build > authentication > sign in method 
* enable google sifn in
* create a button and method for google sign in
* inside the event handler, call signInWithPopUp with auth, provider
* after signInWithPopUp .then result, error

// -----------
 Display Data
// -----------
* 