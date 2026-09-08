import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  RotateCw,
  Dices,
  CheckCircle2,
  Wallet,
  Coins,
  Download,
  Gift,
  Play,
  Share2,
  Ticket,
  Flame,
  ArrowRight,
  Smartphone,
  ShieldCheck
} from 'lucide-react';
import { SCREENSHOT_SLIDES } from '../data/mockData';

interface PhoneMockupSliderProps {
  onDownloadClick: () => void;
}

export const PhoneMockupSlider: React.FC<PhoneMockupSliderProps> = ({ onDownloadClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  // Interactive mini-states for each screen inside the mockup
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDeg, setSpinDeg] = useState(0);
  const [spinResult, setSpinResult] = useState<number | null>(null);

  const [isScratched, setIsScratched] = useState(false);
  const [diceValues, setDiceValues] = useState<[number, number]>([4, 6]);
  const [isRollingDice, setIsRollingDice] = useState(false);

  const [selectedWalletTab, setSelectedWalletTab] = useState<'esewa' | 'ff' | 'robux'>('esewa');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAutoPlay) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SCREENSHOT_SLIDES.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + SCREENSHOT_SLIDES.length) % SCREENSHOT_SLIDES.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % SCREENSHOT_SLIDES.length);
  };

  const selectSlide = (idx: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(idx);
  };

  // Interactive functions
  const handleTriggerSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSpinResult(null);
    const extraTurns = 5 + Math.floor(Math.random() * 3);
    const stopAngle = Math.floor(Math.random() * 360);
    const totalDeg = spinDeg + (extraTurns * 360) + stopAngle;
    setSpinDeg(totalDeg);

    setTimeout(() => {
      setIsSpinning(false);
      const prizes = [250, 500, 1000, 1500, 2500, 100];
      setSpinResult(prizes[Math.floor(Math.random() * prizes.length)]);
    }, 3000);
  };

  const handleRollDice = () => {
    if (isRollingDice) return;
    setIsRollingDice(true);
    let count = 0;
    const interval = setInterval(() => {
      setDiceValues([
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ]);
      count++;
      if (count > 6) {
        clearInterval(interval);
        setIsRollingDice(false);
      }
    }, 100);
  };

  const currentSlide = SCREENSHOT_SLIDES[currentIndex];

  return (
    <section id="app-preview" className="relative py-20 overflow-hidden bg-slate-950">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            Live App Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif]">
            Inside the <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-400 to-indigo-400">TaskEarn</span> Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore the genuine app interface. Spin the wheel, scratch cards, complete tasks, and cash out to your preferred wallet instantly.
          </p>

          {/* Screen category selector pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-8">
            {SCREENSHOT_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                id={`pill-slide-${slide.id}`}
                onClick={() => selectSlide(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  currentIndex === idx
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{slide.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Central Phone Mockup Container */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* Navigation Arrows for Desktop */}
          <button
            id="slider-prev-btn"
            onClick={handlePrev}
            aria-label="Previous screenshot"
            className="absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700/80 text-white flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-200 backdrop-blur-md shadow-xl hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            id="slider-next-btn"
            onClick={handleNext}
            aria-label="Next screenshot"
            className="absolute right-2 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700/80 text-white flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-200 backdrop-blur-md shadow-xl hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Current Feature Title & Tagline Banner */}
          <div className="text-center mb-6 h-14">
            <motion.div
              key={currentSlide.id + '-title'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex flex-col items-center"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
                  {currentSlide.title}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30">
                  {currentSlide.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">{currentSlide.subtitle}</p>
            </motion.div>
          </div>

          {/* The Smartphone Frame */}
          <div className="relative w-[300px] sm:w-[330px] md:w-[360px] h-[640px] sm:h-[680px] md:h-[720px] rounded-[48px] bg-slate-900 p-3 shadow-2xl shadow-indigo-950/60 border-[4px] border-slate-700 ring-1 ring-white/10 select-none">
            {/* Glossy inner metallic frame line */}
            <div className="absolute inset-0 rounded-[44px] pointer-events-none border border-slate-500/20" />

            {/* Screen Inner Display */}
            <div className="relative w-full h-full rounded-[38px] bg-[#0d0f17] overflow-hidden flex flex-col font-['Plus_Jakarta_Sans',sans-serif] text-slate-100">
              
              {/* Android Phone Status Bar (8:18, WiFi, Battery) */}
              <div className="h-8 bg-[#0d0f17] flex items-center justify-between px-5 text-[11px] font-semibold text-slate-400 z-30 shrink-0">
                <span>8:18</span>
                {/* Punch hole camera */}
                <div className="w-3.5 h-3.5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-950" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span>5G</span>
                  <span>📶</span>
                  <span className="text-emerald-400">86%</span>
                </div>
              </div>

              {/* Dynamic Screen View Content with Animation */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
                <AnimatePresence mode="wait">
                  {/* SCREEN 1: DAILY SPIN */}
                  {currentSlide.category === 'spin' && (
                    <motion.div
                      key="screen-spin"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="p-4 flex-1 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                        <div className="flex items-center gap-2">
                          <RotateCw className="w-4 h-4 text-purple-400" />
                          <span className="font-bold text-sm text-white">Daily Spin Wheel</span>
                        </div>
                        <div className="flex items-center gap-1 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30 text-amber-300 text-xs font-bold">
                          <span>⭐</span>
                          <span>90,165</span>
                        </div>
                      </div>

                      {/* Interactive Spin Wheel graphic */}
                      <div className="flex-1 flex flex-col items-center justify-center my-2 relative">
                        <div className="text-center mb-2">
                          <span className="text-[11px] text-purple-300 font-medium">Free Spin Ready!</span>
                          <p className="text-[10px] text-slate-400">Tap below to test your luck</p>
                        </div>

                        {/* Wheel container */}
                        <div className="relative w-48 h-48 flex items-center justify-center">
                          {/* Pointer needle */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[14px] border-t-amber-400 drop-shadow-md" />
                          
                          {/* Spinning circle */}
                          <motion.div
                            animate={{ rotate: spinDeg }}
                            transition={{ duration: isSpinning ? 3 : 0, ease: [0.12, 0.8, 0.32, 1] }}
                            className="w-44 h-44 rounded-full border-4 border-amber-400 bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900 shadow-xl shadow-purple-950/60 relative overflow-hidden flex items-center justify-center"
                          >
                            {/* Wheel Wedges / Sections */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="absolute w-full h-0.5 bg-amber-400/40" />
                              <div className="absolute w-full h-0.5 bg-amber-400/40 rotate-45" />
                              <div className="absolute w-full h-0.5 bg-amber-400/40 rotate-90" />
                              <div className="absolute w-full h-0.5 bg-amber-400/40 rotate-135" />
                            </div>

                            {/* Prize labels placed along segments */}
                            <span className="absolute top-2 text-[10px] font-black text-amber-300">2500</span>
                            <span className="absolute bottom-2 text-[10px] font-black text-amber-300">1000</span>
                            <span className="absolute right-2 text-[10px] font-black text-purple-200">500</span>
                            <span className="absolute left-2 text-[10px] font-black text-purple-200">250</span>
                            <span className="absolute top-8 right-6 text-[10px] font-black text-emerald-300">150</span>
                            <span className="absolute bottom-8 left-6 text-[10px] font-black text-cyan-300">300</span>

                            {/* Center Hub button */}
                            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 border-2 border-white shadow-lg flex items-center justify-center z-10">
                              <span className="text-[10px] font-extrabold text-slate-950 tracking-tighter">SPIN</span>
                            </div>
                          </motion.div>
                        </div>

                        {/* Spin Result Notification */}
                        {spinResult && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 bg-emerald-500/20 border border-emerald-500/40 rounded-lg px-3 py-1 text-center"
                          >
                            <p className="text-[11px] text-emerald-300 font-bold">🎉 Won +{spinResult} Coins!</p>
                          </motion.div>
                        )}
                      </div>

                      {/* Spin Action Button */}
                      <button
                        id="interactive-spin-btn"
                        onClick={handleTriggerSpin}
                        disabled={isSpinning}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/30 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <RotateCw className={`w-3.5 h-3.5 ${isSpinning ? 'animate-spin' : ''}`} />
                        <span>{isSpinning ? 'Spinning Wheel...' : 'Spin Now (Free)'}</span>
                      </button>
                    </motion.div>
                  )}

                  {/* SCREEN 2: SCRATCH & WIN */}
                  {currentSlide.category === 'scratch' && (
                    <motion.div
                      key="screen-scratch"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="p-4 flex-1 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                          <span className="font-bold text-sm text-white">Scratch & Win</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          10 Cards Left
                        </span>
                      </div>

                      {/* Scratch Card Element */}
                      <div className="my-auto py-2">
                        <div className="text-center mb-2">
                          <span className="text-[11px] text-amber-300 font-medium">Gold Rush Ticket</span>
                          <p className="text-[10px] text-slate-400">Click card below to scratch & reveal</p>
                        </div>

                        <div
                          onClick={() => setIsScratched(!isScratched)}
                          className="relative h-44 rounded-2xl border-2 border-amber-400/40 bg-gradient-to-br from-amber-900/40 via-purple-900/40 to-slate-900 p-4 flex flex-col items-center justify-center cursor-pointer shadow-xl overflow-hidden group"
                        >
                          {/* Underneath layer (revealed) */}
                          <div className="text-center flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-2xl mb-1.5 animate-bounce">
                              💰
                            </div>
                            <span className="text-[10px] text-amber-300 uppercase tracking-widest font-bold">Congratulations</span>
                            <span className="text-2xl font-black text-white font-['Outfit',sans-serif]">+350 COINS</span>
                            <span className="text-[10px] text-emerald-400 font-semibold mt-1">✓ Credited to Balance</span>
                          </div>

                          {/* Scratch foil cover layer */}
                          <motion.div
                            animate={{ opacity: isScratched ? 0 : 1, scale: isScratched ? 1.05 : 1 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute inset-0 bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-300 flex flex-col items-center justify-center p-4 text-slate-950 font-bold ${
                              isScratched ? 'pointer-events-none' : ''
                            }`}
                          >
                            <Sparkles className="w-8 h-8 text-slate-950 mb-1" />
                            <span className="text-xs font-extrabold uppercase tracking-wider">TAP TO SCRATCH</span>
                            <span className="text-[9px] opacity-80 mt-0.5">Reveal Guaranteed Coins</span>
                          </motion.div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setIsScratched(false)}
                          className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
                        >
                          Reset Card
                        </button>
                        <button
                          onClick={() => setIsScratched(true)}
                          className="flex-1 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 text-xs font-bold cursor-pointer"
                        >
                          Instant Scratch
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 3: DICE / BONES GAME */}
                  {currentSlide.category === 'dice' && (
                    <motion.div
                      key="screen-dice"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="p-4 flex-1 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                        <div className="flex items-center gap-2">
                          <Dices className="w-4 h-4 text-cyan-400" />
                          <span className="font-bold text-sm text-white">Dice & Bones</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-cyan-300 font-semibold bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                          Multiplier: 3.5x
                        </div>
                      </div>

                      {/* Interactive Dice Tray */}
                      <div className="my-auto py-2 flex flex-col items-center">
                        <div className="text-center mb-3">
                          <span className="text-[11px] text-cyan-300 font-medium">Roll For High Numbers</span>
                          <p className="text-[10px] text-slate-400">Doubles award 500 Bonus Points</p>
                        </div>

                        {/* Dice Container */}
                        <div className="flex items-center justify-center gap-4 py-3">
                          {diceValues.map((val, dIdx) => (
                            <motion.div
                              key={dIdx}
                              animate={{
                                rotate: isRollingDice ? [0, 90, 180, 270, 360] : 0,
                                scale: isRollingDice ? [1, 1.15, 0.95, 1] : 1,
                              }}
                              transition={{ duration: 0.2, repeat: isRollingDice ? Infinity : 0 }}
                              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-slate-200 shadow-xl shadow-cyan-950/50 flex flex-col justify-between p-2.5 border-2 border-cyan-400"
                            >
                              {/* Simple dice dot pattern according to value */}
                              <div className="flex justify-between w-full">
                                <span className={`w-2.5 h-2.5 rounded-full bg-slate-900 ${val > 1 ? 'opacity-100' : 'opacity-0'}`} />
                                <span className={`w-2.5 h-2.5 rounded-full bg-slate-900 ${val > 3 ? 'opacity-100' : 'opacity-0'}`} />
                              </div>
                              <div className="flex justify-center w-full">
                                <span className={`w-2.5 h-2.5 rounded-full bg-red-600 ${val % 2 === 1 ? 'opacity-100' : 'opacity-0'}`} />
                              </div>
                              <div className="flex justify-between w-full">
                                <span className={`w-2.5 h-2.5 rounded-full bg-slate-900 ${val > 3 ? 'opacity-100' : 'opacity-0'}`} />
                                <span className={`w-2.5 h-2.5 rounded-full bg-slate-900 ${val > 1 ? 'opacity-100' : 'opacity-0'}`} />
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-2 text-center">
                          <span className="text-xs font-extrabold text-white">
                            Total Score: {diceValues[0] + diceValues[1]}
                          </span>
                          {diceValues[0] === diceValues[1] && (
                            <span className="block text-[10px] text-amber-400 font-bold mt-0.5">
                              ✨ DOUBLE ROLL! +500 COINS
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        id="roll-dice-btn"
                        onClick={handleRollDice}
                        disabled={isRollingDice}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/30 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Dices className={`w-3.5 h-3.5 ${isRollingDice ? 'animate-spin' : ''}`} />
                        <span>{isRollingDice ? 'Rolling Bones...' : 'Roll Dice (Cost: 10 Coins)'}</span>
                      </button>
                    </motion.div>
                  )}

                  {/* SCREEN 4: DAILY TASKS (MATCHING USER SCREENSHOT 1) */}
                  {currentSlide.category === 'tasks' && (
                    <motion.div
                      key="screen-tasks"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="p-3.5 flex-1 flex flex-col space-y-3 overflow-y-auto"
                    >
                      {/* Top Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                            A
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-white leading-tight">Hello, Admin 👋</p>
                            <p className="text-[9px] text-slate-400">Welcome Back!</p>
                          </div>
                        </div>
                        <div className="relative">
                          <span className="text-sm">🔔</span>
                          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 text-[8px] text-white flex items-center justify-center font-bold">
                            3
                          </span>
                        </div>
                      </div>

                      {/* Your Balance Card */}
                      <div className="rounded-2xl bg-gradient-to-r from-indigo-950/80 to-purple-950/80 border border-indigo-500/30 p-3 shadow-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 font-medium">Your Balance</span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className="text-amber-400 text-base">⭐</span>
                              <span className="text-lg font-black text-white">90165</span>
                            </div>
                            <span className="text-[9px] text-slate-400">≈ ₹901.65 (1,000 Coins = ₹10)</span>
                          </div>
                          <button className="px-2.5 py-1 rounded-lg bg-white text-slate-900 text-[10px] font-bold shadow hover:bg-slate-200">
                            Wallet &gt;
                          </button>
                        </div>
                      </div>

                      {/* Complete Tasks banner */}
                      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-indigo-600/30 flex items-center justify-center text-indigo-400 text-xs">
                            📋
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-white">Complete Tasks</p>
                            <p className="text-[9px] text-amber-400 font-medium">Earn Coins</p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-[10px] font-bold">
                          Start Now &gt;
                        </span>
                      </div>

                      {/* Daily Streak Streak UI */}
                      <div className="rounded-2xl bg-slate-900/70 border border-slate-800/80 p-2.5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold text-white">Daily Streak 🔥</span>
                          <span className="text-[10px] text-amber-400 font-bold">★ 1</span>
                        </div>
                        <div className="grid grid-cols-5 gap-1 text-center">
                          {[
                            { day: 'Day 1', coins: 100, active: true },
                            { day: 'Day 2', coins: 200, active: false },
                            { day: 'Day 3', coins: 300, active: false },
                            { day: 'Day 4', coins: 400, active: false },
                            { day: 'Day 5', coins: 500, active: false },
                          ].map((d, i) => (
                            <div
                              key={i}
                              className={`p-1.5 rounded-xl border text-[9px] ${
                                d.active
                                  ? 'bg-purple-900/50 border-purple-500/80 text-white'
                                  : 'bg-slate-950/60 border-slate-800 text-slate-400'
                              }`}
                            >
                              <span className="block font-semibold">{d.day}</span>
                              <span className="text-amber-400 font-bold mt-0.5 block">⭐ {d.coins}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 5: REWARDS & EARN COINS (MATCHING USER SCREENSHOT 2) */}
                  {currentSlide.category === 'rewards' && (
                    <motion.div
                      key="screen-rewards"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="p-3.5 flex-1 flex flex-col space-y-2.5 overflow-y-auto"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <h4 className="font-bold text-sm text-white">Earn Coins</h4>
                        <span className="text-[10px] text-amber-400 font-bold">90,165 Coins</span>
                      </div>

                      {/* Coupon Code Promo Card */}
                      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">
                            🎫
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-[11px] font-bold text-white">Coupon Code</span>
                              <span className="bg-pink-600 text-[8px] text-white px-1 py-0.2 rounded font-bold">NEW</span>
                            </div>
                            <span className="text-[8px] text-slate-400">Have a promo code?</span>
                          </div>
                        </div>
                        <button className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 font-bold text-[10px]">
                          Redeem
                        </button>
                      </div>

                      {/* 2x3 Grid of Earning Activities */}
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { title: 'Redeem Code', sub: 'Promo coupon codes', icon: '🎫', color: 'bg-amber-950/40 border-amber-500/30' },
                          { title: 'Daily Bonus', sub: 'Claim daily rewards', icon: '🎁', color: 'bg-orange-950/40 border-orange-500/30' },
                          { title: 'Spin Wheel', sub: 'Spin to win', icon: '🎡', color: 'bg-purple-950/40 border-purple-500/30' },
                          { title: 'Watch & Earn', sub: 'Watch video ads', icon: '▶️', color: 'bg-cyan-950/40 border-cyan-500/30' },
                          { title: 'Scratch Card', sub: 'Scratch to win', icon: '🎟️', color: 'bg-pink-950/40 border-pink-500/30' },
                          { title: 'Refer & Earn', sub: 'Invite friends', icon: '👥', color: 'bg-emerald-950/40 border-emerald-500/30' },
                        ].map((act, aIdx) => (
                          <div
                            key={aIdx}
                            className={`p-2.5 rounded-xl border ${act.color} flex flex-col items-center text-center`}
                          >
                            <span className="text-lg mb-1">{act.icon}</span>
                            <span className="text-[10px] font-bold text-white">{act.title}</span>
                            <span className="text-[8px] text-slate-400 mt-0.5">{act.sub}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 6: WALLET & WITHDRAWAL (MATCHING USER SCREENSHOT 3) */}
                  {currentSlide.category === 'wallet' && (
                    <motion.div
                      key="screen-wallet"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="p-3.5 flex-1 flex flex-col space-y-2.5 overflow-y-auto"
                    >
                      <div className="flex items-center justify-between pb-1">
                        <span className="text-[11px] font-bold text-white">← Wallet & Withdraw</span>
                        <span className="text-xs text-slate-400">🕒</span>
                      </div>

                      {/* Big Gradient Balance Card */}
                      <div className="rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 p-3 text-white shadow-lg">
                        <span className="text-[9px] uppercase tracking-widest font-extrabold opacity-90 block">TOTAL BALANCE</span>
                        <div className="flex items-center gap-1.5 my-0.5">
                          <span className="text-amber-300 text-lg">⭐</span>
                          <span className="text-xl font-black">90165</span>
                        </div>
                        <p className="text-[10px] font-bold opacity-95">≈ ₹901.65</p>
                        <div className="mt-1.5 pt-1.5 border-t border-white/20 text-[8px] opacity-90 flex items-center gap-1">
                          <span>⚡</span>
                          <span>Conversion Rate: 1,000 Coins = ₹10 (100 Coins = ₹1)</span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <button className="flex-1 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-[10px] flex items-center justify-center gap-1">
                          <span>🎁</span>
                          <span>Redeem Gift Cards</span>
                        </button>
                        <button className="px-3 py-1.5 rounded-xl bg-slate-800 text-white font-medium text-[10px]">
                          History
                        </button>
                      </div>

                      {/* Withdrawal Categories */}
                      <div>
                        <span className="text-[10px] font-bold text-slate-300 block mb-1.5">Select Withdrawal Category</span>
                        <div className="flex gap-1.5 text-[9px] font-bold">
                          <button
                            onClick={() => setSelectedWalletTab('esewa')}
                            className={`px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer ${
                              selectedWalletTab === 'esewa'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            <span>🇳🇵</span>
                            <span>eSewa (3)</span>
                          </button>
                          <button
                            onClick={() => setSelectedWalletTab('ff')}
                            className={`px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer ${
                              selectedWalletTab === 'ff'
                                ? 'bg-blue-500 text-white'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            <span>💎</span>
                            <span>FF Diamond (3)</span>
                          </button>
                          <button
                            onClick={() => setSelectedWalletTab('robux')}
                            className={`px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer ${
                              selectedWalletTab === 'robux'
                                ? 'bg-amber-500 text-slate-950'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            <span>🪙</span>
                            <span>Robux (0)</span>
                          </button>
                        </div>
                      </div>

                      {/* Withdrawal Item list */}
                      <div className="space-y-1.5">
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-xs">
                              🇳🇵
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-white">200 rupess</p>
                              <div className="flex items-center gap-1 text-[8px] text-slate-400">
                                <span className="text-purple-400 font-semibold">eSewa</span>
                                <span className="text-emerald-400 bg-emerald-950/40 px-1 rounded">FIXED</span>
                              </div>
                            </div>
                          </div>
                          <span className="text-[9px] font-bold text-amber-400">Fixed: 20000 Coins &gt;</span>
                        </div>

                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-xs">
                              🇳🇵
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-white">300 rupess</p>
                              <div className="flex items-center gap-1 text-[8px] text-slate-400">
                                <span className="text-purple-400 font-semibold">eSewa</span>
                                <span className="text-emerald-400 bg-emerald-950/40 px-1 rounded">FIXED</span>
                              </div>
                            </div>
                          </div>
                          <span className="text-[9px] font-bold text-amber-400">Fixed: 30000 Coins &gt;</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom App Navigation Bar (Replicating the real TaskEarn navigation) */}
              <div className="h-12 bg-slate-950/95 border-t border-slate-800/80 flex items-center justify-around px-3 text-[9px] font-semibold text-slate-400 shrink-0 z-30">
                <button
                  onClick={() => selectSlide(3)}
                  className={`flex flex-col items-center gap-0.5 cursor-pointer ${
                    currentSlide.category === 'tasks' ? 'text-pink-500' : 'hover:text-slate-200'
                  }`}
                >
                  <span>🏠</span>
                  <span>Home</span>
                </button>
                <button
                  onClick={() => selectSlide(4)}
                  className={`flex flex-col items-center gap-0.5 cursor-pointer ${
                    currentSlide.category === 'rewards' || currentSlide.category === 'spin' || currentSlide.category === 'scratch' || currentSlide.category === 'dice'
                      ? 'text-pink-500'
                      : 'hover:text-slate-200'
                  }`}
                >
                  <span>💲</span>
                  <span>Earn</span>
                </button>
                <button
                  onClick={() => selectSlide(5)}
                  className={`flex flex-col items-center gap-0.5 cursor-pointer ${
                    currentSlide.category === 'wallet' ? 'text-pink-500' : 'hover:text-slate-200'
                  }`}
                >
                  <span>💳</span>
                  <span>Wallet</span>
                </button>
                <button
                  onClick={() => selectSlide(3)}
                  className="flex flex-col items-center gap-0.5 hover:text-slate-200 cursor-pointer"
                >
                  <span>🕒</span>
                  <span>History</span>
                </button>
              </div>

              {/* Home bar indicator */}
              <div className="h-3 bg-slate-950 flex items-center justify-center shrink-0">
                <div className="w-24 h-1 rounded-full bg-slate-700" />
              </div>
            </div>
          </div>

          {/* Slider Indicator Dots */}
          <div className="flex items-center gap-2 mt-6">
            {SCREENSHOT_SLIDES.map((_, idx) => (
              <button
                key={idx}
                id={`slider-dot-${idx}`}
                onClick={() => selectSlide(idx)}
                aria-label={`Jump to screenshot ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-gradient-to-r from-amber-400 to-indigo-500 shadow-md shadow-indigo-500/50'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Prompt explicit requirement: Add a “Download Now” button below the slider */}
          <div className="mt-8 text-center">
            <button
              id="slider-download-now-btn"
              onClick={onDownloadClick}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 hover:from-amber-300 hover:via-orange-400 hover:to-pink-400 text-slate-950 font-extrabold text-base sm:text-lg shadow-xl shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto cursor-pointer font-['Outfit',sans-serif]"
            >
              <Download className="w-5 h-5 stroke-[2.5]" />
              <span>Download Now</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-950/20 text-slate-950 font-bold border border-slate-950/20">
                APK • 18.4 MB
              </span>
            </button>
            <p className="mt-2.5 text-xs text-slate-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct APK & Google Drive link • 100% Virus-Free & Verified</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
