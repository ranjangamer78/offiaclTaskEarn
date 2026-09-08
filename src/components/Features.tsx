import React from 'react';
import { motion } from 'motion/react';
import {
  Gift,
  Target,
  Disc3,
  Sparkles,
  Dices,
  WalletCards,
  CheckCircle2,
  ArrowRight,
  Download
} from 'lucide-react';
import { FEATURE_CARDS } from '../data/mockData';

interface FeaturesProps {
  onDownloadClick: () => void;
  onSelectFeature?: (id: string) => void;
}

const getFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'Gift':
      return <Gift className="w-6 h-6 text-amber-400" />;
    case 'Target':
      return <Target className="w-6 h-6 text-blue-400" />;
    case 'Disc3':
      return <Disc3 className="w-6 h-6 text-purple-400" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-emerald-400" />;
    case 'Dices':
      return <Dices className="w-6 h-6 text-cyan-400" />;
    case 'WalletCards':
      return <WalletCards className="w-6 h-6 text-violet-400" />;
    default:
      return <Gift className="w-6 h-6 text-amber-400" />;
  }
};

export const Features: React.FC<FeaturesProps> = ({ onDownloadClick }) => {
  return (
    <section id="features" className="py-24 bg-slate-900/60 relative border-t border-slate-800/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>✨</span>
            <span>Reward Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            6 Ways to Multiply Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-400 to-indigo-400">Daily Coins</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            TaskEarn combines gaming entertainment with real rewards. Play whenever you want, gather points rapidly, and withdraw anytime.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURE_CARDS.map((feature, idx) => (
            <motion.div
              key={feature.id}
              id={`feature-card-${feature.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-3xl bg-slate-950/80 border border-slate-800/90 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/40 hover:-translate-y-1 overflow-hidden"
            >
              {/* Dynamic top gradient wash */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${feature.gradient} blur-2xl group-hover:scale-125 transition-transform duration-500`} />

              <div>
                {/* Header: Icon + Badge */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <div className="w-13 h-13 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-inner">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900 text-amber-300 border border-amber-400/20 shadow-sm">
                    {feature.badge}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  {feature.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3 font-['Outfit',sans-serif] group-hover:text-amber-300 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2.5 mb-6 border-t border-slate-800/80 pt-4">
                  {feature.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-2 border-t border-slate-900 flex items-center justify-between">
                <a
                  href="#app-preview"
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Preview in App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={onDownloadClick}
                  className="text-xs font-bold text-slate-400 hover:text-white px-2.5 py-1 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Download App
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-950 border border-indigo-500/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">Ready to start earning?</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-['Outfit',sans-serif]">
              Join over 11,000+ happy daily users
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Install the lightweight TaskEarn APK now. Sign up takes under 30 seconds with 100 free welcome coins!
            </p>
          </div>
          <button
            onClick={onDownloadClick}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download TaskEarn APK</span>
          </button>
        </div>

      </div>
    </section>
  );
};
