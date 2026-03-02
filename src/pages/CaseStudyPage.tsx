import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Eye, Zap, Target, TrendingUp, ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';
import MagneticButton from '../components/MagneticButton';

const CaseStudyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

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
                        <Zap size={16} />
                        YCS - A YantrAI Sub-brand
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '32px', color: 'var(--text-primary)' }}
                    >
                        Vision AI at the Point of Sale.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.5, textWrap: 'balance', maxWidth: '800px', margin: '0 auto' }}
                    >
                        How we built and deployed a live SKU detection solution for retailers in India and the US, transforming traditional checkout into an intelligent experience.
                    </motion.p>
                </div>
            </section>

            {/* Content Section: Global Scale */}
            <section style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        <motion.div {...fadeIn} style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-color)' }}>
                            <Globe size={40} color="var(--yantrai-blue)" style={{ marginBottom: '24px' }} />
                            <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>Global Footprint</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6 }}>
                                Successfully deployed for major retail clients in both <strong style={{ color: 'var(--text-primary)' }}>India</strong> and the <strong style={{ color: 'var(--text-primary)' }}>United States</strong>. Our solution adapts to diverse retail environments, from localized General Trade outlets to large-scale Modern Trade chains.
                            </p>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }} style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-color)' }}>
                            <Eye size={40} color="var(--yantrai-blue)" style={{ marginBottom: '24px' }} />
                            <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>Real-time SKU Detection</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6 }}>
                                Utilizing advanced computer vision models trained on millions of SKUs, the system identifies products instantly without the need for manual scanning or barcodes, significantly reducing checkout time.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Hardware Section with Image */}
            <section style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', alignItems: 'center' }}>
                        <motion.div {...fadeIn} style={{ textAlign: 'center', maxWidth: '800px' }}>
                            <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '24px', color: 'var(--text-primary)' }}>The Hardware Integration</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '20px' }}>
                                Our custom AI POS mount is designed to integrate seamlessly with existing counter setups, providing optimal camera angles for real-time object tracking.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            style={{
                                width: '100%',
                                maxWidth: '900px',
                                background: 'var(--bg-primary)',
                                borderRadius: 'var(--radius-card)',
                                overflow: 'hidden',
                                border: '1px solid var(--border-color)',
                                position: 'relative',
                                boxShadow: 'var(--shadow-soft)'
                            }}
                        >
                            <img
                                src="/ai-pos-hardware.jpg"
                                alt="AI POS Hardware Mount"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerHTML = '<div style="padding: 100px; text-align: center; color: #555;"><p>[Hardware Image Placeholder]</p></div>';
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Shop Deployment Section */}
            <section style={{ padding: '100px 0', background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <motion.div {...fadeIn} style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '24px', color: 'var(--text-primary)' }}>Live in Action</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '20px' }}>Actual deployment in General Trade (GT) stores, detecting items in real retail conditions.</p>
                    </motion.div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div {...fadeIn} style={{ maxWidth: '800px', borderRadius: 'var(--radius-card)', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-soft)' }}>
                            <img src="/ai-pos-shop-1.jpg" alt="AI POS Deployment" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Target Audience / Use Cases */}
            <section style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary)' }}>Built for Everyone.</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '20px' }}>From local shops to global retail giants.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                        {[
                            { icon: <ShoppingCart size={24} />, title: "GT Retailers", desc: "Empowering General Trade shops with high-end tech usually reserved for massive chains." },
                            { icon: <TrendingUp size={24} />, title: "MT Retailers", desc: "Optimizing throughput for Modern Trade hubs with high-volume sku processing." },
                            { icon: <Target size={24} />, title: "Object Tracking", desc: "Versatile tracking capabilities for any item, regardless of packaging or barcode presence." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    padding: '32px',
                                    background: 'var(--bg-primary)',
                                    borderRadius: 'var(--radius-card)',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: 'var(--shadow-soft)'
                                }}
                            >
                                <div style={{ color: 'var(--yantrai-blue)', marginBottom: '16px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-primary)' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer / CTA */}
            <section style={{ padding: '120px 0', textAlign: 'center', background: 'var(--bg-primary)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                    <motion.h2 {...fadeIn} style={{ fontSize: '40px', fontWeight: 700, marginBottom: '24px', color: 'var(--text-primary)' }}>Ready to deploy AI POS?</motion.h2>
                    <motion.p {...fadeIn} transition={{ delay: 0.1 }} style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                        Join the retail revolution. Our team is ready to help you implement live Vision AI in your stores.
                    </motion.p>
                    <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                        <MagneticButton
                            onClick={() => window.open('/#contact', '_self')}
                            style={{
                                background: 'var(--yantrai-blue)',
                                color: 'white',
                                border: 'none',
                                padding: '16px 40px',
                                borderRadius: 'var(--radius-pill)',
                                fontSize: '18px',
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}
                        >
                            Contact Sales Team
                        </MagneticButton>
                    </motion.div>

                    <div style={{ marginTop: '60px' }}>
                        <button
                            onClick={() => window.open('/', '_self')}
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

export default CaseStudyPage;
