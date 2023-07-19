import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles.scss'
import App from './App'

document.body.innerHTML = '<div id="app"></div>'

window.addEventListener('hashchange', () => {
    console.log(window.location.hash)
})

const root = createRoot(document.getElementById('app'))
root.render(<App />)
