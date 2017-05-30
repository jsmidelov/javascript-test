# Assignment

Create a type-ahead module intended to be used "as-is", without a framework/context dependency.
Our intent is not that you create a fully-fletched plugin ready for production. The module doesn't have to be dynamic and configurable.

## Libraries
You can, to your own preference, use 3rd party utilities (like lodash).

## Browser
You only need to support the latest version of Chrome for this example, use experimental DOM api’s at your own leisure.

## Rules

### You should
* Use ES6.
* Throttle requests in a manageable way.
* Handle race conditions.
* Package code/api in a way that helps implementation.
* Provide some sort of readme for implementation.

### You should not
* Require a framework for implementation. Don't build an Angular or React plugin. Try to keep it as stand-alone as possible.

## Delivery
When you are done, zip and mail :)

# Getting started
Clone this repo!

## Install global dependencies

https://github.com/typicode/json-server

https://github.com/webpack

    npm install -g json-server webpack webpack-dev-server

## Install npm dependencies

    npm install

## Start server

    npm run server

## Start client

    npm run client
