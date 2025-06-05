import { defineConfig } from 'astro/config'
import { SITE } from './src/config'

import react from '@astrojs/react'

import tailwindcss from '@tailwindcss/vite'

import solidJs from '@astrojs/solid-js'

export default defineConfig({
  integrations: [react({ include: ['**/react/*'] }), solidJs({ include: ['**/solid/*'] })],
  site: SITE.url,
  vite: {
    plugins: [tailwindcss()],
  },
})
