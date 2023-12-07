function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  const avg = (Number(sum / arr.length)).toFixed(2);
  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams(1, 2, 3, -100, 10));


function hasElementsInArray(arr) {
  return arr.length > 0;
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (!hasElementsInArray(arr)) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(summElementsWorker());


function differenceMaxMinWorker(...arr) {
  let min = 0;
  let max = 0;
  if (!hasElementsInArray(arr)) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max - min;
}
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));


/////////////////Считает не то что надо//////////////////////

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (!hasElementsInArray(arr)) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
/////////////////////////////////////////////////////////////

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (!hasElementsInArray(arr)) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));



/////////////не понимаю как написать..../////////////////////

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
 
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
console.log(makeWork(arr, summElementsWorker));
