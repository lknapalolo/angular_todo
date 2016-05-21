"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todoController", ControllerFunction);

  function ControllerFunction(){
    var vm = this;
    vm.todos = ["learn angular"];

    vm.destroy = function(todos_index){
      vm.todos.splice(todos_index,1);
    }
    
    vm.create = function(){
      vm.todos.push(angular.copy(vm.new_todo));
      vm.new_todo = "";
    }
  }
})();
