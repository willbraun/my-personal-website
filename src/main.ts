import './normalize.css'
import './scss/main.scss'
import './app.css'
import App from './App.svelte'

const app = new App({
	target: document.getElementById('app'),
})

export default app
