import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.scss'
import 'bootstrap'

document.body.innerHTML = '<div id="app"></div>'

const root = createRoot(document.getElementById('app'))
root.render(<App />)
