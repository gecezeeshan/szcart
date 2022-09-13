import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

import { useDispatch } from 'react-redux';
import { profileActions } from './Store/index';

function Login() {
    const [ profile, setProfile ] = useState(null);
    const clientId = '414875063153-7eol3pr9pgce6kj3plkr3b5elo2cau3k.apps.googleusercontent.com';

    const onSignIn = (googleUser) => {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }
     
      
  const dispatch = useDispatch();
      useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        dispatch(profileActions.Login(res.profileObj));
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        dispatch(profileActions.Logout(null));
        setProfile(null);
    };
      
  return (
    <>
    <div>login</div>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
    {profile ? (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}

    </>
    
  )
}

export default Login