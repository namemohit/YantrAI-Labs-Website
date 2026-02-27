import React from 'react';
import { useApp } from '../AppContext';

const Footer: React.FC = () => {
    const { data } = useApp();

    return (
        <footer style={{ background: '#f5f5f7', padding: '40px 0', borderTop: '1px solid #d2d2d7', fontSize: '12px', color: '#86868b' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <p>Copyright © 2026 {data.companyName}. All rights reserved.</p>
                        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                            <a href="#" style={{ color: '#515154', textDecoration: 'none' }}>Privacy Policy</a>
                            <a href="#" style={{ color: '#515154', textDecoration: 'none' }}>Terms of Use</a>
                            <a href="#" style={{ color: '#515154', textDecoration: 'none' }}>Sales and Refunds</a>
                            <a href="#" style={{ color: '#515154', textDecoration: 'none' }}>Legal</a>
                            <a href="#" style={{ color: '#515154', textDecoration: 'none' }}>Site Map</a>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span>India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
