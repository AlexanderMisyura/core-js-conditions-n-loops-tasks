/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(...numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i += 1) {
    if (max < numbers[i]) max = numbers[i];
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;

  const minXCoord = Math.min(queen.x, king.x);
  const maxXCoord = minXCoord === queen.x ? king.x : queen.x;
  let stepCount = 0;

  while (minXCoord + stepCount < maxXCoord) stepCount += 1;

  if (queen.y + stepCount === king.y || queen.y - stepCount === king.y)
    return true;

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a === b && a + b > c) return true;
    if (a === c && a + c > b) return true;
    if (b === c && b + c > a) return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let number = num;
  let result = '';
  while (number > 0) {
    if (number >= 10) {
      result += 'X';
      number -= 10;
    } else if (number === 9) {
      result += 'IX';
      number -= 9;
    } else if (number >= 5) {
      result += 'V';
      number -= 5;
    } else if (number === 4) {
      result += 'IV';
      number -= 4;
    } else if (number) {
      result += 'I';
      number -= 1;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '0':
        result += 'zero';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      case '-':
        result += 'minus';
        break;
      default:
        break;
    }
    if (i !== numberStr.length - 1) {
      result += ' ';
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = String(num);
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === String(digit)) return true;
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (i !== 0 && i !== arr.length - 1) {
      let sumLeft = 0;
      let sumRight = 0;

      for (let j = 0; j < i; j += 1) {
        sumLeft += arr[j];
      }
      for (let k = i + 1; k < arr.length; k += 1) {
        sumRight += arr[k];
      }

      if (sumLeft === sumRight) return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(s) {
  const size = s;
  const m = [];
  let count = 1;
  for (let i = 0; i < size; i += 1) {
    m[i] = [];
  }

  let rowStart = 0;
  let rowEnd = size - 1;
  let colStart = 0;
  let colEnd = size - 1;

  function fillRing() {
    if (rowStart > rowEnd || colStart > colEnd) {
      return;
    }

    for (let i = colStart; i <= colEnd; i += 1) {
      m[rowStart][i] = count;
      count += 1;
    }
    rowStart += 1;

    for (let i = rowStart; i <= rowEnd; i += 1) {
      m[i][colEnd] = count;
      count += 1;
    }
    colEnd -= 1;

    for (let i = colEnd; i >= colStart; i -= 1) {
      m[rowEnd][i] = count;
      count += 1;
    }
    rowEnd -= 1;

    for (let i = rowEnd; i >= rowStart; i -= 1) {
      m[i][colStart] = count;
      count += 1;
    }
    colStart += 1;

    fillRing();
  }

  fillRing();
  return m;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const m = matrix;
  const newMatrix = [];
  for (let i = 0; i < m.length; i += 1) {
    newMatrix[i] = [];
    for (let j = 0; j < m[0].length; j += 1) {
      newMatrix[i][j] = m[m[0].length - 1 - j][i];
    }
  }

  for (let i = 0; i < newMatrix.length; i += 1) {
    for (let j = 0; j < newMatrix[0].length; j += 1) {
      m[i][j] = newMatrix[i][j];
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function sortByAsc(arr) {
  function partitionArray(array, left, right) {
    const myArray = array;
    const pivotElement = myArray[right];
    let i = left - 1;

    for (let j = left; j <= right - 1; j += 1) {
      if (myArray[j] < pivotElement) {
        i += 1;
        [myArray[i], myArray[j]] = [myArray[j], myArray[i]];
      }
    }

    [myArray[i + 1], myArray[right]] = [myArray[right], myArray[i + 1]];

    return i + 1;
  }

  function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
      const newPivotIndex = partitionArray(array, left, right);
      quickSort(array, left, newPivotIndex - 1);
      quickSort(array, newPivotIndex + 1, right);
    }
  }

  quickSort(arr);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let rounds = iterations;
  let result = str;

  while (rounds) {
    let left = '';
    let right = '';

    for (let i = 0; i < result.length; i += 1) {
      if (i % 2 !== 0) {
        right += result[i];
      } else {
        left += result[i];
      }
    }

    result = `${left}${right}`;
    rounds -= 1;

    if (result === str) {
      rounds = iterations % (iterations - rounds);
    }
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function createArrayFromNumber(n) {
  const string = `${n}`;
  const resultArray = [];
  for (let i = 0; i < string.length; i += 1) {
    resultArray[i] = Number(string[i]);
  }
  return resultArray;
}
function sliceArray(array, start, stop) {
  const resultArray = [];
  for (let i = start, j = 0; i < stop; i += 1, j += 1) {
    resultArray[j] = array[i];
  }
  return resultArray;
}
function joinArray(array, separator = ',') {
  let resultString = '';
  for (let i = 0; i < array.length; i += 1) {
    if (i === array.length) {
      resultString += `${array[i]}`;
    } else {
      resultString = `${resultString}${array[i]}${separator}`;
    }
  }

  return resultString;
}

function getNearestBigger(number) {
  const arr = createArrayFromNumber(number);
  let threshold = arr.length - 1;
  let swappable;
  for (let i = arr.length - 1; i >= 1; i -= 1) {
    if (arr[i - 1] < arr[i]) {
      threshold = i;
      swappable = arr[threshold - 1];
      let min = i;

      for (let j = threshold; j < arr.length; j += 1) {
        if (swappable < arr[j] && arr[j] < arr[min]) {
          min = j;
        }
      }

      [arr[threshold - 1], arr[min]] = [arr[min], arr[threshold - 1]];
      break;
    }
  }

  const rightPart = sliceArray(arr, threshold, arr.length);
  const leftPart = sliceArray(arr, 0, threshold);
  sortByAsc(rightPart);

  return Number(joinArray([...leftPart, ...rightPart], ''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
