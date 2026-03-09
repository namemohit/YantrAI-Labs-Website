import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const AnimeLight: React.FC = () => {
    const { scrollYProgress } = useScroll();
    
    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform progress (0 to 1) to screen height (0vh to 100vh)
    const y = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 5, // Above standard background, below content
            overflow: 'hidden'
        }}>
            {/* Aurora Path - Vertical light beam */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: '50%',
                    width: '300px',
                    background: 'radial-gradient(circle at center, rgba(0, 113, 227, 0.03) 0%, transparent 70%)',
                    transform: 'translateX(-50%)',
                    zIndex: -1
                }}
            />
            
            <motion.div
                style={{
                    position: 'absolute',
                    top: y,
                    left: '50%',
                    width: '1px',
                    height: '100vh',
                    background: 'linear-gradient(to bottom, transparent, var(--yantrai-blue), transparent)',
                    opacity: 0.2,
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(10px)',
                    zIndex: -1
                }}
            />

            <motion.div
                style={{
                    position: 'absolute',
                    top: y,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, var(--yantrai-blue), #fff, var(--yantrai-blue), transparent)',
                    boxShadow: '0 0 40px 10px rgba(0, 113, 227, 0.4), 0 0 100px 20px rgba(0, 113, 227, 0.2)',
                    opacity: 0.6,
                    transform: 'translateY(-50%)'
                }}
            />
            
            {/* Ambient Vertical Glow attached to the beam */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: y,
                    left: 0,
                    right: 0,
                    height: '400px',
                    background: 'radial-gradient(ellipse at center, rgba(0, 113, 227, 0.05) 0%, transparent 70%)',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    mixBlendMode: 'screen'
                }}
            />

            {/* Micro-sparkles/Data bits that appear near the beam */}
            {[10, 30, 50, 70, 90].map((left, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        top: y,
                        left: `${left}%`,
                        width: i % 2 === 0 ? '4px' : '2px',
                        height: i % 2 === 0 ? '4px' : '2px',
                        background: '#fff',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px #fff',
                        transform: 'translateY(-50%)',
                        zIndex: -1
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.2, 0.5]
                    }}
                    transition={{
                        duration: 3,
                        delay: i * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

export default AnimeLight;
