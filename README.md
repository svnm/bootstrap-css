# [bootstrap-css]()

[![npm version](https://badge.fury.io/js/pure-css.svg)](https://badge.fury.io/js/pure-css)

A [css module](https://github.com/css-modules/css-modules) compatible version of [bootstrap](https://github.com/twbs/bootstrap).

You will need to use [react-css-modules](https://github.com/gajus/react-css-modules) to make use of the class names as bootstrap classes are not camelCase.

It would be possible to make a version compatible to just css modules in the future. 

## Version

#### `3.0.0` uses latest bootstrap 3 `v3.3.6`

## Installation

`npm install bootstrap-css --save-dev`

## Usage
Simply import your bootstrap css modules

`import { alerts, buttons, jumbotron } from 'pure-css'`

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

```jsx
import React from 'react'
import CSSModules from 'react-css-modules'

import { jumbotron } from 'bootstrap-css'
let styles = {}
Object.assign(styles, jumbotron)

class Test extends React.Component {
    render () {
        return (
        <div styleName='jumbotron'>
        	<h1>Hello, world!</h1>
        </div>
        );
    }
}

export default CSSModules(Test, styles);
```

## Development
    npm install
    npm run build

## Bootstrap modules

The less modules from bootstrap have each been installed from bootstrap and compiled to plain css versions, so will need no preprocessing or autoprefixing.

The following modules are available to be imported and used, just as in the bootstrap docs: [css](http://getbootstrap.com/css/) & [components](http://getbootstrap.com/components/)

Note: glyphicons are currently not implemented, this is a bit tricky to do with css modules. An idea could be to use svg loader to load the fonts, any help on this appreciated, however currently these should be loaded as a seperate glyphicon.css module, most likely global, pointing to your font paths.

- normalize
- print
- scaffolding
- type
- code
- grid
- tables
- forms
- buttons
- componentAnimations
- dropdowns
- buttonGroups
- inputGroups
- navs
- navbar
- breadcrumbs
- pagination
- pager
- labels
- badges
- jumbotron
- thumbnails
- alerts
- progressBars
- media
- listGroup
- panels
- responsiveEmbed
- wells
- close
- modals
- tooltip
- popovers
- carousel
- utilities
- responsiveUtilities

## License

[MIT](http://isekivacenz.mit-license.org/)
