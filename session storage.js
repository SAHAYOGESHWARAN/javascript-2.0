function setSessionStorage() {
    const name = document.getElementById('session-name').value.trim();
    const age = document.getElementById('session-age').value.trim();
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('age', age);
    document.getElementById('session-output').innerText = `Data set: Name = ${name}, Age = ${age}`;
}

function getSessionStorage() {
    const name = sessionStorage.getItem('name');
    const age = sessionStorage.getItem('age');
    if (name && age) {
        document.getElementById('session-output').innerText = `Name = ${name}, Age = ${age}`;
    } else {
        document.getElementById('session-output').innerText = 'No data found in session storage.';
    }
}


function clearSessionStorage() {
    sessionStorage.clear();
    document.getElementById('session-output').innerText = 'Session storage cleared.';
}