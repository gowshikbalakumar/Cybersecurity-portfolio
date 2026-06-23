'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
    lines: string[];
    typingSpeed?: number;
}

export const Terminal: React.FC<TerminalProps> = ({ lines, typingSpeed = 50 }) => {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentLineIndex < lines.length) {
            if (currentCharIndex < lines[currentLineIndex].length) {
                const timer = setTimeout(() => {
                    setCurrentCharIndex(currentCharIndex + 1);
                }, typingSpeed);
                return () => clearTimeout(timer);
            } else {
                const timer = setTimeout(() => {
                    setDisplayedLines((prev) => [...prev, lines[currentLineIndex]]);
                    setCurrentLineIndex(currentLineIndex + 1);
                    setCurrentCharIndex(0);
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [currentLineIndex, currentCharIndex, lines, typingSpeed]);

    useEffect(() => {
        // Typing animation handles character delays.
    }, [displayedLines, currentLineIndex, currentCharIndex]);

    return (
        <div className="w-full max-w-2xl font-mono text-sm sm:text-base border border-cyber-green/30 rounded-lg overflow-hidden bg-terminal-bg shadow-2xl">
            <div className="flex items-center px-4 py-2 bg-zinc-900 border-b border-cyber-green/20">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="ml-4 text-zinc-500 text-xs">gowshik@tuxors-lab: ~</span>
            </div>
            <div className="p-4 sm:p-6 min-h-[300px]">
                {displayedLines.map((line, i) => (
                    <div key={i} className="mb-1">
                        <span className="text-cyber-green mr-2">$</span>
                        <span className="text-zinc-100">{line}</span>
                    </div>
                ))}
                {currentLineIndex < lines.length && (
                    <div className="flex">
                        <span className="text-cyber-green mr-2">$</span>
                        <span className="text-zinc-100">
                            {lines[currentLineIndex].substring(0, currentCharIndex)}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2 h-4 bg-cyber-green ml-1 align-middle"
                            />
                        </span>
                    </div>
                )}
                <div ref={terminalEndRef} />
            </div>
        </div>
    );
};
