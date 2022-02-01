var array=["A","B","C","D","E","F"];
// Adding and Removing Values from  last of array 
console.log(array);
array.pop();
//Pop is used to remove value from last of the array
console.log(array);
// push is used to add data at the end of array
array.push("G","H","I","J");
console.log(array);
//Shift is used to remove the value from start point 
array.shift();
console.log(array);
//UnShift is used to add the value from start point 
array.unshift(1,2,3,4);
console.log(array);
//splice method is used to insert or delet the value in the array
array.splice(1,2,"Farhan","Bashir");
console.log(array);
//slice method is used to copy the value of the array
var noarry=array.slice(1,3);
console.log(noarry);

