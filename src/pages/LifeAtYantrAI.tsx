import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Zap, Shield, ZoomIn, ZoomOut, X } from 'lucide-react';

const milestones = [
    {
        year: "2026",
        title: "Scaling Impact",
        desc: "Mohit Sharma (IIT-D '12) receiving the BW Businessworld Award from Sh. Nitin Gadkari.",
        image: "/award-ceremony.jpg"
    },
    {
        year: "2025",
        title: "Strategic Vision",
        desc: "Deep discussions on the future of Indian AI with Hon'ble VP Sh. Venkaiah Naidu.",
        image: "/meeting-vp.jpg"
    },
    {
        year: "2024",
        title: "Global Collaboration",
        desc: "Technical leadership team with Hon'ble Minister Sh. Nitin Gadkari.",
        image: "/group-gadkari.jpg"
    }
];

const lifeImages = [
    "/life-1.jpg",
    "/life-2.jpg",
    "/life-3.png",
    "/life-4.png",
    "/life-5.jpg",
    "/team_at_work.jpg",
    "/team_full_crew.jpg",
    "/office_hq_combined.jpg"
];

const values = [
    {
        icon: <Heart color="#ff2d55" size={32} />,
        title: "Mission First",
        desc: "We are obsessed with delivering impactful solutions that solve real-world problems."
    },
    {
        icon: <Zap color="#ffcc00" size={32} />,
        title: "Quicker Execution",
        desc: "Speed is our DNA. We ship high-performance intelligence at unprecedented scales."
    },
    {
        icon: <Shield color="#00ff41" size={32} />,
        title: "Absolute Trust",
        desc: "Building sovereign technology means maintaining the highest standards of integrity."
    }
];

const LifeAtYantrAI: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [activeGallery, setActiveGallery] = useState<"milestones" | "life">("milestones");

    const openLightbox = (index: number, gallery: "milestones" | "life") => {
        setActiveGallery(gallery);
        setCurrentIndex(index);
        setZoomLevel(1);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setZoomLevel(1);
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const maxIndex = activeGallery === "milestones" ? milestones.length : lifeImages.length;
        setCurrentIndex((prev) => (prev + 1) % maxIndex);
        setZoomLevel(1);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const maxIndex = activeGallery === "milestones" ? milestones.length : lifeImages.length;
        setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex);
        setZoomLevel(1);
    };

    const toggleZoom = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoomLevel((prev) => (prev === 1 ? 2 : 1));
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxOpen) {
                if (e.key === "Escape") closeLightbox();
                if (e.key === "ArrowRight") nextImage();
                if (e.key === "ArrowLeft") prevImage();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen, activeGallery, nextImage, prevImage, closeLightbox]);

    const getCurrentImage = () => {
        return activeGallery === "milestones" ? milestones[currentIndex].image : lifeImages[currentIndex];
    };

    return (
        <div style={{ background: "#ffffff", color: "#1d1d1f", minHeight: "100vh", overflowX: "hidden" }}>
            <Navbar theme="light" />

            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 9999,
                            background: "rgba(0,0,0,0.95)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backdropFilter: "blur(10px)"
                        }}
                        onClick={closeLightbox}
                    >
                        <div style={{ position: "absolute", top: "20px", right: "20px", display: "flex", gap: "10px", zIndex: 10001 }}>
                            <button
                                onClick={toggleZoom}
                                style={{
                                    background: "rgba(255,255,255,0.1)", border: "none", color: "white", padding: "10px", borderRadius: "50%", cursor: "pointer"
                                }}
                            >
                                {zoomLevel === 1 ? <ZoomIn /> : <ZoomOut />}
                            </button>
                            <button
                                onClick={closeLightbox}
                                style={{
                                    background: "rgba(255,255,255,0.1)", border: "none", color: "white", padding: "10px", borderRadius: "50%", cursor: "pointer"
                                }}
                            >
                                <X />
                            </button>
                        </div>
                        <button
                            onClick={prevImage}
                            style={{ position: "absolute", left: "20px", background: "transparent", border: "none", color: "white", cursor: "pointer", zIndex: 10001, padding: "20px" }}
                        >
                            <ChevronLeft size={40} />
                        </button>
                        <button
                            onClick={nextImage}
                            style={{ position: "absolute", right: "20px", background: "transparent", border: "none", color: "white", cursor: "pointer", zIndex: 10001, padding: "20px" }}
                        >
                            <ChevronRight size={40} />
                        </button>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: zoomLevel }}
                            transition={{ duration: 0.2 }}
                            style={{
                                maxWidth: "90vw",
                                maxHeight: "90vh",
                                cursor: zoomLevel === 1 ? "zoom-in" : "zoom-out",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            onClick={toggleZoom}
                        >
                            <img
                                src={getCurrentImage()}
                                alt="Full screen view"
                                style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", borderRadius: "4px", boxShadow: "0 0 50px rgba(0,0,0,0.5)" }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section style={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "#f5f5f7" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 30%, rgba(0, 113, 227, 0.05) 0%, transparent 60%)", zIndex: 0 }}></div>
                <div className="container" style={{ textAlign: "center", zIndex: 1, padding: "0 24px" }}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ fontSize: "clamp(4rem, 8vw, 7rem)", fontWeight: 700, letterSpacing: "-0.04em", margin: 0, lineHeight: 0.9, color: "#1d1d1f" }}
                    >
                        Life at <br />
                        <span style={{ color: "#0071e3" }}>YantrAI.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ fontSize: "1.5rem", color: "#424245", marginTop: "2rem", maxWidth: "600px", margin: "2rem auto" }}
                    >
                        Where engineering excellence meets visionary impact. Our journey is driven by people, purpose, and pioneering technology.
                    </motion.p>
                </div>
            </section>

            {/* Impact Moments Section */}
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ marginBottom: "80px", textAlign: "center" }}>
                        <h2 style={{ fontSize: "48px", fontWeight: 700, marginBottom: "1rem", color: "#1d1d1f" }}>Impact Moments</h2>
                        <p style={{ color: "#86868b", fontSize: "20px" }}>Beyond code. Making a difference at the highest levels.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px" }}>
                        {milestones.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                onClick={() => openLightbox(i, "milestones")}
                                style={{
                                    gridColumn: i === 0 ? "span 12" : "span 6",
                                    position: "relative",
                                    borderRadius: "32px",
                                    overflow: "hidden",
                                    height: i === 0 ? "600px" : "450px",
                                    border: "1px solid rgba(0,0,0,0.05)",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    cursor: "pointer"
                                }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px", background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)", color: "white" }}>
                                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#0071e3", letterSpacing: "0.1em" }}>{item.year}</span>
                                    <h3 style={{ fontSize: "28px", fontWeight: 700, marginTop: "8px", color: "#ffffff" }}>{item.title}</h3>
                                    <p style={{ color: "#d2d2d7", fontSize: "18px", maxWidth: "500px", margin: 0, marginTop: "8px" }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Life in Action Section */}
            <section style={{ padding: "0 0 100px 0" }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ marginBottom: "60px", textAlign: "center" }}>
                        <h2 style={{ fontSize: "40px", fontWeight: 700, marginBottom: "1rem", color: "#1d1d1f" }}>Life in Action</h2>
                        <p style={{ color: "#86868b", fontSize: "18px" }}>Capturing the energy, collaboration, and spirit of our team.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "24px", gridAutoRows: "300px" }}>
                        {lifeImages.map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => openLightbox(i, "life")}
                                style={{
                                    gridColumn: i === 0 || i === 5 ? "span 8" : "span 4",
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    cursor: "pointer"
                                }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img src={src} alt="Team Moment" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section style={{ padding: "100px 0", background: "#f5f5f7" }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "40px"
                    }}>
                        {values.map((v, i) => (
                            <div key={i} style={{ padding: "40px", borderRadius: "24px", background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                                <div style={{ marginBottom: "24px" }}>{v.icon}</div>
                                <h3 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px", color: "#1d1d1f" }}>{v.title}</h3>
                                <p style={{ color: "#424245", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LifeAtYantrAI;
