---
slug: "chess-and-tech"
date: "2020-08-04"
title: "Chess and Tech"
---

Besides programming, Chess has been the only "hobby" that I've kept 100% active at throughout the past few years. It's fun, competitive, strategical, and virtually impossible to master - everything I like in a hobby!

The past few weeks I've been having fun coding stuff that automates some of the daily chess activities I usually do. These tasks involve annotating and publishing my chess games, keeping track of my current ratings (both online and [over the board](https://en.wikipedia.org/wiki/Glossary_of_chess#over-the-board)) and creating and hosting a bunch of weekly online tournaments for [my chess club](https://lichess.org/team/grupo-de-xadrez-do-porto).

## Chess games page

I started by making some changes to [my chess games page](https://chess.ruialves.me/). I had to fix some package vulnerabilities that introduced breaking changes. After some minor tweaks here and there, I also added a small section displaying my online ratings using the [Lichess API](https://lichess.org/api).

I already had a section featuring my over the board ratings, which was getting data from a [scraper and API](https://github.com/xRuiAlves/fide-ratings-scraper/) module I had developed to get ratings from FIDE's (the international chess federation) website since they don't expose a public API. However, some data appeared to be missing, so I decided to take a look at the scraper.

## FIDE ratings scraper

As I've mentioned, FIDE does not feature a public API. Thus, to get ratings and other info from players in a programmatic way, I decided to develop this scraper about a year ago. 

The missing data was due to a minor change FIDE made in a ratings HTML table section, which was quickly fixed by changing a query selector. However, the scraper's code was quite messy and needed a bit of a refactor, since the scraping logic was coupled with an express API I set up. Moreover, the test coverage was quite poor, so I also wanted to improve that.

After separating the scraping logic and the API into different modules, I decided that I might as well add CLI interaction (which although is not my main use-case, it might be useful to someone) and [publish the package on npm](https://www.npmjs.com/package/fide-ratings-scraper).

## Lichess tournament creator

Throughout the past few months, I have been manually creating online tournaments for my chess club in Lichess. The tournaments always take place at the same time (Wednesdays and Saturdays) and have exactly the same format. Although this is not a very demanding task, I wanted to automate this process, and finding that Lichess had a public API was the "kick" I needed to get me started. I decided to build a CLI tool to create tournaments, which had basically two requirements:

- Creating a tournament (either in Arena or Swiss format) with a set of specifications (duration, match time, etc) in a single command
- Creating tournaments in bulk from a given tournaments list input file (so that I could create a bunch of tournaments instantly, to save time)

They limit the number of tournaments a user can create daily (12 public tournaments), but creating tournaments for the following one and a half months was already pretty good for me. Although there are a bunch of settings a user can specify when creating a tournament, I didn't dive too much in adding all the features possible, since a simple version is enough to suffice my needs.

I also [published this package on npm](https://www.npmjs.com/package/lichess-tournament-creator) and listed some of the future work, so maybe someone interested will take a look and contribute with some more features!

---

Regarding future plans, I'd like to add [engine](https://en.wikipedia.org/wiki/Chess_engine) analysis to my chess games page. I would also like to start contributing to the [Lichess organization](https://github.com/lichess-org/) (although I'm already a patron, I want to contribute with something other than my money :stuck_out_tongue:).

In the meantime, feel free to take a look at my games page and/or at the packages I published:

- [Chess games page](https://chess.ruialves.me/)
- [fide-ratings-scraper](https://www.npmjs.com/package/fide-ratings-scraper)
- [lichess-tournament-creator](https://www.npmjs.com/package/lichess-tournament-creator)

Cheers!
