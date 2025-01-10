// --Ex1--

// -for
let forArray = [1, 2, 3];
let newForArray = [];
function forArraycount(array, num) {
  for (i = 0; i < forArray.length; i++) {
    let resolt = num ** array[i];
    newForArray.push(resolt);
  }
  return console.log(newForArray);
}
forArraycount(forArray, 2);

// -map

let mapArray = [1, 2, 3];
let newMapArray = mapArray.map((index) => {
  return 2 ** index;
});
console.log(newMapArray);

// -forEach

let forEachArray = [1, 2, 3];
let result = [];
function forEachArraycount(arr) {
  arr.forEach((e) => {
    result.push(2 ** e);
  });
  return console.log(result);
}
forEachArraycount(forEachArray);

// --Ex2--

let oddEvenArray = [1,2,3,"Rawan"];

function evenOrOddArray(arr) {
    let result = arr.map(e => {
        if (typeof e !== "number") {
            return "N/A";
        }else if (e % 2 === 0) {
            return "even"
        }else {
            return "odd"
        }
    });
    return result
}

console.log(evenOrOddArray(oddEvenArray)); 


// -- Ex3 --

let namesArray =  ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
namesArray.map(e => {
    console.log(e)
});

// -- Ex4 --

let nums = [3,5,15,4];
let fizzOrBussArray = nums.map(e => {
    if (e % 3 == 0 && e % 5 == 0){
        return "Fizz Buzz"
    }else if (e % 5 == 0) {
        return "Buzz"
    }else if (e % 3 == 0) {
        return "Fizz"
    }else{
        return e
    }
});
console.log(fizzOrBussArray)
