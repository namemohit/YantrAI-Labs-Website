import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    strength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    onClick,
    className = "btn-primary",
    style,
    strength = 0.4 // Lower value = more subtle
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        x.set(distanceX * strength);
        y.set(distanceY * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={buttonRef}
            onClick={onClick}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                x: springX,
                y: springY,
                position: 'relative',
                display: 'inline-block',
                touchAction: 'none'
            }}
        >
            <motion.span
                style={{
                    display: 'block',
                    position: 'relative',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            >
                {children}
            </motion.span>
        </motion.button>
    );
};

export default MagneticButton;
