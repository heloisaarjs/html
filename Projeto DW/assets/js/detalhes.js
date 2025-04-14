const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Dados dos discos
const discos = {
  1: {
    titulo: "Red (Taylor’s Version)",
    imagens: {
      capa: "imagens/red.png",
      contracapa: "imagens/red-contracapa.png",
      vinil: "imagens/red-combo.png"
    },
    genero: "Pop",
    ano: "2023",
    preco: "R$ 99,90",
    descricao: "Uma regravação do clássico álbum pop de Taylor Swift, com faixas bônus e nova produção.",
    faixas: [
      "State of Grace", "Red", "Treacherous", "I Knew You Were Trouble", "All Too Well", "22", "I Almost Do", "We Are Never Ever Getting Back Together", "Stay Stay Stay", "The Last Time", "Holy Ground", "Sad Beautiful Tragic", "The Lucky One"

    ]
  },
  2: {
    titulo: "Lana Del Rey - Ultraviolence",
    imagens: {
      capa: "imagens/ultraviolence.png",
      contracapa: "imagens/ultra-contracapa.png",
      vinil: "imagens/ultra-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  3: {
    titulo: "Amy Winehouse- Back To Black",
    imagens: {
      capa: "imagens/amywinehouse.png",
      contracapa: "imagens/amywinehouse-contracapa.png"

    },
    genero: "Rock Clássico",
    ano: "1969",
    preco: "R$ 150,00",
    descricao: "Um dos discos mais icônicos dos Beatles, conhecido por sua capa clássica e produção refinada.",
    faixas: [
      "Come Together", "Something", "Maxwell's Silver Hammer", "Oh! Darling",
      "Octopus's Garden", "I Want You (She's So Heavy)", "Here Comes the Sun",
      "Because", "You Never Give Me Your Money", "The End"
    ]
  },
  4: {
    titulo: "Taylor Swift - Evermore",
    imagens: {
      capa: "imagens/evermore.png",
      contracapa: "imagens/evermore-contracapa.png",
      vinil: "imagens/evermore-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  5: {
    titulo: "Queen - Sheer Heart Attack",
    imagens: {
      capa: "imagens/queen.png",
      contracapa: "imagens/queen-contracapa.png",
      vinil: "imagens/queen-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  6: {
    titulo: "Lana Del Rey - Honeymoon",
    imagens: {
      capa: "imagens/honeymoon.png",
      contracapa: "imagens/honeymoon-contracapa.png",
      vinil: "imagens/honeymoon-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  7: {
    titulo: "Adele - 21",
    imagens: {
      capa: "imagens/adele21.png",
      contracapa: "imagens/adele-contracapa.png",
      vinil: "imagens/adele-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  8: {
    titulo: "Dua Lipa - Radical Optimism",
    imagens: {
      capa: "imagens/dualipa.png",
      contracapa: "imagens/dualipa-contracapa.png",
      vinil: "imagens/dualipa-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  9: {
    titulo: "Lorde - Melodrama",
    imagens: {
      capa: "imagens/lorde.png",
      contracapa: "imagens/lorde-contracapa.png",
      vinil: "imagens/lorde-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  10: {
    titulo: "Madonna - Celebration Vinyl",
    imagens: {
      capa: "imagens/madonna.png",
      contracapa: "imagens/madonna-contracapa.png",
      vinil: "imagens/madonna-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  11: {
    titulo: "Olivia Rodrigo - Sour",
    imagens: {
      capa: "imagens/olivia.png",
      contracapa: "imagens/olivia-contracapa.png",
      vinil: "imagens/olivia-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  12: {
    titulo: "Sabrina Carpenter - Short n' Sweet",
    imagens: {
      capa: "imagens/sabrina.png",
      contracapa: "imagens/sabrina-contracapa.png",
      vinil: "imagens/sabrina-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  13: {
    titulo: "Tame Impala - The Slow Rush",
    imagens: {
      capa: "imagens/tameimpala.png",
      contracapa: "imagens/tameimpala-contracapa.png",
      vinil: "imagens/tameimpala-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  13: {
    titulo: "Tame Impala - The Slow Rush",
    imagens: {
      capa: "imagens/tameimpala.png",
      contracapa: "imagens/tameimpala-contracapa.png",
      vinil: "imagens/tameimpala-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  13: {
    titulo: "Tame Impala - The Slow Rush",
    imagens: {
      capa: "imagens/tameimpala.png",
      contracapa: "imagens/tameimpala-contracapa.png",
      vinil: "imagens/tameimpala-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  14: {
    titulo: "Lana Del Rey - Lust For Life",
    imagens: {
      capa: "imagens/lust.png",
      contracapa: "imagens/lust-contracapa.png",
      vinil: "imagens/lust-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
  15: {
    titulo: "Lady Gaga - Joanne",
    imagens: {
      capa: "imagens/ladygaga.png",
      contracapa: "imagens/ladygaga-contracapa.png",
      vinil: "imagens/ladygaga-combo.png"
    },
    genero: "Rock Psicodélico",
    ano: "2014",
    preco: "R$ 119,90",
    descricao: "Um álbum atmosférico e melancólico que marcou uma nova era na carreira de Lana Del Rey.",
    faixas: [
      "Cruel World", "Ultraviolence", "Shades of Cool", "Brooklyn Baby",
      "West Coast", "Sad Girl", "Pretty When You Cry",
      "Money Power Glory", "Fucked My Way Up to the Top", "Old Money"
    ]
  },
};

// Preencher a página com os dados do disco
const disco = discos[id];

if (disco) {
  document.getElementById("titulo-disco").innerText = disco.titulo;
  document.getElementById("imagem-disco").src = disco.imagens.capa;
  document.getElementById("imagem-contracapa").src = disco.imagens.contracapa;
  document.getElementById("imagem-vinil").src = disco.imagens.vinil;

  document.getElementById("thumb-disco").src = disco.imagens.capa;
  document.getElementById("thumb-contracapa").src = disco.imagens.contracapa;
  document.getElementById("thumb-vinil").src = disco.imagens.vinil;

  document.getElementById("genero-disco").innerText = disco.genero;
  document.getElementById("ano-disco").innerText = disco.ano;
  document.getElementById("preco-disco").innerText = disco.preco;
  document.getElementById("descricao-disco").innerText = disco.descricao;

  const faixasUl = document.getElementById("faixas");
  faixasUl.innerHTML = "";
  disco.faixas.forEach((faixa, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${faixa}`;
    faixasUl.appendChild(li);
  });
} else {
  document.querySelector("main").innerHTML = "<p class='text-danger'>Disco não encontrado.</p>";
}
