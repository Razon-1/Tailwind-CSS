import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
    <div class="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center max-w-lg">

      <div class="flex justify-center gap-6 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
      </div>

      <h1 class="text-4xl font-bold text-white mb-4">
        Welcome to <span class="text-yellow-300">Namespace It</span>
      </h1>

      <div class="card">
        <button id="counter" type="button" class="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:scale-105 transition"></button>
      </div>

      <p class="text-white/80 mt-4">
        Click on the Vite logo to learn more
      </p>

    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))