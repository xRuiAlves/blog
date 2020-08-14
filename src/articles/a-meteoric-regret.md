---
slug: "a-meteoric-regret"
date: "2020-08-13"
title: "A Meteoric regret"
---

About 2 years ago I was asked to build a new website for my chess club. In this article, I want to share a bit of my experience in developing a web app with [Meteor](https://www.meteor.com/) and why I've come to regret that choice.

Firstly, I'll share a few details about the project *per se*. Before I started working on the project, the existing website was very 90's looking (with some blinking buttons) and had plenty of broken and empty pages. From what I understood, it was an `ASP.NET` app that communicated with 4 `Microsoft Access` databases (3 of them being empty for some reason). All of this was hosted without backup / version control in someone's home server. Although I can't be sure, my understanding is that new articles and posts were added by manually editing `HTML` files via an `ssh` connection. It was time for a change!

The new website had two main requirements:

- A back office for the chess club management team, where someone without a technology background could easily manage articles, players, club activities, etc
- A clean fresh look to improve user experience, so that people would actually want to visit the website

When I started tackling the project, I had been studying Computer Science for about 2 or 3 years and didn't have much experience in web development. Since this was a "solo gig", I could choose whichever tech stack I wanted. After doing a bit of research (in hindsight, it was a very small bit), I thought that `Meteor` was a very good option. I was mostly attracted by the fact I would be developing the whole app using only one programming language and by `Meteor` using [GraphQL](https://graphql.org/) (I had read about it in some article and really wanted to give it a try). Moreover, I had only worked with relational databases, so I wanted to give `MongoDB` a try. Although satisfying the "client's" needs was the priority, I saw this project as a big learning opportunity (and it was!).

As of August 2020, the new website has been up for a little less than a year. The full development process took about 10/11 months. Due to budget limitations, the app is hosted in a `t2.micro AWS EC2` and the `MongoDB` database is hosted in `MongoDB Atlas` (using their free tier, which is actually pretty good). I'm using [dominios.pt](https://www.dominios.pt/) for DNS management (after a painful switching from [dns.pt](https://www.dns.pt/pt/)), but that's a story for another time.

In the middle of having 2 years of studies, 3 internships and a bunch of side-projects, I ended up leaving the website untouched after deploying it (I didn't even set up SSL certificates). I'm currently in the process of "dockerizing" the app and configuring SSL certificates to setup https.

Now, let's get to why I've come to regret the decision of choosing `Meteor`:

- **There is too much magic going on.** It does a lot for you, which can be a downside. There are many things that were built in order to work in a specific way out of the box and without being tweaked. It can be difficult (or even impossible) to configure a certain thing in a specific way (*e.g.* Having custom authentication aspects or custom specific middlewares) and the community seems to value and prefer "hacks" that are not pretty nor maintainable to fix a known issue rather than adding support to fix it to the framework itself.
- **It is tightly-coupled with MongoDB.** Even though there's (supposedly, I haven't tried it myself) support for other `DBMSs`, it was conceived in a way to be completely `MongoDB` dependant, both as persistence storage and cache - if you want to avoid a bunch of hacking, you're pretty much stuck with `Mongo`.
- **The lack of structure.** This is probably my biggest pain-point. Unlike other frameworks such as `Rails`, `Phoenix` or `Laravel`, `Meteor` lacks a decent structure with a clear separation of data, logics and views (which is really well defined in the aforementioned alternatives). In the long run, this makes a project quite hard to maintain.
- **Very, very slow build times.** Everything seems to take a lot of time, even if you're developing in a decent machine. Starting the development server, running tests, live-updating after applying changes, building for production - all these tasks take a lot more time than in other frameworks I've tried before.
- **Small community support.** Although this is much more of a personal opinion than the former statements, there is a lot less community support than, for example, in the `Rails` community. Even though there are experts in all languages, it's just way harder to find the help you're looking for.

Even though there are other things I'm unhappy with (lack of basic core functionalities that can only be found in specific modules, unpredictability, etc), these are the biggest disadvantages to my eyes.

Note that there are still plenty of perks in using `Meteor` (such as being good for quick prototyping and relatively easy to learn). However, I don't feel they are enough to shift the "scale" to the positive side.

---

In conclusion, I chose `Meteor` for the wrong reasons, driven by lack of knowledge regarding alternatives. In the future, I should take more time choosing the ideal tech stack for the given scenario, which is a lot easier now since I have a bit more experience.

Cheers!
