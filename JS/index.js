window.addEventListener('scroll', function() {
    const altura = window.innerHeight / 1.6;
    function fade(direccion){
        let imagen = document.querySelectorAll('.fade_'+direccion);
        for(let i = 0; i < imagen.length; i++){ 
            let distancia = imagen[i].getBoundingClientRect().top;
            imagen[i].classList.add('trasform_'+direccion)
            if(distancia <= altura){
            imagen[i].classList.add('aparecer');
            }else{
            imagen[i].classList.remove('aparecer')
            }
        }
    }
    function fadeTxt(){
        let txt = document.querySelectorAll('.fade_text')
        for(let i = 0; i < txt.length; i++){
            let distancia = txt[i].getBoundingClientRect().top;
            if(distancia <= altura){
                txt[i].classList.add('aparecer-tex');
            }
            else{
                txt[i].classList.remove('aparecer-tex');
            }
        }
    }
    fade('left')
    fade('right')
    fadeTxt()
    })
window.addEventListener('DOMContentLoaded', function(){
    let txt_izq = document.querySelectorAll('.text_izq');
    let txt_der = this.document.querySelectorAll('.text_der')
    for(let i = 0; i< txt_izq.length; i++){
        txt_izq[i].style.borderRadius = '85px 25px';  // Aplica el border-radius
    }

    for(let i = 0; i< txt_der.length; i++){
        txt_der[i].style.borderRadius = '25px 85px'  // Aplica margin-right
    }
})
let mode = document.getElementById('modoclaro')
let body = document.getElementById('body')
let imgLogo = document.getElementById('img-logo')
let nav = document.getElementById('nav')
let luz = document.querySelectorAll('.luz')
let contec = document.querySelectorAll('.container-img-txt')
let v = true;
mode.addEventListener('click', function(){
        v = !v
        if(v){
            mode.innerHTML = 'dark_mode';
            body.style.background = 'linear-gradient(to bottom, #aa5304, #bd6518, #d17729, #e48939, #f89c49)';
            imgLogo.src = "static/no-bg.png";
            for(let l of luz){
                l.style.boxShadow = '11px 3px 5px 0px rgba(0, 0, 0, 0.75)';
                l.style.webkitBoxShadow = '-11px 3px 5px 0px rgba(0, 0, 0, 0.75)';
                l.style.mozBoxShadow = '11px 3px 5px 0px rgba(0, 0, 0, 0.75)';
            }
            for(let j of contec){
                j.style.background = 'hsla(29, 95%, 34%, 1)';
                j.style.background = 'linear-gradient(to bottom, hsla(29, 95%, 34%, 1) 52%, hsla(28, 77%, 42%, 1) 77%, hsla(28, 67%, 49%, 1) 99%, hsla(28, 76%, 56%, 1) 100%, hsla(28, 93%, 63%, 1) 100%)';
                j.style.background = '-moz-linear-gradient(to bottom, hsla(29, 95%, 34%, 1) 52%, hsla(28, 77%, 42%, 1) 77%, hsla(28, 67%, 49%, 1) 99%, hsla(28, 76%, 56%, 1) 100%, hsla(28, 93%, 63%, 1) 100%)';
                j.style.background = '-webkit-linear-gradient(to bottom, hsla(29, 95%, 34%, 1) 52%, hsla(28, 77%, 42%, 1) 77%, hsla(28, 67%, 49%, 1) 99%, hsla(28, 76%, 56%, 1) 100%, hsla(28, 93%, 63%, 1) 100%)';
            }
        }else{
            mode.innerHTML = 'light_mode'
            body.style.background = 'linear-gradient(to left bottom, #3b1c00, #460605, #4b001b, #410037, #040057)';
            imgLogo.src = "static/mode-dark.png";
            for(let l of luz){
                l.style.boxShadow = '11px 3px 5px 0px rgba(255, 255, 255, 0.75)';
                l.style.webkitBoxShadow = '-11px 3px 5px 0px rgba(255, 255, 255, 0.75)';
                l.style.mozBoxShadow = '11px 3px 5px 0px rgba(255, 255, 255, 0.75)';
            }
            for(let j of contec){
                j.style.background = 'hsla(28, 100%, 12%, 1)'
                j.style.background = 'linear-gradient(to bottom, hsla(28, 100%, 12%, 1) 0%, hsla(1, 87%, 15%, 1) 28%, hsla(338, 100%, 15%, 1) 44%, hsla(309, 100%, 13%, 1) 79%, hsla(243, 100%, 17%, 1) 100%)';
                j.style.background = '-moz-linear-gradient(to bottom, hsla(28, 100%, 12%, 1) 0%, hsla(1, 87%, 15%, 1) 28%, hsla(338, 100%, 15%, 1) 44%, hsla(309, 100%, 13%, 1) 79%, hsla(243, 100%, 17%, 1) 100%)';
                j.style.background = '-webkit-linear-gradient(to bottom, hsla(28, 100%, 12%, 1) 0%, hsla(1, 87%, 15%, 1) 28%, hsla(338, 100%, 15%, 1) 44%, hsla(309, 100%, 13%, 1) 79%, hsla(243, 100%, 17%, 1) 100%)';
            }
    }})   