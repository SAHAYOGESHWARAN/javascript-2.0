function setCookie() {
    const name = document.getElementById('cookie-name').value.trim();
    const value = document.getElementById('cookie-value').value.trim();
    const expires = "expires=Fri, 31 Dec 9999 23:59:59 GMT"; // Set an expiry date far in the future
    document.cookie = `${name}=${value}; ${expires}; path=/`;
    document.getElementById('cookie-output').innerText = `Cookie '${name}' set with value '${value}'.`;
}

function getCookie() {
    const name = document.getElementById('cookie-name').value.trim();
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    let cookieValue = null;

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            cookieValue = cookie.substring(cookieName.length);
            break;
        }
    }

    if (cookieValue) {
        document.getElementById('cookie-output').innerText = `Cookie '${name}' has value '${cookieValue}'.`;
    } else {
        document.getElementById('cookie-output').innerText = `Cookie '${name}' not found.`;
    }
}

function deleteCookie() {
    const name = document.getElementById('cookie-name').value.trim();
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.getElementById('cookie-output').innerText = `Cookie '${name}' deleted.`;
}
