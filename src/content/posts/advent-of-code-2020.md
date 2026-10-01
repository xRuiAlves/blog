---
slug: "advent-of-code-2020"
date: "2021-01-07"
title: "Advent of Code 2020"
---

[Advent of Code](https://adventofcode.com/) is a Christmas-theme programming competition that takes place every year during the first 25 days of December. Usually, it's your job to save Christmas!

I've been participating every year for the past five years, and I always end up getting addicted and spending a lot of time on the challenges, so this year I decided that I wouldn't be participating. Naturally, this resistance lasted a single day, and, except for day 1, I managed to solve all exercises in their publish-day.

I wanted to share some insight into the challenges that I found interesting and enjoyed the most.

## Day 10: Adapter Array

This challenge consisted of helping our hero to connect a set of *joltage* adapters. Part 1 was pretty straight-forward. However, the second part was a bit more challenging. This was the first challenge that wasn't solvable using a brute-force solution (as visible in the leaderboard). I ended up using a `DFS` + cache solution, although the challenge was screaming for dynamic programming:

```scala
def dfs(joltages: ArrayBuffer[Long], i: Int): Long = {
    if (cache.contains(i)) return cache(i)

    cache(i) = (1 to 3).map(j => {
        if ((i + j < joltages.length) && (joltages(i + j) <= joltages(i) + 3)) dfs(joltages, i + j)
        else 0
    }).sum

    cache(i)
}
```

## Day 13: Shuttle Search

This one consisted of fixing a set of bus schedules. Similar to the previous one, part 1 was quite trivial. When reading part 2, I had some flashbacks of the Discrete Mathematics course I took about four years ago, specifically about the [Chinese Remainder Theorem](https://en.wikipedia.org/wiki/Chinese_remainder_theorem). In short, it consists of finding a number `N`, such that:

```
N = a (mod x)
N = b (mod y)
N = c (mod z)
...
```

With a few tweaks and tricks, this can be applied to our problem. Assuming that the input is `17,x,13,19` and that we want to find the earliest timestamp `T`:

```
T = 0 (mod 17)
T + 2 = 0 (mod 13)
T + 3 = 0 (mod 19)
```

...and by applying a bit of mod-space algebra ...

```
T = 0 (mod 17)
T = 13 - 2 (mod 13) = 11 (mod 13)
T = 19 - 3 (mod 19) = 16 (mod 19)
```

Although after browing through the [AoC Reddit](https://www.reddit.com/r/adventofcode/) I found out that there were other ways of solving this, I'm absolutely sure this is the coolest one :sunglasses:

## Day 17: Conway Cubes

Although not difficult, this challenge took [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) to the next level by creating a 3-dimensional and 4-dimensional version in parts 1 and 2, respectively. Even though I'm pretty happy about my solution, it doesn't need to be very efficient since the problem statement only asks for 6 iterations.

## Day 18: Operation Order

This one consisted of evaluating a numeric expression. The twist is that operators have different levels of precedence, which was a bit counter-intuitive! I used a stack-based approach to solve it linearly, similarly to my solution for a [LeetCode Calculator Problem](https://leetcode.com/problems/basic-calculator-ii/) I had solved about a year.

## Day 23: Crab Cups

In this challenge, the goal was to play a version of the cups game with a crab (yeap, it's a Christmas-themed competition). Part 1 had a very small-sized input, so it was solvable without the need for a very elaborate solution. However, the input size was much larger in part 2. Since I was pretty much expecting the differences in input size to be substantial between both parts, I tried to come up with an efficient solution from the start. 

This problem was, by nature, very similar to the [LeetCode LRU Cache](https://leetcode.com/problems/lru-cache/) problem I had solved a few months before.

## Day 24: Lobby Layout

I find hexagonal grids to be very interesting for some reason (as do [bees](https://uxdesign.cc/why-do-bees-love-hexagons-119cfd0d95a9), go figure!), so I really enjoyed this one. After reading the statement, I instantly remembered about a similar [Advent of Code 2017 Challenge](https://adventofcode.com/2017/day/11) I had solved a few years back, so I ended up using the same 2D-matrix coordinate representation I used back then:

```scala
final val STEPS_DELTAS = Map(
    "w" -> new Cell(-2, 0),
    "e" -> new Cell(2, 0),
    "sw" -> new Cell(0, 1),
    "se" -> new Cell(1, 1),
    "nw" -> new Cell(-1, -1),
    "ne" -> new Cell(0, -1)
)
```

However, a [friend of mine](https://hugopeixoto.net/articles/advent-of-code-2020-week-3-4.html) pointed me to an article that actually uses a lot let space with a slightly different representation:

```scala
final val STEPS_DELTAS = Map(
    "w" -> new Cell(-1, 0),
    "e" -> new Cell(1, 0),
    "sw" -> new Cell(0, 1),
    "se" -> new Cell(1, 1),
    "nw" -> new Cell(-1, -1),
    "ne" -> new Cell(0, -1)
)
```

--- 

I solved all the challenges using `Scala`, and I ended up improving my coding skills with this language quite a bit since I pretty much learned something new every other day. For me, this year's edition was the most enjoyable one by far, which motivated me to solve every challenge in their publish-day. I will be back next year with more Xmas-coding!

Cheers, I (sincerely) hope that 2021 is better than 2020 for everyone!
