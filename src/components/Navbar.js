import React,{Component,useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import firebase from 'firebase'

const Navbar = props => {
    
    
    // render(){
        // const[authUser, setAuthUser] = useState()
        // const signInHandler = () => {
        //     var provider = new firebase.auth.GoogleAuthProvider()

        //     firebase.auth().signInWithPopup(provider).then(function(result) {
        //         // This gives you a Google Access Token. You can use it to access the Google API.
        //         var token = result.credential.accessToken;
        //         // The signed-in user info.
        //         var user = result.user;
        //         setAuthUser(user)
        //         // ...
        //       }).catch(function(error) {
        //         // Handle Errors here.
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         // The email of the user's account used.
        //         var email = error.email;
        //         // The firebase.auth.AuthCredential type that was used.
        //         var credential = error.credential;
        //         // ...
        //       });
        // }

        // const logoutHandler = () => {
        //     firebase.auth().signOut().then(function() {
        //         // Sign-out successful.
        //         setAuthUser()
        //       }).catch(function(error) {
        //         // An error happened.
        //       });
        // }



        let userDisplay;
        if(props.isAuthed){
            userDisplay =
                <div className="ml-auto">
                    <Link to='/cart' className='ml-auto'>
                        <ButtonContainer>
                            <span className='mr-2'>
                                <i className="fas fa-cart-plus"/>
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                    {/* <Link className=''> */}
                        <ButtonContainer onClick={props.logout}>
                            logout
                        </ButtonContainer>
                    {/* </Link> */}
                </div>
            
        }else{
             userDisplay =  <Link to="/signin" className='ml-auto'>
                                <ButtonContainer>
                                    sign in
                                </ButtonContainer>
                             </Link>
        }
        return(
            <NavWrapper className="navbar navbar-expand-sm
            navbar-dark px-sm-5">
                {
                    /* 
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */
                }

                <Link to='/'>
                    <img src={logo} alt='store' className='navbar-brand'></img>
                </Link>

                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            products
                        </Link>
                    </li>
                </ul>
                
                {
                    userDisplay
                }

            </NavWrapper>
        )
    // }
}

const NavWrapper = styled.nav `
    background: #2a2a72;
    .nav-link{
        color: #f3f3f3 !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

export default Navbar

