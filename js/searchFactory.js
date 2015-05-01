githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';

  return {
    query: function(searchTerm) {
      console.log(searchTerm)
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
        }
      }); 
    }
  }
}]);