import React from 'react';
import { useApp } from '../AppContext';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import LifeAtYantrAISection from '../components/LifeAtYantrAISection';
import BentoCard from '../components/BentoCard';
import ExpandableJobItem from '../components/ExpandableJobItem';
import AccessPass from '../components/AccessPass';
import Footer from '../components/Footer';
import StackLayer from '../components/StackLayer';
import AnimeLight from '../components/AnimeLight';
import CaseStudiesSlider from '../components/CaseStudiesSlider';

const LandingPage: React.FC = () => {
    const { data } = useApp();

    return (
        <div style={{ background: '#000', color: '#fff' }}>
            <AnimeLight />
            <div id="about"></div>
            <Navbar />

            {/* Hero Section - Reimagined for 3D/Black Theme */}
            <section style={{ 
                height: '90vh', 
                display: 'flex', 
                alignItems: 'center', 
                position: 'relative', 
                overflow: 'hidden', 
                padding: '0', 
                background: '#000' 
            }}>
                <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 style={{
                                fontSize: 'clamp(4rem, 10vw, 8rem)',
                                fontWeight: 800,
                                lineHeight: 0.9,
                                letterSpacing: '-0.06em',
                                marginBottom: '24px',
                                color: '#fff',
                                textShadow: '0 0 30px rgba(0, 113, 227, 0.2)'
                            }}>
                                Industrial AI.<br />
                                <span style={{ color: 'var(--yantrai-blue)' }}>Visionary Depth.</span>
                            </h1>
                            <p style={{
                                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.4,
                                marginBottom: '48px',
                                maxWidth: '600px',
                                margin: '0 auto 48px auto',
                                fontWeight: 400
                            }}>
                                We transform raw pixels into operational intelligence. <br />
                                Discover the Vision-App-BI stack.
                            </p>
                            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
                                <button
                                    onClick={() => document.getElementById('vision-layer')?.scrollIntoView({ behavior: 'smooth' })}
                                    style={{
                                        padding: '20px 48px',
                                        background: 'var(--yantrai-blue)',
                                        color: '#fff',
                                        borderRadius: 'var(--radius-pill)',
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        boxShadow: '0 10px 30px rgba(0, 113, 227, 0.3)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Explore the Stack
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Ambient Depth Elements */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120vw',
                    height: '100vh',
                    background: 'radial-gradient(circle at center, rgba(0, 113, 227, 0.08) 0%, transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 1
                }} />
            </section>

            {/* Content Stack - Vision, App, BI */}
            <div id="vision-layer">
                <StackLayer
                    index={0}
                    total={3}
                    subtitle="Vision Layer"
                    title="Intelligence-as-a-Service"
                    description="Our foundational neural networks process live industrial feeds in real-time. We count, inspect, and detect anomalies before they become problems."
                    videoSrc="/assets/Manufacturing_VAI.mp4"
                />
            </div>
            
            <div id="app-layer">
                <StackLayer
                    index={1}
                    total={3}
                    subtitle="App Layer"
                    title="Operational Power"
                    description="From Retail POS to Warehouse management, our apps turn Vision into Action. Real-time dashboards and automated workflows powered by YantrAI."
                    videoSrc="/assets/Retail_VAI.mp4"
                />
            </div>

            <div id="bi-layer">
                <StackLayer
                    index={2}
                    total={3}
                    subtitle="Intelligence Layer"
                    title="Business BI"
                    description="Long-term forecasting, security audits, and predictive analytics. Take the pulse of your entire organization with AI-driven insights."
                    videoSrc="/assets/Security_VAI.mp4"
                />
            </div>

            {/* Delivered Solutions - Grid */}
            <section id="products" style={{ background: '#050505', padding: '120px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>Products & Services.</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>Industrial-grade AI ecosystems tailored for scale.</p>
                    </div>

                    <CaseStudiesSlider />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
                        <BentoCard delay={0.1} style={{ gridColumn: 'span 6', padding: '40px', minHeight: '300px' }}>
                            <div style={{ zIndex: 10, position: 'relative' }}>
                                <div style={{ color: 'var(--yantrai-blue)', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>SUPPLY CHAIN</div>
                                <h3 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>One Godown</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>AI-driven warehouse and inventory management platform.</p>
                            </div>
                        </BentoCard>

                        <BentoCard delay={0.2} style={{ gridColumn: 'span 6', padding: '40px', minHeight: '300px' }}>
                            <div style={{ zIndex: 10, position: 'relative' }}>
                                <div style={{ color: 'var(--yantrai-blue)', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>RETAIL</div>
                                <h3 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Kiran AI POS</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>Intelligent Point of Sale system with built-in analytics.</p>
                            </div>
                        </BentoCard>

                        <BentoCard delay={0.3} style={{ gridColumn: 'span 12', padding: '60px', minHeight: '400px', background: 'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 100%)' }}>
                             <div style={{ zIndex: 10, position: 'relative', maxWidth: '600px' }}>
                                <div style={{ color: 'var(--yantrai-blue)', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>ENTERPRISE</div>
                                <h3 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '24px', color: '#fff', lineHeight: 1.1 }}>Solvr. Apps delivered in 10 mins.</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '20px', lineHeight: 1.6, marginBottom: '24px' }}>Generate production-ready React Native and Next.js applications instantly using your design specs.</p>
                            </div>
                        </BentoCard>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <a 
                            href="https://rohitwa.github.io/Yantrai_case_studies/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                                color: 'var(--yantrai-blue)', 
                                fontSize: '20px', 
                                fontWeight: 600, 
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(0, 113, 227, 0.3)',
                                padding: '16px 32px',
                                borderRadius: 'var(--radius-pill)',
                                background: 'rgba(0, 113, 227, 0.05)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 113, 227, 0.1)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 113, 227, 0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Explore all Case Studies and Products →
                        </a>
                    </div>

                    <style>{`
                        @media (max-width: 900px) {
                            div[style*="grid-template-columns"] {
                                grid-template-columns: 1fr !important;
                                grid-template-rows: auto !important;
                            }
                            div[style*="grid-column: span"] {
                                grid-column: span 1 !important;
                            }
                        }
                    `}</style>
                </div>
            </section>

            {/* Pedigree Founders Section */}
            <section id="team" style={{ background: '#0a0a0a', padding: '120px 0' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ marginBottom: '80px', textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            marginBottom: '20px',
                            color: '#fff',
                            letterSpacing: '-0.04em',
                            lineHeight: 1.1
                        }}>
                            The Team powering YantrAI.
                        </h2>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '1.25rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: 1.6
                        }}>
                            Our founders and engineers bring decades of experience from the world's leading venture firms and technology institutions.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '32px'
                    }}>
                        {[
                            {
                                name: 'Mohit Sharma',
                                role: 'CO-FOUNDER',
                                image: '/img_mohit.jpeg',
                                accent: '#3B82F6',
                                intro: "Founded Oye! Rickshaw (India’s largest last-mile network) & Jangid Motors (India’s first indigenous e-rickshaw). Managed a $200Mn annual business at Hero MotoCorp.",
                                academic: "IIT Delhi (Batch of 2012).",
                                quote: "Execution is everything. We're bridging the gap between raw AI potential and enterprise-grade reality."
                            },
                            {
                                name: 'Rohit Singh',
                                role: 'CO-FOUNDER',
                                image: '/img_rohit.jpeg',
                                accent: '#6366F1',
                                intro: "Co-founded EasyLokal (Techstars '18, acquired by WayCool). Led Zomato's Odisha launch & scaled it to 1.5M transactions per month. Managed a $150M+ business at Hero Group.",
                                academic: "B.Tech, NIT Rourkela '12.",
                                quote: "We're not just selling software; we're architecting the future of industrial intelligence."
                            },
                            {
                                name: 'Rakesh Swain',
                                role: 'CO-FOUNDER',
                                image: '/img_rakesh.jpeg',
                                accent: '#EC4899',
                                intro: "Built patented AI products for EY, AI Monk, & Dvara E-diary. Scaled multiple startups from incubation to Pre-Series A ($2M).",
                                academic: "B.Tech, NIT Rourkela '13.",
                                quote: "Performance and scalability are our core tenets. We build for the extreme."
                            },
                        ].map((founder, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover="hover"
                                style={{
                                    position: 'relative',
                                    borderRadius: '32px',
                                    overflow: 'hidden',
                                    aspectRatio: '3/4',
                                    backgroundColor: '#111',
                                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                                    cursor: 'pointer'
                                }}
                            >
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%) brightness(80%) contrast(110%)',
                                        transition: 'all 0.5s ease'
                                    }}
                                />

                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '50%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '32px',
                                    pointerEvents: 'none'
                                }}>
                                    <h3 style={{
                                        fontSize: '24px',
                                        fontWeight: 700,
                                        color: '#ffffff',
                                        marginBottom: '4px',
                                        letterSpacing: '-0.02em'
                                    }}>
                                        {founder.name}
                                    </h3>
                                    <p style={{
                                        color: founder.accent,
                                        fontSize: '12px',
                                        fontWeight: 800,
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        {founder.role}
                                    </p>
                                </div>

                                <motion.div
                                    variants={{
                                        hover: { y: 0, opacity: 1 }
                                    }}
                                    initial={{ y: '100%', opacity: 0 }}
                                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(5, 5, 5, 0.98)',
                                        padding: '40px 32px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        color: '#fff',
                                        zIndex: 2
                                    }}
                                >
                                    <div style={{ marginBottom: '24px' }}>
                                        <p style={{ color: founder.accent, fontSize: '10px', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '8px' }}>QUICK INTRO</p>
                                        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>{founder.name}</h3>
                                        <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#e5e7eb' }}>{founder.intro}</p>
                                    </div>
                                    <div style={{ marginBottom: '24px' }}>
                                        <p style={{ color: '#9ca3af', fontSize: '10px', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '8px' }}>ACADEMIC</p>
                                        <p style={{ fontSize: '14px', fontWeight: 700 }}>{founder.academic}</p>
                                    </div>
                                    <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
                                        <p style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: 1.6, color: '#9ca3af', marginBottom: '24px' }}>
                                            "{founder.quote}"
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Section */}
            <section id="career" style={{ background: '#000', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ marginBottom: '60px', maxWidth: '600px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Join the team.</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>Help us build the next generation of industrial intelligence.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {[
                            { title: 'AI Engineer', type: 'Engineering', location: 'Remote / Gurugram', description: 'Architect large-scale neural networks for industrial vision processing.' },
                            { title: 'Sales Director', type: 'Sales', location: 'Gurugram', description: 'Drive enterprise partnerships and lead our global b2b expansion.' },
                            { title: 'Growth Marketer', type: 'Marketing', location: 'Remote', description: 'Execute data-driven campaigns to capture international manufacturing markets.' },
                        ].map((job, index) => (
                            <ExpandableJobItem
                                key={index}
                                index={index}
                                title={job.title}
                                type={job.type}
                                location={job.location}
                                description={job.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ background: '#000', padding: '120px 0', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0, 113, 227, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
                        <div style={{ textAlign: 'left' }}>
                            <h2 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff', lineHeight: 1.05 }}>Ready to scale?</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', maxWidth: '500px', marginBottom: '32px' }}>Our dedicated team is ready to architect your custom industrial ecosystem.</p>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-secondary)', maxWidth: '400px', fontSize: '1.1rem', lineHeight: 1.5 }}>
                                <MapPin size={24} style={{ color: 'var(--yantrai-blue)', flexShrink: 0, marginTop: '4px' }} />
                                <span>3rd Floor Tower A, SAS tower, Unit 309, near Medanta hospital, Medicity, Sector 38, Gurugram, Haryana 122001</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <AccessPass
                                name={data.contactPerson || "Rohit Singh"}
                                role="Sales Director"
                                phone={data.contactPhone}
                                email="hello@yantrailabs.com"
                                image="/img_rohit.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <LifeAtYantrAISection />
            <Footer />
        </div>
    );
};

export default LandingPage;
