import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel serves the app from the domain root, GitHub Pages from the repo path.
  base: process.env.VERCEL ? '/' : '/sumeyyebayram2.1/',
})
