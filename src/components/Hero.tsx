import React from 'react';
import { motion } from 'motion/react';
import {
  Download,
  Users,
  Gift,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Star,
  Zap,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { SOCIAL_STATS } from '../data/mockData';

interface HeroProps {
  onDownloadClick: () => void;
  onOpenSettings: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick, onOpenSettings }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Dynamic ambient mesh gradients */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Logo & App Title Brand Bar */}
        <div className="flex flex-col items-center justify-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3.5 bg-slate-900/90 border border-slate-700/80 px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md"
          >
            {/* Logo image */}
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-md shadow-amber-500/20 border border-amber-400/40 p-0.5 bg-gradient-to-tr from-amber-400 to-indigo-600">
              <img
                src="/taskearn-logo.png"
                alt="TaskEarn Logo"
                className="w-full h-full object-cover rounded-[10px]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to stylized vector badge if image fails
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white font-['Outfit',sans-serif]">
                  TaskEarn
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-extrabold uppercase tracking-wide border border-amber-400/30">
                  OFFICIAL APK
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Daily Rewards & Gaming Platform</p>
            </div>
          </motion.div>
        </div>

        {/* Catchy Headline & Description */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Tag pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-indigo-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Highest Reward Rates in 2026 • 1,000 Coins = ₹10</span>
          </motion.div>

          {/* Catchy Headline requested by user */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight font-['Outfit',sans-serif] leading-[1.1]"
          >
            Complete Tasks.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500">
              Earn Rewards.
            </span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              Repeat.
            </span>
          </motion.h1>

          {/* Short description requested */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Complete enjoyable daily activities, spin the lucky wheel, scratch bonus cards, roll the dice, and withdraw instant cash directly to your eSewa, Free Fire Diamonds, or Robux wallet.
          </motion.p>

          {/* Download CTA Button & Direct Download Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4"
          >
            {/* Primary Large Download Button */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-indigo-600 opacity-70 blur-lg group-hover:opacity-100 transition duration-300 group-hover:duration-200 animate-pulse" />
              
              <button
                id="hero-download-taskearn-btn"
                onClick={onDownloadClick}
                className="relative px-8 sm:px-12 py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 hover:from-amber-300 hover:via-orange-400 hover:to-pink-400 text-slate-950 font-black text-lg sm:text-xl shadow-2xl flex items-center justify-center gap-3.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer font-['Outfit',sans-serif]"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shadow-md">
                  <Download className="w-5 h-5 stroke-[3]" />
                </div>
                <div className="text-left">
                  <span className="block text-lg sm:text-xl leading-none">Download TaskEarn</span>
                  <span className="block text-[11px] font-bold text-slate-900/80 mt-1 uppercase tracking-wider">
                    Direct APK Download • Saved to File Manager (34 MB)
                  </span>
                </div>
              </button>
            </div>

            {/* Direct download assurances & Drive link toggle */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 mt-2">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" /> 100% Virus-Free & Safe
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-300 font-medium">
                <Smartphone className="w-4 h-4 text-indigo-400" /> Android 7.0+ Compatible
              </span>
              <span className="inline-flex items-center gap-1.5 text-amber-300 font-medium">
                <Zap className="w-4 h-4" /> Instant Direct Download
              </span>
            </div>
          </motion.div>

          {/* Social Proof Counter Banner (11K+ Users) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 max-w-xl mx-auto rounded-2xl bg-slate-900/80 border border-slate-800 p-4 sm:p-5 backdrop-blur-md shadow-xl flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
                    11K+ Users
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <p className="text-xs text-slate-400">Actively earning and withdrawing daily</p>
              </div>
            </div>

            <div className="text-right border-l border-slate-800 pl-4">
              <span className="text-sm font-bold text-amber-400 flex items-center justify-end gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.8 / 5.0
              </span>
              <span className="text-[10px] text-slate-400">Community Trust Score</span>
            </div>
          </motion.div>

          {/* Smaller stats requested: “Daily Rewards”, “Multiple Tasks”, and “Easy to Use” */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {/* Stat 1: Daily Rewards */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800/80 p-4 text-center hover:border-amber-500/30 transition-all">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-2">
                <Gift className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-white font-['Outfit',sans-serif]">Daily Rewards</h4>
              <p className="text-xs text-slate-400 mt-1">Claim 100 to 500+ coins login streak bonuses</p>
            </div>

            {/* Stat 2: Multiple Tasks */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800/80 p-4 text-center hover:border-indigo-500/30 transition-all">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-2">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-white font-['Outfit',sans-serif]">Multiple Tasks</h4>
              <p className="text-xs text-slate-400 mt-1">Spin, scratch, roll dice, surveys, video ads</p>
            </div>

            {/* Stat 3: Easy to Use */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800/80 p-4 text-center hover:border-emerald-500/30 transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-white font-['Outfit',sans-serif]">Easy to Use</h4>
              <p className="text-xs text-slate-400 mt-1">Clean intuitive UI, instant 1-tap withdrawals</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
