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

const switchDark = () => document.getElementsByTagName('body')[0].classList.toggle('dark');

const switchThemeMQCallback = userPreference => {
    document.getElementById('switch-theme').checked = userPreference.matches;
    if (userPreference.matches) { switchDark(); };
};

switchThemeMQCallback(window.matchMedia('(prefers-color-scheme: dark)'));

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', switchThemeMQCallback);

setInterval(switchTitle, 60_000);
