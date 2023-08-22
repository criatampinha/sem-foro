const img= document.querySelector("img");
const botoes= document.querySelectorAll("button");
let intervald= null;
let automáticoAtivo=false;
let cont=0;
for (const botao of botoes) {
botao.addEventListener("click", () =>{
if(botao.classList.contains("automatico")){
    if (automáticoAtivo) {
    clearInterval(intervald);
    automáticoAtivo = false;
}else{
    automáticoAtivo = true;
    intervald= setInterval(() => {
        if (cont === 0){
            img.setAttribute("src", "./cores/vermelho.pnj");
    }else   if (cont===1){
        img.setAttribute("src", "./cores/amarelo.png");
    }else if (cont===2){
        img.setAttribute("src", "./cores/verde.png");
    }
    cont++;
    if (cont ===3){
        cont = 0;
    }
    },1000);
}
}
else {
    img.setAttribute("src", `./cores/${botao.id}.png`);
}
        img.setAttribute("src", `./cores/${botao.id}.png`);
    });
}