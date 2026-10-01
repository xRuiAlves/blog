---
slug: "i-miss-programming"
date: "2021-02-24"
title: "I miss Programming!"
---

It's been a while since I last wrote something, mainly because I've been dedicating most of my time to my MSc Thesis (more on that later). However, I've been fiddling around with some side projects and background ideas.

## Chess games page

Chess matches annotations follow a specific standard called [PGN](http://www.saremba.de/chessgml/standards/pgn/pgn-complete.htm). Although my chess games pages already allowed exporting my games to this `PGN` format, it didn't follow the metadata standards and wasn't fully compatible with `PGN` readers. Thus, I took some time in adapting the "Export Game to `PGN`" functionality to ensure it followed the standard.

I had been using this functionality mostly to later import the match using [Lichess](https://lichess.org/) so that I could analyse it. Since this takes a lot of clicks, I decided to also add an "Analyse with Lichess" functionality that uses the [Lichess API](https://lichess.org/api#operation/gameImport) to export the match and quickly analyse it (using Lichess' [Stockfish](https://stockfishchess.org/)).

Besides that, I fixed some small things here and there (mostly to improve UX a bit). I've also integrated [Google Analytics](https://analytics.google.com/) in the website, which was actually fairly straightforward since `Gatsby` (I'm using `Gatsby`, incidentally) features a plugin that automates most of this purpose. Although it provides some pretty cool insights, most of the stuff looks to me like a bunch of codswallop, to be honest 😅

You can check this stuff out at [a match's page](https://chess.ruialves.me/game/sim%C3%A3opintor-vs-ruialves-29-11-2019) on my chess website.

## MSc Thesis

My thesis is named *Annotation-Based Runtime Partitioning of Web Applications into FaaS*. Basically, my premise is that if a cloud-based web application can automatically move parts of itself from IaaS/PaaS into FaaS and vice-versa at runtime, it should be able to improve stuff such as client latency and infrastructure costs — that is, Cloud-stuff goes beep boop.

I'm currently doing research on this domain and I'll be implementing a proof of concept plugin for the Django web framework, throughout the next few months, to validate my findings.

## Competitive Programming

A few months ago I stopped doing [LeetCode's](https://leetcode.com/) daily challenges and competitions altogether and, meanwhile, I completed the [Advent of Code 2020](https://adventofcode.com/2020) challenge. Other than that, I've been completely out of action in this type of stuff. A few days ago I started to miss it, so my plan is to pick up [Code Wars](https://www.codewars.com/) and some old [AoC](https://adventofcode.com/2016/) unfinished challenges that have been in my backlog for way too long.

---

Research work is weird and different from what I'm used to. However, this is the last step in my MSc and, after this, I'll be doing more practical stuff for a lot of time, so I guess I'll do my best to enjoy the ride.

Cheers!
