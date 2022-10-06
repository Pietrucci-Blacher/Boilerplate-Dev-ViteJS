import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
    root: resolve("sources"),
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "variables.scss";`

            }
        }
    },
    server: {
        port: 8000,
        host: "0.0.0.0"
    }
})
