import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhoneMockupSlider } from './components/PhoneMockupSlider';
import { Features } from './components/Features';
import { HowToEarn } from './components/HowToEarn';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { LegalModals, LegalModalType } from './components/LegalModals';
import { DEFAULT_DOWNLOAD_CONFIG } from './data/mockData';
import { DownloadConfig } from './types';
import { Download, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function App() {
  const [downloadConfig, setDownloadConfig] = useState<DownloadConfig>(() => {
    const saved = localStorage.getItem('taskearn_download_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure apkUrl points to /TaskEarn.apk for direct file manager saving
        if (!parsed.apkUrl || parsed.apkUrl.includes('drive.google.com') || parsed.apkUrl.includes('/downloads/')) {
          return {
            ...DEFAULT_DOWNLOAD_CONFIG,
            googleDriveUrl: parsed.googleDriveUrl || DEFAULT_DOWNLOAD_CONFIG.googleDriveUrl,
          };
        }
        return parsed;
      } catch (e) {
        return DEFAULT_DOWNLOAD_CONFIG;
      }
    }
    return DEFAULT_DOWNLOAD_CONFIG;
  });

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showStickyDownload, setShowStickyDownload] = useState(false);

  // Monitor scroll for mobile sticky download button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyDownload(true);
      } else {
        setShowStickyDownload(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUpdateConfig = (newConfig: DownloadConfig) => {
    setDownloadConfig(newConfig);
    localStorage.setItem('taskearn_download_config', JSON.stringify(newConfig));
  };

  // Primary download handler: triggers direct APK download to File Manager
  const handleDownloadClick = () => {
    // Trigger direct APK file download straight to Android Download / File Manager
    const rawUrl = downloadConfig.apkUrl || 'TaskEarn.apk';
    const downloadUrl = rawUrl.startsWith('http')
      ? rawUrl
      : `${import.meta.env.BASE_URL}${rawUrl.replace(/^\//, '')}`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'TaskEarn.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show instant toast notification confirming save to File Manager
    setToastMessage('TaskEarn.apk downloading directly to your Phone File Manager (Downloads)!');
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);

    // Open guidance modal so user has step-by-step install guide and Google Drive mirror
    setIsDownloadModalOpen(true);
  };

  const handleOpenSettings = () => {
    setIsDownloadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-400 selection:text-slate-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-2xl flex items-center gap-2.5 animate-bounce border border-emerald-400">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        onDownloadClick={handleDownloadClick}
        onOpenSettings={handleOpenSettings}
        config={downloadConfig}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onDownloadClick={handleDownloadClick}
          onOpenSettings={handleOpenSettings}
        />

        {/* Screenshot Slider with Realistic Phone Mockup */}
        <PhoneMockupSlider onDownloadClick={handleDownloadClick} />

        {/* Features Section (6 Cards) */}
        <Features onDownloadClick={handleDownloadClick} />

        {/* How to Earn (3-Step Guide) */}
        <HowToEarn onDownloadClick={handleDownloadClick} />

        {/* FAQ Section */}
        <FaqSection onDownloadClick={handleDownloadClick} />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onDownloadClick={handleDownloadClick}
      />

      {/* Floating Bottom Bar for Mobile Conversion */}
      {showStickyDownload && (
        <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
          <button
            onClick={handleDownloadClick}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-slate-950 font-black text-sm shadow-2xl flex items-center justify-between cursor-pointer border border-white/20 active:scale-95 transition-all font-['Outfit',sans-serif]"
          >
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 stroke-[3]" />
              <span>Download TaskEarn APK</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950/20 text-slate-950 font-extrabold">
              34 MB
            </span>
          </button>
        </div>
      )}

      {/* Download & Drive Link Customizer Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        config={downloadConfig}
        onUpdateConfig={handleUpdateConfig}
      />

      {/* About, Privacy, Terms, Contact Modals */}
      <LegalModals
        modalType={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
