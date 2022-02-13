let tabs = document.getElementsByClassName('tab');

for (i=0; i<tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {
        for (j=0; j<tabs.length; j++) {
            tabs[j].classList.remove('active');
        }
        e.target.classList.add('active');
    })
}