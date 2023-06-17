// let str1="HI naveen, ";
// let str2="Hi deepa"
// console.log(str1+str2);

// let firstname="deepa"
// let lastname="naveen"
// let city="chennai"

// console.log(firstname+lastname+" lives in "+city);

// let msg=`${firstname} ${lastname} lives in ${city}`

// console.log(msg)

//arrays
let num=10
let name="vijay"

let cities=["chennai","madurai","trichy"];

let marks=[78,43,56,76,41]

console.log(marks.length)

console.log(cities[2]);

console.log(marks[marks.length-1]);

//mix of int and string

let arr=[1,4,6,"naveen","deepa"]

console.log(arr);

//2d array

let matrix=[[1,2,3],[4,3,4]]
console.log(matrix[1][2]);

//array methods
let array = ["a","b","c","d","e"]

//push-add elements to the end

array.push("f");

console.log(array);

//pop-removes element from the end and returned remove
console.log(array.pop());

//shift-removes element from start of the array
console.log(array.shift())

//unshift-adds element to the start of the array
console.log(array.unshift("a"))

delete array[2];
console.log(array);

//splice
array.splice(2,2)
console.log(array);

array.splice(1,1,"m")
console.log(array);

array.splice(1,2,"x","y")
console.log(array)

array.splice(1,0,"b")
console.log(array)

//slice
console.log(array.slice(1,2));

//concat and spread operator
let firstarr=[1,2,3]
let secondarr=[4,5,6]

let joinarr=[firstarr+" "+secondarr]
console.log(joinarr);

console.log(firstarr.concat(secondarr));

let join=[...firstarr,...secondarr]

console.log(join);

//Excercise

array1=[5,8,10,7,9,11];
array1.splice(3,3,"17","19","111");
console.log(array1);

array1.unshift(100);
console.log(array1);
