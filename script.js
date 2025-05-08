const posts = [
    { id: 1, title: "Primeiro Post", summary: "Resumo do primeiro post..." },
    { id: 2, title: "Segundo Post", summary: "Resumo do segundo post..." },
    { id: 3, title: "Terceiro Post", summary: "Resumo do terceiro post..." },
    { id: 4, title: "Quarto Post", summary: "Um pouco sobre o quarto post." },
    { id: 5, title: "Quinto Post", summary: "Destaques do quinto post resumidos aqui." },
    { id: 6, title: "Sexto Post", summary: "O que você precisa saber no sexto post." },
    { id: 7, title: "Sétimo Post", summary: "Resumo breve do sétimo conteúdo." },
    { id: 8, title: "Oitavo Post", summary: "Oitava publicação do blog com insights." },
    { id: 9, title: "Nono Post", summary: "Último post da série para teste de layout." }
  ];
  
  const postList = document.getElementById("post-list");
  
  posts.forEach(post => {
    const col = document.createElement("div");
    col.className = "col-md-4";
  
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.summary}</p>
          <a href="post.html?id=${post.id}" class="btn btn-leia-mais">Ler mais</a>
        </div>
      </div>
    `;
  
    postList.appendChild(col);
  });
  