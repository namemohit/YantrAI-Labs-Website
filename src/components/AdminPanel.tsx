import React from 'react';
import { useApp } from '../AppContext';
import { LogOut } from 'lucide-react';

const AdminPanel: React.FC = () => {
    const { isAdmin, logout, data, updateData } = useApp();

    if (!isAdmin) {
        return null;
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'var(--jira-text)',
            color: 'white',
            padding: '1rem',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ color: 'white' }}>Admin Control Panel</h3>
                <button onClick={logout} style={{ background: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <LogOut size={16} /> Logout
                </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                    <label style={{ fontSize: '0.75rem' }}>Customer Count</label>
                    <input
                        type="text"
                        value={data.customerCount}
                        onChange={(e) => updateData({ customerCount: e.target.value })}
                        style={{ width: '100%', padding: '0.25rem', marginTop: '0.25rem' }}
                    />
                </div>
                <div>
                    <label style={{ fontSize: '0.75rem' }}>Country Count</label>
                    <input
                        type="text"
                        value={data.countryCount}
                        onChange={(e) => updateData({ countryCount: e.target.value })}
                        style={{ width: '100%', padding: '0.25rem', marginTop: '0.25rem' }}
                    />
                </div>
                <div>
                    <label style={{ fontSize: '0.75rem' }}>Contact Phone</label>
                    <input
                        type="text"
                        value={data.contactPhone}
                        onChange={(e) => updateData({ contactPhone: e.target.value })}
                        style={{ width: '100%', padding: '0.25rem', marginTop: '0.25rem' }}
                    />
                </div>
                <div>
                    <label style={{ fontSize: '0.75rem' }}>Company Name</label>
                    <input
                        type="text"
                        value={data.companyName}
                        onChange={(e) => updateData({ companyName: e.target.value })}
                        style={{ width: '100%', padding: '0.25rem', marginTop: '0.25rem' }}
                    />
                </div>
                <div>
                    <label style={{ fontSize: '0.75rem' }}>Contact Person</label>
                    <input
                        type="text"
                        value={data.contactPerson}
                        onChange={(e) => updateData({ contactPerson: e.target.value })}
                        style={{ width: '100%', padding: '0.25rem', marginTop: '0.25rem' }}
                    />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ fontSize: '0.75rem' }}>Address</label>
                    <input
                        type="text"
                        value={data.address}
                        onChange={(e) => updateData({ address: e.target.value })}
                        style={{ width: '100%', padding: '0.25rem', marginTop: '0.25rem' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
