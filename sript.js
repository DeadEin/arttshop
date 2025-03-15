let kot = document.querySelector('.kot');
let card = document.querySelectorAll('.card');
for(let i=0; i<card.length; i++)
 {card[i].addEventListener('click', function (e) {
    kot.style.transform = `translate(${e.pageX - 25}px, ${e.pageY - 25}px)`;
    kot.style.opacity = 1;
    kot.style.display= "inline-block" 

    anime({
        targets: '.kot',
        opacity: 0, 
        scale: 2,
        duration: 2000
    });
});
 }
