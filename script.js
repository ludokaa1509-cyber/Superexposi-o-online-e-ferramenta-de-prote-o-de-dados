// ===== TEXTO DIGITANDO =====
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

// ===== SCROLL =====
function scrollToInfo(){
  document.getElementById("info").scrollIntoView({behavior:"smooth"});
}

// ===== QUIZ MELHORADO =====
let pontos=0;
let perguntasRespondidas=0;

function resposta(v){
  if(perguntasRespondidas >= 2) return; // trava o spam

  pontos += v;
  perguntasRespondidas++;

  if(perguntasRespondidas == 2){
    let r=document.getElementById("resultado");

    if(pontos>=2){
      r.innerText="ALTO RISCO ⚠️ Evite expor sua vida online!";
    }
    else if(pontos==1){
      r.innerText="MÉDIO RISCO ⚠️ Cuidado com o que você posta.";
    }
    else{
      r.innerText="SEGURO ✅ Você está no caminho certo!";
    }
  }
}

// ===== SIMULAÇÃO HACK MELHORADA =====
function startDemo(){
  const t=document.getElementById("terminal");
  const p=document.getElementById("popup");
  const l=document.getElementById("loading");
  const s=document.getElementById("hackSound");

  t.innerHTML=""; // limpa terminal
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
    "Extraindo dados..."
  ];

  let i=0;

  function loop(){
    if(i<linhas.length){
      t.innerHTML+=linhas[i]+"<br>";
      i++;
      setTimeout(loop,500);
    }else{
      mostrarDadosFake();
    }
  }

  setTimeout(loop,2000);

  function mostrarDadosFake(){
    let dadosFake=[
      "Nome: Usuário detectado",
      "Cidade: Contagem, MG",
      "Rede social ativa: Instagram",
      "Senha encontrada: ********"
    ];

    dadosFake.forEach((d, index)=>{
      setTimeout(()=>{
        t.innerHTML+=d+"<br>";
      }, index*700);
    });

    setTimeout(()=>{
      t.innerHTML+="<br><br>⚠️ ISSO FOI UMA SIMULAÇÃO ⚠️<br>Na vida real, seus dados podem ser usados contra você.";
      p.style.display="block";
      setTimeout(()=>mostrarCreditos(),3000);
    }, dadosFake.length*700 + 1000);
  }
}

// ===== CRÉDITOS =====
function mostrarCreditos(){
  document.getElementById("creditosCinema").style.display="block";
}

// ===== EASTER EGG (tecla H) =====
document.addEventListener("keydown",(e)=>{
  if(e.key==="h"){
    alert("Modo hacker ativado 👨‍💻");
  }
});

// ===== MATRIX =====
const c=document.getElementById("matrix");
const ctx=c.getContext("2d");

c.height=window.innerHeight;
c.width=window.innerWidth;

let letters="01".split("");
let fontSize=14;
let columns=c.width/fontSize;
let drops=[];

for(let x=0;x<columns;x++) drops[x]=1;

function draw(){
  ctx.fillStyle="rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,c.width,c.height);

  ctx.fillStyle="#0f0";
  ctx.font=fontSize+"px monospace";

  for(let i=0;i<drops.length;i++){
    let text=letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text,i*fontSize,drops[i]*fontSize);

    if(drops[i]*fontSize>c.height && Math.random()>0.975){
      drops[i]=0;
    }

    drops[i]++;
  }
}

setInterval(draw,33);
