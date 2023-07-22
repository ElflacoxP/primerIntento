import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'
import App from './App'

window.addEventListener('hashchange', () => {
    console.log(window.location.hash)
})

document.body.innerHTML = '<div id="root"></div>'




const root = createRoot(document.getElementById('root'))
root.render(<App />)