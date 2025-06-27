import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: vercel(),
    // Optional: trailingSlash, prerender, etc.
  },
  preprocess: vitePreprocess(),
};
