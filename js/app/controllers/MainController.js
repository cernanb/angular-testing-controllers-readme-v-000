function MainController() {
    this.name = 'Steve Jobs';
}

angular
    .module('app')
    .controller('MainController', MainController);

function addNumbers(numOne, numTwo){
  return parseFloat(numOne, 10) + parseFloat(numTwo, 10);
}
