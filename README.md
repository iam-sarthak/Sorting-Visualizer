# Sorting-Visualizer

1. Introduction

Nowadays sorting algorithms are widely used in computer software. For example, if you open file explorer on your PC, you may see files sorted in different ways. Searching in sorted data is more efficient than in not sorted ones. Students of computer science start learning different algorithms in the first year of studies and sorting algorithms are among them. 
Since I faced the problems of sorting during the course of algorithm design in the first year of my studies, there is an understanding that the visual representation is a vital part of the studying process. During working on the thesis it was very exciting to learn different techniques of sorting algorithms into the depth. 
The main goal of the thesis was to create a program which would serve as a tool for understanding how most known sorting algorithms work. There was an attempt to make the best possible user experience. The demonstration software is made in a user-friendly and easy-to-use style. To gain maximal benefit from learning you can try each sorting algorithm on your data. 
The text of the thesis describes principles of the most known sorting algorithms which are demonstrated in the computer program. It might be used as a source for learning algorithms by students. Also, the program might be easily used as a demonstration by lecturers and tutors during classes. Besides, there is programmer documentation and user guide to the provided software. 
Readers of this text are expected to have some programming experience to know basic data structures such as arrays, lists, trees and understand recursive procedures. Also, knowledge of some simple algorithms and their implementations could be helpful. In order to understand the topic better, knowledge of linear algebra and calculus is involved.
 

2. Sorting algorithms

Insertion Sort
Insertion Sort algorithm has a simple idea. Assume an array with items to be sorted. We divide the array into two parts: sorted one and unsorted one. At the beginning sorted part consists of the first element (Figure 6). Then, for each item that we have in the unsorted part, we take element and insert it into the right place among the sorted items.

Figure 3: Insertion Sort: sorted and unsorted parts at the beginning

In order to insert element into the right place in the sorted part, we compare selected item from the unsorted part with each item from the sorted part in the direction from right to left. Comparing continues until smaller or equal element is found or no elements to compare left. After each comparison, if current item in the sorted part is greater, we move that current item one position right. Finally, when the right position is found, we insert an item into the sorted part. Complexity of Insertion Sort is Θ(n2).

Selection Sort
Selection Sort algorithm is based on the repeated selection. Here we consider finding minimal key from the unsorted part and swapping it with the first un- sorted key. As well as in the Insertion Sort, sorted part grows from the beginning of the sequence. 
Assume an array of items to sort. At the beginning of the sorting process unsorted part is represented by the whole array. Then, the first item of the unsorted part is set as the smallest item and is compared with the follow-up elements. When smaller item is found, it is set as a new smallest key. After the end of the array is reached the smallest item is swapped with the first element of the unsorted part and it becomes the sorted part of the array. This step is repeated till the array is sorted. Complexity of this sorting algorithm is Θ(n2).
 
Bubble Sort
Bubble Sort is based on the idea of exchanging two adjacent elements if they have the wrong order. The algorithm works stepping through all elements from left to right, so the largest elements tend to move or "bubble" to the right (Figure 4). That is why the algorithm is called Bubble Sort.
Now we are going to the details. Let us have an unsorted array. The algo- rithm does iterations through the unsorted part which is the whole array at the beginning. And with each iteration through the array the range of inspected items is decreased by one till only two elements left. After this two elements are compared and possibly swapped, the array is considered as sorted. Bubble Sort complexity is Θ(n2).

 
Figure 4: Bubble Sort: one pass through the array
Quick Sort
Quick Sort works on the principle "divide and conquer". It recursively applies itself on smaller parts of array until it is not sorted.
Algorithm takes one item at unsorted array or its part, usually it is the leftmost or the rightmost element of array. Then this item, also known as pivot, is moved to its final position in the array that is should occupy. While determining pivot’s position, other elements of array are rearranged the way that no bigger elements are on the right and no smaller elements are on the left.
This way, it is enough to apply Quick Sort on each part of array not including pivot until array is not sorted.
 

Figure 5: Quick Sort principle

There are several methods of partitioning of array into two parts, here I want to describe one that is demonstrated in the software part of this work.
 

Firstly, a pivot and index item are selected on the unsorted array or its part. Assume pivot is the rightmost item and index is the leftmost. Next, each item of the array except pivot is compared with the pivot. If a current item is less or equal to the pivot, it is swapped with the index item, next in order item becomes an index. Finally, index and pivot are swapped and this way pivot is on its final position.
Quick Sort is counted as an effective algorithm because its average complexity is Θ(n log n). However, when array is maximally unbalanced it may show worst performance. Worst case complexity is Θ(n2).

Merge Sort
Merge Sort as well as Quick Sort is an algorithm of type "divide and conquer". Its logic is simple: divide data into two parts, sort the left part, sort the right part, then "merge" the parts back.
The algorithm works by the recursive application itself on the unsorted parts. In the beginning, it selects the middle item, which becomes the rightmost element of the left part. Then, it recursively sorts both parts. Finally, the algorithm "merges" two sorted parts. Merging procedure itself takes items from each of two sorted parts one by one, compares them and moves the smallest to the output, repeats the previous step. Merge Sort complexity is Θ(n log n)
 
Figure 6: Merge Sort principle
 
