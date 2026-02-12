import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Megaphone, Target, ChevronRight, MapPin } from 'lucide-react';

interface ExpandableJobItemProps {
    title: string;
    type: string;
    location: string;
    description: string;
    index: number;
}

const ExpandableJobItem: React.FC<ExpandableJobItemProps> = ({ title, type, location, description, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case 'engineering': return <Code size={18} />;
            case 'marketing': return <Megaphone size={18} />;
            default: return <Target size={18} />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{
                borderBottom: '1px solid #e5e5e5',
                overflow: 'hidden'
            }}
        >
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                    padding: '24px 0',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    justifyContent: 'space-between'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0071e3' }}>
                        {getIcon(type)}
                    </div>
                    <div>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '2px' }}>{title}</h3>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#86868b', fontSize: '14px' }}>
                            <span style={{ fontWeight: 600 }}>{type}</span>
                            <span>•</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <MapPin size={14} /> {location}
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronRight size={20} color="#86868b" />
                </motion.div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div style={{ paddingBottom: '24px', paddingLeft: '64px', color: '#515154', fontSize: '16px', lineHeight: 1.6, maxWidth: '600px' }}>
                            <p>{description}</p>
                            <span style={{ color: '#0071e3', fontSize: '14px', marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600, cursor: 'pointer' }}>
                                Apply for this role <ChevronRight size={14} />
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ExpandableJobItem;
