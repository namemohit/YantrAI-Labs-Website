import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import posHardwareImg from '../assets/pos-hardware.jpg';
import visionAiImg from '../assets/vision-ai.jpg';

const ImageSlider: React.FC = () => {
    // Styling slides with CSS gradients and icons to represent business concepts clearly
    const slides = [
        {
            id: 1,
            content: (
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <img src={posHardwareImg} alt="Next-Gen POS Hardware" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        padding: '3rem 2rem',
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Next-Gen POS Hardware</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                            Sleek, durable terminals designed for high-volume retail environments.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            content: (
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <img src={visionAiImg} alt="Vision AI Analytics" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        padding: '3rem 2rem',
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Vision AI Analytics</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                            Advanced computer vision to track customer behavior and optimize store layout.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            content: (
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <img src={posHardwareImg} alt="Business Intelligence" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.3) brightness(0.7)' }} />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        padding: '3rem 2rem',
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Business Intelligence</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                            Real-time data dashboards that turn insights into actionable growth strategies.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            content: (
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <img src={visionAiImg} alt="Global Connectivity" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'hue-rotate(180deg) brightness(0.8)' }} />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        padding: '3rem 2rem',
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Global Connectivity</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                            Scale your business across borders with our integrated cloud platform.
                        </p>
                    </div>
                </div>
            )
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
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                >
                    {slides[currentIndex].content}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    left: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.5)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10
                }}
            >
                <ChevronLeft size={24} color="#1e3a8a" />
            </button>
            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.5)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10
                }}
            >
                <ChevronRight size={24} color="#1e3a8a" />
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
