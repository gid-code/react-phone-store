import React,{Component,useState} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import firebase from 'firebase'
import { ProductConsumer, ProductProvider } from './context';
import Signin from './components/auth/Signin';
import SignUp from './components/auth/SignUp'

function App(){

  // render(){
    const[authUser, setAuthUser] = useState()
    const signInHandler = () => {
        var provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            setAuthUser(user)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    const signInCustom = (email,password) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(result){
        setAuthUser(result.user)
        
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }

    const signUpFn = (email,password) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
        signInCustom(email,password)
      }
      ).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        //if no error sign in user
        // if(!error){
        //   signInCustom(email,password)
        // }
      });
    }

    const logoutHandler = () => {
      firebase.auth().signOut().then(function() {
          // Sign-out successful.
          setAuthUser()
        }).catch(function(error) {
          // An error happened.
        });
  }

    return ( 
      <React.Fragment>
        <Navbar signIn={signInHandler} logout={logoutHandler} isAuthed={authUser? true : false}/>
        <Switch>
          <Route exact path="/" 
          // component={ProductList}
          render={(props) => <ProductList {...props} isAuthed={authUser? true : false}/>}
          ></Route>
          <Route path="/details" 
          // component={Details}
          render={(props) => <Details {...props} isAuthed={authUser? true : false} />}
          ></Route>
          <Route path="/signin" 
          render={(props) => <Signin {...props} signInCustom={signInCustom} signInG={signInHandler}/>}></Route>
          <Route path="/signup" 
          render={(props) => <SignUp {...props} signUp={signUpFn} />}></Route>
          <Route path="/cart" 
          render={(props) => authUser? <Cart {...props}/> : <Redirect to="/"/>} ></Route>
          <Route component={Default}></Route>
        </Switch> 
        <Modal/>  

      </React.Fragment>
    )
  // }
}

export default App;
