import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Download } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'How do I download and install the TaskEarn APK on my Android phone?',
    a: 'Simply tap the "Download TaskEarn" button on this website. The official APK file (TaskEarn_v2.4.1.apk) will begin downloading directly or via Google Drive. Once finished, tap the downloaded file. If Android asks for permission, enable "Allow from this source" in Settings, and tap Install.',
  },
  {
    q: 'Is TaskEarn completely free to use?',
    a: 'Yes! TaskEarn is 100% free with no deposit, subscription, or registration charges required. You earn real coins simply by completing tasks, spinning the lucky wheel, and claiming daily streak bonuses.',
  },
  {
    q: 'What is the coin conversion value for TaskEarn?',
    a: 'The official transparent exchange rate is 1,000 Coins = ₹10 (meaning 100 Coins = ₹1). Your balance is tracked live inside the app and can be viewed anytime in the Wallet tab.',
  },
  {
    q: 'Which withdrawal options are available?',
    a: 'You can withdraw directly to eSewa Mobile Wallet, Free Fire (FF) Diamonds direct player ID top-up, Roblox (Robux), and popular shopping & gaming gift cards.',
  },
  {
    q: 'Can I replace the download link with my own Google Drive APK link?',
    a: 'Yes! Click the "Drive Link" / Settings button in the navbar or download dialog to paste your own Google Drive sharing link or direct APK URL. The website automatically formats Google Drive view links into high-speed direct downloads.',
  },
  {
    q: 'How does the Refer & Earn bonus work?',
    a: 'Share your personal referral code (such as CB8SIF). Whenever your friend downloads TaskEarn and completes their first tasks, you earn 500 bonus coins, and your friend gets 200 welcome coins immediately!',
  },
];

export const FaqSection: React.FC<{ onDownloadClick: () => void }> = ({ onDownloadClick }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Everything you need to know about downloading, earning, and redeeming on TaskEarn.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-semibold text-white text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom prompt */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-3">Still have questions?</p>
          <a
            href="mailto:taskearnoffical@gmail.com"
            className="text-amber-400 hover:text-amber-300 font-semibold text-sm underline underline-offset-4 mr-4"
          >
            Email Support (taskearnoffical@gmail.com)
          </a>
          <button
            onClick={onDownloadClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};
