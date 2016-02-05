import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Demo.css'
import { normalize, alerts, jumbotron, buttons } from 'bootstrap-css'
Object.assign(styles, alerts, normalize, jumbotron, buttons)

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
