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
            background: 'var(--jira-subtle-bg)'
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
                    color: 'var(--jira-text-subtle)'
                }}
            >
                <ArrowLeft size={20} /> Back to Home
            </button>
            <div style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                width: '100%',
                maxWidth: '400px'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <img src="/yantra-logo.png" alt="Logo" style={{ height: '60px', marginBottom: '1rem' }} />
                    <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Admin Login</h1>
                    <p style={{ color: 'var(--jira-text-subtle)' }}>Enter your credentials to access the admin panel.</p>
                </div>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid var(--jira-border)',
                                borderRadius: '6px',
                                fontSize: '1rem'
                            }}
                            placeholder="Enter username"
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid var(--jira-border)',
                                borderRadius: '6px',
                                fontSize: '1rem'
                            }}
                            placeholder="Enter password"
                        />
                    </div>
                    {error && <div style={{ color: 'red', fontSize: '0.875rem', textAlign: 'center' }}>{error}</div>}
                    <button
                        type="submit"
                        className="btn-primary"
                        style={{
                            width: '100%',
                            padding: '0.875rem',
                            fontSize: '1rem',
                            marginTop: '0.5rem'
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
