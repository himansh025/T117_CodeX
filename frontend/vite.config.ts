import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // exclude: ['lucide-react'],
  },
  // server: {
  //   host: true, // allows access from network / tunnels
  //   allowedHosts: [
  //     '*',
  //   ],
  // },
})
