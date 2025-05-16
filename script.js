angular.module('blog', []);

angular.module('blog').controller('Rest', function($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens/').success(function(data){
    $scope.publicacoes=data;
  })
})

const posts = [
  {
    id: 1,
    title: "Primeiro Post",
    summary: "Resumo do primeiro post...",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Segundo Post",
    summary: "Resumo do segundo post...",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" // café e computador
  },
  {
    id: 3,
    title: "Terceiro Post",
    summary: "Resumo do terceiro post...",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Quarto Post",
    summary: "Um pouco sobre o quarto post.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Quinto Post",
    summary: "Destaques do quinto post resumidos aqui.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Sexto Post",
    summary: "O que você precisa saber no sexto post.",
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Sétimo Post",
    summary: "Resumo breve do sétimo conteúdo.",
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Oitavo Post",
    summary: "Oitava publicação do blog com insights.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Nono Post",
    summary: "Último post da série para teste de layout.",
    image: "https://images.unsplash.com/photo-1555967525-37949d0b1f8e?auto=format&fit=crop&w=800&q=80"
  }
];


const postList = document.getElementById("post-list");

posts.forEach(post => {
  const col = document.createElement("div");
  col.className = "col-md-4";

  col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${post.image}" class="card-img-top" alt="${post.title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${post.summary}</p>
        <a href="post.html?id=${post.id}" class="mt-auto btn btn-leia-mais">Ler mais</a>
      </div>
    </div>
  `;

  postList.appendChild(col);
});