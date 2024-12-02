import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import ApiUrl from '../../ApiUrl';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${ApiUrl}/api/users/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (data.token && data.user) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                toast.success('Login successful!');
                navigate('/'); // Navigate to the home page
            } else {
                toast.error(data.msg || 'Login failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Login failed. Please try again.');
        }
    };

    return (
        <div>
            <ToastContainer />
            <section className="sign-up-in-section">
                <div className="container mt-3">
                    <div className="row align-items-center justify-content-center" style={{ width: '100%' }}>
                        <div className="col-lg-5 col-md-8">
                            <div className="register-wrap bg-white p-5 shadow rounded-custom">
                                <h1 className="h3">Nice to See You Again</h1>
                                <form onSubmit={handleSubmit} className="mt-4 register-form">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label htmlFor="email" className="mb-1">
                                                Email <span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    id="email"
                                                    required
                                                    aria-label="email"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="password" className="mb-1">
                                                Password <span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    id="password"
                                                    required
                                                    aria-label="Password"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary mt-3 d-block w-100">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                    <p className="font-monospace fw-medium text-center text-muted mt-3 pt-4 mb-0">
                                        Don’t have an account?{' '}
                                        <Link to="/signup" className="text-decoration-none">
                                            Sign up Today
                                        </Link>
                                        <br />
                                        <Link to="/recovery" className="text-decoration-none">
                                            Forgot password
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
