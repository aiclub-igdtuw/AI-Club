function scrollHeader(){
    const nav = document.getElementById('nav')
    if(this.scrollY >= 200) nav.classList.add('nav__scroll'); else nav.classList.remove('nav__scroll')
}
window.addEventListener('scroll', scrollHeader)
function switch_theme()
{
    document.querySelector(".theme_switch .fa-solid").addEventListener("click", function(){
        document.querySelector(".theme_switch .fa-solid").classList.toggle("fa-sun");
        document.querySelector("body").classList.toggle("light");
    })
}
switch_theme()