import { useState } from 'react'

import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {loggedIn ? <Home/> : <Login/>}
    </>
  )
}

export default App
