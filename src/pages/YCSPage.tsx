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
            icon: <Zap size={32} color="var(--yantrai-blue)" />,
            title: "Curated AI Solutions",
            content: "We don't believe in one-size-fits-all. Our architects design bespoke AI models that integrate naturally with your unique business workflows, ensuring maximum impact from day one."
        },
        {
            icon: <Shield size={32} color="var(--yantrai-blue)" />,
            title: "Strategic AI Infrastructure",
            content: "Future-proof your enterprise with robust infrastructure. We build scalable, secure, and compliant AI environments that grow alongside your business ambitions."
        },
        {
            icon: <Cpu size={32} color="var(--yantrai-blue)" />,
            title: "Enterprise ML Implementation",
            content: "From pilot to production, we manage the full lifecycle of machine learning implementation, focusing on reliability, performance, and long-term value creation."
        }
    ];

    return (
        <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)', fontFamily: 'var(--font-main)' }}>
            <Navbar theme="light" />

            {/* Hero Section */}
            <section style={{ padding: '160px 0 80px 0', textAlign: 'center', background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 113, 227, 0.1)', padding: '8px 16px', borderRadius: 'var(--radius-pill)', color: 'var(--yantrai-blue)', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}
                    >
                        <Briefcase size={16} />
                        A YantrAI Sub-brand
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '32px', color: 'var(--text-primary)' }}
                    >
                        Transforming Vision into Intelligence.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.5, textWrap: 'balance', maxWidth: '800px', margin: '0 auto' }}
                    >
                        YantrAI Consultancy Services (YCS) provides the technical mastery and strategic guidance needed to lead in the age of AI.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '100px 0', borderTop: '1px solid var(--border-color)' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                {...fadeIn}
                                style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}
                            >
                                <div style={{ flexShrink: 0, background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-std)', border: '1px solid var(--border-color)' }}>
                                    {section.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>{section.title}</h2>
                                    <p style={{ fontSize: '19px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{section.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '80px 0 160px 0', background: 'var(--bg-primary)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                    <motion.div
                        {...fadeIn}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '80px 40px',
                            borderRadius: 'var(--radius-card)',
                            color: 'var(--text-primary)',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>Ready to transform?</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px auto' }}>
                                Schedule a strategic consultation with our AI architects today.
                            </p>
                            <MagneticButton
                                onClick={() => window.open('/#contact', '_self')}
                                style={{
                                    background: 'var(--yantrai-blue)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 32px',
                                    borderRadius: 'var(--radius-pill)',
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
                                color: 'var(--yantrai-blue)',
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

            <footer style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '14px' }}>
                    <p>© 2026 YantrAI Labs Pvt Ltd. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default YCSPage;
