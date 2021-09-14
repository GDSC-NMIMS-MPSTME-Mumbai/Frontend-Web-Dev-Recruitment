const toggleSwitch =
    document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {

    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    } else {
        document.documentElement.setAttribute('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);