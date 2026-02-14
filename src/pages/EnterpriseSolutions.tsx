import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Layout, Cpu, Database, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import MagneticButton from '../components/MagneticButton';

const EnterpriseSolutions: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div style={{ background: '#ffffff', minHeight: '100vh', color: '#1d1d1f', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
            <Navbar theme="light" />

            {/* Blog Header / Hero */}
            <section style={{ padding: '140px 0 60px 0', background: '#f5f5f7' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                    <motion.div {...fadeIn}>
                        <div style={{ color: '#0071e3', fontWeight: 600, fontSize: '14px', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            Enterprise Strategy
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '32px' }}>
                            Building the Foundation of Modern Business.
                        </h1>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid #d2d2d7', paddingTop: '24px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px', fontWeight: 700 }}>MS</div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '16px' }}>Mohit Sharma</div>
                                <div style={{ color: '#86868b', fontSize: '14px' }}>Architect & Founder • IIT Delhi (2012 Batch)</div>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/mohit-sharma-24709913/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ marginLeft: 'auto', color: '#0077b5' }}
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Body */}
            <section style={{ padding: '60px 0 100px 0' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ fontSize: '1.25rem', lineHeight: 1.6, color: '#424245' }}
                    >
                        <p style={{ marginBottom: '24px' }}>
                            At YantraAI Labs, specifically through our <strong>YCS (YantrAI Consultancy Services)</strong> wing, we observe that the line between digital and physical infrastructure is dissolving. To lead in this environment, companies don't just need software; they need unified ecosystems.
                        </p>

                        <h2 style={{ fontSize: '28px', fontWeight: 600, color: '#1d1d1f', marginTop: '48px', marginBottom: '20px' }}>
                            Universal Custom Solutions
                        </h2>
                        <p style={{ marginBottom: '24px' }}>
                            YCS provides modern-day solutions for building modern-day web systems, mobile applications, and deeply integrated custom AI / ML and hardware solutions. Our approach is rooted in the precision I learned during my time at <strong>IIT Delhi</strong>, combined with over a decade of iterating on industrial-scale problems.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', margin: '48px 0' }}>
                            <div style={{ background: '#f5f5f7', padding: '32px', borderRadius: '24px' }}>
                                <Globe size={24} color="#0071e3" style={{ marginBottom: '16px' }} />
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Modern Web & Apps</h3>
                                <p style={{ fontSize: '16px', color: '#86868b' }}>High-performance, secure digital platforms built for sub-second latency and massive scale.</p>
                            </div>
                            <div style={{ background: '#f5f5f7', padding: '32px', borderRadius: '24px' }}>
                                <Cpu size={24} color="#0071e3" style={{ marginBottom: '16px' }} />
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Custom Hardware</h3>
                                <p style={{ fontSize: '16px', color: '#86868b' }}>Bespoke POS and sensor hardware designed to thrive in industrial environments.</p>
                            </div>
                            <div style={{ background: '#f5f5f7', padding: '32px', borderRadius: '24px' }}>
                                <Database size={24} color="#0071e3" style={{ marginBottom: '16px' }} />
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>AI / ML Core</h3>
                                <p style={{ fontSize: '16px', color: '#86868b' }}>Predictive models and neural networks that turn raw telemetry into competitive advantage.</p>
                            </div>
                            <div style={{ background: '#f5f5f7', padding: '32px', borderRadius: '24px' }}>
                                <Layout size={24} color="#0071e3" style={{ marginBottom: '16px' }} />
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Unified Experience</h3>
                                <p style={{ fontSize: '16px', color: '#86868b' }}>Bridging the gap between the warehouse floor and the boardroom dashboard.</p>
                            </div>
                        </div>

                        <p style={{ marginBottom: '24px' }}>
                            Whether it is optimizing logistics through vision-based AI or building a global-scale b2b commerce engine, our mission is to provide the technical foundation that allows your business to move at the speed of intelligence.
                        </p>

                        <blockquote style={{ borderLeft: '4px solid #0071e3', paddingLeft: '24px', margin: '48px 0', fontSize: '1.5rem', fontStyle: 'italic', color: '#1d1d1f' }}>
                            "We don't build projects; we architect futures. In the 2012 batch at IITD, we were taught to solve for complexity. At YantraAI, we solve for impact."
                        </blockquote>

                        <div style={{ textAlign: 'center', marginTop: '80px' }}>
                            <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '24px' }}>Ready to architect your solution?</h2>
                            <MagneticButton
                                onClick={() => window.location.href = '/#contact'}
                                style={{ background: '#0071e3', color: 'white', padding: '16px 40px', borderRadius: '999px', fontSize: '18px', fontWeight: 600 }}
                            >
                                Start a Partnership
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Back Navigation */}
            <div style={{ paddingBottom: '100px', textAlign: 'center' }}>
                <button
                    onClick={() => window.location.href = '/'}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'transparent',
                        border: 'none',
                        color: '#0071e3',
                        fontSize: '17px',
                        cursor: 'pointer',
                        fontWeight: 500
                    }}
                >
                    <ArrowLeft size={18} />
                    Back to Overview
                </button>
            </div>

            <footer style={{ background: '#f5f5f7', padding: '60px 0', borderTop: '1px solid #d2d2d7' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: '#86868b', fontSize: '14px' }}>
                    <p>© 2026 YantrAI Labs Pvt Ltd. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default EnterpriseSolutions;
