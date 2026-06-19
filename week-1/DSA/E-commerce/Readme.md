**Analysis**
"Big O Notation" is used to measure the efficiency of an algorithm by showing how its execution time increases as the input size grows.

**For search operations**:
1.Best Case: Element is found immediately.
2.Average Case: Element is found after several comparisons.
3.Worst Case: Element is at the end or not present.

Linear Search --> has a time complexity of O(n) in the average and worst cases because it checks elements one by one.

Binary Search --> has a time complexity of O(log n) because it repeatedly divides the search space into halves.

For an e-commerce platform, Binary Search is more suitable as it provides faster searching for large product datasets. However, the data must be sorted before performing Binary Search. Linear Search is simpler but less efficient for large collections of products.

**Output**
Linear Search:
Found: Camera(Category :Electronics)

Binary Search:
Found: Camera(Category :Electronics)
