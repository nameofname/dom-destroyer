const { listenKeypress } = require('char-code-sequence');
const { toggle } = require('./domDestroyer');


const startArr = "destroy".split('').map(letter => letter.charCodeAt());
const stopArr = "stop".split('').map(letter => letter.charCodeAt());

// enable / disable when user types key phrases
listenKeypress(startArr, toggle);
listenKeypress(stopArr, toggle);
// enable / disable when the dom destroyer icon is clicked
chrome.runtime.onMessage.addListener(msg => {
    if(msg.txtt==="domDestroyer") {
        toggle();
    }
});
