import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Ensure the CSS file is imported

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (message === 'Inicio de sesión exitoso') {
      console.log('Message indicates successful login, navigating to /home');
      navigate('/home', { replace: true });
    }
  }, [message, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      console.log('Login response:', response.data);
      setMessage(response.data.message);

      if (response.data.success) {
        console.log('Login successful, navigating to /home');
        setTimeout(() => {
          console.log('Navigating to /home now');
          navigate('/home', { replace: true });
        }, 500);
      } else {
        console.log('Login failed, not navigating');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className='container-login'>
      <div className='login-box'>
        <h1>Inicio de Sesión</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Usuario:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Login;
