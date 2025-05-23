angular.module('blog').controller('PublicacaoController', function($scope, $http) {
  const params = new URLSearchParams(window.location.search);
  const index = parseInt(params.get("index"));

  $scope.publicacao = null;
  $scope.publicacoesSugeridas = [];

  $http.get('https://api-fake-blog.onrender.com/postagens')
    .then(function(response) {
      const publicacoes = response.data;
      $scope.publicacao = publicacoes[index] || null;

      // Guarda o índice original junto com o objeto
      $scope.publicacoesSugeridas = publicacoes
        .map((p, i) => ({ ...p, index: i }))
        .filter((p) => p.index !== index)
        .slice(0, 3);
    })
    .catch(function(error) {
      console.error("Erro ao buscar publicações:", error);
    });
});
