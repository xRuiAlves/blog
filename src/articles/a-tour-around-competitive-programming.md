---
slug: "a-tour-around-competitive-programming"
date: "2020-07-25"
title: "A tour around Competitive Programming"
---

During the past year, I've been exploring the "competitive programming problems" world. It all started around October 2019, when I began studying for coding interviews at Amazon, Bending Spoons and, most of all, Palantir Technologies.

I wanted to have a somewhat methodic and organized way of tracking my progress, while at the same time trying to keep focus on problem types that were common in large tech companies' interviews. After trying out [LeetCode](https://leetcode.com/), [Project Euler](https://projecteuler.net/) and [Hackerrank](https://www.hackerrank.com), I particularly enjoyed the former, since most of the community seemed to have the same focus as I did. I started a [GitHub repository](https://github.com/xRuiAlves/leetcode) featuring all my solution proposals, which were developed using `Java`.

As of the start of April, when I finished my interview process, I had solved **41 easy**, **119 medium** and **8 hard** problems. I found that the "repetitive" process of solving similar problems (that is, problems that have analogous solutions) resulted in training my brain to quickly recognize how to solve a new problem, whether by identifying the most appropriate data structures for the given scenario or by applying the correct solving methodologies (dynamic programming, memoization techniques, etc).

In the last 4 months I've been less active, although I've been tackling problems from the [LeetCode monthly challenges](https://leetcode.com/explore/other/card/30-day-leetcoding-challenge) every day, which started back in April. During this time, I also participated in a couple of contests, although I didn't do particularly well in either of them.

Although there were many problems I enjoyed solving, I decided to pick two of them to share (not because they were particularly my favorites, but because they had something interesting by nature).

## Problem 72 - Edit Distance [Hard]

```
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2. 
You have the following 3 operations permitted on a word:
- Insert a character
- Delete a character
- Replace a character
```

I had implemented some `C++` code in the past using a "known" algorithm to compute two strings' edit distance. However, I wanted to try finding a solution by myself, without recurring to the literature (to simulate an interview-like situation). Based on the operations described in the formulation, this type of edit distance is also known as [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance).

After scratching my head for a while, I realized that this could be solved using - that's right - the dreadful **dynamic programming** (for some reason, while studying algorithms in a curricular unit early on in college, I ended up getting the idea dynamic programming was very hard, although that's not the case at all).

By using some extra space to help the process, I ended up using a matrix to solve the problem. The matrix width represents `word1` and its height represents `word2`. Each matrix cell `(i, j)` value is the edit distance from the first `i` characters of `word1` to the first `j` characters of `word2`. Now I just needed to populate the matrix! After initializing all elements with 0 and filling the first row and first column with ascending values (which represent the edit distance of the word to an empty string), the edit distance is calculated using the following recurrence function:

```
if word1[i] == word2[j]:    // The char is the same, no distance
    M[i, j] = M[i-1, j-1]
else:
    M[i, j] = 1 + min(
        M[i-1, j],          // Delete char at word1[i]
        M[i, j-1],          // Insert char in word2[j]
        M[i-1, j-1]         // Replace char in word1[i] by word2[j]
    )
```

After iterating the full matrix, the edit distance is the value at `M[word1.size-1, word2.size-1]`! The full solution may be found [here](https://github.com/xRuiAlves/leetcode/blob/master/Problems/72.%20Edit%20Distance/Solution.java).

## Problem 210 - Course Schedule II [Medium]

```
There are a total of n courses you have to take, labeled from 0 to n - 1.
Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.
There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.
```

I found this problem particularly fun to solve. The way I came up with the solution shows that, sometimes, you only fully understand the problem and get good ideas when you "get your hands dirty" and start coding. The first thing that caught my eye is that prerequisites could be modeled as connections in a directed graph and that the input may not lead to a valid course schedule - the courses could have requirement loops (direct or not).

Finding if the input was valid or not was easily solved by applying a [DFS](https://en.wikipedia.org/wiki/Depth-first_search) starting at node 0 (the "root" of the graph) - If all nodes were visited without finding loops, the input could lead to a valid solution. That's when it came to my mind that applying the `DFS` would actually get me **the solution itself** if the input could lead to a valid course schedule!

The order in which nodes are visited using a depth-first search consists of a [Topological Order](https://en.wikipedia.org/wiki/Topological_sorting) (or topological sorting) - which in this scenario represents a valid course schedule. The full solution may be found [here](https://github.com/xRuiAlves/leetcode/blob/master/Problems/210.%20Course%20Schedule%20II/Solution.java).

---

As of the of July 2020, I have solved **73 easy**, **152 medium** and **13 hard** problems. I'll keep solving problems from these monthly challenges for as long as I'm having fun with them - which will likely be for a long time.

Cheers!
