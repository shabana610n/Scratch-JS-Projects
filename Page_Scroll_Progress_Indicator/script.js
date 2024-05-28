const scrollBar = document.querySelector('.scroll-bar')

window.addEventListener('scroll', () => {
    let percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    scrollBar.style.width = percentage + '%'
})