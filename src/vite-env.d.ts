/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_UNSPLASH_API_KEY: string;
}

interface Document {
  startViewTransition(fn: () => void)
}