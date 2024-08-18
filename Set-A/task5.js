function countSmaller(nums) {
  const sortedList = [];
  const counts = [];

  function binarySearch(list, target) {
    let left = 0;
    let right = list.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (list[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    const index = binarySearch(sortedList, num);
    counts[i] = index;
    sortedList.splice(index, 0, num);
  }

  return counts;
}

const nums = [5, 6, 7, 1, 2, 3];
console.log(countSmaller(nums));
