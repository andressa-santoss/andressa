// Marquee de empresas (lista duplicada para loop contínuo)
var names=["CORDAS PAMPA","IBM","MIRANDINHA","GOVERNO DE SÃO PAULO"],h="";
for(var k=0;k<2;k++)names.forEach(function(n){h+="<span>"+n+"</span><em></em>"});
document.getElementById("track").innerHTML=h+h;

// Efeito de digitação no destaque

(function () {
  const el = document.getElementById("typed");
  if (!el) return;

  const textos = ["FRONT-END", "FREELANCE"];

  let indice = 0;
  let letra = 0;
  let apagando = false;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = textos.join(" / ");
    return;
  }

  function animar() {
    const texto = textos[indice];

    if (!apagando) {
      letra++;
      el.textContent = texto.slice(0, letra);

      if (letra === texto.length) {
        apagando = true;
        setTimeout(animar, 2000);
        return;
      }
    } else {
      letra--;
      el.textContent = texto.slice(0, letra);

      if (letra === 0) {
        apagando = false;
        indice = (indice + 1) % textos.length;
        setTimeout(animar, 400);
        return;
      }
    }

    setTimeout(animar, apagando ? 60 : 110);
  }

  animar();
})();


// Item ativo do menu conforme a seção visível
var links=[].slice.call(document.querySelectorAll("nav a"));
var map={     home: 0,
  skills: 1,
  sobre: 2,
  projetos: 3,
  contato: 4};
if("IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting&&map[e.target.id]!==undefined){links.forEach(function(a){a.classList.remove("on")});links[map[e.target.id]].classList.add("on")}
  })},{rootMargin:"-45% 0px -50% 0px"});
  ["home","sobre","projetos","skills","contato"].forEach(function(id){var n=document.getElementById(id);if(n)io.observe(n)});
}
