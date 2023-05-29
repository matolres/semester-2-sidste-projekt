const text = document.querySelector(".text");


document.querySelectorAll('.text').forEach(text => {
    text.addEventListener('click', () => {
        text.classList.toggle("open");
        /*if (text !== target)
        target.classList.remove('open'); */ 
    })
    })

