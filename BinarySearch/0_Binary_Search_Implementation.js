function binarySearch(arr, target){
    let start = 0;
    let end = arr.length -1;
    let mid;

    while(start <= end ){
        mid = Math.floor((start + end) / 2);

        if(arr[mid] === target){
            return true;
        }else if(arr[mid] < target){
            start = mid + 1;
        }else{
            end = mid -1;
        }
    }

    return false;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 10))

/* Time Complexity is O(logN) */