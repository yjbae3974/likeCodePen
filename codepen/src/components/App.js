import { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from '../hooks/useLocalStorage';

import Edit화면 from "./edit화면";
import Navbar from './Navbar';
import AppRouter from "./Router";
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  return (
    <>
       <header>
       <Navbar isLoggedIn={isLoggedIn} userObj={userObj}/>
     </header>
      <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}></AppRouter>

    </>
  );
}

export default App;
