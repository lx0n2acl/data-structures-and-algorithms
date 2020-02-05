
describe("Sorting Tests", () => {
    test("insertion sort", () => {
        const arr = [1, 4, 32, 10, 74, 3, 23, 2, 6, 7];
        var sortedArray = insertionSort(arr);

        expect(sortedArray).toBe([1, 2, 3, 4, 6, 7, 10, 23, 32, 74])
    });

});