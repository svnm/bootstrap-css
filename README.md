# [bootstrap-css]()

[![npm version](https://badge.fury.io/js/bootstrap-css.svg)](https://badge.fury.io/js/bootstrap-css)

A [css module](https://github.com/css-modules/css-modules) compatible version of [bootstrap](https://github.com/twbs/bootstrap).
You will need to use [react-css-modules](https://github.com/gajus/react-css-modules) to make use of the class names as bootstrap classes are not camelCase.

It would be possible to make a version compatible to just css modules in the future.

## Version
Every attempt will be made to keep the versions in sync with bootstrap.

#### `4.0.0-alpha.5` uses latest bootstrap 4 `4.0.0-alpha.5`

## Installation

`npm install bootstrap-css@4.0.0-alpha.5 --save-dev`

## Usage
Simply import your bootstrap css modules

`import { alert, buttons, jumbotron } from 'bootstrap-css'`

Then use it for styling your elements.

```jsx
<div styleName='jumbotron'>
  <h1>Hello, world!</h1>
  <a styleName='btn btn-primary btn-lg'>Learn more</a>
  <div styleName='alert alert-info'>...</div>
</div>
```

## Example

Check out the full working example [here](https://github.com/StevenIseki/bootstrap-css/tree/master/example)

    cd example
    npm start

## Development
    npm install
    npm run build

## Bootstrap modules

The sass modules from bootstrap have each been installed from bootstrap and compiled to plain css versions, so will need no preprocessing or autoprefixing.

The following modules are available to be imported and used, just as in the bootstrap docs: [css](http://getbootstrap.com/css/) & [components](http://getbootstrap.com/components/)

Note: glyphicons are currently not implemented, this is a bit tricky to do with css modules. An idea could be to use svg loader to load the fonts, any help on this appreciated, however currently these should be loaded as a seperate glyphicon.css module, most likely global, pointing to your font paths.

- alert
- badge
- breadcrumb
- buttonGroup
- buttons
- card
- carousel
- close
- code
- customForms
- custom
- dropdown
- forms
- grid
- images
- inputGroup
- jumbotron
- listGroup
- media
- modal
- nav
- navbar
- normalize
- pagination
- popover
- print
- progress
- reboot
- responsiveEmbed
- tables
- tooltip
- transitions
- type
- utilities

## License

[MIT](http://isekivacenz.mit-license.org/)
