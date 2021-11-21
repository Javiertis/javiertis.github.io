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

const checked = window.matchMedia("(prefers-color-scheme: dark)").matches;

const switchDark = () => document.getElementsByTagName('body')[0].classList.toggle('dark');

document.getElementById('switch-theme').checked = checked;

if (checked) { switchDark(); };

setInterval(switchTitle, 60_000);
