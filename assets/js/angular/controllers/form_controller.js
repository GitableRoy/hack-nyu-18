ba_hero.controller('form_controller', ['$scope', function($scope) {
  $scope.user = {
    'first':  'John',
    'last': 'Doe',
    'email': 'j.doe@example.com',
    'username': 'superhero'
  };

 $scope.submit = ()=> {
    $.ajax({
      type: 'POST',
      url: '/test',
      data: JSON.stringify($scope.user),
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      success: (msg)=> alert(msg.d),
      error: (msg)=> alert(msg.d)
    });
  }

}]);
