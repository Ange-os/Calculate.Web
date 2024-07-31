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

let v = true;
mode.addEventListener('click', function(){
        v = !v
        if(v){
            mode.innerHTML = 'dark_mode'
            body.style.background = 'linear-gradient(to bottom, #aa5304, #bd6518, #d17729, #e48939, #f89c49)'
            imgLogo.src = "../static/no-bg.png"
        }else{
            mode.innerHTML = 'light_mode'
            body.style.background = 'linear-gradient(to left bottom, #3b1c00, #460605, #4b001b, #410037, #040057)'
            imgLogo.src = "../static/mode-dark.png"
        }
    })
