"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#e0e0e0]">
            <motion.div
                className="absolute -inset-[50%] opacity-50 blur-[80px]"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(200,200,200,0.5) 50%, rgba(180,180,180,0.2) 100%)",
                }}
                animate={{
                    transform: [
                        "translate(0, 0) scale(1)",
                        "translate(10%, 10%) scale(1.1)",
                        "translate(-5%, 5%) scale(0.9)",
                        "translate(0, 0) scale(1)",
                    ],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-0 left-0 w-full h-full opacity-40 mix-blend-overlay"
                style={{
                    background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
                }}
            />
        </div>
    );
}
