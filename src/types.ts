export interface ScreenshotSlide {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: 'spin' | 'scratch' | 'dice' | 'tasks' | 'rewards' | 'wallet';
  icon: string;
  tagline: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  badge: string;
  highlights: string[];
}

export interface DownloadConfig {
  apkUrl: string;
  mediafireUrl?: string;
  googleDriveUrl: string;
  directServerUrl?: string;
  version: string;
  fileSize: string;
  minAndroid: string;
  updatedDate: string;
}
