import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/authOps';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();       
        dispatch(login({ email, password }));
    };

    return (
        <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
