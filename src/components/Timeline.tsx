'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
    year: string;
    title: string;
    description?: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="relative border-l border-cyber-green/30 ml-4 py-8">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-10 ml-6 relative"
                >
                    <span className="absolute -left-[31px] top-1.5 w-4 h-4 bg-background border-2 border-cyber-green rounded-full shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
                    <time className="mb-1 text-sm font-mono font-bold leading-none text-cyber-green">
                        {item.year}
                    </time>
                    <h3 className="text-lg font-bold text-white mt-1">
                        {item.title}
                    </h3>
                    {item.description && (
                        <p className="text-base font-normal text-zinc-400 mt-1">
                            {item.description}
                        </p>
                    )}
                </motion.div>
            ))}
        </div>
    );
};
