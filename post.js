const posts = [
  {
    id: 1,
    title: "Primeiro Post",
    image: "https://images.unsplash.com/photo-1589820296156-2454bb8f8df5?auto=format&fit=crop&w=800&q=80",
    content: "Conteúdo completo do primeiro post."
  },
  {
    id: 2,
    title: "Segundo Post",
    image: "https://images.unsplash.com/photo-1581276879432-15a97df3e4c2?auto=format&fit=crop&w=800&q=80",
    content: `
      <img src="https://images.unsplash.com/photo-1581276879432-15a97df3e4c2?auto=format&fit=crop&w=800&q=80" alt="Notebook com códigos" class="img-fluid mb-3" />
      Conteúdo completo do segundo post com uma imagem inspiradora para os devs.
    `
  },
  {
    id: 3,
    title: "Terceiro Post",
    image: "https://images.unsplash.com/photo-1581091012184-df4c4c7b786e?auto=format&fit=crop&w=800&q=80",
    content: "Conteúdo completo do terceiro post."
  },
  {
    id: 4,
    title: "Quarto Post",
    image: "https://images.unsplash.com/photo-1603570427554-57a2c9c85fd2?auto=format&fit=crop&w=800&q=80",
    content: "Conteúdo do quarto post, interessante e útil."
  },
  {
    id: 5,
    title: "Quinto Post",
    image: "https://images.unsplash.com/photo-1581093588401-77c87e5f0f16?auto=format&fit=crop&w=800&q=80",
    content: "Post número cinco com informações úteis."
  },
  {
    id: 6,
    title: "Sexto Post",
    image: "https://images.unsplash.com/photo-1612832021059-ffed52f0285e?auto=format&fit=crop&w=800&q=80",
    content: `
      <img src="https://images.unsplash.com/photo-1612832021059-ffed52f0285e?auto=format&fit=crop&w=800&q=80" alt="Dev programando em setup escuro" class="img-fluid mb-3" />
      Sexto post explicando alguns conceitos sobre desenvolvimento e ambientes de trabalho produtivos.
    `
  },
  {
    id: 7,
    title: "Sétimo Post",
    image: "https://images.unsplash.com/photo-1603570917630-c437a3cfa73d?auto=format&fit=crop&w=800&q=80",
    content: "Aqui está o conteúdo completo do sétimo post."
  },
  {
    id: 8,
    title: "Oitavo Post",
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=800&q=80",
    content: "Publicação número oito com muitos detalhes."
  },
  {
    id: 9,
    title: "Nono Post",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    content: `
      <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Café com notebook" class="img-fluid mb-3" />
      Último post de exemplo com conteúdo relevante. Um café, um laptop e boas ideias.
    `
  }
];


const params = new URLSearchParams(window.location.search);
const postId = parseInt(params.get("id"));
const post = posts.find(p => p.id === postId);

const postContent = document.getElementById("post-content");

if (post) {
  postContent.innerHTML = `
    <h2>${post.title}</h2>
    ${post.content}
  `;
} else {
  postContent.innerHTML = `<p class="text-danger">Postagem não encontrada.</p>`;
}
