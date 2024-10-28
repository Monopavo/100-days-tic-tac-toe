import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/100-days-tic-tac-toe/',
  plugins: [react()],
})
