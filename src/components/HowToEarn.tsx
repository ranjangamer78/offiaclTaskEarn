import React from 'react';
import { motion } from 'motion/react';
import { Download, Gamepad2, Banknote, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/mockData';

interface HowToEarnProps {
  onDownloadClick: () => void;
}

export const HowToEarn: React.FC<HowToEarnProps> = ({ onDownloadClick }) => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>🚀</span>
            <span>Easy 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Start Earning in Less Than <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-400 to-indigo-400">3 Minutes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            No complicated verifications or hidden fees. Just direct daily rewards in your pocket.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative rounded-3xl bg-slate-900/70 border border-slate-800 p-8 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 group"
            >
              {/* Step indicator tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-black text-slate-700 font-['Outfit',sans-serif] group-hover:text-amber-400/80 transition-colors">
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  {step.icon === 'Download' && <Download className="w-5 h-5" />}
                  {step.icon === 'Gamepad2' && <Gamepad2 className="w-5 h-5" />}
                  {step.icon === 'Banknote' && <Banknote className="w-5 h-5" />}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] mb-2 group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs text-emerald-400 font-semibold gap-1.5">
                <Check className="w-4 h-4" />
                <span>{idx === 0 ? 'Direct APK & Drive' : idx === 1 ? 'Free & Instant' : 'Direct eSewa & Games'}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real withdrawal partners showcase */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Supported Instant Payout Channels
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="px-5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-sm font-bold text-slate-200">
              <span className="text-base">🇳🇵</span>
              <span>eSewa Wallet</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                Fixed Cash
              </span>
            </div>
            <div className="px-5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-sm font-bold text-slate-200">
              <span className="text-base">💎</span>
              <span>Free Fire (FF) Diamonds</span>
              <span className="text-[10px] text-blue-400 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-500/30">
                Direct ID Topup
              </span>
            </div>
            <div className="px-5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-sm font-bold text-slate-200">
              <span className="text-base">🪙</span>
              <span>Roblox (Robux)</span>
              <span className="text-[10px] text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-500/30">
                Instant Voucher
              </span>
            </div>
            <div className="px-5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-sm font-bold text-slate-200">
              <span className="text-base">🎁</span>
              <span>Gift Cards & Codes</span>
              <span className="text-[10px] text-purple-400 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-500/30">
                Digital Code
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
