---
slug: "home-networking"
date: "2020-07-30"
title: "Home Networking"
---

Recently I decided to do a bit of a network setup improvement around my house. The main objective was to get a decent wi-fi coverage and "easy" cable accessing in a few key rooms. The only thing that makes this endeavor far from trivial is that my house is about 60 years old, with about 15cm thick walls, and without any cable-supporting infrastructure whatsoever. I wanted to share a bit of what went well and wrong with my planning and implementation, as well as some lessons learned.

Since I wanted to have the full hands-on experience, I decided I would assembly the cabling myself. I don't have gigabit ethernet at home (and I don't plan to have it anytime soon), so I decided to go with `cat5e` cabling. I got myself an `RJ45` crimping tool, an `FTP cat5e` cable spool and a bunch of connectors. I picked up a wiring diagram from the internet (I used the `Type B` standard since it seemed to be the most common one) and tried to build a short 1m cable, just to get acquainted with the process - happily for me, it worked quite well. I found [this video](https://www.youtube.com/watch?v=lullzS740wI) a bit helpful as well.

Now for the planning part: I live in a 2 story house and my ISP router is placed on the bottom floor. I found that if I added an Access Point to my house's upper floor I would get decent wi-fi coverage, and then I could add a few cables to each of the bedrooms for wired connections. My ISP router is placed in the garage and its location can't be changed due to logistics reasons, so I had to drill a small 1cm hole in the wall so that the wire could pass through. After doing a bunch of measures, I found that I needed to build a 20m cable to connect the ISP router to the place I would later on place a router on the top floor.

I also wanted things to look as neat as possible, so I bought a bunch of wiring rails and installed them near to the ceiling. I didn't need a very good router since my ISP does not provide me a very good internet service anyway, so I ended up going with a budget option and got an `Asus AC750 RT-AC51U` router.

Now I only needed to add the cable and patch both ends to finish the process! - **Not quite**. After placing the cable across the rails and patching both ends, the data connection was failing. I double-checked the `RJ45` connectors I had set up, and they looked perfectly fine (both in wiring order and cable length). After debugging the cable across the rails, it looked like the cable's bending radius had been exceeded, causing the inner copper wires to break. Doing a bit of research, I found out I had made a bad choice when choosing the cabling type:

- `FTP` cables are shielded and commonly used in areas where the will likely be interference. However, the shielding causes **cable flexibility loss**.
- `UTP` cables, being unshielded, offer more cable flexibility (at the cost of being more sensitive to interference).

However, interference was not a problem at all in my situation. Moreover, the lack of cable flexibility actually caused my setup to break, so I decided to switch to `UTP` cabling.

In fact, installing the new cable was much easier (due to the increased wire flexibility) and everything went smoothly! Even with a few bumps on the road, at the of the day, the new network setup works pretty well and I've now got a fairly decent coverage around all the house. The main lesson here is that I should investigate more carefully before committing to a certain approach, especially when I'm not familiar with the domain.

Cheers!