function swMode() {
    let body = document.body;
    let altMode = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', altMode);
    body.className = `bg-${altMode}`;
    if (typeof (localStorage) !== 'undefined')
        localStorage.setItem('mode', altMode);
}
