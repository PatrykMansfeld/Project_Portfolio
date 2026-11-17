import { createApp } from 'vue'
// Self-hosted fonts (no request to Google; only the needed unicode subsets load)
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import './styles/index.css'
import App from './App.vue'

createApp(App).mount('#app')
