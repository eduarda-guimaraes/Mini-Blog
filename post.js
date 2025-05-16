angular.module('blog', ['ngSanitize']);

angular.module('blog').controller('PublicacaoController', function($scope, $http){
  const params = new URLSearchParams(window.location.search);
  const publicacaoId = params.get("id");

  $http.get('https://api-fake-blog.onrender.com/postagens/')
    .then(function(response){
      const publicacoes = response.data;
      const publicacao = publicacoes.find(p => String(p.id) === publicacaoId);
      $scope.publicacao = publicacao || null;
    })
    .catch(function(error){
      console.error("Erro ao buscar publicações:", error);
      $scope.publicacao = null;
    });
});
