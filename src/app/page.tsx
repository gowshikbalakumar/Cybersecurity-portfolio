'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  ExternalLink,
  Terminal as TerminalIcon,
  ShieldCheck,
  Crosshair,
  Cpu,
  Search,
  Lock,
  Layers,
  Award,
  BookOpen,
  Code2,
  Users,
  Globe,
  Activity,
  Briefcase,
  Quote
} from 'lucide-react';
import { MatrixBackground } from '@/components/MatrixBackground';
import { Terminal } from '@/components/Terminal';
import { GlassCard } from '@/components/GlassCard';
import { Timeline } from '@/components/Timeline';

const terminalLines = [
  "whoami",
  "Gowshik Balakumar",
  "echo $PURPOSE",
  "Red Team Enthusiast | Ethical Hacker | Security Researcher",
  "cat about_me.txt",
  "Hands-on cybersecurity enthusiast focused on offensive security with knowledge of defensive security concepts.",
  "ls skills/",
  "Burp_Suite Nmap Metasploit Web_Security Linux Enumeration Wireshark SOC_Fundamentals"
];

const timelineData = [
  { year: "2023-2027", title: "B.Tech in Information Technology", description: "Pursuing undergraduate degree, building a strong foundation in computer science and networking." },
  { year: "2025", title: "Focusing on Cybersecurity", description: "Cultivated a deep interest in information security, developing it as a core technical skill and dedicated hobby." },
  { year: "2026", title: "Active CTF Competitor", description: "Regularly participating in Capture The Flag competitions, including picoCTF, OverTheWire, and PortSwigger." },
  { year: "2026", title: "Architected Tuxors Lab", description: "Engineered a custom personal lab environment for hands-on penetration testing and network enumeration." }
];

const skills = [
  { category: "Offensive Security", items: ["Burp Suite", "Nmap", "Metasploit (Basic)", "Enumeration", "Web Security", "Privilege Escalation", "Linux"] },
  { category: "Defensive Security", items: ["Wireshark", "Traffic Analysis", "Monitoring", "Incident Response Fundamentals", "Network Security"] },
  { category: "Programming", items: ["Python", "Bash"] },
  { category: "Networking", items: ["TCP/IP", "DNS", "OSI Model", "HTTP/HTTPS"] }
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-card rounded-none border-t-0 border-x-0">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="text-cyber-green w-6 h-6" />
          <span className="font-mono font-bold tracking-tighter text-xl">Gowshik Balakumar</span>
        </div>
        <div className="hidden md:flex space-x-8 font-mono text-sm">
          <a href="#about" className="hover:text-cyber-green transition-colors">./about</a>
          <a href="#skills" className="hover:text-cyber-green transition-colors">./skills</a>
          <a href="#projects" className="hover:text-cyber-green transition-colors">./projects</a>
          <a href="#timeline" className="hover:text-cyber-green transition-colors">./timeline</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/gowshikbalakumar" target="_blank" rel="noreferrer"><Code2 className="w-5 h-5 hover:text-cyber-green" /></a>
          <a href="https://www.linkedin.com/in/gowshik-balakumar-49a82028b/" target="_blank" rel="noreferrer"><Users className="w-5 h-5 hover:text-cyber-green" /></a>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32 pt-10">
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-cyber-green font-mono text-lg mb-2">/root/greeting</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                Gowshik <span className="text-cyber-green">Balakumar</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
                Hands-on <span className="text-white font-semibold">cybersecurity enthusiast</span> focused on offensive security with knowledge of defensive security concepts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#projects" className="px-8 py-3 bg-cyber-green text-black font-bold rounded-md hover:bg-white transition-all cyber-glow">
                View Projects
              </a>
              <button className="px-8 py-3 border border-zinc-700 rounded-md hover:border-cyber-green transition-all">
                Download Resume
              </button>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Terminal lines={terminalLines} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32 scroll-mt-24">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
              <Search className="mr-3 text-cyber-green" /> About Me
            </h2>
            <div className="w-20 h-1 bg-cyber-green/50 rounded-full" />
          </div>

          <GlassCard className="max-w-4xl mx-auto border-l-4 border-l-cyber-green">
            <p className="text-lg text-zinc-300 leading-relaxed indent-8">
              I am an <span className="text-cyber-green font-mono">Information Technology</span> student and cybersecurity enthusiast with a strong interest in offensive security and ethical hacking.
              My primary focus is Red Team operations including enumeration, web application security, vulnerability assessment, and Linux systems.
              I also understand Blue Team concepts such as log analysis, monitoring, incident response, and network defense.
              I continuously improve through practical labs, CTF competitions, and self-driven research.
            </p>
          </GlassCard>
        </section>

        {/* Specialization Section */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard hoverGlow="green" className="border-t-4 border-t-cyber-green">
              <div className="flex items-center mb-6">
                <Crosshair className="w-8 h-8 text-cyber-green mr-4" />
                <h3 className="text-2xl font-bold font-mono">Red Team</h3>
              </div>
              <ul className="grid grid-cols-2 gap-3 text-zinc-400 font-mono text-sm">
                <li className="flex items-center"><span className="text-cyber-green mr-2">➜</span> Web Security</li>
                <li className="flex items-center"><span className="text-cyber-green mr-2">➜</span> Enumeration</li>
                <li className="flex items-center"><span className="text-cyber-green mr-2">➜</span> Vulnerability Assessment</li>
                <li className="flex items-center"><span className="text-cyber-green mr-2">➜</span> Linux Exploitation</li>
                <li className="flex items-center"><span className="text-cyber-green mr-2">➜</span> Privilege Escalation</li>
                <li className="flex items-center"><span className="text-cyber-green mr-2">➜</span> Burp Suite</li>
                <li className="flex items-center"><span className="text-cyber-green mr-2">➜</span> Nmap</li>
                <li className="flex items-center"><span className="text-cyber-green mr-2">➜</span> Metasploit</li>
              </ul>
            </GlassCard>

            <GlassCard hoverGlow="blue" className="border-t-4 border-t-accent-blue">
              <div className="flex items-center mb-6">
                <ShieldCheck className="w-8 h-8 text-accent-blue mr-4" />
                <h3 className="text-2xl font-bold font-mono">Blue Team Knowledge</h3>
              </div>
              <ul className="grid grid-cols-2 gap-3 text-zinc-400 font-mono text-sm">
                <li className="flex items-center"><span className="text-accent-blue mr-2">➜</span> Network Analysis</li>
                <li className="flex items-center"><span className="text-accent-blue mr-2">➜</span> Wireshark</li>
                <li className="flex items-center"><span className="text-accent-blue mr-2">➜</span> Traffic Inspection</li>
                <li className="flex items-center"><span className="text-accent-blue mr-2">➜</span> Incident Response</li>
                <li className="flex items-center"><span className="text-accent-blue mr-2">➜</span> Log Analysis</li>
                <li className="flex items-center"><span className="text-accent-blue mr-2">➜</span> SOC Concepts</li>
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="mb-32">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Globe className="mr-3 text-cyber-green" /> Platforms
            </h2>
            <p className="text-zinc-500 font-mono">Actively learning on specialized platforms</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["OffSec Labs", "picoCTF", "PortSwigger", "TryHackMe", "Hack The Box", "OverTheWire"].map((platform) => (
              <div key={platform} className="px-6 py-3 glass-card text-cyber-green font-mono text-sm hover:cyber-glow transition-all">
                {platform}
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activities */}
        <section className="mb-32">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Activity className="mr-3 text-cyber-green" /> Recent Activities
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard>
              <h4 className="text-xl font-bold mb-4 text-white">AntiSlop CTF</h4>
              <p className="text-zinc-400 text-sm mb-4">Participated and solved challenges in Web, Recon, Crypto and Linux.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-cyber-green/10 text-cyber-green px-2 py-1 rounded">CTF</span>
                <span className="text-[10px] bg-accent-blue/10 text-accent-blue px-2 py-1 rounded">Offensive</span>
              </div>
            </GlassCard>
            <GlassCard>
              <h4 className="text-xl font-bold mb-4 text-white">OffSec Labs</h4>
              <p className="text-zinc-400 text-sm mb-4">Hands-on practice in penetration testing exercises and real-world labs.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-cyber-green/10 text-cyber-green px-2 py-1 rounded">LABS</span>
                <span className="text-[10px] bg-accent-blue/10 text-accent-blue px-2 py-1 rounded">Hands-on</span>
              </div>
            </GlassCard>
            <GlassCard>
              <h4 className="text-xl font-bold mb-4 text-white">picoCTF</h4>
              <p className="text-zinc-400 text-sm mb-4">Regularly solving Reverse Engineering, Forensics, and Binary Exploitation.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-cyber-green/10 text-cyber-green px-2 py-1 rounded">CTF</span>
                <span className="text-[10px] bg-accent-blue/10 text-accent-blue px-2 py-1 rounded">Competitive</span>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-32">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Award className="mr-3 text-cyber-green" /> Certifications
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "TCM Linux 100",
              "TCM Help Desk",
              "Zscaler Internship",
              "Palo Alto Internship"
            ].map((cert, i) => (
              <motion.div
                key={cert}
                whileHover={{ y: -10 }}
                className="p-6 glass-card text-center flex flex-col items-center border-b-2 border-b-cyber-green"
              >
                <Award className="w-8 h-8 text-cyber-green mb-4" />
                <p className="font-mono text-xs text-white">{cert}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
              <Briefcase className="mr-3 text-cyber-green" /> Featured Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <GlassCard className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">WatchMan — Network Traffic Analyzer</h3>
              <p className="text-cyber-green font-mono text-sm mb-4">Network Packet Analysis Dashboard</p>
              <p className="text-zinc-400 mb-6 flex-grow">
                A production-ready, real-time network packet analysis dashboard with multi-rule threat detection, built for cybersecurity labs and final-year presentations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "Networking", "Traffic Analysis", "Threat Detection"].map(t => (
                  <span key={t} className="text-[10px] border border-zinc-700 px-2 py-1 rounded text-zinc-500">{t}</span>
                ))}
              </div>
              <a href="https://github.com/gowshikbalakumar/WatchMan---Network-Traffic-Analyzer" target="_blank" rel="noreferrer" className="inline-flex items-center text-cyber-green hover:text-white transition-colors">
                View Source <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </GlassCard>

            <GlassCard className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">Tuxors Lab</h3>
              <p className="text-cyber-green font-mono text-sm mb-4">Personal Cyber Lab</p>
              <p className="text-zinc-400 mb-6 flex-grow">
                Personal cybersecurity lab environment built for learning offensive security, network enumeration, and practical penetration testing.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Virtualization", "Networking", "Kali", "Wireshark"].map(t => (
                  <span key={t} className="text-[10px] border border-zinc-700 px-2 py-1 rounded text-zinc-500">{t}</span>
                ))}
              </div>
              <a href="#projects" className="inline-flex items-center text-cyber-green hover:text-white transition-colors">
                Case Study <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </GlassCard>

            <GlassCard className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">Ultron Access System CTF</h3>
              <p className="text-cyber-green font-mono text-sm mb-4">Vulnerable Web App</p>
              <p className="text-zinc-400 mb-6 flex-grow">
                A vulnerable authentication-based Capture The Flag (CTF) project designed for practicing real-world web exploitation techniques (JWT, NoSQL injection) in a safe environment.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Node.js", "Express", "MongoDB", "Web Exploitation"].map(t => (
                  <span key={t} className="text-[10px] border border-zinc-700 px-2 py-1 rounded text-zinc-500">{t}</span>
                ))}
              </div>
              <a href="https://github.com/gowshikbalakumar/Ultron-Access-System----CTF" target="_blank" rel="noreferrer" className="inline-flex items-center text-cyber-green hover:text-white transition-colors">
                View Source <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </GlassCard>

            <GlassCard className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">NerdsLab Student Portal</h3>
              <p className="text-cyber-green font-mono text-sm mb-4">Management Dashboard</p>
              <p className="text-zinc-400 mb-6 flex-grow">
                A modern student portal and dashboard application built with Next.js, serving as a comprehensive management interface for student data, attendance, and administration.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "React", "TypeScript", "Tailwind CSS"].map(t => (
                  <span key={t} className="text-[10px] border border-zinc-700 px-2 py-1 rounded text-zinc-500">{t}</span>
                ))}
              </div>
              <a href="https://github.com/gowshikbalakumar/NerdsLab_student_portal" target="_blank" rel="noreferrer" className="inline-flex items-center text-cyber-green hover:text-white transition-colors">
                View Source <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </GlassCard>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32 scroll-mt-24">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Cpu className="mr-3 text-cyber-green" /> Skills Matrix
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h4 className="text-cyber-green font-mono text-sm border-b border-cyber-green/20 pb-2">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-zinc-900/50 text-xs text-zinc-400 rounded-md border border-zinc-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="mb-32 scroll-mt-24">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Layers className="mr-3 text-cyber-green" /> Journey Timeline
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Timeline items={timelineData} />
          </div>
        </section>

        {/* Quote Section */}
        <section className="mb-32 text-center">
          <GlassCard className="max-w-2xl mx-auto py-12 relative overflow-hidden">
            <Quote className="absolute -top-4 -left-4 w-24 h-24 text-cyber-green/5 -rotate-12" />
            <p className="text-3xl font-bold italic text-white mb-4">
              "Think Like an Attacker, Defend Like a Guardian."
            </p>
            <div className="w-12 h-1 bg-cyber-green mx-auto rounded-full" />
          </GlassCard>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 px-6 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="text-cyber-green w-8 h-8" />
            <span className="font-mono font-bold tracking-tighter text-2xl text-white">Gowshik Balakumar</span>
          </div>
          <div className="text-zinc-500 font-mono text-sm text-center">
            &copy; 2026 Gowshik Balakumar. All rights reserved. Built with Next.js & Tailwind.
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/gowshikbalakumar" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-cyber-green"><Code2 className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/gowshik-balakumar-49a82028b/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-cyber-green"><Users className="w-6 h-6" /></a>
            <a href="mailto:gowshikbalakumar2006@gmail.com" className="text-zinc-400 hover:text-cyber-green"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
