import './App.css'
import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import Store from '../data/Store'

const App = props => {
return(
<store> 
    <div className="App">
        <Router>
            <Menu />
            <Content />
        </Router>        
    </div>
    </store>
)
}

export default App
