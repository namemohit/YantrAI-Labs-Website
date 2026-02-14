import { useApp } from '../AppContext';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Eye, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import BentoCard from '../components/BentoCard';
import MagneticButton from '../components/MagneticButton';
import ExpandableJobItem from '../components/ExpandableJobItem';
import AccessPass from '../components/AccessPass';
import ycsLogoOfficial from '../assets/ycs-logo-official.png';

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
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            {/* Hero Section */}
            <section style={{ background: '#000000', padding: '120px 0 60px 0', color: 'white', textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="container">
                    <motion.h1
                        {...fadeIn}
                        style={{
                            fontSize: 'clamp(3rem, 5vw, 5rem)',
                            fontWeight: 700,
                            marginBottom: '0.5rem',
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                            background: 'linear-gradient(180deg, #fff 0%, #aaa 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textWrap: 'balance',
                            paddingBottom: '0.1em'
                        }}
                    >
                        Intelligence. Integrated.
                    </motion.h1>
                    <motion.p
                        {...fadeIn}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{ fontSize: '1.5rem', color: '#86868b', maxWidth: '600px', margin: '1rem auto 3rem auto', fontWeight: 400 }}
                    >
                        We combine AI, ML, and intelligent hardware to solve real-world business problems.
                    </motion.p>
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
                    >
                        <MagneticButton onClick={() => window.location.href = '#contact'}>
                            Book a Demo
                        </MagneticButton>
                        <MagneticButton className="btn-secondary" onClick={() => window.location.href = '#products'}>
                            View Solutions <span style={{ fontSize: '12px', marginLeft: '4px' }}>›</span>
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>

            {/* Image Slider Section */}
            <ImageSlider />

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
                            {/* Dynamic Liquid Background */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    x: [0, 50, 0],
                                    y: [0, -30, 0],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    position: 'absolute',
                                    top: '-20%',
                                    left: '-10%',
                                    width: '140%',
                                    height: '140%',
                                    background: 'radial-gradient(circle at 70% 30%, rgba(0, 113, 227, 0.15) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(0, 113, 227, 0.1) 0%, transparent 50%)',
                                    zIndex: 0,
                                    filter: 'blur(80px)'
                                }}
                            />

                            {/* Content Side with Flex Layout for Centered Right Logo */}
                            <div style={{
                                zIndex: 10,
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '40px'
                            }}>
                                <div style={{ maxWidth: '550px' }}>
                                    <h3 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '20px', color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                                        Master the <br />
                                        <span style={{
                                            background: 'linear-gradient(90deg, #0071e3 0%, #ffffff 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            display: 'inline-block'
                                        }}>
                                            AI Frontier
                                        </span> with YCS.
                                    </h3>

                                    <p style={{ color: '#d2d2d7', fontSize: '20px', lineHeight: 1.5, marginBottom: '32px', fontWeight: 400 }}>
                                        Deep technical mastery for enterprises deploying high-impact intelligence across global infrastructure.
                                    </p>

                                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                        <MagneticButton
                                            style={{
                                                background: '#ffffff',
                                                color: '#000000',
                                                padding: '14px 32px',
                                                borderRadius: '999px',
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                boxShadow: '0 4px 14px 0 rgba(255,255,255,0.1)'
                                            }}
                                            onClick={() => window.open('/ycs', '_blank')}
                                        >
                                            Explore YCS Solutions
                                        </MagneticButton>
                                        <MagneticButton
                                            style={{
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                color: '#ffffff',
                                                padding: '14px 32px',
                                                borderRadius: '999px',
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                backdropFilter: 'blur(10px)'
                                            }}
                                            onClick={() => window.open('/case-study', '_blank')}
                                        >
                                            View Case Study
                                        </MagneticButton>
                                    </div>
                                </div>

                                {/* Official Logo Integrated into Flex Flow */}
                                <div style={{
                                    flexShrink: 0,
                                    marginRight: '20px'
                                }}>
                                    <img
                                        src={ycsLogoOfficial}
                                        alt="YCS Official Logo"
                                        style={{
                                            width: '280px',
                                            height: 'auto',
                                            display: 'block',
                                            filter: 'invert(1) hue-rotate(180deg) brightness(1.2)'
                                        }}
                                    />
                                </div>
                            </div>
                        </BentoCard>

                        {/* Large Item 1: Industrial Hardware - First Row */}
                        <BentoCard delay={0.1} style={{ gridColumn: 'span 7', padding: '40px' }}>
                            <div style={{ zIndex: 2, position: 'relative' }}>
                                <div style={{ color: '#86868b', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>HARDWARE</div>
                                <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '12px', letterSpacing: '-0.03em' }}>Industrial Grade POS</h3>
                                <p style={{ color: '#1d1d1f', fontSize: '17px', maxWidth: '350px' }}>NFC-enabled, thermal printing, and HD touch displays built for rigour.</p>
                            </div>
                            <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1 }}>
                                <Monitor size={300} color="#000" />
                            </div>
                        </BentoCard>

                        {/* Medium Item 2: AI Software - First Row */}
                        <BentoCard delay={0.2} lightMode={false} style={{ gridColumn: 'span 5', padding: '40px' }}>
                            <div style={{ zIndex: 2, position: 'relative' }}>
                                <div style={{ color: '#86868b', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>SOFTWARE</div>
                                <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '12px', color: '#ffffff', letterSpacing: '-0.03em' }}>Neural Engine</h3>
                                <p style={{ color: '#d2d2d7', fontSize: '17px' }}>Processing millions of data points locally for instant insights.</p>
                            </div>
                            <div style={{ position: 'absolute', right: '20px', bottom: '20px', opacity: 0.3 }}>
                                <Cpu size={120} color="#0071e3" />
                            </div>
                        </BentoCard>

                        {/* Medium Item 3: Vision AI - Second Row */}
                        <BentoCard delay={0.1} style={{ gridColumn: 'span 5', padding: '40px' }}>
                            <div style={{ zIndex: 2, position: 'relative' }}>
                                <div style={{ color: '#0071e3', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>VISION</div>
                                <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '12px', letterSpacing: '-0.03em' }}>Computer Vision</h3>
                                <p style={{ color: '#1d1d1f', fontSize: '17px' }}>Track customer behavior and optimize layout in real-time.</p>
                            </div>
                            <div style={{ position: 'absolute', right: '20px', bottom: '20px', opacity: 0.1 }}>
                                <Eye size={120} color="#0071e3" />
                            </div>
                        </BentoCard>

                        {/* Large Item 4: Business Intelligence - Second Row */}
                        <BentoCard delay={0.2} style={{ gridColumn: 'span 7', padding: '40px' }}>
                            <div style={{ zIndex: 2, position: 'relative' }}>
                                <div style={{ color: '#f56300', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>ANALYTICS</div>
                                <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '12px', letterSpacing: '-0.03em' }}>Deep Intelligence</h3>
                                <p style={{ color: '#1d1d1f', fontSize: '17px', maxWidth: '400px' }}>Custom dashboards that translate complex datasets into actionable growth strategies.</p>
                            </div>
                            <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', opacity: 0.1 }}>
                                <BarChart3 size={250} color="#f56300" />
                            </div>
                        </BentoCard>

                        {/* Full Width Item: Enterprise - Elevated with Neural Background and Sheen */}
                        <BentoCard
                            delay={0.3}
                            lightMode={false}
                            showNeuralNetwork={true}
                            showSheen={true}
                            style={{ gridColumn: 'span 12', padding: '60px 40px', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <div style={{ zIndex: 2, position: 'relative', maxWidth: '500px' }}>
                                <div style={{ color: '#0071e3', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>ENTERPRISE</div>
                                <h3 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '16px', color: '#ffffff', letterSpacing: '-0.03em' }}>Custom Solutions</h3>
                                <p style={{ color: '#d2d2d7', fontSize: '19px' }}>We build bespoke AI models tailored to your specific industry needs. From logistics to retail, we cover it all.</p>
                                <div style={{ marginTop: '24px' }}>
                                    <MagneticButton
                                        style={{ background: 'white', color: 'black' }}
                                        onClick={() => window.location.href = '/enterprise'}
                                    >
                                        Learn about Enterprise
                                    </MagneticButton>
                                </div>
                            </div>
                            {/* Static icon replaced by NeuralNetworkBackground in BentoCard */}
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

                            <div style={{ color: 'white', opacity: 0.6, fontSize: '14px' }}>
                                <p style={{ fontWeight: 600, marginBottom: '8px' }}>Yantra Labs Operating India HQ</p>
                                <p>{data.address}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <AccessPass
                                name={data.contactPerson || "Rohit Singh"}
                                role="Sales Director"
                                phone={data.contactPhone}
                                email="hello@yantrailabs.com"
                                image="/rohit-singh.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <footer style={{ background: '#f5f5f7', padding: '40px 0', borderTop: '1px solid #d2d2d7', fontSize: '12px', color: '#86868b' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                        <div>
                            <p>Copyright © 2026 {data.companyName}. All rights reserved.</p>
                            <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                                <a href="#" style={{ color: '#515154' }}>Privacy Policy</a>
                                <a href="#" style={{ color: '#515154' }}>Terms of Use</a>
                                <a href="#" style={{ color: '#515154' }}>Sales and Refunds</a>
                                <a href="#" style={{ color: '#515154' }}>Legal</a>
                                <a href="#" style={{ color: '#515154' }}>Site Map</a>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span>India</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default LandingPage;
