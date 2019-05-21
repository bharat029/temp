import aboutme from '../../pages/aboutMe.json'

const initState = { aboutme }

const aboutmeReducer = (state = initState, action) => {
    let {aboutme} = state 

    switch (action.type) {
        case 'ADD_ABOUTME':
            if(action.abtme.length === 0){
                return state
            }
            return {
                ...state,
                aboutme: [ ...aboutme, action.abtme] 
            }
        case 'UPDATE_ABOUTME':
            aboutme[action.id] = action.abtme
            return {
                ...state,
                aboutme
            }
        case 'DELETE_ABOUTME':
            return {
                ...state,
                aboutme: aboutme.filter(abtme => abtme.id !== action.id)
            }
        default: return state
    }
}

export default aboutmeReducer