import React from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck, Mail, Phone, MessageCircle } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface AccessPassProps {
    name: string;
    role: string;
    phone: string;
    email: string;
    image?: string;
}

const AccessPass: React.FC<AccessPassProps> = ({ name, role, phone, email, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                width: '100%',
                maxWidth: '450px',
                margin: '0 auto',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(40px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '40px',
                position: 'relative',
                overflow: 'hidden',
                color: '#ffffff',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,255,255,0.05)',
                textAlign: 'left'
            }}
        >
            {/* High-tech background pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle at top right, rgba(0, 113, 227, 0.25), transparent)',
                zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
                    <div style={{
                        width: '90px',
                        height: '90px',
                        borderRadius: '20px',
                        background: 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.2)',
                        overflow: 'hidden',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                    }}>
                        {image ? (
                            <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <User size={40} color="rgba(255,255,255,0.6)" />
                        )}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00b2ff', fontSize: '10px', fontWeight: 800, letterSpacing: '2px', marginBottom: '4px' }}>
                            <ShieldCheck size={12} /> VERIFIED
                        </div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>ID: YNT-2026-X42</div>
                    </div>
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <div style={{ fontSize: '12px', color: '#d2d2d7', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>{role}</div>
                    <h3 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '2px', letterSpacing: '-0.02em', color: '#ffffff' }}>{name}</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <MagneticButton
                            className="btn-primary"
                            style={{ flex: 1, height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '12px', fontWeight: 600 }}
                            onClick={() => window.location.href = `tel:${phone}`}
                        >
                            <Phone size={18} /> Call
                        </MagneticButton>
                        <MagneticButton
                            className="btn-primary"
                            style={{ flex: 1, height: '48px', background: '#25D366', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '12px', fontWeight: 600 }}
                            onClick={() => window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank')}
                        >
                            <MessageCircle size={18} /> WhatsApp
                        </MagneticButton>
                    </div>
                    <MagneticButton
                        className="btn-secondary"
                        style={{ height: '48px', background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '12px', fontWeight: 500 }}
                        onClick={() => window.location.href = `mailto:${email}`}
                    >
                        <Mail size={18} /> {email}
                    </MagneticButton>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>CORE ACCESS: LEVEL 4</div>
                    <div style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
                </div>
            </div>

            {/* Micro-grid overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.4,
                pointerEvents: 'none'
            }} />
        </motion.div>
    );
};

export default AccessPass;
