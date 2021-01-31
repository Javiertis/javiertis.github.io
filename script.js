const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})

var brand = document.getElementById('brand');
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
    brand.innerText = titles[i];
}

newTitle()