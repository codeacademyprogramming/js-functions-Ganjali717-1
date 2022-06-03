"use strict";


// 1. findEven

function findEven() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 == 0) {
            console.log(arguments[i]);
        }
    }
}

// 2. findOdd

function findEven() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 == 1) {
            console.log(arguments[i]);
        }
    }
}

// 3. Prime or not 

function showPrimes() {

    for (let i = 2; i < arguments.length; i++) {
      if (!isPrime(i)) continue;
  
      console.log(i);  // a prime
    }
  }
  
  function isPrime() {
    for (let i = 2; i < arguments.length; i++) {
      if ( arguments % i == 0) return false;
    }
    return true;
  }

console.log(isPrimes(3,2,55,88,59));