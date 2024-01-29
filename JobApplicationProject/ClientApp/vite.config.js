import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [
            react(),
            viteTsconfigPaths(),
            svgr({ svgrOptions: { icon: true } }),
            ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') })
        ],
        server: {
            port: 5000,
            open: true
        },
        build: {
            outDir: 'build',
            sourcemap: true
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: 'src/setupTests',
            mockReset: true
        },
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './src')
            }
        }
    }
})
