import { ScreenshotSlide, FeatureItem, DownloadConfig } from '../types';

export const DEFAULT_DOWNLOAD_CONFIG: DownloadConfig = {
  // Direct APK download served directly to Android File Manager
  apkUrl: '/TaskEarn.apk',
  googleDriveUrl: 'https://drive.google.com/file/d/13tb91ZrJ8WYcOzvoxFmOZ14GtFRpKr9r/view?usp=sharing',
  version: 'v1.0 (Latest)',
  fileSize: '34 MB',
  minAndroid: 'Android 7.0+',
  updatedDate: 'September 2026',
};

export const SCREENSHOT_SLIDES: ScreenshotSlide[] = [
  {
    id: 'spin',
    title: 'Daily Lucky Spin',
    subtitle: 'Spin the wheel every 2 hours to win jackpot coins & bonus tokens',
    badge: 'High Payout',
    category: 'spin',
    icon: 'RotateCw',
    tagline: 'Up to 2,500 coins per spin',
  },
  {
    id: 'scratch',
    title: 'Scratch & Win',
    subtitle: 'Scratch gold and silver virtual cards for instant coin prizes',
    badge: '100% Win Rate',
    category: 'scratch',
    icon: 'Sparkles',
    tagline: '10 Free daily scratch tickets',
  },
  {
    id: 'dice',
    title: 'Dice & Bones Game',
    subtitle: 'Roll pairs of dice, hit multipliers, and unlock treasure tiers',
    badge: 'Fun Mini-Game',
    category: 'dice',
    icon: 'Dices',
    tagline: 'Multiply earnings up to 10x',
  },
  {
    id: 'tasks',
    title: 'Daily Tasks & Streaks',
    subtitle: 'Complete short daily tasks, surveys, and 7-day login streaks',
    badge: 'Daily Streak 🔥',
    category: 'tasks',
    icon: 'CheckSquare',
    tagline: 'Day 1 to 7 exponential rewards',
  },
  {
    id: 'rewards',
    title: 'Coins & Rewards Hub',
    subtitle: 'Real-time coin counter, promo coupon redemption & bonus boosters',
    badge: '1,000 Coins = ₹10',
    category: 'rewards',
    icon: 'Coins',
    tagline: 'Promo codes & friend bonuses',
  },
  {
    id: 'wallet',
    title: 'Instant Wallet Payouts',
    subtitle: 'Fast withdrawals to eSewa, Free Fire Diamonds, Robux & vouchers',
    badge: 'Instant Transfer',
    category: 'wallet',
    icon: 'Wallet',
    tagline: 'Withdraw within 5 minutes',
  },
];

export const FEATURE_CARDS: FeatureItem[] = [
  {
    id: 'daily-rewards',
    icon: 'Gift',
    title: 'Daily Rewards',
    subtitle: 'Login & Claim Every 24h',
    description: 'Keep your flame alive! Claim continuous daily login streaks starting from 100 coins on Day 1 all the way to 500+ coins with weekend mystery gifts.',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    badge: '🎁 100 - 500+ Coins Daily',
    highlights: ['7-Day streak multipliers', 'Consecutive bonus crates', 'One-click instant claim'],
  },
  {
    id: 'easy-tasks',
    icon: 'Target',
    title: 'Easy Tasks',
    subtitle: 'Fast Micro-Activities',
    description: 'Earn coins by completing enjoyable activities: testing popular apps, short video clips, daily surveys, and fun sponsored partner missions.',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    badge: '🎯 50+ Daily Offers',
    highlights: ['Micro-tasks take < 2 minutes', 'Direct coin crediting', 'Updated every morning'],
  },
  {
    id: 'daily-spin',
    icon: 'Disc3',
    title: 'Daily Spin',
    subtitle: 'Spin Wheel of Fortune',
    description: 'Experience the excitement of the Lucky Spin wheel. Free spins replenished throughout the day with guaranteed prizes and jackpot slots.',
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    badge: '🎰 Up to 2,500 Coins',
    highlights: ['No empty spins guarantee', 'Special bonus multipliers', 'Extra spin rewards via tasks'],
  },
  {
    id: 'scratch-win',
    icon: 'Sparkles',
    title: 'Scratch & Win',
    subtitle: 'Digital Golden Cards',
    description: 'Swipe and reveal! Enjoy realistic scratch cards offering instantaneous coin drops. Match 3 symbols or reveal lucky numbers to hit big payouts.',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    badge: '🎟️ Instant Reveal',
    highlights: ['Multiple card tiers (Silver & Gold)', 'Instant wallet synchronization', 'Daily refreshed card stacks'],
  },
  {
    id: 'dice-bones',
    icon: 'Dices',
    title: 'Dice / Bones Game',
    subtitle: 'Classic Roll & Win',
    description: 'Roll dice pairs in the interactive bones minigame. Score doubles, advance along the reward track, and multiply your daily task balance.',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    badge: '🎲 Multiplier Mode',
    highlights: ['Interactive 3D physics dice roll', 'Streak multipliers up to 10x', 'Leaderboard bonus rounds'],
  },
  {
    id: 'reward-wallet',
    icon: 'WalletCards',
    title: 'Reward Wallet',
    subtitle: 'Real Payouts & Transfers',
    description: 'Transparent 1,000 Coins = ₹10 exchange formula. Seamlessly cash out your earnings to eSewa, Free Fire Diamonds, Robux, and shopping gift cards.',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    badge: '💰 Quick Withdrawal',
    highlights: ['eSewa instant direct bank/wallet', 'FF Diamonds & Robux top-ups', 'Full transaction history log'],
  },
];

export const SOCIAL_STATS = [
  { label: 'Active Earners', value: '11K+', subtext: 'Verified users across South Asia' },
  { label: 'Coins Paid Out', value: '45M+', subtext: 'Over ₹450,000+ rewarded' },
  { label: 'Play Store Rating', value: '4.8 ★', subtext: 'Based on 3,400+ reviews' },
  { label: 'Avg. Payout Time', value: '< 5 Mins', subtext: 'Instant automated processing' },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Download TaskEarn APK',
    desc: 'Install the lightweight, 100% verified Android APK directly from our official server or Google Drive link.',
    icon: 'Download',
  },
  {
    step: '02',
    title: 'Play Games & Complete Tasks',
    desc: 'Spin the wheel, scratch cards, roll the dice, and complete quick micro-offers to fill your coin balance.',
    icon: 'Gamepad2',
  },
  {
    step: '03',
    title: 'Withdraw Real Cash & Rewards',
    desc: 'Redeem your points directly to eSewa, Free Fire Diamonds, Robux, or popular gift cards within minutes.',
    icon: 'Banknote',
  },
];
