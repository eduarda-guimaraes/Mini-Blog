angular.module('blog').controller('PublicacaoController', function($scope, $http) {
  const params = new URLSearchParams(window.location.search);
  const index = params.get("index");

  $scope.publicacao = null;

  $http.get('https://api-fake-blog.onrender.com/postagens')
    .then(function(response) {
      const publicacoes = response.data;
      $scope.publicacao = publicacoes[index] || null;
    })
    .catch(function(error) {
      console.error("Erro ao buscar publicações:", error);
    });
});