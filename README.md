# Crossover application 
> A demo dashboard that shows continuos integration features. 
It was made with Angular2 Typescript and Webpack in order to automate tasks.
  

### Quick start
**Make sure you have Node version >= 5.0 and NPM >= 3**
> Download zip file delivered and uncompress where you prefer
> Alternatively you can use https://github.com/mcmollehuara/co repository

```bash
# install the repo with npm
npm install

# install typings
npm install typings -g

# start the server
npm start

go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser
```

### run unit tests (karma-chrome-launcher)
```bash
npm run test
```

### watch and run our tests (karma-chrome-launcher)
```bash
npm run watch:test

go to folder /code/coverage/html/index.html
```
### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```


#### File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
code/
 ├──config/                    * our configuration
 |   ├──helpers.js             * helper functions for our configuration files
 |   ├──spec-bundle.js         * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js          * karma config for our unit tests
 |   ├──protractor.conf.js     * protractor config for our end-to-end tests
 │   ├──webpack.dev.js         * our development webpack config
 │   ├──webpack.prod.js        * our production webpack config
 │   └──webpack.test.js        * our testing webpack config
 │
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.browser.ts        * our entry file for our browser environment
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts           * our polyfills file
 │   │
 |   ├──vendor.browser.ts      * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   ├──app.spec.ts        * a simple test of components in app.ts
 │   │   ├──app.e2e.ts         * a simple end-to-end test for /
 │   │   └──app.ts             * App.ts: a simple version of our App component components
 │   │
 │   └──assets/                * static assets are served here
 │       ├──icon/              * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt         * for search engines to crawl your website
 │       └──humans.txt          * for humans to know who the developers are
 │
 │
 ├──tslint.json                * typescript lint config
 ├──typedoc.json               * typescript documentation generator
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──package.json               * what npm uses to manage it's dependencies
 └──webpack.config.js          * webpack main configuration file

```
