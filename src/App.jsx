import { useState } from 'react'

import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {loggedIn ? <Home/> : <Login/>}
    </>
  )
}

export default App
