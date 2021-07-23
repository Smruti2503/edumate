window.addEventListener("scroll", function(){

    var navbar = this.document.getElementById('navbar');
    navbar.classList.toggle("sticky", scrollY > 80);
})