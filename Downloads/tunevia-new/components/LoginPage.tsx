
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Chrome, Music, ShieldCheck, Cpu } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: 'signup' | 'home') => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Futuristic Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Shifting Ambient Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-green/5 blur-[130px] rounded-full" 
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Top Tech Accents */}
        <div className="flex justify-between items-end mb-8 px-2">
          <button onClick={() => onNavigate('home')} className="group flex flex-col items-start">
            <span className="text-[10px] font-mono text-brand-green mb-1 tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">RETURN_ROOT</span>
            <div className="text-3xl font-bold font-heading tracking-tighter">
              <span className="text-brand-green">Tune</span>
              <span className="text-white">Via</span>
            </div>
          </button>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end text-[10px] font-mono text-brand-blue mb-1">
              <Cpu size={10} className="animate-spin-slow" />
              <span>SECURE_AUTH_NODE</span>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent to-brand-blue/40 rounded-full" />
          </div>
        </div>

        <div className="relative group">
          {/* Animated Border Beam */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-brand-blue via-brand-green to-brand-purple rounded-[2.5rem] opacity-30 group-hover:opacity-100 blur-[2px] transition-opacity duration-1000" />
          
          <div className="relative p-10 rounded-[2.5rem] bg-[#0c0c0c]/80 backdrop-blur-2xl border border-white/10 overflow-hidden">
            {/* Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] z-20 opacity-30" />

            <div className="relative z-30">
              <div className="mb-10">
                <h1 className="text-2xl font-bold text-white tracking-tight">Identity Verification</h1>
                <p className="text-gray-500 text-sm mt-1">Please enter your credentials to access the terminal.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500">Account_ID / Email</label>
                    <span className="text-[9px] font-mono text-brand-blue/50">ENTRY_01</span>
                  </div>
                  <div className="relative group/input">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-brand-blue transition-colors duration-300" size={18} />
                    <input 
                      type="email" 
                      placeholder="name@artist_network.io"
                      className="w-full bg-brand-black/60 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all placeholder:text-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500">Access_Key</label>
                    <button className="text-[9px] font-mono font-bold text-brand-blue uppercase hover:text-white transition-colors">Recover_Key?</button>
                  </div>
                  <div className="relative group/input">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-brand-green transition-colors duration-300" size={18} />
                    <input 
                      type="password" 
                      placeholder="••••••••••••"
                      className="w-full bg-brand-black/60 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/20 transition-all placeholder:text-gray-700"
                    />
                  </div>
                </div>

                <button className="w-full bg-white text-brand-black font-bold py-4 rounded-2xl hover:bg-brand-green hover:shadow-[0_0_30px_rgba(114,255,79,0.4)] transition-all flex items-center justify-center gap-2 group/btn relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Execute_Login <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </button>
              </form>

              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                <div className="relative flex justify-center text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold">
                  <span className="bg-[#0c0c0c] px-4">Federated_Auth_Pathways</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-blue/50 transition-all text-[11px] font-bold uppercase tracking-widest text-gray-300">
                  <Chrome size={16} className="text-brand-blue" /> Google
                </button>
                <button className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-green/50 transition-all text-[11px] font-bold uppercase tracking-widest text-gray-300">
                  <Music size={16} className="text-brand-green" /> Spotify
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center px-4">
          <p className="text-gray-500 text-xs font-medium">
            New Entity? <button onClick={() => onNavigate('signup')} className="text-brand-green font-bold hover:underline ml-1">Register_Profile</button>
          </p>
          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-600">
            <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
            <span>NODE_UPTIME: 99.9%</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
