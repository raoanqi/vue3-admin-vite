import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果不安装@types/node库，下面这个没法识别
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, '/src')
        }
    },
    css: {
        preprocessorOptions: {
            // 全局引入scss中的预定义文件
            scss: {
                additionalData: '@import "@/style/globalVariable.scss";'
            }
        }
    }
})
