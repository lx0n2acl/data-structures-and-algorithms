import { insertionSort } from "../insertionSort";
import { mergeSort } from "../mergeSort";

describe("Sorting Tests", () => {
    test("insertion sort", () => {
        const arr = [2, 5, 4, 3, 1, 6, 7, 10, 9, 8];
        var sortedArray = insertionSort(arr);

        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 10, 9, 8])
    });
    test("merge sort", () => {
        const arr = [2, 5, 4, 3, 1, 6, 7, 10, 9, 8];
        var sortedArray = mergeSort(arr);

        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 10, 9, 8])
    });

});