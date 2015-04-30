githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;

  var token = 'ba222457dafeddc09d20b7d518c232ac61623af5';
  
  var searchResource = $resource('https://api.github.com/search/users');


  
    self.doSearch = function (){
      self.searchResult = searchResource.get(
        { q: self.searchTerm,
          access_token: token
      }
      );

    };
}]);