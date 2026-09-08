import React, { useState } from 'react';
import { Download, Menu, X, Settings2, Smartphone, ShieldCheck, ExternalLink } from 'lucide-react';
import { DownloadConfig } from '../types';

interface NavbarProps {
  onDownloadClick: () => void;
  onOpenSettings: () => void;
  config: DownloadConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick, onOpenSettings, config }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-amber-500/20 border border-amber-400/50 p-0.5 bg-gradient-to-tr from-amber-400 to-indigo-600 transition-transform duration-200 group-hover:scale-105">
              <img
                src={`${import.meta.env.BASE_URL}taskearn-logo.png`}
                alt="TaskEarn Logo"
                className="w-full h-full object-cover rounded-[9px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xl font-black text-white font-['Outfit',sans-serif] tracking-tight group-hover:text-amber-300 transition-colors">
                TaskEarn
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-bold px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                v2.4.1
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-amber-400 transition-colors">
              Features
            </a>
            <a href="#app-preview" className="hover:text-amber-400 transition-colors">
              Screenshots
            </a>
            <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
              How It Works
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              FAQ
            </a>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Custom Drive Link Quick Button */}
            <button
              id="navbar-config-drive-btn"
              onClick={onOpenSettings}
              title="Replace or configure Google Drive download link"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer text-xs flex items-center gap-1.5"
            >
              <Settings2 className="w-4 h-4" />
              <span className="hidden lg:inline text-xs">Drive Link</span>
            </button>

            {/* Main Download CTA */}
            <button
              id="navbar-download-btn"
              onClick={onDownloadClick}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 hover:from-amber-300 hover:to-pink-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 active:scale-95 transition-all flex items-center gap-2 cursor-pointer font-['Outfit',sans-serif]"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download APK</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onDownloadClick}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>APK</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Features
          </a>
          <a
            href="#app-preview"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Screenshots & Showcase
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            How It Works
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            FAQ
          </a>
          
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSettings();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-slate-300 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-800"
            >
              <Settings2 className="w-4 h-4" />
              <span>Replace / Change Download Link</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadClick();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download TaskEarn APK</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
