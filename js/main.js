// Marquee de empresas (lista duplicada para loop contínuo)
var names=["CORDAS PAMPA","IBM","MIRANDINHA","GOVERNO DE SÃO PAULO"],h="";
for(var k=0;k<2;k++)names.forEach(function(n){h+="<span>"+n+"</span><em></em>"});
document.getElementById("track").innerHTML=h+h;

// Efeito de digitação no destaque
(function(){
  var el=document.getElementById("typed"),txt="FRONT-END",i=0;
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches){el.textContent=txt;return}
  (function t(){el.textContent=txt.slice(0,i++);if(i<=txt.length)setTimeout(t,110)})();
})();

// Item ativo do menu conforme a seção visível
var links=[].slice.call(document.querySelectorAll("nav a"));
var map={home:0,sobre:1,projetos:2,skills:3,contato:4};
if("IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting&&map[e.target.id]!==undefined){links.forEach(function(a){a.classList.remove("on")});links[map[e.target.id]].classList.add("on")}
  })},{rootMargin:"-45% 0px -50% 0px"});
  ["home","sobre","projetos","skills","contato"].forEach(function(id){var n=document.getElementById(id);if(n)io.observe(n)});
}
