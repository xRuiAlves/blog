---
slug: "interview-scheduler"
date: "2020-07-24"
title: "Interview Scheduler"
---

For the past nearly 4 years, I've been a member of [FEUP's Computer Engineering Student Branch](https://www.facebook.com/NIAEFEUP). Every year we go through a "recruitment season", in which about 30 or so of our active members interview around 50 candidates. And every year, we face the challenge of matching the availability of our members with the candidates to schedule the interviews. Although we've been using [Doodle polls](https://doodle.com/) to query people about their availability, we do the matching almost entirely manually, using some *common sense* heuristics.


Thus, I decided to develop a *CLI* tool to automate this process, calling it [interview-matcher](https://github.com/xRuiAlves/interview-matcher). Although we have been scheduling the interviews with 2 interviewers and 1 candidate during the past few years, I wanted to design the tool in a way it is flexible enough to accommodate changes in the process, if needed.

At first, the problem seemed to be a simple [Maximum Cardinality Matching](https://en.wikipedia.org/wiki/Maximum_cardinality_matching). However, after thinking deeper about the subject, I realized it could not be treated as such:

- This isn't a classic 1:1 matching problem. Instead, matching is made in an N:1 ratio, so formulating the availabilities as a standard [bipartite graph](https://en.wikipedia.org/wiki/Bipartite_graph) was out of the question;
- The interviewers are not matched directly to candidates. They're matched to candidates via option slots (*e.g.* from 9:30 am to 10:00 am), which means there may be multiple ways to connect entities from the two parties;
- Finally, an interview matching is only considered feasible if they feature the total number of required interviewers (*e.g.* if a 2:1 interviewers to candidate ratio is being used, an interview with only 1 interviewer will not be accepted).

Another *non-functional* requirement is that all interviewers should have a similar number of assigned interviews, in order to distribute work as much as possible.

Even though this wasn't a "classic" problem, I had the feeling this could be formulated as a [Graph Maximum Flow Problem](https://en.wikipedia.org/wiki/Maximum_flow_problem). The flow network needed to follow certain constraints:

- Each candidate may only be assigned to a single slot, and *vice-versa*;
- Each slot must have an entering flow capacity of *N* (where *N* is the number of interviewers required for each interview).

To follow these constraints, I formulated the following flow network *schema*:

![Flow Network schema](https://i.imgur.com/ztEygTA.png)

Note that edges that do not display a value have a weight of 1. The *infinity* weighted edges from the source to the interviewers allow an interviewer to be assigned to more than one interview. The slot filters layer provides a way of having an entering capacity of *N*, while ensuring the slot is only assigned to one candidate (due to the edge of weight 1 connecting every node in the slot filter layer to its respective node in the slot layer). 

Finally, this flow graph can be used to find a valid matching using an algorithm like [Ford-Fulkerson](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm). To both converge towards a solution faster and to improve the final solution's quality, I used some heuristics when searching for flow augmentation paths:

- Prioritizing interviewers with less amount of work (to distribute interviews as evenly as possible);
- Prioritizing slot filters with the most output flow, to avoid having "half-full" slots;
- Prioritizing slots that flow towards candidates that don't have an assigned slot yet, to reach a feasible solution faster.

Although the output was near-optimal, it did not ensure optimal matching - a max flow algorithm focuses on (that's right) obtaining maximum flow from the source to the sink. Even with the prioritization heuristics, there's no certainty the matching will result in a similar number of interviews per interviewer!

To mitigate this, I ended up adding an iterative optimization layer, featuring an *ad hoc* algorithm that focuses on finding local optimizations to slowly improve the overall matching. To my surprise, applying this algorithm converged to the optimal solution quite fast! It focuses on trying to move slots from overworked interviewers to underworked ones.

I'm pretty happy with the final result. I have tested the tool with data inputs similar to the ones from previous years' recruitment seasons, obtaining great results. I tried to use a [TDD](https://en.wikipedia.org/wiki/Test-driven_development) approach while developing, which proved to be quite productive and allowed me to avoid mistakes. I also had some fun setting up a cool CI pipeline to allow maintaining the tool in the future. Hopefully, someone will take a look at the project and find room for improvement!

Finally, I decided to publish the tool as an [npm package](https://www.npmjs.com/package/interview-matcher). I invite you to download it and try it out: 

```
$ npm i -g interview-matcher
```

Cheers!
