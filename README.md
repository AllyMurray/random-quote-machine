# Random Quote Machine

This project was built as part of the [FreeCodeCamp curriculum](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine).

https://allymurray.github.io/random-quote-machine

## Objective
Create a web app that displays a random quote on first load, when a button is clicked display a new random quote. Allow tweeting the current quote by pressing a button. See the [user stories](#user-stories) for more details.

## Implementation details
I chose to use JS classes to build the React components, data is retrieved using the Fetch API. 

The Forismatic API is used to generate random quotes, it doesn't send the Access-Control-Allow-Origin response header, so make the request is made through the CORS Anywhere proxy. The API also tries to escape single quotes resulting in invalid JSON, so before parsing the JSON all backslashes in the response text must be removed.

The tweet button is an anchor element with the target "_blank" to open in a new tab. The relationship of the linked URL is "noopener noreferrer", "noopener" ensures the tab runs in a new process and "noreferrer" avoids exploitation of the window.opener API.


## Built with

- [React](https://reactjs.org)
- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Forismatic quotes and expressions API](https://forismatic.com/en/api)
- [CORS Anywhere Proxy](https://cors-anywhere.herokuapp.com)

## User stories
1. I can see a wrapper element with a corresponding id="quote-box".
2. Within #quote-box, I can see an element with a corresponding id="text".
3. Within #quote-box, I can see an element with a corresponding id="author".
4. Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
5. Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".
6. On first load, my quote machine displays a random quote in the element with id="text".
7. On first load, my quote machine displays the random quote's author in the element with id="author".
8. When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
9. My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
10. I can tweet the current quote by clicking on the #tweet-quotea element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.
11. The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
