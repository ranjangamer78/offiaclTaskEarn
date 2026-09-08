import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(({ command }) => {
  // Use relative './' base for production builds so assets resolve correctly
  // on any GitHub repository name, user page, custom domain, or subfolder.
  const base = command === 'build' ? './' : '/';

  return {
    base,
    build: {
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
      cssTarget: 'chrome61',
    },
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'serve-apk',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url && (req.url.endsWith('.apk') || req.url.includes('.apk?') || req.url.includes('/download-apk'))) {
              const apkPath = path.resolve(__dirname, 'public', 'TaskEarn.apk');
              if (fs.existsSync(apkPath)) {
                const stat = fs.statSync(apkPath);
                res.writeHead(200, {
                  'Content-Type': 'application/vnd.android.package-archive',
                  'Content-Length': stat.size,
                  'Content-Disposition': 'attachment; filename="TaskEarn.apk"',
                  'Cache-Control': 'public, max-age=86400',
                });
                return fs.createReadStream(apkPath).pipe(res);
              }
            }
            next();
          });
        },
        closeBundle() {
          const distDir = path.resolve(__dirname, 'dist');
          const docsDir = path.resolve(__dirname, 'docs');
          const indexPath = path.join(distDir, 'index.html');
          const fourOhFourPath = path.join(distDir, '404.html');
          if (fs.existsSync(indexPath)) {
            fs.copyFileSync(indexPath, fourOhFourPath);
          }
          // Ensure .nojekyll exists in dist so GitHub Pages does not run Jekyll processing
          fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

          // Also mirror build to docs/ so users who choose "Deploy from branch -> /docs" also work
          try {
            if (!fs.existsSync(docsDir)) {
              fs.mkdirSync(docsDir, { recursive: true });
            }
            fs.cpSync(distDir, docsDir, { recursive: true });
          } catch (e) {
            console.warn('Could not mirror to docs/ folder:', e);
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
