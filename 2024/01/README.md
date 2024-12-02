# 🎄 Advent of Code 2024 - Day 1: Historian Hysteria 🎅

## 🌟 [Problem Overview](https://adventofcode.com/2024/day/1)

The Chief Historian has gone missing, and the Senior Historians need your help to track him down! 🕵️‍♂️ You’re tasked with reconciling two lists of historically significant locations, each identified by unique **location IDs**. 

The problem is simple: compare two lists and calculate the total distance between their corresponding elements. Can you help solve the mystery and get those 50 stars before Santa’s sleigh takes off on Christmas Eve? 🎁

---

## 🧠 Part 1: Distance Between Lists

The first part of the challenge is to compare two lists of location IDs (the left and right lists). These lists were found in the Chief Historian’s office, and they contain location IDs in a jumbled order. Your goal is to calculate the **total distance** between the lists.

### Instructions:

1. Sort both lists.
2. Pair up the smallest numbers from each list and calculate the **absolute distance** between them.
3. Repeat this for all the numbers in the lists.
4. Sum up the distances to get the total.

---

### Example:

#### Given two lists of location IDs:

- **Left list**: `3 4 4 3 2 5 1 3 3 9 3 3`
- **Right list**: `10 11 12 13 14 14 15 13 10 11 10 3`

---

### **Step 1**: Sort both lists

- **Sorted Left list**: `1 2 3 3 3 3 3 3 4 4 5 9`
- **Sorted Right list**: `3 10 10 10 11 11 12 13 13 14 14 15`

---

### **Step 2**: Pair up the smallest elements from both lists and calculate the distance

The **distance** is the absolute difference between each pair of elements:

| **Left (Sorted)** | **Right (Sorted)** | **Distance** |
|--------------------|--------------------|--------------|
| 1                  | 3                  | 2            |
| 2                  | 10                 | 8            |
| 3                  | 10                 | 7            |
| 3                  | 10                 | 7            |
| 3                  | 11                 | 8            |
| 3                  | 11                 | 8            |
| 3                  | 12                 | 9            |
| 3                  | 13                 | 10           |
| 4                  | 13                 | 9            |
| 4                  | 14                 | 10           |
| 5                  | 14                 | 9            |
| 9                  | 15                 | 6            |

---

### **Step 3**: Add up all the distances

Total distance = `2 + 8 + 7 + 7 + 8 + 8 + 9 + 10 + 9 + 10 + 9 + 6 = 93`

---

### Final Result:

- The total distance between the two lists is **93**.

**Step 4**: What is the total distance between your lists?

This is the first part of the puzzle: calculate the total distance between the two lists of location IDs.

---

## 🧩 Part 2: [Sum of Frequencies](https://adventofcode.com/2024/day/1#part-2)

Your analysis only confirmed what everyone feared: the two lists of location IDs are indeed very different.

Or are they?

The Historians can't agree on which group made the mistakes or how to read most of the Chief's handwriting, but in the commotion you notice an interesting detail: a lot of location IDs appear in both lists! Maybe the other numbers aren't location IDs at all but rather misinterpreted handwriting.

This time, you'll need to figure out exactly how often each number from the left list appears in the right list. Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.

Here are the same example lists again:

| Left List | Right List |
| --- | --- |
| 3 | 4 |
| 4 | 3 |
| 2 | 5 |
| 1 | 3 |
| 3 | 9 |
| 3 | 3 |

For these example lists, here is the process of finding the similarity score:

    - The first number in the left list is 3. It appears in the right list three times, so the similarity score increases by 3 * 3 = 9.
    - The second number in the left list is 4. It appears in the right list once, so the similarity score increases by 4 * 1 = 4.
    - The third number in the left list is 2. It does not appear in the right list, so the similarity score does not increase (2 * 0 = 0).
    - The fourth number, 1, also does not appear in the right list.
    - The fifth number, 3, appears in the right list three times; the similarity score increases by 9.
    - The last number, 3, appears in the right list three times; the similarity score again increases by 9.

So, for these example lists, the similarity score at the end of this process is **31** `(9 + 4 + 0 + 0 + 9 + 9)`.

Once again consider your left and right lists. What is their similarity score?
