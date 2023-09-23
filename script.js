var imgs = document.getElementById('imagem')
var img = document.querySelectorAll('#imagem img')

let idx = 0

function carrossel(){
    idx++;
    if (idx > 11){
        idx = 0
    }
     imgs.style.transform = `translateX(${-idx * 200}px)`

}
setInterval(carrossel, 1500)
