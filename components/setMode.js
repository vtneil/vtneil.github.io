if (typeof (localStorage) !== 'undefined') {
    if (localStorage.getItem('mode') === null) {
        localStorage.setItem('mode', 'light');
        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.body.className = 'bg-light';
    } else {
        document.documentElement.setAttribute('data-bs-theme', localStorage.getItem('mode'));
        document.body.className = `bg-${localStorage.getItem('mode')}`;
    }
}