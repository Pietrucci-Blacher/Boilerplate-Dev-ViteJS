import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
    root: resolve("sources"),
    vite: {
        css:
        {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "src/styles/main.scss";`
                }
            }
        }
    },
    server: {
        port: 8000,
        host: "0.0.0.0"
    }
})
