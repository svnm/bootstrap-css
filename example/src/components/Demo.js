import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Demo.css'
import { normalize } from 'bootstrap-css'
Object.assign(styles, normalize)

function Demo( props) {

    const { route } = props

    return (
    	<div styleName='demo'>
    		<button styleName='button blue'>press me</button>
    		<button styleName='button red'>press me</button>
       	</div>
    )
}

export default CSSModules(Demo, styles, {allowMultiple: true} )
