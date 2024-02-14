const navbar = document.getElementById('navbar');
let scrolled = false;
window.onscroll = function(){
    if (window.pageYOffset >120){
        navbar.classList.remove('top');
        if(!scrolled){
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function(){
            navbar.style.transform = 'translateY(0)';
            scrolled = true
        },300)
    } else{
        navbar.classList.add('top');
        scrolled = false;
    }
}


// Smooth Scrolling
$('#navbar a, .btn').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100,
            },
            1200
        );
    }
});

/*
const letters = 'abcçdefgğHıijklmnoöprsştUüvyz';
document.querySelector("#logo").onmouseover = (event) => {
    let repetiton = 0;
    setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter,index) => {
                if (index < repetiton){
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 29)];
            })
            .join("");

        if(repetiton >= event.target.dataset.value.length)
            clearInterval(interval);

        repetiton += 1 / 3;
    }, 75);
};
*/
document.getElementById('footer').innerHTML = "&copy;" +  new Date().getFullYear() + " - Ulugut Termal";


const items = document.querySelectorAll(".theBox")
const isInViewport = el =>{
    const rect= el.getBoundingClientRect();
    return (
        rect.top >=0 &&
        rect.left >=0 &&
        rect.bottom <=
        (window.innerHeight ||
            document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth ||
            document.documentElement.clientWidth)
    );
};

const run = () =>
    items.forEach(item =>{
        if (isInViewport(item)){
            item.classList.add("active");
        }
    });

//Events
window.addEventListener("load",run);
window.addEventListener("resize",run);
window.addEventListener("scroll",run);
