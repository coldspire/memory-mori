# 🃏💀 Memory Mori 💀🎴

## ☠&#xfe0f; Summary

A memory/concentration card game themed with a grim visual design, death-themed cards, and maybe _death itself_. Play at your own risk.

### Why... the name?

A [_memento mori_](https://dailystoic.com/history-of-memento-mori/) ("Remember you must die") has a storied history and tradition of reminding humans of their inevitable fate so that they might live to the fullest. Somewhat less impactfully, the Latin phase provides a good basis to make a punny name for a death-themed card game.

Somewhat more impactfully, "Memento Mori" is also a [very good Kamelot song](https://www.youtube.com/watch?v=LQMDf2yoNdA).

### Where can I play it?

"Play" is a strong word for what the application is currently capable of, but the application is deployed via Netlify to https://ora-memory-mori.netlify.app/ after each merge to the master branch. So you can go there and "play."

### What happens if I _actually die_ while playing?

It's not the game's fault. Don't be a sore loser.

## ☠&#xfe0f; Technology

Memory Mori is an [Angular](https://angular.io/) application that utilizes [NgRx](https://ngrx.io/) for application-wide state management. It uses all the Angular defaults ([Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/latest/index.html) for unit testing; [Protractor](https://www.protractortest.org/#/) for end-to-end testing, assuming I write any 😜; [TSLint](https://palantir.github.io/tslint/) for TypeScript linting) except where mentioned below.

Stylesheet linting is accomplished through [stylelint](https://stylelint.io/).

Code formatting is accomplished through [Prettier](https://prettier.io/).

Pre-commit actions (formatting and linting) are accomplished through [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

## ☠&#xfe0f; Goals

The primary goal is to make a memory game that is fun to play, easy to pick up and put down, and also feels good to interact with. That last one is a major driver: most concentration games follow the rules and framework of a proper game but feel clumsy and slow to actually play. There is a lot of nuance here that would be good experience in the UI and UX realm.

Secondary is the goal to get more engineering experience with state management via NgRx, with the aim to make components as declarative and reactive as possible, with no local state-management and imperative logic if possible. Ample use of [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview) will be necessary.

## ☠&#xfe0f; NPM scripts

Includes the usual scripts to be run via `npm run [script-name]`:

- `ng`: Run the [Angular CLI](https://cli.angular.io/)
- `start`: Start a local development server at http://localhost:4200
- `build`: Build a non-production version of the application. Build artifacts are located in the `dist/` directory
  - A production build can be created with `npm run build -- --prod`
- `test`: Launch the Karma test runner in the browser
- `lint`: Run TSLint and StyleLint
- `e2e`: Run end-to-end tests

Additional added scripts:

- `stylelint`: Run just StyleLint for CSS/SCSS linting
