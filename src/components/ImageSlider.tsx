import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TechOverlay = () => (
    <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none', opacity: 0.4 }}>
        <svg width="100%" height="100%" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
            {/* Technical grid/lines to add complexity */}
            <path d="M0,100 L1000,100 M0,400 L1000,400" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <path d="M200,0 L200,500 M800,0 L800,500" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

            {/* Data points/nodes */}
            {[...Array(10)].map((_, i) => (
                <motion.circle
                    key={i}
                    cx={100 + i * 80}
                    cy={100 + (Math.sin(i) * 50)}
                    r="1.5"
                    fill="rgba(0, 113, 227, 0.4)"
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 2 + i % 3, repeat: Infinity }}
                />
            ))}

            {/* Corner brackets */}
            <path d="M20,20 L60,20 M20,20 L20,60" stroke="rgba(255,255,255,0.2)" fill="none" />
            <path d="M980,20 L940,20 M980,20 L980,60" stroke="rgba(255,255,255,0.2)" fill="none" />
            <path d="M20,480 L60,480 M20,480 L20,440" stroke="rgba(255,255,255,0.2)" fill="none" />
            <path d="M980,480 L940,480 M980,480 L980,440" stroke="rgba(255,255,255,0.2)" fill="none" />
        </svg>
    </div>
);

const ImageSlider: React.FC = () => {
    // Styling slides with CSS gradients and icons to represent business concepts clearly
    const slides = [
        {
            id: 1,
            title: "Industrial Intelligence",
            description: "Custom-built POS ecosystems with integrated neural processing units.",
            image: "/industrial-ops.png",
            accent: "#0071e3"
        },
        {
            id: 2,
            title: "Advanced Vision Analytics",
            description: "Real-time edge computing for behavioral insights and operational efficiency.",
            image: "/vision-analytics.png",
            accent: "#00b2ff"
        },
        {
            id: 3,
            title: "Global Supply Ecosystem",
            description: "Seamlessly connect your entire supply chain with Yantra's cloud-native hardware.",
            image: "/warehouse-vision.png",
            accent: "#ffffff"
        },
        {
            id: 4,
            title: "Neural Engine Core",
            description: "Sovereign AI hardware that processes data where it happens.",
            image: "/neural-hardware.png",
            accent: "#5e5ce6"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden', margin: '2rem 0' }}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                >
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <motion.div
                            initial={{ scale: 1.15 }}
                            animate={{ scale: 1.25 }}
                            transition={{
                                duration: 10,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                filter: 'brightness(0.8) contrast(1.1)'
                            }}
                        >
                            <img
                                src={slides[currentIndex].image}
                                alt={slides[currentIndex].title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                                    maskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
                                }}
                            />
                        </motion.div>

                        <TechOverlay />

                        {/* Film Grain / Noise Overlay to mask low resolution */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: 0.25,
                            pointerEvents: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            zIndex: 4
                        }} />

                        {/* Enhanced Gradient Overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)',
                            zIndex: 3
                        }} />

                        <div style={{
                            position: 'absolute',
                            bottom: '12%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '90%',
                            maxWidth: '700px',
                            zIndex: 5
                        }}>
                            {/* Glassmorphism Text Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                style={{
                                    background: 'rgba(29, 29, 31, 0.4)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    padding: '40px',
                                    borderRadius: '32px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    textAlign: 'center',
                                    color: 'white',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                                }}
                            >
                                <h2 style={{
                                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                    letterSpacing: '-0.02em',
                                    lineHeight: 1.1,
                                    textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                    color: '#ffffff'
                                }}>
                                    {slides[currentIndex].title}
                                </h2>
                                <p style={{
                                    fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                                    opacity: 0.9,
                                    maxWidth: '500px',
                                    margin: '0 auto',
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    color: '#d2d2d7'
                                }}>
                                    {slides[currentIndex].description}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {/* Premium Controls */}
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    left: '40px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '56px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
            >
                <ChevronLeft size={24} color="#fff" />
            </button>
            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    right: '40px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '56px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
            >
                <ChevronRight size={24} color="#fff" />
            </button>

            {/* Dots */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '10px',
                zIndex: 10
            }}>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                            cursor: 'pointer',
                            transition: 'background 0.3s'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
