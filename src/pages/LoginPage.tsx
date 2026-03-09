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
            background: '#000',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Ambient Depth Elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100vw',
                height: '100vh',
                background: 'radial-gradient(circle at center, rgba(0, 113, 227, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 1
            }} />

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
                    color: '#fff',
                    opacity: 0.7,
                    zIndex: 10
                }}
            >
                <ArrowLeft size={20} /> Back to Home
            </button>
            <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                padding: '48px',
                borderRadius: '32px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                width: '100%',
                maxWidth: '440px',
                position: 'relative',
                zIndex: 10
            }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <img src="/yantrai-logo-white-background.png" alt="Logo" style={{ height: '80px', marginBottom: '24px' }} />
                    <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.02em' }}>Sign in to YantrAI</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>Enter your credentials to access the ecosystem.</p>
                </div>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '16px 20px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '16px',
                                fontSize: '17px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#fff',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                            }}
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '16px 20px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '16px',
                                fontSize: '17px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#fff',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                            }}
                            placeholder="Password"
                        />
                    </div>
                    {error && <div style={{ color: '#ff453a', fontSize: '14px', textAlign: 'center', fontWeight: 500 }}>{error}</div>}
                    <button
                        type="submit"
                        className="btn-primary"
                        style={{
                            width: '100%',
                            padding: '16px',
                            fontSize: '17px',
                            fontWeight: 600,
                            borderRadius: '16px',
                            background: 'var(--yantrai-blue)',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 10px 20px rgba(0, 113, 227, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Sign In
                    </button>
                    <div style={{ textAlign: 'center', marginTop: '8px' }}>
                        <a href="#" style={{ color: 'var(--yantrai-blue)', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
