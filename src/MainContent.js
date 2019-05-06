import React from 'react'
import Aboutme from './AboutMe'
import Projects from './Projects'
import Cv from './CV'

function MainContent (props) {
    if (props.name === 'aboutme') {
        return <Aboutme />
    } else if (props.name === 'projects') {
        return <Projects />
    } else {
        return <Cv />
    }    
}

export default MainContent
