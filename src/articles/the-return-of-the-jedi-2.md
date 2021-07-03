---
slug: "the-return-of-the-jedi-2"
date: "2021-07-04"
title: "The Return of the Jedi - Part 2"
---

Hey! This is the second part of a multi-part post. If you haven't already, feel free to check out the other parts:

- Part 1 - [Boosting my chess club's website with Cloudflare and Heroku](https://blog.ruialves.me/the-return-of-the-jedi-1)
- Part 2 - You're here!
- Part 3 - Coming soon...

---

For this second part, I want to focus on the stuff I'm working on at the moment. Throughout the past months, I've been working on my master's degree thesis — **Towards the Partitioning and Operation of Web Applications leveraging Platform and Function as a Service** — I challenge and dare you to say the full name in one go, I double dare you! I know I certainly can't 😅

Jokes aside, it has been pretty insightful to be researching and learning so much about cloud computing. Although I didn't have the chance to explore as many services and "stuff" as I wanted to, I certainly did learn a lot! Unfortunately, I can't provide a lot of information about my thesis at the present moment since I will be defending it in my final presentation on the 12th of July — The presentation is going to be public and [streamed on Twitch](https://www.twitch.tv/feup_dei_sala2), so feel free to show up!

Anyway, I think it should be alright if I share just a few insights. My work consisted of facilitating the partitioning and deployment of web applications into multiple cloud service models (namely PaaS and FaaS) in order to allow developers to optimise their applications by using the best that each model has to offer. Although this may sound cute and idyllic, it is not quite trivial since it poses a great deal of challenges in infrastructure management, system observability and monitoring, traffic routing, overall robustness, and a bunch of other things.

That being said, my research in the past few months culminated in really-big-document-with-over-100-pages-dissertation and in the development of a [plugin package](https://pypi.org/project/django-cloud-deployer/) for `Python` that works on `Django` web applications. A quick disclaimer: the package itself is simply a proof of concept of my dissertation's key findings and still needs a lot of work in order to be fully robust, work with a multitude of cloud providers (at the moment, it only operates with `Azure` and `Heroku`), and to be of real use to the cloud development community. Additionally, I also synthesised a part of the key findings (mostly regarding traffic routing among distinct cloud service models) into a small scientific paper that should be published in a cloud-related conference in the near future (more on that later)!

It is hard to work on other things while one is focused on something as "big" as an MSc thesis; However, in the meantime, I've finally picked up some motivation and started to add a couple of features to my [personal chess website](https://chess.ruialves.me/). Moreover, I've started to learn a bit about `Kubernetes`, something which has been in my backlog for ages now.

---

In the following and final part, I'm going to be writing about my future steps after finishing my degree in computer engineering — BIG things are coming...!

Cheers!
