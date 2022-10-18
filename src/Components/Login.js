import React from "react";
import { LoginUrl } from "../spotify";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />
      <a href={LoginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
