var pageTitles = Object.values(document.getElementsByClassName('title'));
var titles = [
    'Javier Tejedor',
    'J4v13r T3j3d0r',
    '/home/javier_tejedor/portfolio $',
    'C:\\Users\\javier_tejedor >',
    'Console.WriteLine("Javier Tejedor")',
    'echo "Javier Tejedor"',
    'System.out.println("Javier Tejedor")'
];

setInterval(() => {
    pageTitles.forEach(p => p.innerHTML = titles[(Math.random() * titles.length) | 0]);
}, 60_000);
