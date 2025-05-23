angular.module('blog').controller('Rest', function($scope, $http) {
  $scope.publicacoes = [];

  $http.get('https://api-fake-blog.onrender.com/postagens')
    .then(function(response) {
      $scope.publicacoes = response.data;
    })
    .catch(function(error) {
      console.error('Erro ao buscar publicações:', error);
    });
});
