import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Demo.css'
import { normalize, alert, jumbotron, buttons } from 'bootstrap-css'
//import { normalize, alert, jumbotron, buttons } from './test.js'
Object.assign(styles, alert, normalize, jumbotron, buttons)

function Demo( props) {

    const { route } = props

    return (
    	<div styleName='jumbotron'>
		  <h1>Hello, world!</h1>
		  <a styleName='btn btn-primary btn-lg'>Learn more</a>
		  <div styleName='alert alert-info'>...</div>
		</div>
    )
}

export default CSSModules(Demo, styles, {allowMultiple: true} )
