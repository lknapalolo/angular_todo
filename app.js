"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todosController", ControllerFunction);

  function ControllerFunction(){
    var vm = this;
    vm.todos = [
      "Walk the Dog",
      "Buy Groceries",
      "Eat foot",
      "Smell fish"
    ];

    vm.formIsVisible = false;

    vm.toggleForm = function(){
      if(vm.formIsVisible){
        vm.formIsVisible = false;
      }
      else{
        vm.formIsVisible = true;
      }
    };

    vm.create = function(){
      vm.todos.unshift(vm.content);
      vm.content = "";
    };

    vm.edit = function(index){
      var todo = vm.todos[index];
      vm.content = todo;
    };

    vm.update = function(index){
      vm.todos[index] = vm.content;
    };

    vm.delete = function( index ){
      vm.todos.splice( index, 1 );
    }
  }
})();
