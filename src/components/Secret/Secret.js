import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';

const Secret = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      });

      if (response.data.status === 1) {
        const { token, user } = response.data.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        toast.success("Login successful", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });


        // Navigate to appropriate page after successful login
        setTimeout(() => {
          navigate('/server');  // Change this to the desired route
        }, 3000);
      } else {
        throw new Error(response.data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed. Please check your credentials.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      <h1 className='text-center'>Secret Login Page</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center flex-column gap-3'>
            <h4 className='text-center'>Enter your credentials</h4>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant='contained' onClick={handleLogin} color='primary'>Login</Button>
          </div>
          <div className='col-md-6'>
            <img className='w-100 h-auto' src="https://cdn.dribbble.com/users/2507445/screenshots/5827735/internet-safety-hacker.gif" alt="Security illustration" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Secret;