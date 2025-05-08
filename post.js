const posts = [
    { id: 1, title: "Primeiro Post", content: "Conteúdo completo do primeiro post." },
    { id: 2, title: "Segundo Post", content: "Conteúdo completo do segundo post." },
    { id: 3, title: "Terceiro Post", content: "Conteúdo completo do terceiro post." },
    { id: 4, title: "Quarto Post", content: "Conteúdo do quarto post, interessante e útil." },
    { id: 5, title: "Quinto Post", content: "Post número cinco com informações úteis." },
    { id: 6, title: "Sexto Post", content: "Sexto post explicando alguns conceitos." },
    { id: 7, title: "Sétimo Post", content: "Aqui está o conteúdo completo do sétimo post." },
    { id: 8, title: "Oitavo Post", content: "Publicação número oito com muitos detalhes." },
    { id: 9, title: "Nono Post", content: "Último post de exemplo com conteúdo relevante." }
  ];
  
  const params = new URLSearchParams(window.location.search);
  const postId = parseInt(params.get("id"));
  const post = posts.find(p => p.id === postId);
  
  const postContent = document.getElementById("post-content");
  
  if (post) {
    postContent.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;
  } else {
    postContent.innerHTML = `<p class="text-danger">Postagem não encontrada.</p>`;
  }
  