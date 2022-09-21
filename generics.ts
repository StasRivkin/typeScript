const arr1 = [2,3,5,7];
const arr2 = ['one', 'two', 'three'];

function  reverseArray<T> (arr : T[]) : T[] {
    return arr.reverse();
}

const res1 = reverseArray(arr1);
const res2 = reverseArray(arr2);