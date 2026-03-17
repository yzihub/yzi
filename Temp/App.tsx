/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Database, 
  Workflow, 
  Radar, 
  ChevronRight,
  TrendingUp,
  BrainCircuit,
  Zap,
  Mail,
  Play,
  Sparkles
} from 'lucide-react';
import SiloVideo from './components/SiloVideo';

const NodeCard = ({ title, subtitle, icon, color, bg }: { title: string, subtitle: string, icon: React.ReactNode, color: string, bg: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-xl h-full w-full hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 cursor-pointer group">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg} ${color} group-hover:scale-105 transition-transform`}>
      {icon}
    </div>
    <div>
      <div className="text-sm font-medium text-white tracking-tight">{title}</div>
      <div className="text-xs text-zinc-400">{subtitle}</div>
    </div>
  </div>
);

// Framer-style spring transition
const spring = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

// Framer-style ease transition
const ease = [0.16, 1, 0.3, 1];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D17] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      {/* Framer Ambient Glow */}
      <div className="bg-hero-glow"></div>

      {/* Floating Pill Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className="fixed top-6 inset-x-0 mx-auto w-[calc(100%-3rem)] max-w-4xl z-50 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full px-4 py-2.5 flex items-center justify-between shadow-2xl"
      >
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 pl-2">
            <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-[#0B0D17] rounded-sm" />
            </div>
            <span className="font-semibold tracking-tight text-sm">YZIHUB</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Product</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Resources</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors">Log in</a>
          <button className="bg-white text-[#0B0D17] px-4 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200">
            Sign Up
          </button>
        </div>
      </motion.nav>

      {/* Hero Section - Framer Style (Centered, Massive Typography) */}
      <main className="pt-48 pb-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300 mb-8 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Sparkles size={14} className="text-[#8A2BE2]" />
            <span>Introducing the AI Operating System</span>
            <ChevronRight size={14} className="text-zinc-500" />
          </motion.div>

          {/* Massive Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.05]"
          >
            Design your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-[#8A2BE2] to-[#00B0FF]">
              revenue engine.
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Connect your data, orchestrate AI agents, and automate your entire go-to-market motion on a single, visual canvas.
          </motion.p>
          
          {/* Pill Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <button className="w-full sm:w-auto bg-white text-[#0B0D17] px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2">
              Start for free
            </button>
            <button className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2">
              Book a demo
            </button>
          </motion.div>

          {/* Framer-style Glass Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="relative mx-auto w-full max-w-5xl"
          >
            <div className="framer-glass rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex flex-col relative">
              
              {/* Fake App Header */}
              <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="flex items-center gap-2 bg-[#0B0D17]/50 px-3 py-1 rounded-full border border-white/5">
                  <Workflow size={12} className="text-zinc-400" />
                  <span className="text-xs font-medium text-zinc-300">Revenue Optimization Flow</span>
                </div>
                <div className="w-16"></div> {/* Spacer for balance */}
              </div>

              {/* Canvas Area */}
              <div className="flex-1 relative bg-canvas-grid">
                
                {/* Top Controls */}
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <button className="bg-white/10 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 hover:bg-white/20 transition-colors border border-white/5">
                    <Play size={12} fill="currentColor" />
                    Run
                  </button>
                </div>

                {/* SVG Flow Canvas */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 800 300" className="w-full h-full max-w-4xl" preserveAspectRatio="xMidYMid meet">
                    {/* Base Lines */}
                    <path d="M 200 150 C 240 150, 240 150, 280 150" stroke="#27272a" strokeWidth="2" fill="none" />
                    <path d="M 460 150 C 510 150, 510 70, 560 70" stroke="#27272a" strokeWidth="2" fill="none" />
                    <path d="M 460 150 C 510 150, 510 230, 560 230" stroke="#27272a" strokeWidth="2" fill="none" />

                    {/* Animated Flow Lines */}
                    <path d="M 200 150 C 240 150, 240 150, 280 150" stroke="#8A2BE2" strokeWidth="2" fill="none" strokeDasharray="6 6" className="animate-flow-dash" />
                    <path d="M 460 150 C 510 150, 510 70, 560 70" stroke="#00B0FF" strokeWidth="2" fill="none" strokeDasharray="6 6" className="animate-flow-dash" />
                    <path d="M 460 150 C 510 150, 510 230, 560 230" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="6 6" className="animate-flow-dash" />

                    {/* Nodes */}
                    <foreignObject x="20" y="115" width="180" height="70">
                      <NodeCard 
                        title="Webhook" 
                        subtitle="Lead Captured" 
                        icon={<Zap size={18}/>} 
                        color="text-[#8A2BE2]" 
                        bg="bg-[#8A2BE2]/10" 
                      />
                    </foreignObject>

                    <foreignObject x="280" y="115" width="180" height="70">
                      <NodeCard 
                        title="AI Sales Rep" 
                        subtitle="Qualify & Enrich" 
                        icon={<BrainCircuit size={18}/>} 
                        color="text-[#00B0FF]" 
                        bg="bg-[#00B0FF]/10" 
                      />
                    </foreignObject>

                    <foreignObject x="560" y="35" width="180" height="70">
                      <NodeCard 
                        title="Salesforce" 
                        subtitle="Create Opportunity" 
                        icon={<Database size={18}/>} 
                        color="text-emerald-400" 
                        bg="bg-emerald-400/10" 
                      />
                    </foreignObject>

                    <foreignObject x="560" y="195" width="180" height="70">
                      <NodeCard 
                        title="Outbound" 
                        subtitle="Send Email" 
                        icon={<Mail size={18}/>} 
                        color="text-zinc-300" 
                        bg="bg-zinc-500/10" 
                      />
                    </foreignObject>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Features Grid - Framer Style Bento */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Everything you need to scale.</h2>
            <p className="text-zinc-400 text-lg">Powerful primitives designed for modern revenue teams.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Database className="text-[#00B0FF]" size={24} />,
                title: 'Operational Memory',
                desc: 'Connect your CRM, billing, and product data in one real-time graph.',
                videoSrc: '/videos/memory-archival.mp4'
              },
              {
                icon: <BrainCircuit className="text-[#8A2BE2]" size={24} />,
                title: 'A2A Pipeline',
                desc: 'Deploy autonomous agents to research, qualify, and engage leads.',
                videoSrc: '/videos/a2a-pipeline.mp4'
              },
              {
                icon: <Workflow className="text-emerald-400" size={24} />,
                title: 'Revenue Engine',
                desc: 'Build complex go-to-market motions without writing a single line of code.',
                videoSrc: '/videos/revenue-engine.mp4'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="framer-glass p-8 rounded-3xl cursor-pointer relative overflow-hidden group"
              >
                {/* SiloVideo Background Component */}
                <SiloVideo src={feature.videoSrc} className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" opacity="opacity-50" />
                
                <div className="relative z-20">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="py-32 px-6 relative z-10 border-t border-white/[0.05] bg-[#0B0D17]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8"
          >
            Ready to build your <br/> revenue engine?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <button className="bg-white text-[#0B0D17] px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-200">
              Start Building Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
