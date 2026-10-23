import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
// singlefile plugin is optional; remove it for a normal multi-file build
export default defineConfig({ plugins: [react(), viteSingleFile()], build: { assetsInlineLimit: 100000000 } })
