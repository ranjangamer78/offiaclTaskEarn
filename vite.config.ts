import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
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
