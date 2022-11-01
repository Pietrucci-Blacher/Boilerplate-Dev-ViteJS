import { defineConfig } from "vite"
import { resolve } from "path"

const assetsDir = "assets/"
const outputDefaults = {
    entryFileNames: `${assetsDir}[name].js`,
    chunkFileNames: `${assetsDir}[name].js`,
    assetFileNames: `${assetsDir}[name].[ext]`,
}

export default defineConfig({
    root: resolve("sources"),
    base: "./",
    server: {
        port: 8000,
        host: "0.0.0.0",
    },
    build: {
        manifest: true,
        rollupOptions: {
            output: {
                ...outputDefaults,
            }
        }
    },
    preview: {
        port: 8001,
        host: "0.0.0.0"
    },
    scss: {
        watch: "sources/src/scss/main.scss",
    }
})
