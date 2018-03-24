# TodoPlus

This is just an example application that follows a [Live Coding series][playlist]
on YouTube. This project builds out yet another Todo application using
React and Redux. We will *very* loosely follow the
[Redux Todo Example][example], but with one major twist. We will be defining our
state transitions using the [State ADT][state-docs] from the
[crocks ADT library][crocks].

## Practical ADTs -- Todo+ (Part 0x00)
A series that takes the simple Redux Todo Application, but builds it using ADTs
to capture control flow and behavior of our Application State. We will be
implemented the application from the ground up using `React`, `Redux` and
`crocks` for ADTs.

In this portion we will be configuring our environment to work with React both
for eslint and our build system.  Once built out, we will throw together a
simple UI with no functionality just to get us started. And we will finish up
with getting Redux to work with the State ADT from crocks.

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

[code-00]: https://github.com/evilsoft/todo-plus/tree/0x00
[vid-00]: https://youtu.be/vaKD2-eG9-g