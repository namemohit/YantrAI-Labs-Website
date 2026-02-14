import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface BentoCardProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    delay?: number;
    lightMode?: boolean;
    showNeuralNetwork?: boolean;
    showSheen?: boolean;
    onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const NeuralNetworkBackground = () => (
    <div style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: 1, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <motion.g filter="url(#glow)">
                {[...Array(6)].map((_, i) => (
                    <React.Fragment key={i}>
                        <motion.circle
                            cx={`${20 + i * 15}%`}
                            cy={`${30 + (i % 3) * 20}%`}
                            r="2"
                            fill="#0071e3"
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        {i < 5 && (
                            <motion.line
                                x1={`${20 + i * 15}%`}
                                y1={`${30 + (i % 3) * 20}%`}
                                x2={`${20 + (i + 1) * 15}%`}
                                y2={`${30 + ((i + 1) % 3) * 20}%`}
                                stroke="#0071e3"
                                strokeWidth="0.5"
                                animate={{
                                    opacity: [0.1, 0.4, 0.1],
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </motion.g>
        </svg>
    </div>
);

const BentoCard: React.FC<BentoCardProps> = ({
    children,
    style,
    className,
    delay = 0,
    lightMode = true,
    showNeuralNetwork = false,
    showSheen = false,
    onMouseMove,
    onMouseLeave
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the spotlight
    const spotlightX = useSpring(mouseX, { damping: 20, stiffness: 150 });
    const spotlightY = useSpring(mouseY, { damping: 20, stiffness: 150 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
        if (onMouseMove) onMouseMove(e);
    };

    const handleMouseLeaveInner = (e: React.MouseEvent<HTMLDivElement>) => {
        if (onMouseLeave) onMouseLeave(e);
    };

    const baseBackground = lightMode
        ? 'rgba(255, 255, 255, 0.7)'
        : 'rgba(0, 0, 0, 0.95)'; // Significant contrast restoration as requested

    const borderColor = lightMode
        ? 'rgba(255, 255, 255, 0.4)'
        : 'rgba(255, 255, 255, 0.1)';

    const spotlightColor = lightMode
        ? 'rgba(0, 113, 227, 0.15)'
        : 'rgba(255, 255, 255, 0.12)';

    // Using Framer Motion hooks to drive the radial gradient background
    const background = useTransform(
        [spotlightX, spotlightY],
        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`
    );

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeaveInner}
            style={{
                ...style,
                position: 'relative',
                background: style?.background || baseBackground,
                backdropFilter: style?.backdropFilter || 'blur(20px)',
                WebkitBackdropFilter: style?.backdropFilter || 'blur(20px)',
                borderRadius: style?.borderRadius || '24px',
                border: style?.border || `1px solid ${borderColor}`,
                overflow: 'hidden',
                boxShadow: style?.boxShadow || (lightMode
                    ? '0 8px 32px -4px rgba(0, 0, 0, 0.08)'
                    : '0 20px 40px rgba(0, 0, 0, 0.6)'),
            }}
            className={className}
        >
            {showNeuralNetwork && <NeuralNetworkBackground />}

            {showSheen && (
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: -1,
                        borderRadius: '24px',
                        padding: '2px',
                        background: 'conic-gradient(from 0deg, transparent 0%, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%, transparent 100%)',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        WebkitMaskComposite: 'xor',
                        zIndex: 3,
                        pointerEvents: 'none'
                    }}
                    animate={{
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            )}

            {/* Spotlight Gradient */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background,
                    zIndex: 2,
                    pointerEvents: 'none',
                }}
            />

            <div style={{ position: 'relative', zIndex: 4 }}>
                {children}
            </div>
        </motion.div>
    );
};

export default BentoCard;
