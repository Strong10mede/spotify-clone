import "./App.css";
import Login from "./Components/Login";
import { useEffect } from "react";
import { getTokenfromResponse } from "./spotify";
import Player from "./Components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
//creates new instance of spotify to communicate with
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenfromResponse();
    //don't want to show access token in url
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("user spotify::", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
        dispatch({
          type: "SET_TOKEN",
          token: _token,
        });
      });
    }
  }, [token, dispatch]);
  console.log("user reducer:: ", user);
  console.log("token reducer:: ", token);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
