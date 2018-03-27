# React Component Rotator

[![Build Status](https://travis-ci.org/brooksbecton/react-component-rotator.svg?branch=master)](https://travis-ci.org/brooksbecton/react-component-rotator)

## What is it

React Component Rotator is a React component (_No Way!_) that
can rotate display of it's children. The children can be homogeneous
or heterogeneous in their types

* JavaScript Basic Types
* DOM Elements
* Other React Componenents
* A mix of all of the above
* or anything else JSX can display!

## Why

It is easy to start getting React to swap out elements useing
something like setInterval/setTimout, but if you are not careful you
may be creating the listeners on each render of a component
React Componenent Rotator takes care of this by cleaning up after
itself when setting up intervals and timeouts, creating one place to
handle this set up and tear down logic

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Support](#support)
* [Contributing](#contributing)

## Installation

Add the dependency with npm or yarn

```sh
npm i react-component-rotator

yarn add react-component-rotator
```

## Usage

```js
import ComponentRotator from "react-component-rotator";

// ...

<ComponentRotator children={[<h2>Lie</h2>, <h2>Cheat</h2>, <h2>Steal</h2>]} />;
```

## Support

Please [open an issue](https://github.com/brooksbecton/react-component-rotator/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/brooksbecton/react-component-rotator/pulls).
