// importaciones necesarias, incluyendo el funcionamiento de tailwind
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // inclusion de tailwind css v4
  plugins: [react(), tailwindcss()],
})
