import React from 'react';
import { Download, ShieldCheck, Heart, Mail } from 'lucide-react';
import { LegalModalType } from './LegalModals';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
  onDownloadClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onDownloadClick }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-900">
          
          {/* Logo & Headline */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-amber-400/50 p-0.5 bg-gradient-to-tr from-amber-400 to-indigo-600">
                <img
                  src={`${import.meta.env.BASE_URL}taskearn-logo.png`}
                  alt="TaskEarn Logo"
                  className="w-full h-full object-cover rounded-[9px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-black text-white font-['Outfit',sans-serif]">
                TaskEarn
              </span>
            </div>
            {/* Required footer text */}
            <p className="text-slate-300 font-medium text-base">
              TaskEarn — Complete tasks and enjoy daily rewards.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              The premier mobile reward app. Play games, spin wheels, and earn verified payouts.
            </p>
          </div>

          {/* Quick APK CTA in footer */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onDownloadClick}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center gap-2 cursor-pointer font-['Outfit',sans-serif]"
            >
              <Download className="w-4 h-4" />
              <span>Download TaskEarn APK (34 MB)</span>
            </button>
          </div>

        </div>

        {/* Links row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          
          {/* Navigation & Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              id="footer-about-link"
              onClick={() => onOpenLegal('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              id="footer-privacy-link"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              id="footer-terms-link"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              id="footer-contact-link"
              onClick={() => onOpenLegal('contact')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-pink-400" />
              <span>Contact (taskearnoffical@gmail.com)</span>
            </button>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>&copy; {new Date().getFullYear()} TaskEarn. All rights reserved.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
