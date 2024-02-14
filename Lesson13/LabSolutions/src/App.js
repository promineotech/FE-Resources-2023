/* Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Week 13: Intro to React, Webpack, Components, and JSX 
   JavaScript Lab Week 13*/

/* ----------------------------------------------------- */
// Key Term List:
// React
// Node Packet Manager (NPM)
// Webpack
// Component
// JSX
// JSX Documentation: https://reactjs.org/docs/introducing-jsx.html
// functional programming

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

// Feel free to copy/paste the instructions to different components for easier visibility.

/* ------------------ Part 1: Creating a Nav Bar Component --------------------- */
/**
 * Step 1: Create a new file in our src folder called Nav.js
 * Step 2: Create the base format for a function based component.
 *         Inside of the return(), return: <nav>Nav</nav>
 * Step 3: In your App.js, import your <Nav> component inside of the div in return()
 *         You should now see the text 'Nav' on your app.
 *         Don't forget to 'npm start' in the console if you aren't on a live server yet.
 *         When we say 'live server' we don't mean the extension, but rather the hosting server.
 *
 * Step 4: Instead of returning just a <div>, return a <nav> with an <ul>, and 3 <li>.
 *         The text inside the 3 <li> should be: Home, Portfolio, and Contact
 * Step 5: Style your Nav component using the app.css file.
 *         Give your <nav> element: 100vw
 *                                  (100 view width makes the width the size of their screen)
 *         Give your <ul> element: display: flex, flex-direction: row, justify-content: right
 *         The rest is up to you! Consider peudo:selectors, such as hover/active/touch
 *
 *         Alternatively, refer to Week 9 and use bootstrap instead.
 *         Remember when we give elements classes in React, we use className="" instead
 *         of class.
 *
 *         If you use Bootstrap you will need to import it only once in your App.js, and it will
 *         apply throughout the application.
 * */

/* ------------------ Part 2: Creating a Welcome Section --------------------- */
/**
 *  Step 1: Create a new file in our src folder called WelcomeSection.js
 *
 * Step 2: Create the base format for a function based component.
 *         inside your return(), return <div></div>
 *
 *
 * Step 3:  Copy/paste the code below in your WelcomeSection.js component you create,
 *          inside of your function, but above the return.
 *
 *           let date = new Date()
 *
 *           let singleUser = {
 *             name: 'John',
 *             time: date.toDateString(),
 *           }
 *
 * Step 4: In App.js you will add the Section component in the imports as well as returning it
 *         in your JSX. example: <WelcomeSection />
 *
 * Step 5: In your WelcomeSection.js file, create a <h1> element inside our <div> and
 *         welcome our singleUser.
 *         Use our singleUser object instead of typing out their name.
 *         Hint: Use {} inside of JSX to use JavaScript. Unlike jQuery a dollar sign is not needed.
 *
 *         Create a <p> tag, and inside of it explain todays date
 *         Make sure to refer to the object instead of hard-coding what today is.
 *
 * Step 6: Style our new welcome section using the app.css file. Make it your own!
 *         Suggested: Center it on the page
 *                    Increase the font size since it's considered 'call to action'
 *                    Consider capitalizing/line-spacing the <h1>, (text-transform/decoration)
 *                    Change the font color so it's legible over your background color
 *                    Change the margin-top so there's reasonable space from <nav>
 *
 */

/* -- ALL YOUR COMPONENT/STYLE IMPORTS HERE -- */
// Importing of React is already done in the index.js file.
import "./App.css";
import Nav from "./Nav";
import WelcomeSection from "./WelcomeSection";

function App() {
  return (
    <div className='App'>
      <Nav />
      <WelcomeSection />
    </div>
  );
}

export default App;
