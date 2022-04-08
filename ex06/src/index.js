myNestedArray = [["Toblerone", 5]];
function myNestedFunction(arr) {
  myNestedArray.push(arr);
  return myNestedArray;
}

console.log(myNestedFunction(["Milka", 3]));
module.exports = myNestedFunction;