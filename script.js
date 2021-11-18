var page_title = document.getElementById('title');
var titles = [
    'Javier Tejedor',
    'J4v13r T3j3d0r',
    '/home/javier_tejedor/portfolio $',
    'C:\\Users\\javier_tejedor >',
    'Console.WriteLine("Javier Tejedor")',
    'echo "Javier Tejedor"',
    'System.out.println("Javier Tejedor")'
];

function newTitle() {
    var i = (Math.random() * titles.length) | 0;
    page_title.innerText = titles[i];
}

newTitle();
