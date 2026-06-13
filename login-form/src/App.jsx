import { useState } from 'react'
import './App.css'


function App() {
  const [showPassword, setShowPassword] = useState(false);
  function visibilityPassword(){
    {!showPassword ? setShowPassword(true) : setShowPassword(false)}
  }
  return (
    <div>
      {'Hello Welcome to this website '}
      <div>
        <input placeholder='Email'/>
      </div>
      <div>
        <input placeholder='Password'
          type={showPassword ? 'text' : 'password'}
        />
        <button onClick={visibilityPassword}>{showPassword ? 'Hide' : 'Show'}</button>
      </div>
      <button className="loginSignInButton">Login</button>
      <button className="loginSignInButton">Sign Up</button>
    </div>
  )
}

export default App
