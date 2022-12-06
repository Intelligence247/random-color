let h1 = document.querySelector('h1')
h1.addEventListener('click', () => {
    let rand = '#' + Math.random().toString(16).substr(2, 6)
    let body = document.querySelector('body')
    body.style.backgroundColor = rand
})