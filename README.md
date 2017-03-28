# Starter Project for Angular Express Apps with Webpack and TypeScript


### Stack

* [Angular](https://angular.io/docs/ts/latest/)
* [NgRx](https://github.com/ngrx)
* [Express](https://expressjs.com/)
* [InversifyJS](http://inversify.io/)
* [webpack](https://webpack.js.org/)
* [Node](https://nodejs.org/en/)

### Installation

1. `npm install`
2. `npm build`
3. `node dist/server.js`
4. Go to `http://localhost:3000` in your browser.

### Development

Unfortunately, I have yet to find a way to run a single command and start both the client
development server and the backend server at the same time. Both client and server are build
with webpack. The problem is trying to build the server and watch and start it at the same time.
Until I figure something out, here is the workflow

1. Run the server build: `npm run dev:server`
2. Start the server: `node dist/server.js`
3. In another terminal, start the client: `npm run dev:client`

If you make change to the server, you will need to stop the server and repeat steps one and two.
I know, it sucks. If anyone has any suggestions, please let me know. Make a PR!

