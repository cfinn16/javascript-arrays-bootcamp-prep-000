var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  var newEndArray = [...array, element];
  return newEndArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}

function accessElementInArray(array, i) {
  return array[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(0);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

