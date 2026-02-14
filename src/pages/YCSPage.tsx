import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Shield, Cpu, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import MagneticButton from '../components/MagneticButton';

const YCSPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    const sections = [
        {
            icon: <Zap size={32} color="#0071e3" />,
            title: "Curated AI Solutions",
            content: "We don't believe in one-size-fits-all. Our architects design bespoke AI models that integrate naturally with your unique business workflows, ensuring maximum impact from day one."
        },
        {
            icon: <Shield size={32} color="#0071e3" />,
            title: "Strategic AI Infrastructure",
            content: "Future-proof your enterprise with robust infrastructure. We build scalable, secure, and compliant AI environments that grow alongside your business ambitions."
        },
        {
            icon: <Cpu size={32} color="#0071e3" />,
            title: "Enterprise ML Implementation",
            content: "From pilot to production, we manage the full lifecycle of machine learning implementation, focusing on reliability, performance, and long-term value creation."
        }
    ];

    return (
        <div style={{ background: '#ffffff', minHeight: '100vh', color: '#1d1d1f', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
            <Navbar theme="light" />

            {/* Hero Section */}
            <section style={{ padding: '160px 0 80px 0', textAlign: 'center', background: '#f5f5f7' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 113, 227, 0.1)', padding: '8px 16px', borderRadius: '999px', color: '#0071e3', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}
                    >
                        <Briefcase size={16} />
                        A YantrAI Sub-brand
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '32px', color: '#1d1d1f' }}
                    >
                        Transforming Vision into Intelligence.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ fontSize: '1.5rem', color: '#86868b', lineHeight: 1.5, textWrap: 'balance', maxWidth: '800px', margin: '0 auto' }}
                    >
                        YantrAI Consultancy Services (YCS) provides the technical mastery and strategic guidance needed to lead in the age of AI.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '100px 0', borderTop: '1px solid #d2d2d7' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                {...fadeIn}
                                style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}
                            >
                                <div style={{ flexShrink: 0, background: '#f5f5f7', padding: '16px', borderRadius: '16px', border: '1px solid #d2d2d7' }}>
                                    {section.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px', color: '#1d1d1f' }}>{section.title}</h2>
                                    <p style={{ fontSize: '19px', color: '#424245', lineHeight: 1.6 }}>{section.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '80px 0 160px 0', background: '#ffffff' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                    <motion.div
                        {...fadeIn}
                        style={{
                            background: '#f5f5f7',
                            padding: '80px 40px',
                            borderRadius: '40px',
                            color: '#1d1d1f',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '1px solid #d2d2d7'
                        }}
                    >
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '16px', color: '#1d1d1f' }}>Ready to transform?</h2>
                            <p style={{ color: '#86868b', fontSize: '18px', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px auto' }}>
                                Schedule a strategic consultation with our AI architects today.
                            </p>
                            <MagneticButton
                                onClick={() => window.open('/#contact', '_self')}
                                style={{
                                    background: '#0071e3',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 32px',
                                    borderRadius: '999px',
                                    fontSize: '17px',
                                    fontWeight: 500,
                                    cursor: 'pointer'
                                }}
                            >
                                Contact YCS Team
                            </MagneticButton>
                        </div>
                    </motion.div>

                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <button
                            onClick={() => window.close()}
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
                            Back to Home
                        </button>
                    </div>
                </div>
            </section>

            <footer style={{ background: '#f5f5f7', padding: '60px 0', borderTop: '1px solid #d2d2d7' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', color: '#86868b', fontSize: '14px' }}>
                    <p>© 2026 YantrAI Labs Pvt Ltd. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default YCSPage;
