const texto = document.getElementById("texto")
const no = document.getElementById("no")
const fundo = document.getElementById("fundo")

var contador = 0

no.addEventListener("mousemove", function(){
    contador++

    let x = Math.floor( Math.random() * 100 )
    let y = Math.floor( Math.random() * 100 )

    no.style.bottom = y + "%"
    no.style.left = x + "%"

    if( contador == 10 ) {
        texto.innerHTML = "Tá fugindo de mim?"
    }

    if( contador == 20 ) {
        texto.innerHTML = "Terá que ser do meu jeito..."
        fundo.style.backgroundImage = "url(https://as1.ftcdn.net/v2/jpg/00/10/03/14/1000_F_10031481_G4dftAwob0Fkwr57t2kB16WnIj0bP89V.jpg)"
    }
})


function casar() {
    no.innerHTML = "CLARO!"

    setTimeout( function(){
        while( !confirm("Confirma o casório?") ){}
        alert("💞Vos declaro casados!!!")
        window.close()
    }, 500 )
}