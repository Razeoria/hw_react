import React from 'react';
import '../Login/Login.css';
import spotifyLogo from "../../assets/img/spotify.svg";
import appleIcon from "../../assets/img/apple.svg";
import googleIcon from "../../assets/img/google.svg";
import xIcon from "../../assets/img/x.svg";

function Login() {
    return (
    <div className="login-container">
        <img src={spotifyLogo} alt="Spotify" className="spotify-logo" />
        <h1 className="tagline">LIFE IS WASTED ON THE LIVING</h1>
        <p className="signin-text">Sign in with</p>
        <div className="login-buttons">
            <button><img src={appleIcon} alt="Apple" /></button>
            <button><img src={googleIcon} alt="Google" /></button>
            <button><img src={xIcon} alt="X" /></button>
        </div>
    </div>
    );
}

export default Login;
