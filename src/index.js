const { listenKeypress } = require('char-code-sequence');
const { toggle, enable, disable } = require('./domDestroyer');


const startArr = "destroy".split('').map(letter => letter.charCodeAt());
const stopArr = "stop".split('').map(letter => letter.charCodeAt());

// enable / disable when user types key phrases
listenKeypress(startArr, enable);
listenKeypress(stopArr, disable);
// enable / disable when the dom destroyer icon is clicked
chrome.runtime.onMessage.addListener(msg => {
    if(msg.txtt==="domDestroyer") {
        toggle();
    }
});
