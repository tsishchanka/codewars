/* 
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

function findOdd(A) {
  const findRepeats = A.reduce(
    (acc, n) => ((acc[n] = (acc[n] || 0) + 1), acc),
    {}
  );
  return +Object.keys(findRepeats).find((key) => findRepeats[key] % 2 !== 0);
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return (result = l.filter((data) => {
    if (typeof data === 'number') {
      return true;
    }
  }));
}
console.log(filter_list([1, 2, 'a', 'b']));

/* Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!" */

function maskify(cc) {
  const limit = 4;
  const head = cc.slice(0, -limit);
  const tail = cc.slice(-limit);
  return head.replace(/./g, '#') + tail;
}
console.log(maskify('4556364607935616'));

//Very simple, given a number, find its opposite.

function opposite(number) {
  if (typeof number === 'number') {
    number = number * -1;
  }
  return number;
}
console.log(opposite(-1));

/* Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel. */

function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(disemvowel('This website is for losers LOL!'));

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
console.log(even_or_odd(55));

/* Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce(function (p, v) {
      if (p < v) {
        return p;
      } else {
        return v;
      }
    });
  }
}

/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
For example:
summation(2) -> 3
1 + 2
summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 */

var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};
console.log(summation(55));

/* Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7 */

function basicOp(operation, value1, value2) {
  if (operation == '+') {
    return value1 + value2;
  } else if (operation == '-') {
    return value1 - value2;
  } else if (operation == '*') {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}
console.log(basicOp('+', 4, 7));

/* Write a function called repeatStr which repeats the given string string exactly n times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */

function repeatStr(n, s) {
  return s.repeat(n);
}
console.log(repeatStr(5, 'Hello'));

/* Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */

function findShort(s) {
  const arrStr = s.split(' ');
  const mappedStr = arrStr.map((str) => str.length);
  return mappedStr.reduce((prev, curr) => {
    if (prev < curr) {
      return prev;
    }
    return curr;
  });
}
console.log(findShort('String will never be empty'));

//Complete the method that takes a boolean value and return
//a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  if (bool !== false) {
    return 'Yes';
  } else {
    return 'No';
  }
}
console.log(boolToWord(true));

/* Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero). */

function oddOrEven(array) {
  array.push(0);
  const sum = (array) =>
    array.reduce((prev, curr) => {
      return prev + curr;
    });
  if (sum(array) % 2 === 0 || sum(array) === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
console.log(oddOrEven([0, 1, 4]));

/* Your task is to make a function that can take any non-negative integer as an argument 
and return it with its digits in descending order. Essentially, rearrange the digits 
to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
 */

function descendingOrder(n) {
  const arrayFromN = n.toString().split('');
  const joined = arrayFromN.sort().reverse().join('');
  return +joined;
}
console.log(descendingOrder(123456789));

/* A square of squares
Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer 
that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, 
so don't worry about that in dynamic typed languages.
Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

var isSquare = function (n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return true;
  }
  return false;
};
console.log(isSquare(0));

/* You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
  if (arr.length == 0) {
    return 0;
  } else
    return arr.reduce((res, curr) => {
      if (curr >= 0) {
        return res + curr;
      }
      return res;
    }, 0);
}
console.log(positiveSum([1, -4, 7, 12]));

/* Can you find the needle in the haystack?
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" */

function findNeedle(haystack) {
  const ind = haystack.indexOf('needle');
  return 'found the needle at position ' + ind;
}
console.log(
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
);

/* Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow' */

function solution(str) {
  return str.split('').reverse().join('');
}
console.log(solution('world'));

/* Complete the solution so that it reverses all of the words within the string passed in.
Example:
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The" */

function reverseWords(str) {
  return (newStr = str.split(' ').reverse().join(' '));
}
console.log(
  reverseWords('The greatest victory is that which requires no battle')
);

/* Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.
Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)*/

function getDivisorsCnt(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.length;
}
console.log(getDivisorsCnt(4));

/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).
Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */

function DNAStrand(dna) {
  const dnaArr = dna.split('');
  const newDna = dnaArr.reduce((res, item) => {
    if (item === 'A') {
      res.push('T');
    } else if (item === 'T') {
      res.push('A');
    } else if (item === 'C') {
      res.push('G');
    } else {
      res.push('C');
    }
    return res;
  }, []);
  return (newRes = newDna.join(''));
}
console.log(DNAStrand('ATTGC'));

/* Ask a small girl - "How old are you?". She always says strange things... Lets help her!
For correct answer program should return int from 0 to 9.
Assume test input string always valid and may look like "1 year old" 
or "5 years old", etc.. The first char is number only. */

function getAge(inputString) {
  const num = inputString.split(' ');
  return +num[0];
}
console.log(getAge('1 year old'));

/* 
Your function should take two arguments: the size of the wall in millimeters 
and the size of a pixel in millimeters. It should return True if you can 
fit an exact number of pixels on the wall, otherwise it should return False. 
For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.
*/

function isDivisible(wallLength, pixelSize) {
  return wallLength % pixelSize === 0;
}
console.log(isDivisible(4050, 27));

/* 
You will be given a string with sets of characters, (i.e. words), 
seperated by between one and three spaces (inclusive).
Looking at the first letter of each word (case insensitive-"A" 
and "a" should be treated the same), you need to determine whether 
it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").
Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.
"A big brown fox caught a bad rabbit" => True/true 
*/

function connotation(str) {
  const negNZ = [
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  strArr = str.toUpperCase().replace(/\s+/g, ' ').trim().split(' ');
  const doubleArr = strArr.reduce(
    (res, item) => {
      if (negNZ.includes(item[0])) {
        res[0].push(item);
      } else {
        res[1].push(item);
      }
      return res;
    },
    [[], []]
  );
  return doubleArr[0].length <= doubleArr[1].length;
}

console.log(connotation('A big brown fox caught a bad rabbit'));

/*
 Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. 
For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3]. 
*/

function deleteNth(arr, n) {
  let newArr = [];

  function countDuplicates(item) {
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (item === newArr[i]) {
        count++;
      }
    }
    return count;
  }
  for (let i = 0; i < arr.length; i++) {
    if (countDuplicates(arr[i]) < n) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2));

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//348597 => [7,9,5,8,4,3]
function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}
console.log(digitize(348597));

// Your task is to return a number from a string.
const FilterString = function (value) {
  const arrValue = value.split('');

  const arrNumValue = arrValue.filter((v) => {
    if (!isNaN(v)) {
      return true;
    }
  });
  const joined = arrNumValue.join('');
  return Number(joined);
};

console.log(FilterString('a1b2c3')); // 123;
console.log(FilterString('123')); // 123;
console.log(FilterString('aa1bb2cc3dd')); // 123;

// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.
function nthFibo(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
}
console.log(nthFibo(1));
console.log(nthFibo(2));
console.log(nthFibo(3));
console.log(nthFibo(7));

//Write a function that takes an array and counts the number of each unique element present.
function count(array) {
  const counts = {};
  for (var i = 0; i < array.length; i++) {
    counts[array[i]] = 1 + (counts[array[i]] || 0);
    console.log([array[i]]);
    console.log(array[i]);
  }
  return counts;
}
console.log(count(['james', 'james', 'john']));

//Who is the killer?
function killer(suspectInfo, dead) {
  for (let key in suspectInfo) {
    const matched = suspectInfo[key].filter((el) => dead.indexOf(el) > -1);
    if (matched.length === dead.length) {
      return key;
    }
  }
}
console.log(
  killer(
    {
      James: ['Jacob', 'Lucas', 'Bill'],
      Johnny: ['David', 'Kyle', 'Lucas', 'Bill'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )
);

//Array.diff
function arrayDiff(a, b) {
  return a.filter((el) => b.indexOf(el) === -1);
}

console.log(arrayDiff([], [4, 5])); // []
console.log(arrayDiff([3, 4], [3])); // [4]
console.log(arrayDiff([1, 8, 2], [])); //  [1,8,2]
console.log(arrayDiff([1, 2, 3], [1, 2])); //[3]

//Square Every Digit
function squareDigits(num) {
  const arrNum = num.toString().split('');
  return +arrNum.map((el) => el * el).join('');
}

squareDigits(1235);

//Simple Pig Latin
function pigIt(str) {
  str = str.trim().split(/\s{1,}/);
  return str
    .map((value) => {
      if (/^[A-Za-z]+$/.test(value)) {
        return `${value.slice(1)}${value.slice(0, 1)}ay`;
      }
      return value;
    })
    .join(' ');
}

//Square Every Digit
function squareDigits(num) {
  const arrNum = num.toString().split('');
  return arrNum.map((el) => el * el).join('');
}

console.log(squareDigits(2112));

//Moving Zeros To The End
function moveZeros(arr) {
  const arrWithoutZeros = arr.filter((el) => el !== 0);
  const diffLength = arr.length - arrWithoutZeros.length;
  return arrWithoutZeros.concat(Array(diffLength).fill(0));
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

//Directions Reduction
function dirReduc(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') ||
      (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH') ||
      (arr[i] === 'EAST' && arr[i + 1] === 'WEST') ||
      (arr[i] === 'WEST' && arr[i + 1] === 'EAST')
    ) {
      i++;
    } else {
      if (
        (result[result.length - 1] === 'NORTH' && arr[i] === 'SOUTH') ||
        (result[result.length - 1] === 'SOUTH' && arr[i] === 'NORTH') ||
        (result[result.length - 1] === 'EAST' && arr[i] === 'WEST') ||
        (result[result.length - 1] === 'WEST' && arr[i] === 'EAST')
      ) {
        result.pop();
      } else {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

console.log(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
);

//Century From Year
function century(year) {
  return Math.floor(year / 100) + (year % 100 ? 1 : 0);
}
console.log(century(1705));

//Create Phone Number
function createPhoneNumber(numbers) {
  const strNum = numbers.join('').toString();
  return `(${strNum.substring(0, 3)}) ${strNum.substring(
    3,
    6
  )}-${strNum.substring(strNum.length - 4)}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  const sortedArr = numbers.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}

sumTwoSmallestNumbers([10, 2, 30, 4]);

// Pyramid Array
function pyramid(n) {
  return Array(n)
    .fill()
    .map((e, i) => Array(i + 1).fill(1));
}

pyramid(3);
