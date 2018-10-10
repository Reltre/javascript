function binarySearch(array, item, start, end) {
  if (start === end) { 
    if(array[start] > item) {
      return start
    } else {
      return start + 1
    }
  }

  if(start > end) {
    return start
  }

  mid = Math.round((start + end)/ 2)

  if(array[mid] < item) {
    return binarySearch(array, item, mid + 1, end)
  } else if(array[mid] > item) {
    return binarySearch(array, item, start, mid - 1)
  } else {
    return mid;
  }
}

// Split the array into halves and merge them recursively 
function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

function insertionSort (items) {
  let length = items.length;
  for (var i = 0; i < length; i++) {
    let value = items[i]
    let position = binarySearch(items, value, 0, i - 1)
    items = items
      .slice(0, position)
      .concat([value])
      .concat(items.slice(position, i))
      .concat(items.slice(i + 1, length))
  }

  return items;
}

function setMinRun(items) {


}

function timSort(array) {
  let sortedArray;
  const minRun = setMinRun(array);
  if (array.length < 64) {
    sortedArray = insertionSort(array)
  }

  return sortedArray;
}

console.log(insertionSort([1,2,1,8,5,9]))