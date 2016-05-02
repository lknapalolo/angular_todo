"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todos_controller", ControllerFunction);

  function ControllerFunction(){
    var vm = this;
    vm.todos = [
      "walk the dog",
      "debug angular",
      "feed the fish"
    ];
    vm.destroy = function(todos_index){
      vm.todos.splice(todos_index,1);
    }
    vm.create = function(){
      vm.todos.push(angular.copy(vm.new_todo));
      vm.new_todo = "";
    }
  }
})();
