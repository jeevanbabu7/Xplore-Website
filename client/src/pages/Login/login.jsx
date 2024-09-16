import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import './login.css'
const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChanges = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(email === '' || password === '') {
      alert('Please fill in all fields');
    } else { 
      // send to backend
      try {
        const response = await fetch('Login API', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        }) 
  
        const data = await response.json();
        if(!data.ok) {
          throw new Error("Something went wrong");
  
        } else {
          navigate("/home");

        }
      }catch(err) {
        console.log(err);
      }
      
    }
    
  }


  return (
    <div className="login-box">
        <p>Login</p>
        <form>
            <div className="user-box">
            <input required name="email" type="text" onChange={handleChanges}/>
            <label>Email</label>
            </div>
            <div className="user-box">
            <input required name="password" type="password" onChange={handleChanges}/>
            <label>Password</label>
            </div>
            <button type='submit' onClick={handleSubmit}>
              <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
              </a>
            </button>
        </form>
        <p>haven't registered yet? <a href="/registration" className="a2">Register!</a></p>
        </div>

  )
}

export default Login;
