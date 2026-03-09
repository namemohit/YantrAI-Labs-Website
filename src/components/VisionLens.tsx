import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VisionLensProps {
    children: React.ReactNode;
    overlayContent?: React.ReactNode;
    isActive?: boolean;
}

const VisionLens: React.FC<VisionLensProps> = ({ children, overlayContent, isActive = false }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}
        >
            {/* Base Content */}
            <div style={{ width: '100%', height: '100%', filter: isHovered && isActive ? 'blur(2px) grayscale(0.5)' : 'none', transition: 'filter 0.3s ease' }}>
                {children}
            </div>

            {/* The Lens */}
            <AnimatePresence>
                {isHovered && isActive && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                        style={{
                            position: 'absolute',
                            left: mousePos.x,
                            top: mousePos.y,
                            width: '250px',
                            height: '250px',
                            marginLeft: '-125px',
                            marginTop: '-125px',
                            borderRadius: '50%',
                            border: '2px solid rgba(0, 113, 227, 0.5)',
                            boxShadow: '0 0 40px rgba(0, 113, 227, 0.3), inset 0 0 20px rgba(255,255,255,0.1)',
                            overflow: 'hidden',
                            zIndex: 100,
                            pointerEvents: 'none',
                            background: 'rgba(0,0,0,0.1)',
                            backdropFilter: 'blur(0px)',
                        }}
                    >
                        {/* Magnified Content with Overlay */}
                        <div style={{
                            position: 'absolute',
                            left: -mousePos.x,
                            top: -mousePos.y,
                            width: containerRef.current?.offsetWidth,
                            height: containerRef.current?.offsetHeight,
                            transform: 'scale(1.2)',
                            transformOrigin: `${mousePos.x}px ${mousePos.y}px`,
                        }}>
                             {children}
                        </div>
                        
                        {/* Data Overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(0, 113, 227, 0.1) 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',
                            color: '#0071e3',
                            fontSize: '10px',
                            fontFamily: 'monospace',
                            textShadow: '0 0 5px rgba(0, 113, 227, 0.5)'
                        }}>
                            {overlayContent || (
                                <div style={{ textAlign: 'left', width: '100%' }}>
                                    <div>[SCANNING...]</div>
                                    <div>CONF: 0.9982</div>
                                    <div>OBJ_ID: Y-772</div>
                                    <div style={{ marginTop: '4px', height: '1px', background: '#0071e3', opacity: 0.3 }}></div>
                                    <div style={{ marginTop: '4px' }}>X: {mousePos.x.toFixed(0)}</div>
                                    <div>Y: {mousePos.y.toFixed(0)}</div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VisionLens;
