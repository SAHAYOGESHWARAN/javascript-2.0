window.onload = function () {
    const main = document.getElementById('main'); // Corrected to use string 'main'
    const one =  document.getElementById('one');  // Changed to correct ID 'one'
    const two =  document.getElementById('two');  // Changed to correct ID 'two'
    const body = document.querySelector('body');
    if (main) {
        main.addEventListener('click', e => {
            console.log('main clicked');
        },true);
    }
 
    if (one) {
        one.addEventListener('click', e => {
            console.log('one clicked');
        },true);
    }
 
    if (two) {
        two.addEventListener('click', e => {
            console.log('two clicked');
        },true);
    body.addEventListener('click',e=>{
        console.log('body clicked');
    },true);
    }
 };
 