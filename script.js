let texto="VOCÊ ESTÁ SENDO OBSERVADO...";
let i=0;
function escrever(){
  if(i<texto.length){
    document.getElementById("typing").innerHTML+=texto[i];
    i++;
    setTimeout(escrever,50);
  }
}
escrever();

function scrollToInfo(){
  document.getElementById("info").scrollIntoView({behavior:"smooth"});
}

let pontos=0;
function resposta(v){
  pontos+=v;
  let r=document.getElementById("resultado");
  if(pontos>=2)r.innerText="ALTO RISCO";
  else if(pontos==1)r.innerText="MÉDIO RISCO";
  else r.innerText="SEGURO";
}

function startDemo(){
  const t=document.getElementById("terminal");
  const p=document.getElementById("popup");
  const l=document.getElementById("loading");
  const s=document.getElementById("hackSound");

  l.style.display="block";

  setTimeout(()=>{
    l.style.display="none";
    t.style.display="block";
    s.play();
  },2000);

  let linhas=[
    "Invadindo sistema...",
    "Quebrando segurança...",
    "Acessando arquivos...",
    "IP localizado...",
    "Extraindo dados...",
    "⚠️ ACESSO COMPLETO ⚠️"
  ];

  let i=0;
  function loop(){
    if(i<linhas.length){
      t.innerHTML+=linhas[i]+"<br>";
      i++;
      setTimeout(loop,500);
    }else{
      p.style.display="block";
      setTimeout(()=>{mostrarCreditos()},3000);
    }
  }
  setTimeout(loop,2000);
}

function mostrarCreditos(){
  document.getElementById("creditosCinema").style.display="block";
}

// matrix
const c=document.getElementById("matrix");
const ctx=c.getContext("2d");
c.height=window.innerHeight;
c.width=window.innerWidth;

let letters="01".split("");
let fontSize=14;
let columns=c.width/fontSize;
let drops=[];
for(let x=0;x<columns;x++)drops[x]=1;

function draw(){
  ctx.fillStyle="rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle="#0f0";
  ctx.font=fontSize+"px monospace";
  for(let i=0;i<drops.length;i++){
    let text=letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text,i*fontSize,drops[i]*fontSize);
    if(drops[i]*fontSize>c.height&&Math.random()>0.975)drops[i]=0;
    drops[i]++;
  }
}
setInterval(draw,33);
