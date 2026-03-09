import React from 'react';
import { motion } from 'framer-motion';
import VisionLens from './VisionLens';

interface StackLayerProps {
    title: string;
    subtitle: string;
    videoSrc: string;
    description: string;
    index: number;
    total: number;
}

const StackLayer: React.FC<StackLayerProps> = ({ title, subtitle, videoSrc, description, index, total }) => {
    return (
        <section style={{ 
            height: '100vh', 
            width: '100vw', 
            position: 'relative', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: '#000',
            overflow: 'hidden'
        }}>
            {/* Background Video with Neural Scan masking */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.6 }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
                <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)' 
                }} />
            </div>

            {/* Content with Lens Interaction */}
            <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
                <VisionLens isActive={true}>
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        height: '100%',
                        padding: '0 40px',
                        textAlign: 'center'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <span style={{ 
                                color: 'var(--yantrai-blue)', 
                                fontWeight: 600, 
                                fontSize: '14px', 
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                marginBottom: '16px',
                                display: 'block'
                            }}>
                                {subtitle}
                            </span>
                            <h2 style={{ 
                                fontSize: 'clamp(3rem, 8vw, 6rem)', 
                                fontWeight: 800, 
                                color: '#fff', 
                                marginBottom: '24px',
                                letterSpacing: '-0.04em',
                                lineHeight: 1
                            }}>
                                {title}
                            </h2>
                            <p style={{ 
                                fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
                                color: 'rgba(255,255,255,0.7)', 
                                maxWidth: '700px',
                                margin: '0 auto',
                                fontWeight: 400
                            }}>
                                {description}
                            </p>

                            <div style={{ marginTop: '40px', pointerEvents: 'auto' }}>
                                <div style={{ 
                                    color: 'rgba(255,255,255,0.3)', 
                                    fontSize: '12px', 
                                    fontStyle: 'italic',
                                    marginTop: '20px'
                                }}>
                                    Hold to reveal intelligence layer
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </VisionLens>
            </div>

            {/* Layer Indicator */}
            <div style={{ 
                position: 'absolute', 
                right: '40px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                zIndex: 20
            }}>
                {Array.from({ length: total }).map((_, i) => (
                    <div key={i} style={{
                        width: '2px',
                        height: '40px',
                        background: i === index ? 'var(--yantrai-blue)' : 'rgba(255,255,255,0.1)',
                        transition: 'all 0.5s ease'
                    }} />
                ))}
            </div>
        </section>
    );
};

export default StackLayer;
