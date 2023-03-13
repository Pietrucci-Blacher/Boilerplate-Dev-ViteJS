import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
    root: resolve("sources"),
    base: "./",
    server: {
        port: 8000,
        host: "0.0.0.0",
    },
    preview: {
        port: 8001,
        host: "0.0.0.0"
    },
    scss: {
        watch: "sources/src/scss/main.scss",
    }
})
