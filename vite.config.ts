import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base = اسم المستودع على GitHub Pages. استخدم '/' للدومين الخاص أو مستودع username.github.io
export default defineConfig({ base: '/portfolio/', plugins: [react()] })
