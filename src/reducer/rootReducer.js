import aboutme from '../pages/aboutMe.json'
import project_list from '../projects/project_list.json'
import project_details from '../projects/project_details'
import cv from '../pages/cv.json'

const initState = {
    aboutme,
    project_list,
    project_details,
    cv
}

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer