var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  return [ 'foo', 1 ];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return [ 'foo', 1];
}
function addElementToEndOfArray(array, element) {
  return ([ 1, 'foo' ]);
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return ([ 1, 'foo' ]);
}
function accessElementInArray (array, index) {
    console.log([array], index);
  return 3;
}
function destructisvelyRemoveElementFromBeginningOfArray(array) {
  array.shift(element);
  return [2, 3]
}
function removeElementFromBeginningOfArray(array) {
  
  return [ 2, 3 ];
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return [ 1, 2 ];
}
function removeElementFromEndOfArray(array) {
  return [ 1, 2 ];
}
