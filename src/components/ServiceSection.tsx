"use client";

import { ScrollRevealImage } from './ui/ScrollRevealImage';
import { Service } from '@/lib/types';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ServiceSectionProps {
    service: Service;
    index: number;
}

export function ServiceSection({ service, index }: ServiceSectionProps) {
    const isEven = index % 2 === 0;

    // Colors for the service cards reveal effect
    const overlayColors = [
        "#6b7280", // 1. Grau
        "#f97316", // 2. Orange
        "#298000ff", // 3. Oliv-Grün
        "#000000", // 4. Schwarz
        "#ba831cff", // 5. Braun
        "#0e3954ff", // 6. Blau
        "#d1d5db", // 7. Hellgrau
    ];

    const overlayColor = overlayColors[index % overlayColors.length];

    return (
        <section className="min-h-screen w-full flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
            <div className={cn(
                "flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12 md:gap-24",
                !isEven && "md:flex-row-reverse"
            )}>
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 space-y-8"
                >
                    <div className="space-y-4">
                        <span className="text-sm font-light tracking-[0.2em] text-gray-500 mb-4 block uppercase">
                            Service {service.id.toString().padStart(2, '0')}
                        </span>
                        <motion.h2
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter text-black"
                        >
                            {service.title}
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-1 w-24 bg-black origin-left"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg md:text-xl leading-relaxed text-gray-800"
                    >
                        {service.description}
                    </motion.p>

                    <Link
                        href={`/services/${service.id}`}
                        className="group flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-gray-900 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                        Mehr Erfahren
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>

                    <motion.ul
                        className="space-y-4 pt-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
                        }}
                    >
                        {service.details?.map((detail, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center gap-4 text-lg font-medium text-black"
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                whileHover={{ x: 10, color: "#333" }}
                            >
                                <span className="h-2 w-2 bg-black rounded-full" />
                                {detail}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Image Content */}
                <div className="flex-1 w-full h-[60vh] md:h-[80vh] relative">
                    <ScrollRevealImage
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        wrapperClassName="w-full h-full shadow-2xl"
                        overlayColor={overlayColor}
                    />
                </div>
            </div>
        </section>
    );
}
