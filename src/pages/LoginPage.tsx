import React, { useState } from 'react';
import { useApp } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LoginPage: React.FC = () => {
    const { login } = useApp();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(username, password)) {
            navigate('/');
        } else {
            setError('Invalid credentials. Try admin/admin.');
        }
    };

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--apple-light-gray)'
        }}>
            <button
                onClick={() => navigate('/')}
                style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem',
                    border: 'none',
                    background: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    color: 'var(--apple-black)',
                    opacity: 0.7
                }}
            >
                <ArrowLeft size={20} /> Back to Home
            </button>
            <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '24px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                width: '100%',
                maxWidth: '400px'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <img src="/yantra-logo.png" alt="Logo" style={{ height: '80px', marginBottom: '20px' }} />
                    <h1 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '10px' }}>Sign in to YantraAI</h1>
                    <p style={{ color: '#86868b', fontSize: '15px' }}>Enter your credentials to access the ecosystem.</p>
                </div>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '16px 16px',
                                    border: '1px solid #d2d2d7',
                                    borderRadius: '12px',
                                    fontSize: '17px',
                                    background: 'rgba(0,0,0,0.02)',
                                    transition: 'all 0.2s'
                                }}
                                placeholder="Username"
                                onFocus={(e) => e.target.style.borderColor = '#0071e3'}
                                onBlur={(e) => e.target.style.borderColor = '#d2d2d7'}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '16px 16px',
                                    border: '1px solid #d2d2d7',
                                    borderRadius: '12px',
                                    fontSize: '17px',
                                    background: 'rgba(0,0,0,0.02)',
                                    transition: 'all 0.2s'
                                }}
                                placeholder="Password"
                                onFocus={(e) => e.target.style.borderColor = '#0071e3'}
                                onBlur={(e) => e.target.style.borderColor = '#d2d2d7'}
                            />
                        </div>
                    </div>
                    {error && <div style={{ color: '#ff3b30', fontSize: '13px', textAlign: 'center' }}>{error}</div>}
                    <button
                        type="submit"
                        className="btn-primary"
                        style={{
                            width: '100%',
                            padding: '14px',
                            fontSize: '17px',
                            marginTop: '10px',
                            borderRadius: '12px'
                        }}
                    >
                        Sign In
                    </button>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <a href="#" style={{ color: '#0071e3', fontSize: '13px' }}>Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
