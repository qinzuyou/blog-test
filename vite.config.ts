// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    resolve:{
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    plugins: [vue()],
    define: {
      'process.env': {
        'BASE_API':"http://localhost:80/api"
      }
    },
  
    
  }
})

