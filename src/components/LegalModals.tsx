import React from 'react';
import { motion } from 'motion/react';
import { X, Mail, Shield, FileText, Info, CheckCircle2 } from 'lucide-react';

export type LegalModalType = 'about' | 'privacy' | 'terms' | 'contact' | null;

interface LegalModalsProps {
  modalType: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ modalType, onClose }) => {
  if (!modalType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-100 flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800 shrink-0">
          {modalType === 'about' && (
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Info className="w-5 h-5" />
            </div>
          )}
          {modalType === 'privacy' && (
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
          )}
          {modalType === 'terms' && (
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
          )}
          {modalType === 'contact' && (
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
              {modalType === 'about' && 'About TaskEarn'}
              {modalType === 'privacy' && 'Privacy Policy'}
              {modalType === 'terms' && 'Terms & Conditions'}
              {modalType === 'contact' && 'Contact Support'}
            </h3>
            <p className="text-xs text-slate-400">
              TaskEarn Official Mobile Rewards Application
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto pr-2 my-4 space-y-4 text-sm text-slate-300 leading-relaxed">
          {modalType === 'about' && (
            <>
              <p>
                <strong>TaskEarn</strong> is an entertainment and rewards platform designed to give everyday smartphone users real value for their time.
              </p>
              <h4 className="text-base font-bold text-white">Our Mission</h4>
              <p>
                We believe earning rewards should be straightforward, fun, and accessible without upfront investment. By partnering with vetted advertising networks, game studios, and market researchers, we share sponsorship revenue directly with our users in the form of virtual coins.
              </p>
              <h4 className="text-base font-bold text-white">Key Pillars</h4>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Honest Exchange:</strong> Fixed 1,000 Coins = ₹10 rate with zero hidden deduction fees.</li>
                <li><strong>Speedy Payouts:</strong> Withdrawals to eSewa, Free Fire Diamonds, and Robux delivered quickly.</li>
                <li><strong>Fair Play:</strong> Guaranteed wins on daily spins, streaks, and scratch cards.</li>
              </ul>
            </>
          )}

          {modalType === 'privacy' && (
            <>
              <p>
                At TaskEarn, respecting your personal information is paramount. This Privacy Policy outlines what minimal data we collect and how it is secured.
              </p>
              <h4 className="text-base font-bold text-white">1. Information We Collect</h4>
              <p>
                We only collect basic account identification (e.g. username/email and device identifier) necessary to track completed task milestones and prevent fraud.
              </p>
              <h4 className="text-base font-bold text-white">2. Reward & Payout Data</h4>
              <p>
                When requesting cash out to eSewa or gaming IDs (FF UID or Roblox Username), we only store the payout address for fulfillment. We never ask for passwords or PINs.
              </p>
              <h4 className="text-base font-bold text-white">3. Security</h4>
              <p>
                All data in transit is encrypted using SSL/TLS protocols. We never sell user data to third-party brokers.
              </p>
            </>
          )}

          {modalType === 'terms' && (
            <>
              <p>
                By downloading, installing, or using the TaskEarn APK, you agree to comply with the following Terms and Conditions.
              </p>
              <h4 className="text-base font-bold text-white">1. Eligibility</h4>
              <p>
                You must be at least 13 years old or have parental consent to participate in TaskEarn activities.
              </p>
              <h4 className="text-base font-bold text-white">2. Prohibited Conduct</h4>
              <p>
                Use of VPNs, emulators, auto-clickers, or fraudulent accounts to spoof task completions is strictly forbidden and results in immediate coin balance forfeiture.
              </p>
              <h4 className="text-base font-bold text-white">3. Reward Fulfillment</h4>
              <p>
                Withdrawals are audited for legitimacy and typically disbursed within 5 minutes to 24 hours depending on the gateway server queue.
              </p>
            </>
          )}

          {modalType === 'contact' && (
            <div className="space-y-4">
              <p>
                Have a question regarding task completion, coin crediting, or withdrawal verification? Our dedicated team is here to help!
              </p>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Official Support Email</span>
                    <a
                      href="mailto:taskearnoffical@gmail.com"
                      className="text-base font-bold text-white hover:text-amber-400 block transition-colors"
                    >
                      taskearnoffical@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300 space-y-1.5">
                <p className="font-semibold text-white">When contacting support, please include:</p>
                <p>• Your registered User ID or referral code (e.g. CB8SIF)</p>
                <p>• Date and details of the task or withdrawal request</p>
                <p>• Screenshot of the issue if applicable</p>
              </div>

              <a
                href="mailto:taskearnoffical@gmail.com?subject=TaskEarn%20Support%20Inquiry"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 hover:from-amber-300 hover:to-orange-400 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Compose Email to taskearnoffical@gmail.com</span>
              </a>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
