import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Elements } from './theme'
import { Home } from './components/layout'

/* The Elements components is a summary of basic presentation componets
 * available for use in this theme
 */

class Example extends Component {
    render(){
        return (
            <div>
                <Home />
            </div>
        )
    }
}

ReactDOM.render(<Example />, document.getElementById('root'))