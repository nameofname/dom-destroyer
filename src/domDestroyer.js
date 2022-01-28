const muscleAscii = require('./muscle-ascii');

let isOn = false;
function removeScrollClasses() {
    // remove all classes from the DOM that contain the word 'Scroll'
    // this is specifically so I can read recipes on my favorite site
    var items = document.getElementsByTagName("*");
    Array.from(items).forEach(ele => {
        ele.classList.forEach(klass => {
            if (klass.toLowerCase().includes('scroll')) {
                ele.classList.remove(klass);
            }
        });
    });
}
function destroy(e) {
    e.preventDefault();
    e.target.parentNode.removeChild(e.target);
}
function enable() {
    document.addEventListener('click', destroy);
    removeScrollClasses();
    isOn = true;
    console.log(muscleAscii);
}
function disable() {
    document.removeEventListener('click', destroy);
    isOn = false;
    console.log('stop DOM Destroyer');
}
function toggle() {
    isOn ? disable() : enable();
}

module.exports = { toggle };