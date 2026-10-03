---
slug: "back-with-a-new-domain"
date: "2026-10-03"
title: "I'm back, and with a new domain!"
---

It's been a while (over 5 years to be "exact") since my last post! Recently, my `ruialves.me` domain expired, which left my [personal page](https://ruialves.net/), my [chess games page](https://chess.ruialves.net/) and this very blog without a home.

It was time for a new one, and given I didn't particularly like the `.me` domain extension and that it was quite expensive, I decided to buy `ruialves.net` instead.

While I was at it, I decided to finally get a proper email address on my own domain and to manage the whole thing as code.

## A shiny new email

I wanted `rui@ruialves.net` to work as an alias of my personal Gmail account -- that is, receiving and sending emails with the new address, without having to manage yet another inbox.

After browsing for a bit, I decided to try a completely free approach that turned out to be pretty neat:

- **Receiving** is handled by [CloudFlare Email Routing](https://developers.cloudflare.com/email-routing/), which forwards everything sent to `rui@ruialves.net` to my Gmail inbox;
- **Sending** is handled by Gmail itself, using the "Send mail as" feature with Gmail's own SMTP server.

Since my emails now leave through Google's servers, I also had to update the `SPF` DNS record to authorize both providers, which was something along the lines of:

```
v=spf1 include:_spf.mx.cloudflare.net include:_spf.google.com ~all
```

And *vois là*, I finally have a nifty email (one without the name of my high school in it 🤦) I can use in my day-to-day -- That wasn't so hard! 

## Moving the websites

All my websites are hosted on [Netlify](https://www.netlify.com/), so moving them was mostly a matter of updating the DNS records to point to the new domain.

There were a couple of bumps on the road in generating the SSL/TLS certificates with [Let's Encrypt](https://letsencrypt.org/) through Netlify to get HTTPS going, but it eventually "magically" went through by clicking the "Retry" button enough times.

Finally, I also took the opportunity to redesign all the websites I own (this time using "a bit" of AI help to get the pages elegant-looking and SEO working properly, as I'm **terrible** at all-things-frontend), and I'm pretty happy with how they turned out.

## Infrastructure as Code

I like to configure stuff as code, both at work and in life. Thus, might as well use [OpenTofu](https://opentofu.org/) and the CloudFlare provider to configure all my email and DNS, and put it in a [GitHub repository](https://github.com/xRuiAlves/cloudflare-config)!

The setup is fairly simple and has two modules: one for the zone's DNS records and one for Email Routing. Since most of it had already been created through the dashboard, I brought the existing resources into the state using `import` blocks.

All values live in a single `values.tf` file, so adding a new subdomain is a matter of adding a few lines and running `tofu apply`, which is exactly how I added the chess subdomain (which I only remembered existed at the end of this process):

```hcl
chess = {
  name    = "chess.ruialves.net"
  type    = "CNAME"
  content = "rui-chess-games.netlify.app"
  ttl     = 1
  proxied = false
}
```

While I was at it, I also added a couple of extra things:

- **CAA records**, which restrict which certificate authorities can issue certificates for the domain;
- **DNSSEC**, which protects my DNS -- I honestly only activated this to get rid of a warning in the CloudFlare dashboard + it is pretty much a one-liner.

Regarding the state, I'm keeping it simple with a local backend, and tracking the state file with `git`.

---

All in all, it only took me a couple of hours to get everything up and running, and I'm pretty happy with how it all turned out.
I haven't been very motivated to do computer-stuff outside work, but found this refreshing for a change!

Now let's see if I don't take another 5 years to post something here!
