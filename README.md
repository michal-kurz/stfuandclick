# STFU and click!

> **This solution is not complete**, as the deployment is broken, as routing only works when accessing the app via the `/app/` entry point - directly accessing a team URL results in a 404. As described [here](https://stackoverflow.com/questions/64412745/gatsby-dynamic-routing-breaks-upon-gh-pages-deploy). I will fix this some time in the future, when I can get to it. The app runs fine in dev environment, so feel free to checkout and `yarn develop`

This is the solution to a clever test assignment by the amazing people from [Applifting](https://www.applifting.cz/)   
The assignment itself can be found at [/assignment.pdf](assignment.pdf)

The app is deployed here: https://michal-kurz.github.io/stfuandclick/app/  

This is my first ever experiece with Gatsby

 ## Potential FAQ
 ### Why is everything so big?
 I accidentally made the whole thing while zoomed-out in my browser. Please, just do the same when reviewing.
 
 ### Why the redundant index.ts files?
 I like to organize my code like this - I include an index file for every component, which serves as the interface for the rest of the project. All code exported from the component should be wired through this file. This often results in "redundant" files that only reexport one single component. I think it's not that uncommon of an approach, but [U+](https://u.plus/) was quite surprised about it, so here you go.   
 
 ### Are you free for hire?
 I am currently working on a client's project and am extremely comfortable in our partnership - but I am  am open to new offers, as long as they are really awesome. 

 ### Why are you passing anonymous function/literals as props?
 I've used to be very conscious about maintaining the reference-continuity of all props - combined with the preemptive use of React.memo, as I was led to do by me peers at SiteOne - but I have changed my mind since, and no longer believe it's worth doing preemptively. I changed it based on [this article](https://kentcdodds.com/blog/usememo-and-usecallback) and conversations with much better and more experienced React developers than I am. I nowadays only memoize when I have a specific reason (reselect selector input / a hook dependency array / creating a component inside another one / actual performance issues caused by too much rerendering). 
  
  -
