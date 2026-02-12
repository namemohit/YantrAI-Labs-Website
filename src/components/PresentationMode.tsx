import React, { useState } from 'react';
import { useApp } from '../AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Slide: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'var(--jira-blue)' }}>{title}</h1>
        <div style={{ fontSize: '1.5rem', maxWidth: '800px' }}>{children}</div>
    </div>
);

const PresentationMode: React.FC = () => {
    const { isPresenting, setIsPresenting, data } = useApp();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: `Welcome to ${data.companyName}`,
            content: (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', flex: '1', minWidth: '300px' }}>
                        <h3 style={{ color: 'var(--jira-blue)', fontSize: '2rem' }}>Modernizing B2B Commerce</h3>
                        <p style={{ marginTop: '1rem' }}>The only AI-powered POS solution that scales with your business.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Powerful Hardware",
            content: (
                <div style={{ textAlign: 'left' }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem' }}>✨ Industrial Grade Touch Screen</li>
                        <li style={{ marginBottom: '1rem' }}>✨ AI-Ready Processing Power</li>
                        <li style={{ marginBottom: '1rem' }}>✨ Wireless Connectivity & Built-in Printer</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Smart AI Software",
            content: (
                <div style={{ textAlign: 'left' }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem' }}>🚀 Real-time Inventory Intel</li>
                        <li style={{ marginBottom: '1rem' }}>📈 Automated Sales Predictive Analysis</li>
                        <li style={{ marginBottom: '1rem' }}>👥 Multi-terminal Cloud Sync</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Proven Impact",
            content: (
                <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '4rem', color: 'var(--jira-blue)' }}>{data.customerCount}</h2>
                        <p>Happy Customers</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '4rem', color: 'var(--jira-blue)' }}>{data.countryCount}</h2>
                        <p>Countries Reached</p>
                    </div>
                </div>
            )
        },
        {
            title: "Let's Get Started",
            content: (
                <div style={{ marginTop: '2rem' }}>
                    <p style={{ fontSize: '2rem', marginBottom: '2rem' }}>Ready to transform your business?</p>
                    <div style={{ background: 'var(--jira-blue)', color: 'white', padding: '2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <h3 style={{ color: 'white', margin: 0 }}>{data.contactPerson}</h3>
                        <h4 style={{ color: 'white', margin: 0, opacity: 0.8 }}>{data.contactPhone}</h4>
                        <p style={{ color: 'white', fontSize: '0.875rem', marginTop: '1rem', opacity: 0.7 }}>{data.address}</p>
                    </div>
                </div>
            )
        }
    ];

    const next = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    if (!isPresenting) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'var(--jira-subtle-bg)',
                zIndex: 2000,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', height: '80px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img
                    src="/favicon.png"
                    alt="Yantra AI Logo"
                    style={{
                        height: '220px',
                        margin: '-70px -30px'
                    }}
                />
            </div>
            Values in context:
            - size: large
            - visibility: high
            - style: backgroundless


            <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ height: '100%' }}
                    >
                        <Slide title={slides[currentSlide].title}>
                            {slides[currentSlide].content}
                        </Slide>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div style={{ position: 'absolute', bottom: '4rem', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
                <button onClick={prev} style={{ background: 'white', padding: '1rem', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <ChevronLeft size={24} />
                </button>
                <span style={{ fontWeight: 600 }}>{currentSlide + 1} / {slides.length}</span>
                <button onClick={next} style={{ background: 'white', padding: '1rem', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div style={{ position: 'absolute', bottom: '2rem', right: '2rem' }}>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Contact Sales <Play size={16} />
                </button>
            </div>

            <button
                onClick={() => setIsPresenting(false)}
                style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '2rem',
                    background: 'white',
                    padding: '1rem',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    zIndex: 200,
                    cursor: 'pointer'
                }}
            >
                <X size={24} />
            </button>
        </motion.div>
    );
};

export default PresentationMode;
