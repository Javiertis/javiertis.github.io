const switchTitle = () => {
    const pageTitles = Object.values(document.getElementsByClassName('title'));
    const titles = [
        'Javier Tejedor',
        'J4v13r T3j3d0r',
        '/home/javier_tejedor/portfolio $',
        'C:\\Users\\javier_tejedor >',
        'Console.WriteLine("Javier Tejedor")',
        'echo "Javier Tejedor"',
        'System.out.println("Javier Tejedor")',
        'console.log("Javier Tejedor")'
    ];
    pageTitles.forEach(p => p.innerHTML = titles[(Math.random() * titles.length) | 0]);
};

const userThemePreference = window.matchMedia('(prefers-color-scheme: dark)');

const toggleDark = () => document.getElementsByTagName('body')[0].classList.toggle('dark');

const switchTheme = userPreference => {
    document.getElementById('switch-theme').checked = userPreference.matches;
    if (document.getElementById('switch-theme').checked) { toggleDark(); };
};


switchTheme(userThemePreference);

userThemePreference.addEventListener('change', switchTheme);

setInterval(switchTitle, 60_000);
