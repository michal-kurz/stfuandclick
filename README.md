# STFU and click!


This is a solution to the clever test assignment by the amazing people from [Applifting](https://www.applifting.cz/). The assignment itself can be found at [/assignment.pdf](assignment.pdf)

The app is deployed here: https://elastic-morse-e78fef.netlify.app/app/

This is my first ever experience with Gatsby - I wanted to try it out. Looking back, Gatsby doesn't seem like a very good fit for the assignment to me.

 ## Potential FAQ
 ### Why is everything so big?
 I accidentally made the whole thing while zoomed-out in my browser. Please, just do the same when reviewing - makes more sense to me than re-styling the whole app (for the purposes of assignment review).
 
 ### What parts of this assignment did you find most challenging?
#### 1. Deploying a working dynamic Gatsby app  
 I wasn't really expecting this to be any issue, but it was a big one for me, I probably burned over 10 hours on this. First, I failed to deploy an app with functioning client-side routing on github-pages and Gatsby cloud, due to a problem I [described here](https://stackoverflow.com/questions/64412745/gatsby-dynamic-routing-breaks-upon-gh-pages-deploy). When I finally decided to switch to Netlify to solve the issue with [redirects file](https://docs.netlify.com/routing/redirects/), I ran into [what I believe to be a bug](https://stackoverflow.com/questions/65081032/gatsby-spa-deployed-on-netlify-applies-wrong-emotion-css-on-first-load-distille) in emotion.js. I ended up working around it with [this hack](https://github.com/michal-kurz/stfuandclick/blob/fbcaaf14f9cb89a491b520cecf414ba63932f1c3/src/components/pages/Homepage/Container.tsx#L21).

 #### 2. Processing clicks locally and reconciling with BE leaderboard

 Requesting leaderboards after every click, and only updating my app state once I get a response, really sucks - it results in terribad UX (the app feels very unresponsive), and is too basic for a React test assignment (also, sparing BE 10+ leaderboard requests a second and not having to traverse them in thunk is a pretty nice perk, too).

 So I process each click on FE and only reconcile with BE once every while. This gets potentially a bit tricky performance-wise (`n * log2(n)` sorting whole leaderboard for each click sounds a bit scary to me for lists of couple tens of thousands teams - but maybe I'm just paranoid), and leaderboard responses get stale very easily when spam-clicking, making the reconciliation slightly tricky as well. I had to mess around for a while before I came up with satisfactory solutions (at least to me).

 ### Where in your solution do you see a room for improvement?
[`getIntRadiusWithinConstraings`](https://github.com/michal-kurz/stfuandclick/blob/cd24b23b1d685799a34546f472517de6c7919b13/src/utils/utils.ts#L12) definitely deserves a re-write and tests - I'll try to get to it some time soon.

 I could de-couple the leaderboard sort from click action and throttle it for further perfo optimization.


 ### Isn't the whole insertion sort perfo optimization premature?
 It may actually be, but I think possibly not. For realistic list sizes, we can expect the sort performance load to decrease about 10-fold. For 50 teams (current leaderboard state), I cannot tell the difference between `n` and `n * log2(n)` in devtools profiler, the sort seems to be overshadowed by all the linear stuff happening. But for the 50 teams, JS already takes about 10% of my waterfall when spam-clicking. So the question seems to be: for realistic list sizes (maybe couple tens of thousands) can the `n` component push me (or someone with a much slower computer) close to my performance limits? I'm not really sure, but I think it might very well do - if the leaderboard sort makes just 0,01% of my script running load, then for 50.000 teams, on a 10x slower computer, I'm already at 100% - that's my reasoning here. I'm really curious about the feedback on this one :)

 ### Are you free for hire?

 I am not currently looking, but I'm open to new opportunities

 ### Why are you passing unstable references (literals/anonymous functions) as props?
I know that some developers like to always make sure to pre-emptively stabilize all prop references - this makes it easier to work with dependency arrays and allows for both easy and aggressive use of `React.memo`. I was even led to do this by me peers in one of my previous jobs - but I don't really subscribe to this idea anymore. I changed my mind based on my personal experience, consulting much better developers than I am, and also [this great article](https://kentcdodds.com/blog/usememo-and-usecallback) by Kent C. Dodds. I am open to re-evaluating my opinion.
  
