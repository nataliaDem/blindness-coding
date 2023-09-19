# blindness coding

Inspired by [Code in the Dark](http://codeinthedark.com/), this repository provides a simple yet fully-working solution for your own contest in HTML+CSS blind coding. You can use your favorite editor and share your progress live in `index.html` thanks to tunneling so the audience can watch multiple contestants on the projector.

Auto-saving option is recommended to automatically refresh the browser. Currently, configuration for [vscode](https://code.visualstudio.com/) is included.

[Original concept](https://github.com/codeinthedark/codeinthedark.github.io):

> Code in the Dark is a front-end (HTML, CSS) competition, ..., where each contestant compete to implement a website design given only a screenshot. The catch is that no previews of the results are allowed during the implementation, and no measuring tools can be used. The winner is decided by the audience.

## instructions

1. clone this repository and install dependencies `npm i`
1. open your editor and be sure **auto-saving** is _enabled_
1. start tunneling with:
    - `npm start` - share your **tunnel url**
    - `npm start <my-custom-name>` - share your tunnel `https://<my-custom-name>.localtunnel.me`
1. open `index.html` (and don't leave the editor 😆)
1. start coding!
1. (optional) when time runs out push your code to the new branch

## more inspiration

- https://mixmax.com/blog/daredev-part-e-sports-event-part-blind-coding-party/

## faq

### What is the recommended setup?

Have a look here https://romanvesely.com/code-together-and-have-fun/#setup-and-technical-aspects.

### Why there is some predefined source code in the `index.html`?

[Browsersync needs `<body>` tag](https://www.browsersync.io/docs#requirements) during initial request to inject script responsible for site refresh. Also, your editor comes with snippets functionality anyway.

### Is my screen being shared when I start tunneling?

No. Only the content of your `index.html` file (and any CSS file in case you create some).
