import App from './App.svelte'
import 'virtual:windi.css'
import './_global.css'
const app = new App({
  target: document.getElementById('app')
})

export default app
