import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    server: {
        host: "::",
        port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    base: '/',  // Add this: Ensures assets load from root on GitHub Pages/custom domain (fixes /src/main.tsx load error)
    build: {  // Add this section: Configures production bundle
        outDir: 'dist',
        sourcemap: false,  // Disable for prod (prevents /src/ exposure in errors)
        rollupOptions: {
            output: {
                manualChunks: undefined,  // Optional: Avoids chunking issues on static hosts
            },
        },
    },
}));