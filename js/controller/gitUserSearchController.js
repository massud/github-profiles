githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var searchResource = $resource('https://api.github.com/search/users?access_token=e9b38bf99ad210df4c0efd1d3d2f56ee7bc0deae');
  var self = this;


 self.doSearch = function (){
  self.searchResult = {
    self.doSearch = function (){
  self.searchResult = {
    items: [
      {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      }, 
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
    ]
};
    self.searchResult = searchResource.get(
  { q: self.searchTerm }
);
};
}]);