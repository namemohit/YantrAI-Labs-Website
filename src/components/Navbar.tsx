import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    theme?: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'light' }) => {
    const isDarkTheme = theme === 'dark';
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const b2bLinks = [
        { name: 'Know YantrAI', href: '/#about' },
        {
            name: 'Products & Services',
            href: '/#products',
            dropdown: [
                { name: 'YCS - YantrAI Consultancy Services', href: '/ycs' },
                { name: 'Kiran - AI POS (Point of Sale)', href: '/case-study' }
            ]
        },
        { name: 'Delivered Projects', href: '/delivered-projects' },
        {
            name: 'Founders & Team',
            href: '/#team',
            dropdown: [
                { name: 'Founders', href: '/#team' },
                { name: 'Life at YantrAI', href: '/life' }
            ]
        },
        { name: 'We are hiring!', href: '/#career' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            height: '80px', // Increased height for premium feel
            backgroundColor: 'transparent',
            zIndex: 9999,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            padding: '0 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            {/* Background Layer for Scrolled State */}
            <motion.div
                initial={false}
                animate={{
                    opacity: scrolled ? 1 : 0,
                    y: scrolled ? 0 : -20
                }}
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '20px',
                    right: '20px',
                    bottom: '10px',
                    backgroundColor: scrolled ? (isDarkTheme ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)') : 'transparent',
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    borderRadius: '20px',
                    border: scrolled ? (isDarkTheme ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)') : 'none',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
                    zIndex: -1
                }}
            />

            {/* Brand Island */}
            <div style={{ flex: '1 1 0', display: 'flex', alignItems: 'center' }}>
                <a href="/" style={{
                    color: isDarkTheme ? '#ffffff' : 'var(--apple-black)',
                    opacity: 0.9,
                    transition: 'transform 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    transform: scrolled ? 'scale(0.85)' : 'scale(1)',
                    transformOrigin: 'left center'
                }}>
                    <img src="/yantra-logo.png" alt="YantraAI" style={{ height: '80px', width: 'auto', maxWidth: 'none' }} />
                </a>
            </div>

            {/* Navigation Island (Floating Island) */}
            <div className="desktop-menu" style={{
                flex: '0 0 auto',
                padding: '4px',
                backgroundColor: scrolled
                    ? (isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.03)')
                    : (isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)'),
                borderRadius: '999px',
                border: isDarkTheme ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                position: 'relative'
            }}>
                {b2bLinks.map((link) => (
                    <div
                        key={link.name}
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <a
                            href={link.href}
                            style={{
                                padding: '10px 20px',
                                fontSize: '13px',
                                fontWeight: 500,
                                color: isDarkTheme ? '#ffffff' : 'var(--apple-black)',
                                textDecoration: 'none',
                                borderRadius: '999px',
                                position: 'relative',
                                display: 'block',
                                transition: 'color 0.3s ease',
                                zIndex: 1
                            }}
                        >
                            {hoveredLink === link.name && (
                                <motion.div
                                    layoutId="nav-bg"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundColor: isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                        borderRadius: '999px',
                                        zIndex: -1
                                    }}
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {link.name}
                        </a>

                        <AnimatePresence>
                            {hoveredLink === link.name && link.dropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        paddingTop: '16px', // Gap between nav item and dropdown
                                        zIndex: 1000
                                    }}
                                >
                                    <div style={{
                                        background: isDarkTheme ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.95)',
                                        backdropFilter: 'blur(20px)',
                                        WebkitBackdropFilter: 'blur(20px)',
                                        borderRadius: '16px',
                                        padding: '12px',
                                        minWidth: '280px',
                                        border: isDarkTheme ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '4px'
                                    }}>
                                        {link.dropdown.map((dropItem) => (
                                            <a
                                                key={dropItem.name}
                                                href={dropItem.href}
                                                style={{
                                                    padding: '10px 16px',
                                                    fontSize: '13px',
                                                    color: isDarkTheme ? '#ffffff' : 'var(--apple-black)',
                                                    textDecoration: 'none',
                                                    borderRadius: '8px',
                                                    transition: 'all 0.2s',
                                                    fontWeight: 500
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                }}
                                            >
                                                {dropItem.name}
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Actions Island */}
            <div className="desktop-actions" style={{
                flex: '1 1 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '16px'
            }}>
                <a href="/login" style={{
                    fontSize: '13px',
                    color: isDarkTheme ? '#ffffff' : 'var(--apple-black)',
                    fontWeight: 500,
                    opacity: 0.7,
                    transition: 'opacity 0.2s'
                }}>Login</a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                    display: 'none',
                    background: isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)',
                    border: isDarkTheme ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10000
                }}
            >
                {mobileMenuOpen ? <X size={20} color="var(--apple-black)" /> : <Menu size={20} color="var(--apple-black)" />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        style={{
                            position: 'absolute',
                            top: '90px',
                            left: '20px',
                            right: '20px',
                            background: isDarkTheme ? '#1c1c1e' : 'white',
                            borderRadius: '24px',
                            padding: '24px',
                            boxShadow: isDarkTheme ? '0 10px 40px rgba(0,0,0,0.5)' : '0 10px 40px rgba(0,0,0,0.1)',
                            border: isDarkTheme ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}
                    >
                        {b2bLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    padding: '12px',
                                    fontSize: '17px',
                                    color: isDarkTheme ? '#ffffff' : 'var(--apple-black)',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    borderBottom: '1px solid #f5f5f7'
                                }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                            <a href="/login" style={{ textAlign: 'center', padding: '12px', color: isDarkTheme ? '#ffffff' : 'var(--apple-black)', fontWeight: 500 }}>Login</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 980px) {
                    .desktop-menu, .desktop-actions {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: flex !important;
                    }
                }
            `}</style>
        </nav >
    );
};

export default Navbar;
