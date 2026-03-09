import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
    {
        title: "Industrial Vision",
        description: "AI systems that detect, analyze, and act in real time for industrial safety and operations.",
        sector: "Manufacturing",
        icon: "🏭",
        color: "linear-gradient(135deg, #0071e3 0%, #00b2ff 100%)"
    },
    {
        title: "Multimodal AI",
        description: "Kiran AI intelligence processing Image, Video, Audio, and Data for complex decision making.",
        sector: "Intelligence",
        icon: "🧠",
        color: "linear-gradient(135deg, #5e5ce6 0%, #bf5af2 100%)"
    },
    {
        title: "Smarter Factories",
        description: "Safety compliance, quality inspection, and hazard detection deployed on edge platforms.",
        sector: "Manufacturing",
        icon: "🛡️",
        color: "linear-gradient(135deg, #30d158 0%, #28cd41 100%)"
    },
    {
        title: "Retail Intelligence",
        description: "Loss prevention, customer analytics, and queue intelligence for modern retail aisles.",
        sector: "Retail",
        icon: "🛒",
        color: "linear-gradient(135deg, #ff9f0a 0%, #ffb340 100%)"
    },
    {
        title: "Smarter Surveillance",
        description: "24/7 proactive security command center with perimeter intelligence and intrusion alerts.",
        sector: "Security",
        icon: "👁️",
        color: "linear-gradient(135deg, #ff3b30 0%, #ff453a 100%)"
    },
    {
        title: "Specialized Sectors",
        description: "Healthcare (NABH-ready), Residential Societies, and Shopping Malls Vision AI use cases.",
        sector: "Multi-Sector",
        icon: "🏥",
        color: "linear-gradient(135deg, #64d2ff 0%, #5ac8fa 100%)"
    },
    {
        title: "Unified AI Layer",
        description: "Biogas AI Platform integrating video feeds, sensor streams, and operational logs.",
        sector: "Automation",
        icon: "🔋",
        color: "linear-gradient(135deg, #4cd964 0%, #34c759 100%)"
    },
    {
        title: "One Godown",
        description: "The 'Kiran' AI Store Manager with 99%+ accuracy in multi-SKU detection for retail.",
        sector: "Retail Ops",
        icon: "📦",
        color: "linear-gradient(135deg, #0071e3 0%, #5e5ce6 100%)"
    }
];

const CaseStudiesSlider: React.FC = () => {
    return (
        <div style={{ 
            width: '100%', 
            overflowX: 'auto', 
            padding: '40px 0 60px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        }} className="no-scrollbar">
            <motion.div 
                style={{ 
                    display: 'flex', 
                    gap: '24px', 
                    paddingLeft: 'max(24px, calc((100vw - 1200px) / 2 + 24px))',
                    paddingRight: '24px'
                }}
            >
                {caseStudies.map((study, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        style={{
                            flex: '0 0 320px',
                            height: '420px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(15px)',
                            borderRadius: '32px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer'
                        }}
                        onClick={() => window.open('https://rohitwa.github.io/Yantrai_case_studies/', '_blank')}
                    >
                        {/* Background Accent */}
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '150px',
                            height: '150px',
                            background: study.color,
                            filter: 'blur(60px)',
                            opacity: 0.2,
                            borderRadius: '50%'
                        }} />

                        <div style={{ fontSize: '48px', marginBottom: '24px' }}>{study.icon}</div>
                        
                        <div style={{ 
                            fontSize: '12px', 
                            fontWeight: 700, 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.1em',
                            color: 'var(--yantrai-blue)',
                            marginBottom: '12px'
                        }}>
                            {study.sector}
                        </div>

                        <h3 style={{ 
                            fontSize: '24px', 
                            fontWeight: 700, 
                            marginBottom: '16px',
                            color: '#fff',
                            lineHeight: 1.2
                        }}>
                            {study.title}
                        </h3>

                        <p style={{ 
                            fontSize: '16px', 
                            color: 'rgba(255,255,255,0.6)', 
                            lineHeight: 1.6,
                            flexGrow: 1
                        }}>
                            {study.description}
                        </p>

                        <div style={{ 
                            marginTop: '24px',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            Learn more <span style={{ fontSize: '18px' }}>→</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default CaseStudiesSlider;
