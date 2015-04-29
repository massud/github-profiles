githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;

  var accessToken = 'e9b38bf99ad210df4c0efd1d3d2f56ee7bc0deae'
  
  var searchResource = $resource('https://api.github.com/search/users');


  
    self.doSearch = function (){
      if (self.searchTerm != '') {
        self.searchResult = searchResource.get (
      {       
    q: self.searchTerm,
    access_token: self.accessToken
          
    }
    );
  } else {
    self.searchResult = null 
  }

};
}]);