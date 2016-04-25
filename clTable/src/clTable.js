var clTable = angular.module('cl.table', []);

clTable.directive('clTable', function() {
  return {
    templateUrl: 'clTable.html',
    restrict: 'E',
    scope: {
      options: '=options'
    },
    link: function(scope, element, attrs) {
      scope.searchItem = {};
      scope.sortType = scope.options.contentAttributes[0];
      scope.sortReverse = false;
      scope.selectedItems = [];
      scope.selectedItemsIndizes = [];
      scope.updateSelection = function (index, item, $event) {
        var checkbox = $event.target;
        var action = (checkbox.checked ? 'add' : 'remove');
        updateSelected(action, index, item);
      };
      function updateSelected(action, index, item) {
        if (action === 'add' && scope.selectedItemsIndizes.indexOf(index) === -1) {
         scope.selectedItems.push(item);
         scope.selectedItemsIndizes.push(index);
         }
        if (action === 'remove' && scope.selectedItemsIndizes.indexOf(index) !== -1) {
         scope.selectedItems.splice(scope.selectedItemsIndizes.indexOf(index), 1);
         scope.selectedItemsIndizes.splice(scope.selectedItemsIndizes.indexOf(index), 1);
        }
      }
      scope.isSelected = function(index) {
        return scope.selectedItemsIndizes.indexOf(index) >= 0;
      };
      scope.sort = function (index) {
        scope.sortType = scope.options.contentAttributes[index];
        scope.sortReverse = !scope.sortReverse;
      };
      scope.isObject = function (input) {
        return angular.isObject(input);
      };
    }
  };
});
