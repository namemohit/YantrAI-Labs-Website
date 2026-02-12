import React from 'react';
import { useApp } from '../AppContext';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Phone, Briefcase, Eye, BarChart3 } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';

const LandingPage: React.FC = () => {
    const { data } = useApp();

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <div id="about"></div>

            {/* Navigation */}
            <nav className="sticky-nav">
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%', overflow: 'hidden' }}>
                        <img
                            src="/yantra-logo.png"
                            alt="Yantra AI Logo"
                            style={{
                                height: '80px', // Increased from 50px
                                width: 'auto',
                                display: 'block'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <a href="#about" style={{ textDecoration: 'none', color: 'var(--jira-text)', fontWeight: 500, fontSize: '0.9rem' }}>About</a>
                        <a href="#products" style={{ textDecoration: 'none', color: 'var(--jira-text)', fontWeight: 500, fontSize: '0.9rem' }}>Products</a>
                        <a href="#career" style={{ textDecoration: 'none', color: 'var(--jira-text)', fontWeight: 500, fontSize: '0.9rem' }}>Career</a>
                        <a href="#contact" style={{ textDecoration: 'none', color: 'var(--jira-text)', fontWeight: 500, fontSize: '0.9rem' }}>Contact us</a>
                        <a href="/login" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.5rem 1.25rem' }}>Login</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section style={{ background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 100%)', padding: '8rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1
                        {...fadeIn}
                        style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--jira-text)', marginBottom: '1.5rem', lineHeight: 1.1 }}
                    >
                        Empower Your Business <br /> with <span style={{ color: 'var(--jira-blue)' }}>Yantra AI</span>
                    </motion.h1>
                    <motion.p
                        {...fadeIn}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{ fontSize: '1.25rem', color: 'var(--jira-text-subtle)', maxWidth: '700px', margin: '0 auto 3rem auto' }}
                    >
                        The next-generation hardware and software solution designed to streamline B2B operations and boost sales with integrated artificial intelligence.
                    </motion.p>
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}
                    >
                        <a href="#contact" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
                            Get Started
                        </a>
                        <a href="#products" className="btn-secondary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>View Products</a>
                    </motion.div>
                </div>
            </section>

            {/* Image Slider Section */}
            <ImageSlider />

            {/* What Yantra Does - Products Section */}
            <section id="products" style={{ background: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Building AI solutions that work!</h2>
                        <p style={{ color: 'var(--jira-text-subtle)' }}>Everything you need to run your business efficiently.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <motion.div {...fadeIn} style={{ background: 'var(--jira-subtle-bg)', padding: '2.5rem', borderRadius: '12px' }}>
                            <div style={{ background: 'var(--jira-blue)', color: 'white', width: '50px', height: '50px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Smartphone size={28} />
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>Industrial Hardware</h3>
                            <p style={{ color: 'var(--jira-text-subtle)' }}>Durable, high-performance POS hardware with integrated NFC, thermal printers, and HD touch displays.</p>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }} style={{ background: 'var(--jira-subtle-bg)', padding: '2.5rem', borderRadius: '12px' }}>
                            <div style={{ background: 'var(--jira-blue)', color: 'white', width: '50px', height: '50px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Monitor size={28} />
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>AI-Powered Software</h3>
                            <p style={{ color: 'var(--jira-text-subtle)' }}>Smart inventory management, predictive sales analytics, and automated multi-channel reconciliation.</p>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.3 }} style={{ background: 'var(--jira-subtle-bg)', padding: '2.5rem', borderRadius: '12px' }}>
                            <div style={{ background: 'var(--jira-blue)', color: 'white', width: '50px', height: '50px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Eye size={28} />
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>Vision AI</h3>
                            <p style={{ color: 'var(--jira-text-subtle)' }}>Advanced computer vision for retail analytics, customer tracking, and automated checkout systems.</p>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.4 }} style={{ background: 'var(--jira-subtle-bg)', padding: '2.5rem', borderRadius: '12px' }}>
                            <div style={{ background: 'var(--jira-blue)', color: 'white', width: '50px', height: '50px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <BarChart3 size={28} />
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>Business Intelligence</h3>
                            <p style={{ color: 'var(--jira-text-subtle)' }}>Real-time dashboards, actionable insights, and data-driven strategies to maximize ROI.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Career Section */}
            <section id="career" style={{ background: 'var(--jira-subtle-bg)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Join Our Team</h2>
                        <p style={{ color: 'var(--jira-text-subtle)' }}>Help us build the future of B2B commerce.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'AI Engineer', type: 'Engineering', location: 'Remote / Gurugram' },
                            { title: 'Sales Director', type: 'Sales', location: 'Gurugram' },
                            { title: 'Growth Marketer', type: 'Marketing', location: 'Remote' },
                        ].map((job, index) => (
                            <motion.div
                                key={index}
                                {...fadeIn}
                                transition={{ delay: index * 0.1 }}
                                style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--jira-blue)' }}>
                                    <Briefcase size={20} />
                                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{job.type}</span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem' }}>{job.title}</h3>
                                <p style={{ color: 'var(--jira-text-subtle)', fontSize: '0.9rem' }}>{job.location}</p>
                                <button className="btn-secondary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Apply Now</button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section style={{ background: 'var(--jira-blue)', color: 'white' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', flexWrap: 'wrap', gap: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '0.5rem' }}>{data.customerCount}</h2>
                        <p style={{ opacity: 0.8, fontWeight: 500, letterSpacing: '1px' }}>HAPPY CUSTOMERS</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '0.5rem' }}>{data.countryCount}</h2>
                        <p style={{ opacity: 0.8, fontWeight: 500, letterSpacing: '1px' }}>COUNTRIES REACHED</p>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" style={{ background: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <div style={{ background: 'var(--jira-subtle-bg)', padding: '1.5rem 2.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                                <Phone size={24} color="var(--jira-blue)" />
                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--jira-text-subtle)', fontWeight: 600 }}>{(data.contactPerson || "Rohit Singh").toUpperCase()}</div>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{data.contactPhone}</span>
                                </div>
                            </div>
                            <button className="btn-primary" style={{ padding: '1.5rem 3rem', fontSize: '1.25rem' }}>Contact Sales</button>
                        </div>
                        <div style={{ maxWidth: '600px', color: 'var(--jira-text-subtle)', fontSize: '1rem' }}>
                            <p><strong>{data.companyName}</strong></p>
                            <p>{data.address}</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--jira-border)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
                        <img
                            src="/yantra-logo.png"
                            alt="Yantra AI Logo"
                            style={{
                                height: '50px',
                                width: 'auto'
                            }}
                        />
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ color: 'var(--jira-text)', fontWeight: 600, marginBottom: '0.25rem' }}>{data.companyName}</p>
                        <p style={{ color: 'var(--jira-text-subtle)', fontSize: '0.75rem', maxWidth: '300px' }}>{data.address}</p>
                        <p style={{ color: 'var(--jira-text-subtle)', fontSize: '0.875rem', marginTop: '1rem' }}>© 2026 {data.companyName}. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default LandingPage;
