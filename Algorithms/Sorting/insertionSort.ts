export function insertionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                var tmp = arr[i];
                arr[i] = arr[j]
                arr[j] = tmp;
            }
        }
    }
    return arr;
}