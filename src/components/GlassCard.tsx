'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverGlow?: 'green' | 'blue' | 'none';
    delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className,
    hoverGlow = 'green',
    delay = 0
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02 }}
            className={cn(
                'glass-card p-6 transition-all duration-300',
                hoverGlow === 'green' && 'hover:cyber-glow hover:border-cyber-green/50',
                hoverGlow === 'blue' && 'hover:cyber-glow-blue hover:border-accent-blue/50',
                className
            )}
        >
            {children}
        </motion.div>
    );
};
