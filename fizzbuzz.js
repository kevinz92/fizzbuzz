/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr){
    var sum = 0
    // YOUR CODE HERE
    for (var i = arr.length - 1; i >= 0; i--) {
    	sum =arr[i] + sum;
    };

    return sum
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);



// /**
//  * PART 1
//  *
//  * Write a function that takes two numbers as
//  * arguments and computes the sum of those two numbers.
//  */

function sum(a, b){
    return a + b
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

// /**
//  * PART 2
//  *
//  * write a function that finds the Greatest Common Denominator of two numbers
//  * - if no GCD exists, return 1
//  */

function GCD(a, b){
//     // YOUR CODE HERE

	// var diviser=1;
	var cd = 0
	
	for (var diviser=1; diviser<=a && diviser<=b ; diviser++) {
		
		// console.log(diviser)
		if(a%diviser===0 && b%diviser===0){
			// cd.push(diviser);
			if(cd<diviser){
				cd=diviser;
			}

		}
	};
	return cd	
}






 console.assert(GCD(5,1) === 1);
 console.assert(GCD(15,3) === 3);
 console.assert(GCD(15,5) === 5);
 console.assert(GCD(50,20) === 10);

// /**
//  * PART 3
//  *
//  * write a function that prints out the Least Common Multiple of two numbers
//  */

// function LCM(a, b){
   // var m=1
   // var am=[]
   // var bm=[]
   		// for (var m = 1; a*m <= a*b; m++) {
   		// am.push(a*m)
   		// 	};

   		// for (var m = 1; b*m <= a*b; m++){
   	 //   bm.push(b*m)

   		// 	};




    
// }
// // var multipler = 1;
// var resultArray =[];
// var big;
// var little;
// var bigResult;
// var littleResult;

// if(a >b){
// 	big=a
// 	little=b
// } else {
// 	big=b
// 	little=b
// }
// if(a===0 || b===0){
// 	return(0)
// }
// while (multiplier <= a*b){
// 	bigResult = big*multiplier;
// 	resultArray.push(bigResult);
// 	littleResult = little * multiplier;
// 	if(resultArray.indexOf(littleResult) !== -1){
// 		return(littleResult);
// 		return
// 	}
// 	multiplier += 1;
// }
// }

// console.assert(LCM(10,10) === 10)
// console.assert(LCM(2,5) === 10)
// console.assert(LCM(3,6) === 6)
// console.assert(LCM(0,1) === 0)

// /**
//  * Part 4
//  *
//  * write a function the returns a FizzBuzz string for some number N (counting up from 1).
//  * - for every number that isn't a multiple of 3 or 5, return a period "."
//  * - for every number that is a multiple of 3 (but not 5), return "fizz"
//  * - for every number that is a multiple of 5 (but not 3), return "buzz"
//  * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
//  */

 function fizzbuzz(N){
//     // YOUR CODE HERE
          var zzz=""
          

          
          for (var i=1; i =< N; i++) {
            
          
            if (i%3===0) {
            zzz+= "fizz";
            };
            
            else if(i%5===0) {
            zzz+= "buzz";
            };
            
            else if(i%3===0 && i%5===0) {
            zzz+= "fizzbuzz";
            };
          
          else{
            zzz+= ".";
          };



 };
 

//  console.assert(fizzbuzz(1) === ".")
// console.assert(fizzbuzz(2) === "..")
// console.assert(fizzbuzz(3) === "..fizz")
// console.assert(fizzbuzz(5) === "..fizz.buzz")
// console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")




