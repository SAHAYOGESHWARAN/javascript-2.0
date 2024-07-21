
document.getElementById('myid').addEventListener('click', _.throttle((e) => {
    console.log('you clicked me');
}, 5000));
