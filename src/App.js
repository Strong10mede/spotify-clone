import "./App.css";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import { getTokenfromResponse } from "./spotify";
import Player from "./Components/Player";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenfromResponse();
    //don't want to show access token in url
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) setToken(_token);
  }, []);
  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
