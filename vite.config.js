import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/Tic-Tac-Toe-game/",
  plugins: [react()],
})
