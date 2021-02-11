// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  // return the sorted array
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i+1; j <arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };


function mergeSort(arr){
  if(arr.length === 1){
    return arr;
  }
  let mid = Math.floor((arr.length)/2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left),mergeSort(right));
}

function merge(arr1,arr2){
  let arr = []
  for(let i = 0;i<arr1.length && j<arr2.length;){
    if(arr1[i]<arr2[j]){
      arr.push(arr1[i]);
      i++;
    }
    else {
      arr.push(arr2[j]);
      j++;
    }
  }
  if(i<arr1.length){
    while(i>0){
      arr.push(arr1[i])
        i--;
    }
  }

  if(j<arr2.length){
    while(i>0){
      arr.push(arr2[j])
        j--;
    }
  }
}