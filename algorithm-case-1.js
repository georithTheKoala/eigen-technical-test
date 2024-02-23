const arrayContainer = [];
const stringName = "NEGIE1";

const splitTheName = stringName.split('');

for (const itemsOfEachSpreadResultOfSplit of splitTheName) { 
  (itemsOfEachSpreadResultOfSplit >= '0' && itemsOfEachSpreadResultOfSplit <= '9') ? 
    arrayContainer.push(itemsOfEachSpreadResultOfSplit) : 
    arrayContainer.unshift(itemsOfEachSpreadResultOfSplit)
}

const arrayContainerResult = [...arrayContainer].join('');

console.log(arrayContainerResult);