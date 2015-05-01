githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;

  // var token = 'ba222457dafeddc09d20b7d518c232ac61623af5';
  
  // var searchResource = $resource('https://api.github.com/search/users');


  
   self.doSearch = function(){
    Search.query(self.searchTerm)
      .then(function(response){
        self.searchResult = response.data;
      })
  };
}]);