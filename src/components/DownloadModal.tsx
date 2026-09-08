import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  ShieldCheck,
  Smartphone,
  ExternalLink,
  Settings2,
  CheckCircle2,
  Copy,
  QrCode,
  FileCode,
  HardDrive
} from 'lucide-react';
import { DownloadConfig } from '../types';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: DownloadConfig;
  onUpdateConfig: (newConfig: DownloadConfig) => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
}) => {
  const [activeTab, setActiveTab] = useState<'download' | 'settings'>('download');
  const [customDriveUrl, setCustomDriveUrl] = useState(config.googleDriveUrl);
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  // Helper to convert standard Google drive view link to direct download link
  const convertToDirectDriveLink = (url: string) => {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
    }
    const idParamMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (idParamMatch && idParamMatch[1]) {
      return `https://drive.google.com/uc?export=download&id=${idParamMatch[1]}`;
    }
    return url;
  };

  const handleTriggerDirectDownload = () => {
    setDownloadStarted(true);

    // Create virtual download element for direct APK download to File Manager
    const link = document.createElement('a');
    link.href = config.apkUrl || '/TaskEarn.apk';
    link.setAttribute('download', 'TaskEarn.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadStarted(false);
    }, 4000);
  };

  const handleSaveDriveLink = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = convertToDirectDriveLink(customDriveUrl.trim());
    onUpdateConfig({
      ...config,
      apkUrl: finalUrl,
      googleDriveUrl: customDriveUrl.trim(),
    });
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setActiveTab('download');
    }, 1200);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(config.apkUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-slate-100 overflow-hidden"
      >
        {/* Glow ambient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-indigo-600 p-0.5 shadow-md">
            <img
              src="/taskearn-logo.png"
              alt="TaskEarn"
              className="w-full h-full object-cover rounded-[14px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
              TaskEarn Android App
            </h3>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
              <span className="text-emerald-400 font-semibold">● Verified Safe</span>
              <span>• {config.version}</span>
              <span>• {config.fileSize}</span>
            </p>
          </div>
        </div>

        {/* Tabs: Download vs Replace Link */}
        <div className="flex border-b border-slate-800 mb-6">
          <button
            onClick={() => setActiveTab('download')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-colors relative cursor-pointer ${
              activeTab === 'download' ? 'text-amber-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            Direct Download
            {activeTab === 'download' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-colors relative flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'settings' ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>Replace / Config Drive Link</span>
            {activeTab === 'settings' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400 rounded-full" />
            )}
          </button>
        </div>

        {activeTab === 'download' ? (
          <div>
            {/* Primary Action Button */}
            <button
              onClick={handleTriggerDirectDownload}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 hover:from-amber-300 hover:to-pink-400 text-slate-950 font-extrabold text-base shadow-lg shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer font-['Outfit',sans-serif]"
            >
              <Download className="w-5 h-5 stroke-[2.5]" />
              <span>{downloadStarted ? 'Download Started! Check Notification' : 'Click to Download APK Directly'}</span>
            </button>

            {downloadStarted && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Downloading TaskEarn APK file. Follow the installation guide below.</span>
              </motion.div>
            )}

            {/* Google Drive Link Option */}
            <div className="mt-4 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <HardDrive className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Download via Google Drive</p>
                  <p className="text-[10px] text-slate-400">High speed cloud mirror link</p>
                </div>
              </div>
              <a
                href={config.googleDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1 transition-colors"
              >
                <span>Open Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Android 3-Step Setup Quick Guide */}
            <div className="mt-6 border-t border-slate-800 pt-4">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                How to install on Android:
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    1
                  </span>
                  <span>Once downloaded, open your phone's <strong>File Manager &gt; Downloads</strong> (or notification bar) and tap <strong>TaskEarn.apk</strong>.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    2
                  </span>
                  <span>If prompted, toggle <strong>Allow from this source</strong> (Settings &gt; Install unknown apps).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    3
                  </span>
                  <span>Tap <strong>Install</strong>, launch TaskEarn, and claim your instant 100 free coins!</span>
                </div>
              </div>
            </div>

            {/* Copy Link & Share */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <button
                onClick={handleCopyLink}
                className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Copied to Clipboard!' : 'Copy Direct Download Link'}</span>
              </button>

              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Safe APK
              </span>
            </div>
          </div>
        ) : (
          /* SETTINGS TAB: REPLACE GOOGLE DRIVE LINK */
          <form onSubmit={handleSaveDriveLink} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Google Drive or Direct APK Download URL
              </label>
              <input
                type="text"
                value={customDriveUrl}
                onChange={(e) => setCustomDriveUrl(e.target.value)}
                placeholder="https://drive.google.com/file/d/YOUR_FILE_ID/view"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500 font-mono"
              />
              <p className="mt-1.5 text-[11px] text-slate-400 leading-relaxed">
                Tip: You can paste standard Google Drive view links. We automatically format it into a direct download link (<code className="text-indigo-300">export=download</code>).
              </p>
            </div>

            {saveSuccess && (
              <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Download link successfully replaced and saved!</span>
              </div>
            )}

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('download')}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer"
              >
                Save & Use Link
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
