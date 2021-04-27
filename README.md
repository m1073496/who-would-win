# CarryOkay

This is a Mod 3 [Front-End Project](https://frontend.turing.edu/projects/module-3/niche-audience.html) by [Jessica Justice](https://github.com/m1073496).

### Deployed App: [Who Would Win?](https://who-would-winn.herokuapp.com/)

## Outline

1. [Project Overview](#project-overview)
2. [App Overview](#app-overview)
3. [Planning Resources](#planning-resources)
5. [Tech Stack](#tech-stack)
6. [Features](#features)
7. [Instructions for Installation](#instructions-for-installation)
9. [Future Iterations](#future-iterations)
10. [Project Reflections](#project-reflections)


## Project Overview

This is a Mod 3 final, solo project called `Niche Audience` that is designed to demonstrate understanding of React.js, React Router, End-to-End tesing with Cypress, and the use of User Personas to guide the app design. I chose Shounen anime fans as my niche audience, specifically fans of the shows `Dragon Ball`, `Yu Yu Hakusho`, and `Hanuter X Hunter`, and built an app that sets up hypothetical matches between characters of these universes. 


## App Overview

This app first brings a user to the homepage where they can enter the site with a click of a button. Then, they will see the `Match Up` view with placeholders for anime characters. Below, there are three lists of anime worlds that a user can choose from in order to select their fighters (NOTE: you can chose fighters from different universes to go head to head, not just 2 fighters from the same universe!). When one selection is made, that fighter appears above, and can be cleared away or clicked on to bring the user to a page with that fighter's stats. The use can navigate back to the Match Up page from the Stats page by clicking the character's image / back button. Selecting a second fighter will also make that fighter appear above, as well as a percentage bar that demonstrates who the hypothetical winner of that match would be. The user also has the option to vote for who they believe the hypothetical winner would be (voting buttons only appear when two fighters have been selected).


## Planning Resources

- [Project Board](https://trello.com/b/OKsNFO3e/who-would-win)
- [Wireframes](https://excalidraw.com/#room=29b64db0d57060667d7c,OZFCYo7n2iAKMtOUtbjctA)


## Tech Stack

### Front-End:
- JavaScript ECMA6
  - React (create-react-app)
  - React Router
  - React Hooks
- HTML5
- CSS3

### Testing:
- Cypress
  - Mocha
  - Chai

## Features

### Homepage

A gif is chosen randomly out of a set of four that represent each of the anime worlds included in the app, and an easeter egg.

![](https://media.giphy.com/media/g7f4ykZpdnT7nrEEep/giphy.gif)
![](https://media.giphy.com/media/67766s1BI1ujGYUxMV/giphy.gif)


### Match Up View

<img width="1243" alt="Screen Shot 2021-04-26 at 5 31 33 PM" src="https://user-images.githubusercontent.com/73088654/116163626-588f2680-a6b5-11eb-8dd0-0b24b96a13c0.png">


### Creating a Match Up

![](https://media.giphy.com/media/9wbeIPZ00XEA1oTqAe/giphy.gif)

### Voting on a Match

![](https://media.giphy.com/media/XzctHmrppf1Ebk0F7F/giphy.gif)

### Stats View

![](https://media.giphy.com/media/B3fz3yIlPOC0v05PBY/giphy.gif)

### Responsive Design

![](https://media.giphy.com/media/IIdP6q3sTkVlpwwCP6/giphy.gif)

![](https://media.giphy.com/media/GMxzU8SvrkxdswKu4o/giphy.gif)

### Accessibility



### End-to-End Testing Suite

![](https://media.giphy.com/media/XAv9vgcWKjHa0mvHY5/giphy.gif)

## Instructions for Installation

  - To run this application on your local machine, clone down this repo, change into the root directory from the command line, and run `npm install`. 
    
  - Then run `npm   start` to open the application locally. 
    
  - To run the test suite locally, you will also need to run the command `npm i -D cypress` from the command line.
    
  - Once it  has installed, run `npx cypress open`, then select the `carry_okay_spec.js` test file. 
    
  - Note: you will need to run the application locally (start the server with `npm start` from the root directory on the command line) in order to run the automated tests.

## Future Iterations

 - Create a database from my hard-coded data and create a backend for this project
 - Match up outcomes are currently randomized, I would like to standardize them
 - Implement React Hooks or Local Storage to hold onto character on Stats page --> this would prevent losing the character stats on page refresh and any fighters previously selected when the user navigates back to Match Up view
 - Add a home button to Match Up view
 - Clean up logic for quotes in Stats component
 - Add funcitonality for users to leave comments on Match Ups
 - Add a link for each character's power level or rank listed on Stats page to navigate users to stat resources
 - Create a separate view that allows user to find stats on a character without having to put them in a match up first

## Project Reflections

### Challenges

  - The API I chose had incorrect information in the documentation (or at least I think that's what it was). I initally tested this API before moving forward with this project, then found out that making more than 10 requests an hour got me blocked by CORS requirements (docs said 100 per hour). I am actually still unsure if it was a timing thing, since the blocks would happen seemingly randomly, then stop seemingly randomly.
  - Web scraping all my data from webpages that weren't uniform: a lot of the data wasn't collected correctly, which required a lot of time spent on manual maintenance.
  - Building this over a weekend 😅

### Wins

  - I love this project so much
  - I love my design
  - I love how I got to all the responsiveness I wanted to
  - Getting the Router to do what I wanted it to do with the Match Up componenet and 3 CharacterList components rendering the right way
  - Using some cute gifs 
