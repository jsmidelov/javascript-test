# Assignment

Create a type-ahead module intended to be used "as-is", without a framework/context dependency.
Our intent is not that you create a fully-fletched plugin ready for production. The module doesn't have to be dynamic and configurable.

You can, to your own preference, use 3rd party utilities (like lodash).

## You should
* Use ES6 or Typescript.
* Throttle requests in a manageable way.
* Handle race conditions.
* Package code in a way that helps implementation.
* Provide some sort of readme for implementation.

# Getting started

## You should not
* Require a framework for implementation. Don't build an Angular or React plugin. Try to keep it as stand-alone as possible.

## Install Json Server (global)

https://github.com/typicode/json-server

    npm install -g json-server

## Install npm dependencies

    npm install

## Start server

    npm run server

## Start client

    npm run client
