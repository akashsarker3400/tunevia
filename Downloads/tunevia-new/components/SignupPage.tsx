
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck, ArrowRight, Zap, Globe, Sparkles, Database, Layout } from 'lucide-react';

interface SignupPageProps {
  onNavigate: (page: 'login' | 'home') => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onNavigate }) => {
  const [accountType, setAccountType] = useState<'artist' | 'label'>('artist');

  return (
    <div className="min-h-screen bg-brand-black flex flex-col lg:flex-row overflow-hidden relative">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      {/* Left Side: Immersive Visual & Branding */}
      <div className="lg:w-[45%] relative bg-[#080808] p-12 lg:p-20 flex flex-col justify-between overflow-hidden border-r border-white/5">
        {/* Holographic Waveform Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-20 pointer-events-none">
          <svg viewBox="0 0 800 600" className="w-full h-full">
            <motion.path
              d="M 0 300 Q 200 100 400 300 T 800 300"
              fill="none"
              stroke="#72FF4F"
              strokeWidth="2"
              animate={{ d: ["M 0 300 Q 200 50 400 300 T 800 300", "M 0 300 Q 200 550 400 300 T 800 300", "M 0 300 Q 200 50 400 300 T 800 300"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 300 Q 200 450 400 300 T 800 300"
              fill="none"
              stroke="#3ACDFF"
              strokeWidth="1"
              animate={{ d: ["M 0 300 Q 200 500 400 300 T 800 300", "M 0 300 Q 200 100 400 300 T 800 300", "M 0 300 Q 200 500 400 300 T 800 300"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </svg>
        </div>

        <div className="relative z-10">
          <button onClick={() => onNavigate('home')} className="group flex items-center gap-3 mb-20">
            <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center border border-brand-green/30 group-hover:scale-110 transition-transform">
              <Zap size={20} className="text-brand-green" />
            </div>
            <span className="text-2xl font-bold font-heading tracking-tighter">
              <span className="text-brand-green">Tune</span>
              <span className="text-white">Via</span>
            </span>
          </button>
          
          <h1 className="text-6xl lg:text-8xl font-heading font-bold mb-8 tracking-tighter leading-none">
            EMBARK ON <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple">
              THE FUTURE.
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-sm leading-relaxed font-medium">
            The next generation of music distribution is here. Secure your rights, expand your reach, and claim 100% ownership.
          </p>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {[
              { icon: <Globe size={18} className="text-brand-blue" />, label: "Global Node" },
              { icon: <Database size={18} className="text-brand-green" />, label: "Rights Ledger" },
              { icon: <Layout size={18} className="text-brand-purple" />, label: "OAC Logic" },
              { icon: <Sparkles size={18} className="text-white" />, label: "AI Insights" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">{item.label}</span>
                </div>
                <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    className="h-full bg-white/20 origin-left" 
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-[10px] font-mono text-gray-600 tracking-widest">ESTABLISHED_2026_PROTOCOL_V4.2</p>
        </div>
      </div>

      {/* Right Side: Form Content */}
      <div className="lg:w-[55%] bg-brand-black p-8 lg:p-20 flex items-center justify-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-lg relative z-10"
        >
          <div className="mb-12">
            <div className="flex items-center gap-2 text-brand-blue mb-4">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase">New_Entity_Registration</span>
            </div>
            <h2 className="text-4xl font-heading font-bold text-white mb-2 tracking-tight">System Onboarding</h2>
            <p className="text-gray-500">Configure your workspace profile to initialize distribution.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <button 
              onClick={() => setAccountType('artist')}
              className={`p-6 rounded-3xl border transition-all flex flex-col items-center gap-3 group relative overflow-hidden ${
                accountType === 'artist' 
                ? 'bg-brand-green/10 border-brand-green/50 text-brand-green shadow-[0_0_20px_rgba(114,255,79,0.1)]' 
                : 'bg-white/5 border-white/10 text-gray-500 hover:bg-white/[0.07]'
              }`}
            >
              <User size={24} className={accountType === 'artist' ? 'scale-110' : ''} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Artist_Node</span>
              {accountType === 'artist' && <div className="absolute top-0 left-0 w-full h-1 bg-brand-green" />}
            </button>
            <button 
              onClick={() => setAccountType('label')}
              className={`p-6 rounded-3xl border transition-all flex flex-col items-center gap-3 group relative overflow-hidden ${
                accountType === 'label' 
                ? 'bg-brand-blue/10 border-brand-blue/50 text-brand-blue shadow-[0_0_20px_rgba(58,205,255,0.1)]' 
                : 'bg-white/5 border-white/10 text-gray-500 hover:bg-white/[0.07]'
              }`}
            >
              <ShieldCheck size={24} className={accountType === 'label' ? 'scale-110' : ''} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Label_Admin</span>
              {accountType === 'label' && <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue" />}
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Legal_Name</label>
                <input 
                  type="text" 
                  placeholder="IDENTITY_KEY"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/20 transition-all placeholder:text-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Creator_Tag</label>
                <input 
                  type="text" 
                  placeholder="STAGE_ALIAS"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Comm_Channel / Email</label>
              <input 
                type="email" 
                placeholder="uplink@tunevia.io"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/20 transition-all placeholder:text-gray-700"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Master_Key / Password</label>
              <input 
                type="password" 
                placeholder="CRYPT_8_CHARS_MIN"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all placeholder:text-gray-700"
              />
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <input type="checkbox" id="terms" className="mt-1.5 accent-brand-green" />
              <label htmlFor="terms" className="text-[11px] text-gray-500 leading-relaxed font-medium">
                I acknowledge the <button className="text-brand-green font-bold hover:underline">Distribution Protocol</button> and <button className="text-brand-green font-bold hover:underline">Data Encryption Policy</button>.
              </label>
            </div>

            <button className="w-full py-5 rounded-2xl bg-white text-brand-black font-bold hover:bg-brand-green hover:shadow-[0_0_40px_rgba(114,255,79,0.3)] transition-all flex items-center justify-center gap-3 group/btn">
              Initialize_Profile <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center mt-12 text-gray-500 text-sm font-medium">
            Active session found? <button onClick={() => onNavigate('login')} className="text-white font-bold hover:underline ml-1">Sign_In_Now</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
