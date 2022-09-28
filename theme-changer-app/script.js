let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('value');
// console.log(style)


if (style == null) {
    setTheme('light');
} else {
    setTheme(style);
}

for (let i of switches) {
    i.addEventListener('click', function () {
        // let theme = this.dataset.theme;  //dataset is a property to get directly the custom attri
        let theme = this.getAttribute("data-theme")   //get the custom attricute using getAttribute
        console.log(theme)
        setTheme(theme);
    });
}

function setTheme(theme) {
    if (theme == 'light') {
        document.getElementById('switcher-id').href = './css/light.css';
    } else if (theme == 'sky') {
        document.getElementById('switcher-id').href = './css/sky.css';
    } else if (theme == 'purple') {
        document.getElementById('switcher-id').href = './css/purple.css';
    } else if (theme == 'dark') {
        document.getElementById('switcher-id').href = './css/black.css';
    }
    localStorage.setItem('style', theme);
}