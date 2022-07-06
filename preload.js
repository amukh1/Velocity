// preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])

    
const remote = require('electron').remote;
console.log('PRELOAD!')

document.getElementById('don').onclick = function() {
  // window.location.href = 'https://cash.app/$amukh1'
  require('electron').shell.openExternal("https://cash.app/$amukh1")

      // loop ends here
    }}
  });