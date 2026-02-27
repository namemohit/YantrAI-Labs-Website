import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const ProjectRow = ({ title, description, image, isReversed, accent }: { title: string, description: string, image: string, isReversed?: boolean, accent: string }) => (
    <section style={{ padding: '100px 0', backgroundColor: isReversed ? '#fbfbfd' : '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{
                display: 'flex',
                flexDirection: isReversed ? 'row-reverse' : 'row',
                alignItems: 'center',
                gap: '80px',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: 1, minWidth: '320px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px', letterSpacing: '-0.02em', color: '#1d1d1f' }}>{title}</h2>
                        <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: '#86868b', marginBottom: '40px' }}>{description}</p>
                        <button style={{
                            padding: '12px 28px',
                            backgroundColor: accent,
                            color: '#fff',
                            borderRadius: '100px',
                            fontWeight: 600,
                            letterSpacing: '0.01em',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            View Case Study
                        </button>
                    </motion.div>
                </div>
                <div style={{ flex: 1, minWidth: '320px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px -10px rgba(0,0,0,0.1)',
                            aspectRatio: '16/10'
                        }}
                    >
                        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
);

const DeliveredProjects: React.FC = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#1d1d1f' }}>
            <Navbar theme="light" />

            {/* Hero Section */}
            <section style={{ padding: '160px 0 100px 0', textAlign: 'center', background: '#ffffff' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                            fontWeight: 800,
                            marginBottom: '24px',
                            letterSpacing: '-0.04em',
                            color: '#1d1d1f',
                            lineHeight: 1.1
                        }}
                    >
                        Impact, <span style={{ color: '#0071e3' }}>Delivered.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        style={{ fontSize: '1.5rem', color: '#86868b', maxWidth: '700px', margin: '0 auto', lineHeight: 1.4 }}
                    >
                        Real-world industrial solutions engineered to scale. Explore how we're transforming sectors with AI.
                    </motion.p>
                </div>
            </section>

            {/* Projects List */}
            <ProjectRow
                title="YantrAI Consultancy Services"
                description="Engineering complex software ecosystems for Fortune 500 companies. From cloud architecture to custom AI integration, we deliver excellence at global scale."
                image="/industrial-ops.png"
                accent="#0071e3"
            />

            <ProjectRow
                title="One Godown"
                description="Revolutionizing supply chain management with AI-first warehouse operations. Real-time vision analytics and intelligent forecasting for modern logistics."
                image="/warehouse-vision.png"
                isReversed
                accent="#5e5ce6"
            />

            <ProjectRow
                title="Industrial Vision Systems"
                description="High-performance neural hardware designed for extreme environments. Precision analytics enabling next-generation manufacturing automation."
                image="/neural-hardware.png"
                accent="#ff2d55"
            />

            {/* Bottom CTA */}
            <section style={{ padding: '140px 0', textAlign: 'center', backgroundColor: '#ffffff', borderTop: '1px solid #f5f5f7' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '32px', letterSpacing: '-0.03em' }}>
                            Have a problem worth solving?
                        </h2>
                        <button
                            onClick={() => window.location.href = '/#contact'}
                            style={{
                                padding: '18px 48px',
                                backgroundColor: '#1d1d1f',
                                color: '#fff',
                                borderRadius: '100px',
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                            onMouseOver={(e) => {
                                (e.currentTarget as any).style.transform = 'scale(1.05)';
                                (e.currentTarget as any).style.backgroundColor = '#000';
                            }}
                            onMouseOut={(e) => {
                                (e.currentTarget as any).style.transform = 'scale(1)';
                                (e.currentTarget as any).style.backgroundColor = '#1d1d1f';
                            }}
                        >
                            Start a Project
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DeliveredProjects;
