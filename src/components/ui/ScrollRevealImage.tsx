"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealImageProps extends ImageProps {
    wrapperClassName?: string;
    overlayColor?: string;
}

export function ScrollRevealImage({ wrapperClassName, className, overlayColor, ...props }: ScrollRevealImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Reveal effect: Image scales down to 1, and black overlay slides up
    const scale = useTransform(smoothProgress, [0, 1], [1.1, 1]);
    // Black curtain slides up to reveal image
    const curtainY = useTransform(smoothProgress, [0, 1], ["0%", "-100%"]);

    return (
        <div ref={containerRef} className={cn("relative overflow-hidden bg-black", wrapperClassName)}>
            <motion.div
                style={{ scale }}
                className="w-full h-full relative"
            >
                <Image
                    {...props}
                    className={cn("object-cover transition-transform duration-700", className)}
                />
                {/* Black curtain overlay */}
                <motion.div
                    style={{ y: curtainY, backgroundColor: overlayColor || "black" }} // dynamic color
                    className="absolute inset-0 z-10"
                />
            </motion.div>
        </div>
    );
}
