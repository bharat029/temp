import projects from '../../pages/projects.json'

const initState = { projects }

const projectReducer = (state = initState, action) => {
    let { projects } = state

    switch (action.type) {
        case 'ADD_PROJECT':
            if(action.project.length === 0){
                return state
            }
            return {
                ...state,
                projects: [ ...projects, action.project] 
            }
        case 'UPDATE_PROJECT':
            projects[action.id] = action.project
            return {
                ...state,
                projects
            }
        case 'DELETE_PROJECT':
            return {
                ...state,
                projects: projects.filter(project => project.id !== action.id)
            }
        default: return state
    }
}

export default projectReducer