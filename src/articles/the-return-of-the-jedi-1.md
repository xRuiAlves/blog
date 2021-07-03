---
slug: "the-return-of-the-jedi-1"
date: "2021-07-03"
title: "The Return of the Jedi - Part 1"
---

I'm back! This is my first time writing something here in months since I haven't had much time (nor motivation, to be honest) recently since I've been focusing on my thesis and a couple other things. Nevertheless, I've got a bunch I want to write about, so I'll be breaking this post into different parts, so stay tuned!

- Part 1 - You're here!
- Part 2 - Coming soon...

---

For the past few years, I've been developing and maintaining my chess club's (Grupo de Xadrez do Porto) website in my free time, as I've mentioned in a [previous post](https://blog.ruialves.me/a-meteoric-regret). The website was developed using `Meteor` and features a bunch of information about the club's activities, players, and a few other things. I initially started by hosting it using `AWS` free tier, which offers a low-budget VPS. After the free tier terminated, the club decided to extend the `AWS` hosting for another year.

In terms of domain management, the club has been renewing the same domain for years and years now. Initially, the domain was being managed at [dns.pt](https://www.dns.pt/pt/), which is terrible in terms of management flexibility. I "upgraded" the management to [dominios.pt](https://www.dominios.pt/) which, although it wasn't perfect, was surely a big improvement.

However, in the end of the last year, it was brought to my attention by a [good friend](https://miguelpduarte.me/) that `CloudFlare` was not only pretty neat for domain management, but also the first company to offer SSL/TLS protection free of charge and without bothersome configuration. Since I had some free time on my hands, I decided to go all-in with `CloudFlare`, and I am very happy with the results. The process took less than a couple of hours, and I've then started using `CloudFlare` for my personal domain as well - It is a game-changer.

While I was at it, I also decided to make some changes to the website itself. Since it was hosted in an `AWS` IaaS, managing updates and adding new features was at times a bit cumbersome and not as automatic as I would like. After doing some digging around the *internets*, I found out that `Heroku` free tier features a `Meteor` buildpack which facilitates the deployment process. I then created a staging instance to check if it was "solid" enough to hold up in production, and did a bit of load testing using `Locust` to check if it held up with some traffic in its hands. Since we don't have (and won't have any time in the near future) a large number of people accessing the website, it proved to be more than enough. I have then deleted the `AWS` instance and moved everything to `Heroku`, and I now have a much easier time pushing updates and changes to production. Additionally, it was also quite easy to configure the custom domain in the `Heroku` PaaS instance - I simply added the domain and received a DNS target that allowed me to create a CNAME record in `CloudFlare`, easy peasy!

Finally, I also added a couple of new features to the website's management dashboard. Firstly, I added the capability of bulk editing players info, which is pretty useful, specially in the beginning and ending of tournament-season. Additionally, I enhanced the updating of photos (some of the pictures were hard-coded, which was far from ideal 😬) and did some minor tweaks in styling here and there. I'm finally *moderately* happy with [the website](https://www.gxp.pt) 😅.

---

In the following parts, I'm going to be writing a little bit about some side projects, my thesis, and my future work plans.

Cheers!
