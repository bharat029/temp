import aboutme from '../pages/aboutMe'
import projects from '../pages/projects.json'
import cv from '../pages/cv'

const initState = {
    aboutme,
    projects,
    cv
}

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer