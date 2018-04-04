# TodoPlus

This is just an example application that follows a [Live Coding series][playlist]
on YouTube. This project builds out yet another Todo application using
React and Redux. We will *very* loosely follow the
[Redux Todo Example][example], but with one major twist. We will be defining our
state transitions using the [State ADT][state-docs] from the
[crocks ADT library][crocks].

## Practical ADTs -- Todo+ (Part 0x02)

As we will be working more and more with how data flows through Redux, it makes
sense to get the dev tools extension connected. Now that we will have an enhancer
we will make a new `store` file to configure and provide our desired store.

Next up we want to do our best to move any internal state into our `AppState`
that is managed by Redux. In order to get that, we add a `nextId` namespace to
our `AppState` and define a model file to hold the state transition needed to
manage the state at that namespace.

Using some `Applicative` "magic", we now have a way to bypass Redux and combine
our lazy `State` instances so that can transition the overall state between our
models. All that is left is to update our `add` model function to accommodate.

Now to remove the `title` bug we introduced early on, we build a more robust
means to build out predicates that match. We build out two new helpers to
facilitate a simple query language, `propSatisfies` and `where`. Using our new
functions we move some more bits around to get our new query style in the mix.

Links:
* [Build System](https://github.com/evilsoft/simply-evil-js)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/basics/example-todo-list)
* [React Linting Plugin](https://github.com/yannickcr/eslint-plugin-react)
* [React Babel Preset](https://babeljs.io/docs/plugins/preset-react/)
* [crocks](https://evilsoft.github.io/crocks/docs/getting-started.html)

## Useful Commands

#### `yarn setup`
This app evolves over time with each session, and as such, dependencies may vary
greatly from branch to branch. For the viewers out there running `yarn` on a
POSIX(-ish) system like Linux or Mac OSX, using this setup command will clear
out the old dependencies and bring in the new ones.

**Note for Windows and non-yarn users**: There are many ways and workflows to
handle dependency management, each with their own reasons and opinions. Without
requiring people to install global modules to handle cross-platform concerns, we
just went with this setup for these lessons. So dependency management is
entirely up to you. Once all dependencies are installed, the rest of the
commands are cross platform.

#### `yarn start`
This is the bread and butter for development in this project. Running it will
compile all code (HTML, CSS, and JS) and setup watches for the various files.
Once everything is built and running, a BrowserSync web server serves up the
results on:
`http://localhost:1337/`.

[playlist]: https://www.youtube.com/playlist?list=PLjvgv-FpMo7XY8V1puB7TrMBt3r5W_zA6
[example]: https://redux.js.org/basics/example-todo-list
[state-docs]: https://evilsoft.github.io/crocks/docs/crocks/State.html
[crocks]: https://github.com/evilsoft/crocks