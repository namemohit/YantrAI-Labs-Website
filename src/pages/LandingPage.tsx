import { useApp } from '../AppContext';
import { motion } from 'framer-motion';
import { Monitor, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import BentoCard from '../components/BentoCard';
import MagneticButton from '../components/MagneticButton';
import ExpandableJobItem from '../components/ExpandableJobItem';
import AccessPass from '../components/AccessPass';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
    const { data } = useApp();



    return (
        <>
            <div id="about"></div>

            {/* Navigation */}
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section style={{ height: '85vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '100px 0', background: 'linear-gradient(90deg, #dcf8fa 0%, #e2e0ff 50%, #ffeaf7 100%)' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px' }}>

                        {/* Left Content */}
                        <div style={{ flex: 1 }}>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{
                                    fontSize: '80px',
                                    fontWeight: 700,
                                    lineHeight: 1.05,
                                    letterSpacing: '-0.03em',
                                    marginBottom: '30px',
                                    color: '#0a1a3a'
                                }}
                            >
                                Turn images into AI to get useful insights with no code
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '40px' }}
                            >
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    style={{
                                        padding: '16px 32px',
                                        background: '#0a1a3a',
                                        color: '#ffffff',
                                        borderRadius: '30px',
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        boxShadow: '0 10px 20px -5px rgba(10, 26, 58, 0.3)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 15px 25px -5px rgba(10, 26, 58, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'none';
                                        e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(10, 26, 58, 0.3)';
                                    }}
                                >
                                    Get in touch
                                </button>
                            </motion.div>
                        </div>

                        {/* Right Content - Video */}
                        <div style={{ flex: 1.2, position: 'relative' }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                style={{
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 40px 100px -20px rgba(0,0,0,0.3)',
                                    position: 'relative',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    background: '#000'
                                }}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        aspectRatio: '16/10',
                                        objectFit: 'cover'
                                    }}
                                >
                                    <source src="/assets/ultralytics_hero.mp4" type="video/mp4" />
                                </video>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Subtle Grid Pattern Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.05,
                    pointerEvents: 'none',
                    backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)',
                    backgroundSize: '24px 24px'
                }} />
            </section>

            {/* What Yantra Does - Products Section */}
            {/* What Yantra Does - Products Section (Bento Grid) */}
            <section id="products" style={{ background: '#f5f5f7', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.025em', textWrap: 'balance' }}>AI. ML. Intelligent Hardware.</h2>
                        <p style={{ color: '#86868b', fontSize: '1.25rem' }}>Building foundation of modern business.</p>
                    </div>


                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'auto', gap: '24px' }}>

                        {/* Top Item: YCS Consultancy Services */}
                        <BentoCard
                            delay={0.1}
                            lightMode={false}
                            style={{
                                gridColumn: 'span 12',
                                padding: '60px',
                                marginBottom: '24px',
                                display: 'block',
                                background: '#000000',
                                minHeight: '450px',
                                overflow: 'hidden',
                                position: 'relative',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <div style={{ zIndex: 10, position: 'relative', maxWidth: '550px' }}>
                                <div style={{ color: '#0071e3', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>ENTERPRISE</div>
                                <h3 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '20px', color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                                    Solvr.<br />
                                    Android, iOS and Webapps.<br />
                                    Delivered in 10 mins.
                                </h3>
                                <p style={{ color: '#d2d2d7', fontSize: '20px', lineHeight: 1.5, marginBottom: '32px', fontWeight: 400 }}>
                                    Stop writing boilerplate code. Use Solvr to generate production-ready React Native and Next.js applications instantly.
                                </p>
                                <MagneticButton
                                    style={{
                                        background: '#ffffff',
                                        color: '#000000',
                                        padding: '14px 32px',
                                        borderRadius: '999px',
                                        fontSize: '16px',
                                        fontWeight: 600
                                    }}
                                    onClick={() => window.open('/solvr', '_blank')}
                                >
                                    Explore Solvr
                                </MagneticButton>
                            </div>
                        </BentoCard>

                        {/* Medium Item 1: Kiran AI POS */}
                        <BentoCard delay={0.1} style={{ gridColumn: 'span 6', padding: '40px' }}>
                            <div style={{ zIndex: 2, position: 'relative' }}>
                                <div style={{ color: '#86868b', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>RETAIL</div>
                                <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '12px', letterSpacing: '-0.03em' }}>Kiran AI POS</h3>
                                <p style={{ color: '#1d1d1f', fontSize: '17px', maxWidth: '350px' }}>Intelligent Point of Sale system with built-in analytics and inventory forecasting.</p>
                            </div>
                            <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1 }}>
                                <Monitor size={200} color="#000" />
                            </div>
                        </BentoCard>

                        {/* Medium Item 2: One Godown */}
                        <BentoCard delay={0.2} lightMode={false} style={{ gridColumn: 'span 6', padding: '40px' }}>
                            <div style={{ zIndex: 2, position: 'relative' }}>
                                <div style={{ color: '#0071e3', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>SUPPLY CHAIN</div>
                                <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '12px', color: '#ffffff', letterSpacing: '-0.03em' }}>One Godown</h3>
                                <p style={{ color: '#d2d2d7', fontSize: '17px' }}>AI-driven warehouse and inventory management platform.</p>
                            </div>
                            <div style={{ position: 'absolute', right: '20px', bottom: '20px', opacity: 0.3 }}>
                                <BarChart3 size={150} color="#0071e3" />
                            </div>
                        </BentoCard>

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
            <section id="team" style={{ background: '#F9FAFB', padding: '120px 0' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ marginBottom: '80px', textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            marginBottom: '20px',
                            color: '#111827',
                            letterSpacing: '-0.04em',
                            lineHeight: 1.1
                        }}>
                            The Pedigree behind YantrAI.
                        </h2>
                        <p style={{
                            color: '#4B5563',
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
                                    backgroundColor: '#E5E7EB',
                                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Grayscale Image */}
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%) brightness(90%) contrast(110%)',
                                        transition: 'all 0.5s ease'
                                    }}
                                />

                                {/* Static Info (Bottom) */}
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

                                {/* Hover Overlay (Slider) */}
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
                                        background: 'rgba(10, 10, 10, 0.95)',
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
                                        <button style={{
                                            padding: '10px 24px',
                                            backgroundColor: '#0070f3',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '50px',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        }}>
                                            View LinkedIn
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Section - Minimalist List & Expand */}
            <section id="career" style={{ background: '#ffffff', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ marginBottom: '60px', maxWidth: '600px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-0.025em', textWrap: 'balance' }}>Join the team.</h2>
                        <p style={{ color: '#86868b', fontSize: '1.25rem' }}>Help us build the next generation of industrial intelligence.</p>
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



            {/* Contact Section - Integrated Sales Pass */}
            <section id="contact" style={{ background: '#000000', padding: '120px 0', overflow: 'hidden', position: 'relative' }}>
                {/* Background ambient light */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0, 113, 227, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
                        <div style={{ textAlign: 'left' }}>
                            <h2 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.025em', textWrap: 'balance', color: 'white', lineHeight: 1.05 }}>Ready to scale?</h2>
                            <p style={{ color: '#86868b', fontSize: '1.5rem', maxWidth: '500px', marginBottom: '40px' }}>Our dedicated team is ready to architect your custom industrial ecosystem.</p>
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

            <Footer />
        </>
    );
};

export default LandingPage;
